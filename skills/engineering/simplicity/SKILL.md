---
name: simplicity
description: Simplify code without changing behaviour. Use for requested cleanup or a post-implementation pass; prioritize readability and maintenance over fewer lines.
---

# Simplicity

Load `writing` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Make the code easier to understand, change, test, and delete. Fewer lines are not a goal.

Verify and preserve any supplied worktree, branch, and artifact paths. Review only the selected workstream diff. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Rules

- Preserve behaviour, public contracts, security, and performance characteristics.
- Prefer explicit, local control flow over compressed expressions. Avoid nested ternaries and dense boolean chains; use `if`/`else`, early returns, named predicates, or `switch` when they are easier to scan.
- Use a single ternary only when both outcomes and the condition are immediately obvious.
- Remove dead paths, needless wrappers, speculative abstractions, premature configuration, and dependencies that no longer earn their cost.
- Keep useful duplication when extracting it would couple unrelated behaviour or hide intent.
- Keep inline comments sparse and local. Delete comments that narrate obvious code; retain non-obvious reasons, constraints, invariants, required directives, and public API documentation. Keep detailed incident history in a linked artifact.
- Reject any change that saves lines but increases the reader's mental work.
- Stop when further edits would be stylistic churn.

## Verify

Review the final diff for accidental behaviour changes. Run the repository's focused tests and relevant type, lint, or build checks; do not assume a language-specific command.

Preserve behaviour claims, exact verification, limitations, and residual risk.
