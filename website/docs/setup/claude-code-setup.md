---
id: claude-code-setup
title: Claude Code Setup
sidebar_label: Claude Code Setup
sidebar_position: 20
---

# Claude Code Setup

Claude Code is the assistant the Round 2 exercises reference by name.

## Install

```bash
npm install -g @anthropic-ai/claude-code
```

## Authenticate

Run `claude` in a repository directory and complete the sign-in prompt. Authentication is per
machine, not per repository.

## Confirm it reads repository rules

Claude Code loads `CLAUDE.md` from the repository root as standing context. Verify it took
effect by asking the assistant to state the repository's verification command; it should name
the build command from `CLAUDE.md` rather than guessing.

## Scope

Start the assistant from the repository root so its file access matches the project boundary.

:::warning Data boundaries
Do not point an assistant at directories containing credentials, customer data, or
confidential source. Approval to use a tool is not approval to feed it any input.
:::
