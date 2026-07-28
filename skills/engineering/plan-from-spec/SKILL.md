---
name: plan-from-spec
description: Turn an approved SPEC.md into an ordered implementation plan and task queue. Use when work needs multiple vertical slices or sessions, spans independent subsystems, has non-obvious dependencies, contains risky unknowns or rollout steps, or needs durable progress tracking. Produce tasks/plan.md and tasks/todo.md without writing production code. Skip when one bounded slice can be built and verified directly from the specification.
---

# Plan From Spec

Plan only when the plan reduces execution risk or preserves useful state across slices. Do not turn a small change into ceremony.

## Workflow

### 1. Establish readiness

- Read the approved `SPEC.md` as the contract.
- Inspect the affected code paths, repository instructions, and existing patterns.
- Reuse the repository's current plan files and conventions when present.
- Return to `define-spec` or `grill-spec` if a missing product decision would change the plan. Do not hide it as an implementation assumption.

Do not edit production code during planning.

### 2. Map delivery

- Trace every in-scope requirement to at least one task.
- Identify dependencies, risky unknowns, migrations, external gates, and rollback needs.
- Prefer thin end-to-end slices that leave the system working.
- Put high-risk proof early; invoke `spike` when documentation and existing code cannot settle it.
- Separate independent work only when shared contracts are already fixed.

### 3. Write the artifacts

Use:

- `tasks/plan.md` for delivery strategy, dependency order, requirement traceability, risks, and checkpoints;
- `tasks/todo.md` for the ordered execution queue;
- `tasks/decisions.md` only when spec-silent technical assumptions need a durable record.

Do not invent additional planning files.

Each task must state:

```markdown
- [ ] Task N: Outcome
  - Scope:
  - Acceptance:
  - Verify:
  - Dependencies:
  - Likely files:
```

Keep tasks small enough for one focused implementation pass. Split work that combines independent outcomes, cannot be verified locally, or leaves the system broken. Add checkpoints only where several tasks share a meaningful integration gate.

### 4. Review the plan

Confirm:

- all in-scope requirements are covered and non-goals remain excluded;
- task order follows real dependencies;
- each task has runnable or clearly described verification;
- unresolved external gates and destructive or security-sensitive steps are explicit;
- the first task is immediately executable without broad rediscovery.

Summarize the plan and ask for one approval before implementation. After approval, hand off to `build-from-spec`, which executes the next unchecked task from the plan while continuing to treat `SPEC.md` as authoritative.
