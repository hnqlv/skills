---
name: debug-with-proof
description: Debug defects, regressions, flaky behaviour, and failing integrations. Reproduce the failure before changing production code, test one hypothesis at a time, and verify the minimal fix.
---

# Debug With Proof

Load `writing` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Do not fix a bug that has not been reproduced.

Use the specification path supplied by the caller or repository instructions when one is relevant. Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Communication

- Keep updates short and factual; preserve decisive commands, paths, identifiers, and errors.
- Separate observations from hypotheses and omit routine tool narration.

## Workflow

### 1. Define the observed failure

Capture expected and actual behaviour, the smallest known reproduction, relevant environment and inputs, and whether the failure is deterministic.

Read the relevant section of the selected specification when available. Confirm that the reported behaviour is actually a defect rather than an unspecified product decision.

### 2. Reproduce before editing production code

Prefer a focused regression test, then a deterministic integration test, a minimal executable script, or documented manual steps when automation is impractical.

Inspect existing coverage first. Reuse a failing test or extend an existing case at the boundary responsible for the behaviour. Add another layer only for a distinct risk. Keep expected outcomes independent of the code under test; mocks must not supply the behaviour being proved. Avoid production hooks needed only by tests.

For crash or rollback guarantees, test the real boundary in an isolated environment. Verify recovery after actual process termination or verify database state after a real rollback. An injected exception does not prove crash recovery, and a mocked transaction call does not prove rollback.

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
5. Retain meaningful regression coverage. Consolidate duplicates only after confirming the remaining test detects the same failure; rewrite an implementation-coupled test when its contract still matters.

### 7. Simplify and review

After tests pass:

- Remove temporary logs, flags, scripts, and instrumentation.
- Simplify the patch without changing behaviour.
- Review the complete diff for correctness, regression risk, security, data handling, and needless complexity.

### 8. Report

Use one short paragraph or up to three bullets:

- Cause and minimal fix, or the unresolved hypothesis.
- Decisive reproduction and verification results; link detailed commands.
- Remaining risk or next check, when needed.

Preserve exact commands, paths, identifiers, errors, evidence, uncertainty, and remaining risk.

Use the `fix` commit type. Use `test` separately only when adding coverage without a production change.

## Stop conditions

Stop and surface the uncertainty when:

- The issue cannot be reproduced with the available environment or data.
- The failing behaviour conflicts with an unclear requirement.
- The proposed fix requires destructive migration or security-sensitive changes without approval.

Do not claim a root cause when only correlation was established.
