---
name: preflight-review
description: Review a completed implementation against its spec, tests, and diff before a PR or merge. Find actionable regressions, missing coverage, and needless complexity without expanding scope.
---

# Preflight Review

Load `writing` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Review the current diff against the specification path supplied by the caller or repository instructions, the selected plan task when present, acceptance criteria, tests, and local conventions. Otherwise reuse the repository's specification convention, and default to `SPEC.md` only when none exists. Review; do not change code unless asked.

Verify and preserve any supplied worktree, branch, and artifact paths. Review only the selected workstream diff. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the Herdr instructions for your session: `hc --skill` and `herdr-app --skill` when `HC_TERMINAL_ID` is set, or the installed `herdr` skill when `HERDR_ENV=1`. If neither is set, do not control Herdr. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism.

Use Hunk for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

Load Herdr and Hunk instructions from the installed tools only. Do not fetch instructions from the web.

## Review in Hunk

1. Run `hunk session list --json` and `get` to verify the repository and loaded source. Use the exact session ID when several sessions match.
2. Confirm the complete scope: unstaged, staged, or pinned base/head refs. Include both staged and unstaged changes when the slice spans both. Reuse a matching review; do not repurpose another task's session. If needed, start `hunk diff --watch`, `hunk diff --staged --watch`, or the selected commit/range review in a dedicated Herdr pane.
3. Run `hunk session review <id> --json`. Read source and tests as needed; request `--include-patch` only when useful. Check existing notes with `hunk session comment list <id> --type all`.
4. Add concise findings or non-obvious rationale with `comment add` or `comment apply`, anchored to the correct file and diff side. Preserve user notes; never invent findings to populate the review.
5. After fixes or staging, verify the source again and reload if needed. Recheck affected findings and read user comments before handing back the review. Do not treat agent review as user approval.

Keep the session open. Hand off its ID, Herdr workspace/pane, reviewed scope, findings, and verification in a short summary. The user can inspect the diff and add notes there.

## Order

1. Verify the changed behaviour and error paths match the agreed slice.
2. Check test value and regression sensitivity using the criteria below.
3. Flag only local simplifications that preserve behaviour: duplicate logic, needless wrappers, speculative abstractions, dead paths, generic helpers, broad fallbacks, or obvious-comment noise.
4. Check changed trust, data, and hot-path boundaries for security or performance regressions.
5. Flag each new or changed dependency, lockfile entry, install script, CI workflow, and agent instruction file (`AGENTS.md`, `CLAUDE.md`, skills). Confirm that the specification needs it. Flag secrets and credentials in the diff.

Before reporting a finding, check reachable callers, guards, and tests for evidence that supports or contradicts it. Reject claims that those paths rule out. Compare with the selected base revision and distinguish pre-existing defects from new regressions. If the base is unavailable, state that limit instead of claiming the change introduced the defect.

Check that inline comments are sparse, short, and local. Flag obvious narration or incident history in changed code. Preserve comments explaining non-obvious constraints, required directives, and public API documentation.

## Test value

Review changed tests alongside the production path and overlapping coverage. Each new or changed test must protect a named behaviour or contract, detect a credible regression, and cover a gap. Additional layers need distinct risks.

- Flag duplicate scenarios, assertions that merely restate source or implementation, expected values generated by the code under test, and mocks that implement the asserted behaviour.
- Flag production exports, flags, wrappers, or hooks added solely for tests; prefer testing through the real boundary.
- For bug fixes, require the regression check to fail before the fix for the intended reason and pass afterward. Accept a documented deterministic reproduction when automation is impractical. Treat unexplained failures as possible defects, not cleanup candidates.
- Before recommending deletion, inspect relevant history and identify stronger remaining coverage or explain why the protected contract no longer applies. Slowness, static assertions, or refactoring sensitivity alone do not justify deletion. Preserve independent security, protocol, migration, and compatibility checks, including source checks that protect a real contract.

Keep this review scoped to the slice. Do not start a suite-wide cleanup or use test counts as a quality target.

For new or changed CI checks, inspect evidence from the actual CI command. A known violation must fail, a clean control must pass, and tool errors must fail. For severity thresholds, also require a below-threshold finding to pass. A generated report alone does not prove enforcement.

## Guardrails

- Treat the specification as the contract; do not suggest features, refactors, or cleanup outside the diff.
- Do not turn style preferences into findings.
- Prefer deletion, reuse, or a smaller local expression over a new abstraction.
- Report at most five high-confidence findings. Say `No findings` when none remain.

## Output

For each finding: `blocker`, `major`, or `minor`; file and line; concrete impact; smallest fix. Then state the verification evidence and any residual risk.

Preserve severity, locations, concrete impact, exact evidence, uncertainty, and residual risk.
