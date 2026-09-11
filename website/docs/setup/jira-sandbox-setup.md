---
id: jira-sandbox-setup
title: Jira Sandbox Setup
sidebar_label: Jira Sandbox Setup
sidebar_position: 30
---

# Jira Sandbox Setup

Round 2 activity 5 works on backlog items. Use a sandbox project so exercises never touch real
delivery work.

## Create the sandbox

1. Create a new Jira project dedicated to training, clearly named as a sandbox.
2. Restrict its permissions to the training participants.
3. Disable any automation, integrations, or notifications inherited from a template.
4. Confirm it is not included in any team report or board that stakeholders read.

## Seed synthetic backlog items

Write coarse, deliberately underspecified items so the refinement exercise has something to
work on. For example:

- Users should be able to export their data.
- Improve search.
- Add reporting.

Each should lack acceptance criteria, scope, and non-functional requirements by design.

:::warning Never copy real tickets
Do not clone real backlog items, ticket identifiers, customer names, or internal system names
into the sandbox or into this repository. Write synthetic equivalents instead.
:::
