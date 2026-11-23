---
name: define-spec
description: Defines or refines a spec with the outcome, scope, non-goals, and acceptance criteria of a change. Use when the user wants to define, scope, or agree on a change before implementation, or asks for a spec. Skip it for small edits with clear acceptance criteria.
argument-hint: "[spec-path]"
effort: xhigh
---

# Define Spec

Load `writing` before your first update and `repo-work` before repository work.

Write the smallest spec that makes the outcome and its completion test explicit. Do not plan or write production code. Use the spec path from the caller or repository, then the repository's convention, then `SPEC.md`.

## Workflow

### 1. Ground it

- Inspect only the code, documentation, and conventions needed to separate facts from decisions.
- Update an existing spec in place. Keep its relevant requirements, rationale, and decision history.
- Surface conflicts between the request, current behaviour, and earlier decisions.

### 2. Write the contract

Include only the sections that apply:

- outcome, user, and reason
- scope and explicit non-goals
- behavioural requirements and important failure states
- data, permissions, privacy, migration, or integration constraints
- existing patterns to reuse
- acceptance criteria and the evidence that verifies them
- assumptions and open decisions

Keep small changes small. Do not force a project-wide template on every change.

### 3. Resolve decisions

Resolve open decisions that change behaviour, scope, data, security, cost, architecture, or acceptance. Check repository facts before you ask the user. Record each confirmed decision and its rationale in the spec. For minor details, choose the simplest reversible default and label it as an assumption.

### 4. Hand off

Summarize the outcome, scope, non-goals, acceptance criteria, and assumptions. Wait for the user to confirm the spec, unless they already authorized autonomous continuation. Then:

- Invoke `build-from-spec` for one bounded slice with clear verification.
- Invoke `plan-from-spec` for several slices or sessions, independent subsystems, important dependencies or risks, or a durable task queue.

The spec stays authoritative. A plan may order it but must not reinterpret it.
