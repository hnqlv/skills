---
name: debug-with-proof
description: Debug defects with evidence before changing production code. Use for bug reports, regressions, flaky behaviour, failing integrations, or unexpected output. Reproduce the issue, reduce the failing surface, test one hypothesis at a time, apply the minimal fix, and retain regression coverage.
---

# Debug With Proof

Do not fix a bug that has not been reproduced.

## Communication

- Keep updates short and factual; preserve decisive commands, paths, identifiers, and errors.
- Separate observations from hypotheses and omit routine tool narration.

## Workflow

### 1. Define the observed failure

Capture expected and actual behaviour, the smallest known reproduction, relevant environment and inputs, and whether the failure is deterministic.

Read the relevant `SPEC.md` section when available. Confirm that the reported behaviour is actually a defect rather than an unspecified product decision.

### 2. Reproduce before editing production code

Prefer a focused regression test, then a deterministic integration test, a minimal executable script, or documented manual steps when automation is impractical.

Confirm it fails for the reported reason. Setup errors, unrelated exceptions, and incorrect assertions are not proof.

Do not change production code before this step succeeds, except for temporary observability needed to expose the failure. Remove temporary instrumentation afterward.

### 3. Reduce the failing surface

- Remove unrelated inputs and steps.
- Identify the narrowest boundary where expected and actual behaviour diverge.
- Compare with a working path when available.
- Check recent relevant changes, contracts, data, configuration, and environment.
- Avoid broad rewrites while the cause is unknown.

### 4. Form and test one hypothesis

For each hypothesis, state:

```text
Hypothesis: [specific causal claim]
Evidence expected: [observable result]
Test: [smallest check]
Result: supported | rejected | inconclusive
```

Change one relevant variable at a time. Reject unsupported hypotheses quickly.

### 5. Apply the minimal fix

- Change the smallest responsible unit and fix the cause, not only the symptom.
- Do not hide corrupted state or contract violations behind fallback behaviour.
- Avoid unrelated refactors and preserve public behaviour outside the defect.

### 6. Prove the fix

1. Run the original reproduction and verify it now passes.
2. Run nearby edge-case tests.
3. Run the relevant broader suite, type checks, lint, and build checks.
4. When practical, confirm the test would fail if the fix were reverted.
5. Keep the regression test unless it asserts an obsolete implementation detail.

### 7. Simplify and review

After tests pass:

- Remove temporary logs, flags, scripts, and instrumentation.
- Simplify the patch without changing behaviour.
- Review the complete diff for correctness, regression risk, security, data handling, and needless complexity.

### 8. Report

Summarize:

- Root cause.
- Reproduction added.
- Minimal fix.
- Verification commands and results.
- Remaining risk, if any.

Use the `fix` commit type. Use `test` separately only when adding coverage without a production change.

## Stop conditions

Stop and surface the uncertainty when:

- The issue cannot be reproduced with the available environment or data.
- The failing behaviour conflicts with an unclear requirement.
- The proposed fix requires destructive migration or security-sensitive changes without approval.

Do not claim a root cause when only correlation was established.
