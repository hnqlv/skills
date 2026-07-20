---
name: simplicity
description: Simplify or refactor code without changing behaviour. Use when asked to reduce complexity, clean up an implementation, make code easier to understand, or run a post-implementation simplification pass. Prioritize clarity and maintainability over brevity.
---

# Simplicity

Make the code easier to understand, change, test, and delete. Fewer lines are not a goal.

## Rules

- Preserve behaviour, public contracts, security, and performance characteristics.
- Prefer explicit, local control flow over compressed expressions. Avoid nested ternaries and dense boolean chains; use `if`/`else`, early returns, named predicates, or `switch` when they are easier to scan.
- Use a single ternary only when both outcomes and the condition are immediately obvious.
- Remove dead paths, needless wrappers, speculative abstractions, premature configuration, and dependencies that no longer earn their cost.
- Keep useful duplication when extracting it would couple unrelated behaviour or hide intent.
- Prefer self-documenting names and structure. Add comments only for non-obvious reasons, constraints, or invariants—not to narrate the code.
- Reject any change that saves lines but increases the reader's mental work.
- Stop when further edits would be stylistic churn.

For example, replace branching shaped like this:

```ts
const shouldNotify = isUrgentMessage
  ? preferences["notifyUrgent"] === true
  : isDigestMessage
    ? preferences["notifyDigest"] === true
    : true;
```

with explicit control flow:

```ts
let shouldNotify = true;

if (isUrgentMessage) {
  shouldNotify = preferences["notifyUrgent"] === true;
} else if (isDigestMessage) {
  shouldNotify = preferences["notifyDigest"] === true;
}
```

## Verify

Review the final diff for accidental behaviour changes. Run the repository's focused tests and relevant type, lint, or build checks; do not assume a language-specific command.
