---
name: build-from-spec
description: Implement software from an approved specification artifact or its approved plan and task queue. Use when asked to build, implement, or continue specified work. Use caller-supplied or repository-defined artifact paths when present; otherwise default to SPEC.md, tasks/plan.md, and tasks/todo.md. Build a small bounded change directly from the specification; for multi-slice work, execute the next planned vertical slice. Test the change, invoke simplicity, run preflight-review, and pass the factual closeout through write-clear-technical-english without losing evidence or history.
---

# Build From Spec

Use the specification path supplied by the caller or repository instructions. Otherwise reuse an existing repository convention, and default to `SPEC.md` only when none exists. Use supplied or repository-defined plan and queue paths the same way, with `tasks/plan.md` and `tasks/todo.md` as fallbacks.

The selected specification is the source of truth. A plan sequences the work but cannot override it.

When a Herdr-managed handoff supplies a worktree, branch, or artifact paths, verify that context before the first write and preserve it throughout the slice. Do not switch branches, relocate task artifacts, or create additional Herdr topology from this skill. If the current checkout does not match the handoff, stop and report both contexts.

## Operating principles

- Communicate with short, complete sentences that preserve meaning.
- Preserve exact technical details and inspect existing conventions first.
- Prefer the smallest local, explicit change that solves the requirement.
- Work in vertical slices and leave the system working after each one.
- Avoid speculative flexibility, premature abstractions, and unrelated cleanup.

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

### 4. Build one slice with TDD

For each behavioural task:

1. Select one task and state its acceptance criteria.
2. Write the smallest meaningful failing test.
3. Run it and confirm it fails for the expected reason.
4. Write the minimum production code needed to pass.
5. Run the focused test.
6. Run the relevant broader test suite and checks.
7. Refactor only while tests remain green.
8. Update the task status.

Do not implement multiple planned slices at once unless explicitly requested. Keep unrelated worktree changes untouched.

### 5. Simplify and reverify

Invoke `simplicity` after the selected slice passes. Apply only behaviour-preserving improvements within the slice, then rerun every check affected by those edits.

### 6. Run preflight

Invoke `preflight-review` against the complete slice after simplification. Address in-scope findings, rerun affected verification, and repeat the review once when the diff changed materially. Do not expand the feature or clean up unrelated code.

### 7. Close out clearly

Draft a factual summary containing:

- what changed and which spec or plan slice it satisfies;
- verification commands and results;
- limitations, unrun checks, remaining risks, and open decisions;
- plan status and the next smallest task when work remains.

Invoke `write-clear-technical-english` as a light edit on that summary. Reject any edit that removes chronology, implementation history needed to understand the result, exact evidence, limitations, or open work. Concision shortens wording while preserving the full factual record.

Use Conventional Commit types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`). Use `spike/<topic>` only for exploratory branches.

## Stop conditions

Stop and surface the issue when:

- The requested change contradicts a confirmed requirement.
- A destructive or security-sensitive action lacks explicit approval.
- A failing test cannot be attributed to the intended behaviour.
- The next step depends on a product decision that cannot be derived from the repository.
- The plan and specification disagree about scope or acceptance.

Do not stop for minor ambiguity. Choose the simplest reversible default and state it.
