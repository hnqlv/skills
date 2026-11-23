---
name: simplicity
description: Simplifies code for readability without changing behaviour. It flattens conditionals, removes dead paths and needless wrappers, and keeps useful duplication. Use when the user asks to simplify or clean up code, and after build-from-spec finishes a slice. Prefer it over the bundled simplify unless the user types /simplify.
effort: high
---

# Simplicity

Load `writing` before your first update and `repo-work` before repository work.

Make the code easier to understand, change, test, and delete. Fewer lines are not a goal. Change only the selected diff or the code that the user names.

## Rules

- Preserve behaviour, public contracts, security, and performance.
- Prefer explicit, local control flow. Replace nested ternaries and dense boolean chains with `if`/`else`, early returns, named predicates, or `switch`. Use a single ternary only when the condition and both outcomes are obvious.
- Remove dead paths, needless wrappers, speculative abstractions, premature configuration, and dependencies that no longer earn their cost.
- Keep duplication when extracting it would couple unrelated behaviour or hide intent.
- Delete comments that narrate obvious code. Keep non-obvious reasons, constraints, invariants, required directives, and public API documentation.
- Reject a change that saves lines but makes the reader work harder. Stop when further edits are only a matter of style.

## Verify

Check the final diff for accidental behaviour changes. Run the repository's focused tests and the relevant type, lint, or build checks.
