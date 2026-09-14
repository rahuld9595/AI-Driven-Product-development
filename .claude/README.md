# Agent and skill definitions

Reusable agent and skill definitions the lab exercises produce. Keeping them here makes them
versioned, reviewable, and diffable like any other code.

```text
.claude/
|-- agents/      Bounded agent definitions with explicit permissions
`-- skills/      Reusable procedures invoked by name
```

## Standards

- One directory per skill, containing a `SKILL.md` with a name, description, and procedure.
- State allowed actions and prohibited actions explicitly.
- Require human approval before any consequential or irreversible action.
- Define how output is verified: a deterministic check, a test, or a named review criterion.

Round 2 activities 3 and 6 populate this directory.
