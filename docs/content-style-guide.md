# Content style guide

## Page shape

Every course page has front matter with `id` and `title`, then exactly one H1, then H2 sections.
The right-hand table of contents is generated from H2 and H3 headings, so headings should be
descriptive rather than decorative.

## Activity pages

Activity pages follow a fixed shape so learners can scan across them:

1. `## Objective` - one paragraph, stating the capability being built.
2. `## Steps` - a numbered list of actions.
3. `## Evidence of completion` - the artifact that proves the activity was done.
4. `## Record it` - where to log the artifact.

Keep steps imperative and verifiable. "Consider the trade-offs" is not a step; "write down which
option you chose and why" is.

## Voice

- Address the learner directly.
- Prefer concrete instruction over motivation.
- Name the failure mode when there is a common one. Learners trust guidance that anticipates trouble.

## Claims and evidence

Where a page asserts that a practice produces an outcome, say what the claim rests on. Frameworks
and maturity models are organizing devices, not measured findings; label them as such rather than
implying empirical support they do not have.

## Formatting

| Use | For |
| --- | --- |
| `:::note` | Context a reader can skip |
| `:::tip` | A shortcut or better path |
| `:::warning` | Something that causes real harm or rework |
| `:::info` | Pointers to source material and repositories |

Tables suit comparisons; prose suits reasoning. Do not use a table to hold sentences.

## Links

Use relative links with the file extension, for example `./activity-3.mdx`. The build validates
these and fails on a broken one. Match filename case exactly; CI is case-sensitive even when your
laptop is not.
