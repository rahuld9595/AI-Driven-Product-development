import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join, extname, relative} from 'node:path';

const DOCS = new URL('../docs/', import.meta.url).pathname;

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full);
    return ['.md', '.mdx'].includes(extname(full)) ? [full] : [];
  });
}

const files = walk(DOCS);

test('every doc has front matter with an id and a title', () => {
  const bad = [];
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    if (!text.startsWith('---\n')) {
      bad.push(`${relative(DOCS, file)}: no front matter`);
      continue;
    }
    const fm = text.slice(4, text.indexOf('\n---', 4));
    if (!/^id:\s*\S/m.test(fm)) bad.push(`${relative(DOCS, file)}: missing id`);
    if (!/^title:\s*\S/m.test(fm)) bad.push(`${relative(DOCS, file)}: missing title`);
  }
  assert.deepEqual(bad, [], `front matter problems:\n${bad.join('\n')}`);
});

// A `#` at the start of a line inside a fenced block is a shell comment, not a heading.
function stripFences(text) {
  let inFence = false;
  return text
    .split('\n')
    .filter((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        return false;
      }
      return !inFence;
    })
    .join('\n');
}

test('every doc has exactly one H1', () => {
  const bad = [];
  for (const file of files) {
    const body = stripFences(readFileSync(file, 'utf8').split('\n---')[1] ?? '');
    const h1s = body.split('\n').filter((l) => /^#\s+\S/.test(l));
    if (h1s.length !== 1) bad.push(`${relative(DOCS, file)}: ${h1s.length} H1 headings`);
  }
  assert.deepEqual(bad, [], `H1 problems:\n${bad.join('\n')}`);
});

test('each round has the activity count the course expects', () => {
  const expected = {'round-1': 8, 'round-2': 10, 'round-3': 6};
  for (const [round, count] of Object.entries(expected)) {
    const dir = join(DOCS, 'part-2', round);
    const activities = readdirSync(dir).filter((f) => /^activity-\d+\.mdx$/.test(f));
    assert.equal(
      activities.length,
      count,
      `${round}: expected ${count} activities, found ${activities.length}`,
    );
  }
});
