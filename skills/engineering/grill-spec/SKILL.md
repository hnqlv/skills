---
name: grill-spec
description: Resolve material open decisions in a specification before planning or coding. Inspect repository facts first, then ask one unblocked question at a time.
---

# Grill Spec

Load `write-clear-technical-english` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Turn vague requirements into explicit decisions without overwhelming the user.

Use the specification path supplied by the caller or repository instructions. Otherwise reuse an existing repository convention, and default to `SPEC.md` only when none exists.

Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Rules

- Read the selected specification and relevant repository files first.
- Separate discoverable facts from decisions only the user can make.
- Ask one currently unblocked decision at a time, then wait.
- Keep each question concise and include a recommended answer with a brief reason.
- Prefer bounded options when they represent the real decision space.
- Do not ask about implementation-irrelevant preferences or discoverable facts.
- Update the selected specification after each answer when editing is available.
- Do not plan or code while material product decisions remain unresolved. Respect existing authorization and the autonomous mode below.

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

Preserve the decision boundary, recommendation, options, rationale, and unresolved uncertainty.

Request confirmation when the user has not already authorized continuation. Do not reinterpret the contract from a vague acknowledgment.

## Autonomous mode

When the user explicitly asks to proceed without interaction, replace the interview loop with these rules:

- Do not fabricate certainty.
- Add a short `Assumptions` section to the specification.
- Choose the simplest reversible defaults.
- Flag only decisions that create material product, security, data, or cost risk.
