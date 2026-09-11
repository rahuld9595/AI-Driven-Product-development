# AI-Driven Product Development

A public, original training site for applying AI responsibly across the Product Development
Lifecycle (PDLC).

This repository contains no proprietary employer code, internal workflows, ticket identifiers,
credentials, customer data, or confidential documentation.

## Layout

```text
.
|-- .claude/         Agent and skill definitions produced by the lab
|-- .github/         CI and GitHub Pages deployment
|-- docs/            Engineering notes about this repository
|-- website/         The course site; course content is in website/docs/
|-- CLAUDE.md        Repository rules for AI-assisted contributions
|-- .checkmarx       Security-scan configuration placeholder
`-- README.md
```

Note the two `docs` directories. `docs/` at the root holds engineering notes about maintaining the
repository. `website/docs/` holds the course content learners read.

## Learning model

The training moves teams into the **Augmented** category of the Product Team Maturity Model by
focusing on five Sustainable AI Practices spanning the PDLC: Planning, Documentation,
Implementation, Testing, and Security.

| Round | Activities | Focus |
| --- | --- | --- |
| Round 1 - MVP | 8 | Establish a small, reviewable AI-assisted workflow |
| Round 2 - Advanced | 10 | Standardize practices for review, requirements, testing, and quality |
| Round 3 - Precision & Automation | 6 | Governed automation with measurable controls |

## Run the site

```bash
cd website
npm install
npm start
```

The dev server prints a local URL, usually `http://localhost:3000`.

Before pushing, run what CI runs:

```bash
cd website
npm test
npm run build
```

## Publish

Push to `main`, then set **Settings -> Pages -> Source** to **GitHub Actions**. The workflow builds
the site and deploys it. Pull requests run the same build without deploying.

## Contributing

See [CLAUDE.md](./CLAUDE.md) for repository rules and
[docs/content-style-guide.md](./docs/content-style-guide.md) for content conventions.

## License

Add an open-source license after deciding how others may reuse the training materials.
