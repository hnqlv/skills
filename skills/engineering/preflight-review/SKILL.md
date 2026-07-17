---
name: preflight-review
description: Review a completed implementation slice before a PR or merge. Use after tests and simplification to find spec mismatches, regressions, missing coverage, needless complexity, and AI-generated slop without expanding scope or redesigning the feature.
---

# Preflight Review

Review the current diff against `SPEC.md`, acceptance criteria, tests, and local conventions. Review; do not change code unless asked.

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
