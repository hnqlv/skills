---
name: preflight-review
description: Review a completed implementation against its spec, tests, and diff before a PR or merge. Find actionable regressions, missing coverage, and needless complexity without expanding scope.
---

# Preflight Review

Review the current diff against the specification path supplied by the caller or repository instructions, the selected plan task when present, acceptance criteria, tests, and local conventions. Otherwise reuse the repository's specification convention, and default to `SPEC.md` only when none exists. Review; do not change code unless asked.

Verify and preserve any supplied worktree, branch, and artifact paths. Review only the selected workstream diff. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Order

1. Verify the changed behaviour and error paths match the agreed slice.
2. Check tests would catch the intended regression.
3. Flag only local simplifications that preserve behaviour: duplicate logic, needless wrappers, speculative abstractions, dead paths, generic helpers, broad fallbacks, or obvious-comment noise.
4. Check changed trust, data, and hot-path boundaries for security or performance regressions.

Check that inline comments are sparse, short, and local. Flag obvious narration or incident history in changed code. Preserve comments explaining non-obvious constraints, required directives, and public API documentation.

## Guardrails

- Treat the specification as the contract; do not suggest features, refactors, or cleanup outside the diff.
- Do not turn style preferences into findings.
- Prefer deletion, reuse, or a smaller local expression over a new abstraction.
- Report at most five high-confidence findings. Say `No findings` when none remain.

## Output

For each finding: `blocker`, `major`, or `minor`; file and line; concrete impact; smallest fix. Then state the verification evidence and any residual risk.

Before returning an English review, invoke `write-clear-technical-english` as a light final pass. Preserve severity, locations, concrete impact, exact evidence, uncertainty, and residual risk.
