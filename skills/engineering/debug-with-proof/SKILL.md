---
name: debug-with-proof
description: Debugs defects, regressions, flaky tests, and failing integrations by reproducing the failure before changing production code. Use when the user reports a bug, crash, error, or failing or flaky test, or asks why something broke.
argument-hint: "[symptom]"
effort: xhigh
---

# Debug With Proof

Load `writing` before your first update and `repo-work` before repository work.

Do not fix a bug that you have not reproduced. Do not claim a root cause from correlation alone.

## Workflow

### 1. Define the failure

Record expected and actual behaviour, the smallest known reproduction, the environment and inputs, and whether the failure is deterministic. When a spec exists, confirm that the behaviour is a defect and not an unspecified product decision.

### 2. Reproduce before you change production code

Prefer a focused regression test. Otherwise use a deterministic integration test, a minimal script, or documented manual steps. Reuse or extend an existing test at the boundary responsible for the behaviour. Keep expected outcomes independent of the code under test, and do not let mocks supply the behaviour that you are proving.

Prove crash recovery by killing the real process, and rollback by checking the database after a real rollback, in an isolated environment. An injected exception or a mocked transaction proves neither.

Confirm that the test fails for the reported reason. Setup errors, unrelated exceptions, and wrong assertions are not proof. Until this step succeeds, change production code only to add temporary instrumentation.

### 3. Narrow it

Remove unrelated inputs and steps. Find the narrowest boundary where expected and actual behaviour diverge. Compare with a working path, and check recent changes, contracts, data, configuration, and environment. Do not rewrite broadly while the cause is unknown.

### 4. Test one hypothesis at a time

```text
Hypothesis: [specific causal claim]
Evidence expected: [observable result]
Test: [smallest check]
Result: supported | rejected | inconclusive
```

Change one variable at a time.

### 5. Fix the cause

Change the smallest responsible unit. Fix the cause, not only the symptom. Do not hide corrupted state or contract violations behind fallbacks.

### 6. Prove the fix

1. Rerun the reproduction and confirm that it passes.
2. Run nearby edge cases, the broader suite, and type, lint, and build checks.
3. When practical, confirm that the test fails with the fix reverted.
4. Keep meaningful regression coverage. Merge duplicates only after you confirm that the remaining test catches the same failure. Rewrite an implementation-coupled test when its contract still matters.

Then remove temporary instrumentation, simplify the patch, and review the full diff for correctness, regressions, security, and data handling.

### 7. Report

State the cause and the fix, or the open hypothesis, with the decisive reproduction and verification. Add the remaining risk or next check when there is one.

Use the `fix` commit type. Use `test` only for coverage without a production change.

## Stop and ask when

- You cannot reproduce the issue with the available environment or data.
- The behaviour conflicts with an unclear requirement.
- The fix needs a destructive migration or a security-sensitive change without approval.
