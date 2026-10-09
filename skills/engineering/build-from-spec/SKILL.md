---
name: build-from-spec
description: Implement an approved specification or the next planned slice. Use for specified software work with clear acceptance criteria; finish with verification, simplicity, preflight review, and a concise closeout.
---

# Build From Spec

Load `writing` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Use the specification path supplied by the caller or repository instructions. Otherwise reuse an existing repository convention, and default to `SPEC.md` only when none exists. Use supplied or repository-defined plan and queue paths the same way, with `tasks/plan.md` and `tasks/todo.md` as fallbacks.

The selected specification is the source of truth. A plan sequences the work but cannot override it.

Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Operating principles

- Communicate with short, complete sentences that preserve meaning.
- Preserve exact technical details and inspect existing conventions first.
- Prefer the smallest local, explicit change that solves the requirement.
- Work in vertical slices and leave the system working after each one.
- Avoid speculative flexibility, premature abstractions, and unrelated cleanup.
- Keep inline comments sparse. Explain only non-obvious local constraints, invariants, or reasons. Prefer clear names and structure. Keep detailed incident history in a linked artifact; preserve required directives and public API documentation.

## Workflow

### 1. Select the execution source

1. Read the selected specification and identify the outcome, constraints, non-goals, acceptance criteria, and unresolved decisions.
2. Read the relevant repository instructions and inspect only the code needed for the affected path.
3. If the selected plan and queue cover the work, select the next unchecked task and use its scope and verification.
4. Otherwise, build directly from the spec only when the change is one focused slice with clear acceptance criteria, obvious ordering, and no material migration, rollout, or cross-subsystem dependency.
5. Invoke `plan-from-spec` before coding when the work needs multiple slices or sessions, durable progress tracking, dependency ordering, risky proof, or coordinated subsystem changes.

If no approved specification exists at the selected path, hand off to `define-spec`. Do not draft a hidden plan inside the implementation run.

### 2. Resolve material questions

- Invoke `grill-spec` when unresolved decisions materially affect behaviour, data, architecture, scope, security, cost, or user experience.
- Investigate repository facts before asking the user.
- Do not block on cosmetic or easily reversible decisions.
- Record confirmed decisions in the selected specification and update the plan when its order or scope changes.

### 3. Spike risky unknowns

- Invoke `spike` for questions that need evidence before production implementation.
- Answer one question with disposable, isolated code.
- Record the decision in the selected specification and plan, then remove the exploratory code unless rebuilt as tested production code.

### 4. Build one slice with meaningful tests

Select one task and state its acceptance criteria. Inspect existing coverage before writing tests. For each proposed test, identify:

- the observable behaviour, invariant, or independent contract it protects;
- a credible regression that would make it fail;
- the gap in existing coverage, preferably filled by extending an existing case;
- any production export, flag, wrapper, or injection hook needed only by the test; exercise the real boundary instead.

Add the test only when these answers justify it. Additional test layers need distinct risks. Avoid assertions that copy implementation details or source text, expected values calculated by the code under test, and mocks that supply the behaviour being asserted. Source checks are justified when they independently protect a real contract.

For a behaviour change or bug fix:

1. Reuse an existing failing test, or extend or add the smallest justified case where coverage is missing.
2. Run it before the change and confirm it fails for the intended reason.
3. Implement the minimum change and rerun the focused test.
4. Run the relevant broader suite and required checks.
5. Refactor while tests remain green and update the task status.

For behaviour-preserving changes, run existing coverage without adding duplicates. For documentation or low-impact edits without a meaningful behavioural risk, use appropriate validation instead of inventing tests. Always run repository-required checks and state the verification performed.

Do not implement multiple planned slices at once unless explicitly requested. Keep unrelated worktree changes untouched.

### 5. Simplify and reverify

Invoke `simplicity` after the selected slice passes. Apply only behaviour-preserving improvements within the slice, then rerun every check affected by those edits.

### 6. Run preflight

Invoke `preflight-review` against the complete slice after simplification. Address in-scope findings, rerun affected verification, and repeat the review once when the diff changed materially. Do not expand the feature or clean up unrelated code.

### 7. Close out clearly

Keep using the loaded writing guidance. Default to a short paragraph or up to three bullets covering:

- what changed and which spec or plan slice it satisfies;
- verification results and any material unrun checks;
- material limitations, risks, and open decisions, plus the next task when work remains.

Keep detailed commands, evidence, and useful history in one task artifact. Link it from the concise PR description or summary. Preserve material limitations and open work; do not narrate the execution history.

Use Conventional Commit types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`). Use `spike/<topic>` only for exploratory branches.

## Stop conditions

Stop and surface the issue when:

- The requested change contradicts a confirmed requirement.
- A destructive or security-sensitive action lacks explicit approval.
- A failing test cannot be attributed to the intended behaviour.
- The next step depends on a product decision that cannot be derived from the repository.
- The plan and specification disagree about scope or acceptance.

Do not stop for minor ambiguity. Choose the simplest reversible default and state it.
