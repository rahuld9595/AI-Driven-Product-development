---
name: gwt-story
description: Convert a product intent statement into reviewable Given-When-Then acceptance criteria.
---

# GWT story skill

Turn a short product intent statement into unambiguous, testable acceptance criteria.

## Procedure

1. Restate the user need in one sentence. If the need is ambiguous, ask rather than assume.
2. Identify the actor, their starting state, the triggering action, and the observable outcome.
3. Write one scenario per behavior using Given / When / Then.
4. Add scenarios for the edge cases: empty input, unauthorized actor, downstream failure.
5. List any assumption a human product owner must confirm.

## Output

A block of Gherkin scenarios, followed by an explicit list of open questions.

## Constraints

- Do not invent business rules. Unknowns become open questions, not assumptions.
- One observable outcome per scenario; split compound Then clauses.
- Do not reference real customers, accounts, or internal systems.

## Verification

Each scenario maps to at least one automated test, and a human product owner confirms the
open-questions list before the story is accepted.
