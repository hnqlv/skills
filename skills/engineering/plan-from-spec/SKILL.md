---
name: plan-from-spec
description: Turns an approved spec into an ordered plan and task queue. Use when the user asks to plan or break down a spec, or the work has several slices, dependencies, or risky steps, or spans sessions. Skip it when one bounded change can be built directly.
argument-hint: "[spec-path]"
effort: xhigh
---

# Plan From Spec

Load `writing` before your first update and `repo-work` before repository work.

Plan only when a plan reduces risk or keeps useful state across slices. Do not edit production code. Use the paths from the caller or repository, then the repository's convention, then the defaults below.

## Workflow

### 1. Check readiness

Read the approved spec as the contract. Inspect the affected code, repository instructions, and existing plan files. If a missing product decision would change the plan, return to `define-spec`. Do not hide it as an assumption.

### 2. Map delivery

- Trace every in-scope requirement to at least one task.
- Identify dependencies, risky unknowns, migrations, external gates, and rollback needs.
- Prefer thin end-to-end slices that leave the system working.
- Prove high risks early. Invoke `spike` when code and documentation cannot settle a question.
- Separate independent work only when shared contracts are fixed.

### 3. Write the artifacts

Default paths:

- `tasks/plan.md`: strategy, dependency order, requirement traceability, risks, and checkpoints
- `tasks/todo.md`: the ordered task queue
- `tasks/decisions.md`: only for technical assumptions that the spec does not cover

Do not add other planning files. Write each task as:

```markdown
- [ ] Task N: Outcome
  - Scope:
  - Acceptance:
  - Verify:
  - Dependencies:
  - Likely files:
```

Size each task for one focused pass. Split a task that combines independent outcomes, cannot be verified locally, or leaves the system broken. Add a checkpoint only where several tasks share an integration gate.

### 4. Check the plan

Confirm that every in-scope requirement is covered and non-goals stay out. The order must follow real dependencies, and each task needs runnable verification. External gates and destructive or security-sensitive steps must be explicit. The first task must be able to start without broad rediscovery.

Summarize the plan. If the user already authorized implementation, continue to `build-from-spec` without a new approval gate. Otherwise ask first.
