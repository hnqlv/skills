---
name: define-spec
description: Define or refine a specification before implementation when requirements, scope, or acceptance criteria need agreement. Skip trivial edits with explicit acceptance criteria.
---

# Define Spec

Load `write-clear-technical-english` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Create or refine the smallest specification that makes the intended outcome and completion test explicit. Do not plan or write production code.

Use the specification path supplied by the caller or repository instructions. Otherwise reuse an existing repository convention, and default to `SPEC.md` only when none exists.

Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Workflow

### 1. Ground the specification

- Confirm the repository root, authoritative product or task document, and specification path.
- Inspect only the code, documentation, and conventions needed to distinguish facts from decisions.
- Update the existing specification when one exists. Preserve still-relevant requirements, rationale, and decision history; do not replace it wholesale for editorial neatness.
- Surface conflicts between the request, existing behaviour, and prior decisions.

### 2. Write the contract

Include only applicable sections:

- outcome, user, and reason;
- scope and explicit non-goals;
- behavioural requirements and important failure states;
- data, permissions, privacy, migration, or integration constraints;
- existing patterns that must be reused;
- specific acceptance criteria and verification evidence;
- assumptions and unresolved decisions.

Keep small changes small. A short feature section with clear acceptance criteria can be sufficient; do not force a project-wide template onto every change.

### 3. Resolve material decisions

Invoke `grill-spec` when an open decision changes behaviour, scope, data, security, cost, architecture, or acceptance criteria. Discover repository facts instead of asking the user. Record the confirmed answer and its rationale in the specification.

Choose the simplest reversible default for minor implementation details and label it as an assumption.

### 4. Confirm the handoff

Summarize the outcome, scope, non-goals, acceptance criteria, and remaining assumptions. Do not plan or code until the user confirms the specification, unless they explicitly authorized autonomous continuation.

Preserve exact requirements, acceptance criteria, non-goals, assumptions, rationale, and obligation levels.

After confirmation:

- invoke `build-from-spec` directly when the change is one bounded slice with clear verification and no material dependency or rollout ordering;
- invoke `plan-from-spec` when the work spans multiple slices or sessions, crosses independent subsystems, has important dependencies or risks, or needs a durable execution queue.

The specification remains authoritative. A later plan may sequence it but must not reinterpret it.
