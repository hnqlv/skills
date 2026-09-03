---
name: grill-spec
description: Interrogate an approved specification artifact before planning or coding. Use when defining or reviewing a specification with open questions, vague behaviour, hidden assumptions, competing options, missing edge cases, or unclear scope, or when asked to grill or stress-test a product decision. Use a caller-supplied or repository-defined path when present, otherwise default to SPEC.md. Inspect repository facts, ask one dependency-safe decision at a time with a recommendation, and record confirmed answers without erasing useful decision history.
---

# Grill Spec

Turn vague requirements into explicit decisions without overwhelming the user.

Use the specification path supplied by the caller or repository instructions. Otherwise reuse an existing repository convention, and default to `SPEC.md` only when none exists.

When a Herdr-managed handoff supplies a worktree, branch, or specification path, treat that context as fixed. Do not switch branches or move the specification. Reuse the supplied Herdr workspace and worktree; add only the panes justified by the task.

## Rules

- Read the selected specification and relevant repository files first.
- Separate discoverable facts from decisions only the user can make.
- Ask one currently unblocked decision at a time, then wait.
- Keep each question concise and include a recommended answer with a brief reason.
- Prefer bounded options when they represent the real decision space.
- Do not ask about implementation-irrelevant preferences or discoverable facts.
- Update the selected specification after each answer when editing is available.
- Do not plan or code until the user confirms shared understanding.

## Process

### 1. Map the design tree

Map each decision and the decisions that depend on it. Rank unresolved decisions by impact:

1. User-visible behaviour and success criteria.
2. Scope and non-goals.
3. Data ownership, lifecycle, migration, and deletion.
4. Permissions, privacy, security, and destructive actions.
5. Failure states, retries, idempotency, and recovery.
6. Integration contracts and external dependencies.
7. Edge cases that change architecture or acceptance criteria.
8. Reversible implementation details.

Omit category 8 from the design tree unless the user specifically wants to choose it.

### 2. Choose the next decision

The frontier contains every unresolved decision whose prerequisites are settled. Questions that depend on another open question wait for a later round.

Investigate facts from the repository, filesystem, or tools instead of asking the user. From the frontier, choose the decision with the greatest effect on the remaining tree.

### 3. Ask one question

Use:

```text
[One concrete question]
Recommendation: [specific option]. [One-sentence reason.]
```

Offer two to four bounded options when useful. Avoid broad prompts such as “What do you want?” Wait for the answer before asking anything else.

### 4. Record and continue

After each answer:

1. Record the decision and useful rationale in the relevant specification section without deleting prior context that explains the current contract.
2. Check which branches were resolved, changed, or newly opened.
3. Recompute the frontier and ask the next highest-impact question.

Do not repeat confirmed questions in different words.

### 5. Stop at sufficient clarity

Stop grilling when the frontier is empty because all remaining uncertainty is either:

- discoverable from the repository,
- covered by an existing convention,
- safely reversible,
- outside the current scope, or
- minor enough to choose the simplest default.

Then give a short confirmation:

- intended outcome and scope;
- decisive choices and non-goals;
- assumptions still present;
- whether the specification is ready to build directly or needs `plan-from-spec`.

Before returning each English technical question or confirmation, invoke `write-clear-technical-english` as a light final pass. Preserve the decision boundary, recommendation, options, rationale, and unresolved uncertainty.

Wait for explicit confirmation. A vague acknowledgment is not permission to reinterpret the contract.

## Autonomous mode

When the user explicitly asks to proceed without interaction, replace the interview loop with these rules:

- Do not fabricate certainty.
- Add a short `Assumptions` section to the specification.
- Choose the simplest reversible defaults.
- Flag only decisions that create material product, security, data, or cost risk.

## Orchestration and review

For substantive work, load the `herdr` skill, follow its workflow, and use Herdr panes for independent parallel work. Use separate worktrees for concurrent mutations, branch isolation, or preserving an active checkout; skip parallelism when tasks are trivial or dependency-bound.

Before finishing substantive repository work with a diff, run `hunk skill path`, load the returned skill, and review the diff with Hunk. If no session exists, start `hunk diff --watch` in a dedicated Herdr pane, or another persistent interactive terminal, so the user does not need to launch it. Then use `hunk session *` for review control. Skip Hunk when no repository diff exists.
