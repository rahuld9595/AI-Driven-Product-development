# Agents

Each agent definition declares a narrow responsibility and the boundary it operates within.

## Required fields

| Field | Purpose |
| --- | --- |
| Name | Stable identifier used to invoke the agent |
| Responsibility | The single task the agent owns |
| Allowed actions | Explicit list; anything unlisted is prohibited |
| Inputs | What the agent needs, and what it must never be given |
| Escalation | The condition under which it stops and asks a human |
| Evaluation | How its output is verified |

## Principles

- Least privilege. An agent that only reads should have no write capability.
- Escalate ambiguity instead of guessing.
- Log material decisions so a reviewer can reconstruct what happened.

Round 2 activity 6 produces the first definition here.
