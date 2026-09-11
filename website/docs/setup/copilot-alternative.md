---
id: copilot-alternative
title: Copilot Alternative
sidebar_label: Copilot Alternative
sidebar_position: 21
---

# Copilot Alternative

Use this path when Claude Code is unavailable and GitHub Copilot is the approved assistant.

## Install

Install the GitHub Copilot extension in Visual Studio Code and sign in with an account that
has an active Copilot subscription.

## Equivalent of repository rules

Copilot reads repository-level custom instructions from
`.github/copilot-instructions.md`. To keep one source of truth, keep the substance in
`CLAUDE.md` and have the Copilot file point at it rather than duplicating the content.

## What transfers and what does not

| Exercise element | Transfers to Copilot |
| --- | --- |
| Prompt-driven implementation | Yes |
| Test-driven workflow | Yes |
| Review-comment generation | Yes, via Copilot code review |
| Named skills in `.claude/skills/` | No direct equivalent; use prompt files |
| Bounded agent definitions | Partial; capabilities differ |

Activities 3 and 6 of Round 2 assume named skills and agent definitions. On Copilot, complete
them as committed prompt files and record the difference in your evidence note.
