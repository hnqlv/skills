---
name: plan-from-spec
description: Turn an approved specification into an ordered plan and task queue for multi-slice, dependent, risky, or multi-session work. Skip planning when one bounded change can be built and verified directly.
---

# Plan From Spec

Plan only when the plan reduces execution risk or preserves useful state across slices. Do not turn a small change into ceremony.

Use specification, plan, queue, and decisions paths supplied by the caller or repository instructions. Otherwise reuse existing repository conventions. Use the default paths below only when no convention exists.

Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Workflow

### 1. Establish readiness

- Read the selected approved specification as the contract.
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

When no paths or repository conventions were supplied, use:

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

Before returning English plan artifacts or their summary, invoke `write-clear-technical-english` as a light final pass. Preserve task structure, dependencies, exact verification, risks, gates, and unresolved decisions.

Summarize the plan. Continue under existing user authorization and the calling workflow; do not add another approval gate when implementation is already authorized. Otherwise, ask for approval before handing off to `build-from-spec`. It executes the next unchecked task while treating the specification as authoritative.
