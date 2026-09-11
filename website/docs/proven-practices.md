---
id: proven-practices
title: Sustainable AI Practices
sidebar_label: Sustainable AI Practices
sidebar_position: 2
---

# Sustainable AI Practices

Sustainable AI practice means building repeatable team capabilities rather than relying on one-off
prompts or individual experimentation. Each capability should produce reviewable artifacts, operate
within clear guardrails, and improve through feedback.

## Five focus areas

| Area | Core question | Typical evidence |
| --- | --- | --- |
| Planning | Are we solving the right problem with clear constraints? | Refined backlog items, acceptance criteria, decision records |
| Documentation | Can a contributor understand the system and its decisions? | Repository guidance, architecture notes, runbooks |
| Implementation | Does AI assistance preserve engineering ownership and maintainability? | Small commits, reviewable pull requests, coding rules |
| Testing | Do we have credible evidence that intended behavior works? | Unit, integration, and regression test results |
| Security | Have we handled sensitive information and supply-chain risk appropriately? | Threat considerations, secret scanning, dependency review |

## Product Team Maturity Model

The maturity model describes how a team's relationship with AI changes as practices mature. The
target state for this training is **Augmented**: AI is embedded in the delivery system, with humans
accountable for judgment and outcomes.

| Level | Characteristic | Typical signal |
| --- | --- | --- |
| Ad hoc | Individuals experiment privately | Results are not reproducible by teammates |
| Assisted | AI helps with isolated tasks | Gains are real but local and uneven |
| Augmented | AI is part of the delivery system | Shared standards, reusable skills, evidence-based review |
| Autonomous | Proven workflows run with oversight | Governed automation with observability and escalation |

:::warning Empirical caveat
Maturity models of this kind are organizing frameworks, not measured constructs. The level
definitions here are useful for shared vocabulary and planning, but they are not validated
instruments, and placing a team at a level is not evidence that the level causes an outcome.
:::

## Operating principles

- Keep a human accountable for decisions, code approval, and production changes.
- Use narrowly scoped tasks with verifiable acceptance criteria.
- Record durable context in version-controlled documentation rather than chat history alone.
- Treat generated code as untrusted until it has been reviewed and tested.
- Never place credentials, sensitive data, proprietary code, or regulated data into tools that are
  not explicitly approved for that information.

## Maturity progression

The lab uses three rounds. The progression is deliberately practical: establish a viable baseline
first, standardize useful practices next, and only then automate processes that have clear ownership
and measurable controls.

| Round | Focus | Outcome |
| --- | --- | --- |
| [Round 1 - MVP](./part-2/round-1/index.mdx) | Establish the smallest repeatable workflow | A usable baseline and first evidence artifacts |
| [Round 2 - Advanced](./part-2/round-2/index.mdx) | Expand team patterns across the PDLC | Reusable practices for reviews, stories, tests, and guidance |
| [Round 3 - Precision & Automation](./part-2/round-3/index.mdx) | Automate proven patterns | Governed, observable automation with escalation paths |
