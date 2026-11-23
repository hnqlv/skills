---
name: preflight-review
description: Reviews a finished change against its spec, tests, and diff in Hunk before a PR or merge, and reports at most five high-confidence findings. Use when the user asks if a change is ready for a PR or merge, or to check it against the spec, and at the end of build-from-spec. Prefer it over the bundled code-review for these requests. Not a general bug hunt.
argument-hint: "[spec-path]"
effort: xhigh
---

# Preflight Review

Load `writing` before your first update and `repo-work` before repository work.

Review the selected diff against the spec, the plan task when there is one, its acceptance criteria, the tests, and local conventions. Use the spec path from the caller or repository, then the repository's convention, then `SPEC.md`. Review only. Do not change code unless the user asks.

## Review in Hunk

1. Find the session with `hunk session list --json` and `get`. Use the exact ID when several sessions match.
2. Confirm the full scope: unstaged, staged, or pinned refs. Include both staged and unstaged changes when the slice spans both. Reuse this task's session, never another task's. If none exists, start `hunk diff --watch`, `hunk diff --staged --watch`, or the commit or range review in a dedicated Rex pane.
3. Run `hunk session review <id> --json`. Add `--include-patch` only when needed. Read existing notes with `hunk session comment list <id> --type all`.
4. Add findings with `comment add` or `comment apply`, anchored to the correct file and diff side. Keep user notes. Never invent findings.
5. After fixes, reload, recheck the affected findings, and read user comments. Agent review is not user approval.

Keep the session open. Hand off its ID, the Rex session and pane, the reviewed scope, the findings, and the verification.

## What to check

1. The changed behaviour and error paths match the agreed slice.
2. Test value, as described below.
3. Local, behaviour-preserving simplifications only: duplicate logic, needless wrappers, speculative abstractions, dead paths, broad fallbacks, and comments that narrate obvious code or hold incident history.
4. Security and performance regressions at changed trust, data, and hot-path boundaries.
5. Each new or changed dependency, lockfile entry, install script, CI workflow, and agent instruction file (`AGENTS.md`, `CLAUDE.md`, skills). Confirm that the spec needs it. Flag secrets and credentials.

Before you report a finding, check callers, guards, and tests for evidence for or against it. Drop claims that those paths rule out. Compare with the base revision to separate new regressions from existing defects. If the base is unavailable, say so.

## Test value

Each new or changed test must protect a named behaviour or contract, catch a credible regression, and fill a gap. A new test layer needs a distinct risk.

- Flag duplicate scenarios, assertions that restate the implementation, expected values computed by the code under test, and mocks that implement the asserted behaviour.
- Flag exports, flags, wrappers, or hooks added only for tests.
- For a bug fix, the regression check must fail before the fix for the intended reason and pass after it. A documented deterministic reproduction is acceptable when automation is impractical. Treat unexplained failures as possible defects.
- Before you recommend deleting a test, find stronger remaining coverage or show that its contract no longer applies. Slowness, static assertions, or sensitivity to refactoring alone do not justify deletion. Keep independent security, protocol, migration, and compatibility checks.
- For a new or changed CI check, require evidence from its real command: a known violation fails, a clean control passes, and tool errors fail. For thresholds, a below-threshold finding passes.

Stay within the slice. Do not start a suite-wide cleanup or treat test counts as a target.

## Report

Report at most five high-confidence findings, or `No findings`. For each finding, give `blocker`, `major`, or `minor`, the file and line, the concrete impact, and the smallest fix. Then state the verification evidence and residual risk.

Do not suggest features or refactors outside the diff, and do not turn style preferences into findings. Prefer deletion, reuse, or a smaller local expression to a new abstraction.
