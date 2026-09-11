# Contributing

## Branching

Branch from `main`, one topic per branch. Name branches for the change, for example
`docs/round-3-activity-4`.

## Before you open a pull request

```bash
cd website
npm test
npm run build
```

CI runs the same two commands on pull requests. A broken internal link fails the build, so catching
it locally is faster than a round trip.

## Pull request description

State intent, what changed, and how it was validated. If the change alters course content, say
whether the content is original, reconstructed, or sourced, and from where.

## Review expectations

- A human approves every merge. This applies to AI-assisted changes without exception.
- Reviewers check content accuracy, not only rendering.
- Changes touching `sidebars.ts` or `docusaurus.config.ts` get closer review; they affect every page.

## What must not be committed

- Confidential business information, internal source code, or ticket identifiers
- Customer or personal data
- Credentials, tokens, or internal hostnames
- Employer branding or copied internal documentation

Exercise material must be synthetic, public, or explicitly approved for public use.
