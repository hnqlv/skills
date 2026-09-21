---
name: simplicity
description: Simplify code without changing behaviour. Use for requested cleanup or a post-implementation pass; prioritize readability and maintenance over fewer lines.
---

# Simplicity

Make the code easier to understand, change, test, and delete. Fewer lines are not a goal.

Verify and preserve any supplied worktree, branch, and artifact paths. Review only the selected workstream diff. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Rules

- Preserve behaviour, public contracts, security, and performance characteristics.
- Prefer explicit, local control flow over compressed expressions. Avoid nested ternaries and dense boolean chains; use `if`/`else`, early returns, named predicates, or `switch` when they are easier to scan.
- Use a single ternary only when both outcomes and the condition are immediately obvious.
- Remove dead paths, needless wrappers, speculative abstractions, premature configuration, and dependencies that no longer earn their cost.
- Keep useful duplication when extracting it would couple unrelated behaviour or hide intent.
- Keep inline comments sparse and local. Delete comments that narrate obvious code; retain non-obvious reasons, constraints, invariants, required directives, and public API documentation. Put incident history and implementation chronology in the PR description.
- Reject any change that saves lines but increases the reader's mental work.
- Stop when further edits would be stylistic churn.

## Verify

Review the final diff for accidental behaviour changes. Run the repository's focused tests and relevant type, lint, or build checks; do not assume a language-specific command.

Before returning an English technical summary or review, invoke `write-clear-technical-english` as a light final pass. Preserve behaviour claims, exact verification, limitations, and residual risk.
