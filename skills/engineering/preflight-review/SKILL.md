---
name: preflight-review
description: Review a completed implementation slice before a PR or merge. Use after tests and the simplicity pass to find spec mismatches, regressions, missing coverage, needless complexity, and AI-generated code slop without expanding scope or redesigning the feature. Review implementation evidence; use write-clear-technical-english separately for the human-facing closeout.
---

# Preflight Review

Review the current diff against the specification path supplied by the caller or repository instructions, the selected plan task when present, acceptance criteria, tests, and local conventions. Otherwise reuse the repository's specification convention, and default to `SPEC.md` only when none exists. Review; do not change code unless asked.

When a Herdr-managed handoff supplies a worktree, branch, or artifact paths, verify that context and review only that workstream. Do not switch branches or relocate task artifacts. Reuse the supplied Herdr workspace and worktree; add only the panes justified by the review.

## Order

1. Verify the changed behaviour and error paths match the agreed slice.
2. Check tests would catch the intended regression.
3. Flag only local simplifications that preserve behaviour: duplicate logic, needless wrappers, speculative abstractions, dead paths, generic helpers, broad fallbacks, or obvious-comment noise.
4. Check changed trust, data, and hot-path boundaries for security or performance regressions.

## Guardrails

- Treat the specification as the contract; do not suggest features, refactors, or cleanup outside the diff.
- Do not turn style preferences into findings.
- Prefer deletion, reuse, or a smaller local expression over a new abstraction.
- Report at most five high-confidence findings. Say `No findings` when none remain.

## Output

For each finding: `blocker`, `major`, or `minor`; file and line; concrete impact; smallest fix. Then state the verification evidence and any residual risk.

Before returning an English review, invoke `write-clear-technical-english` as a light final pass. Preserve severity, locations, concrete impact, exact evidence, uncertainty, and residual risk.

## Orchestration and review

For substantive work, load the `herdr` skill, follow its workflow, and use Herdr panes for independent parallel work. Use separate worktrees for concurrent mutations, branch isolation, or preserving an active checkout; skip parallelism when tasks are trivial or dependency-bound.

Before finishing substantive repository work with a diff, run `hunk skill path`, load the returned skill, and review the diff with Hunk. If no session exists, start `hunk diff --watch` in a dedicated Herdr pane, or another persistent interactive terminal, so the user does not need to launch it. Then use `hunk session *` for review control. Skip Hunk when no repository diff exists.
