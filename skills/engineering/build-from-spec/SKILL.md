---
name: build-from-spec
description: Implement or plan software work from SPEC.md. Use when asked to build, continue, or plan from a specification. Resolve material decisions, split work into small vertical slices, spike risky unknowns, implement each slice test-first, simplify, review, and report verification.
---

# Build From Spec

Use `SPEC.md` as the source of truth. Keep the work narrow, testable, easy to change, and easy to delete.

## Operating principles

- Communicate with short, complete sentences. Remove filler, not meaning.
- Preserve exact technical details and inspect existing conventions first.
- Prefer the smallest local, explicit change that solves the requirement.
- Work in vertical slices and leave the system working after each one.
- Avoid speculative flexibility, premature abstractions, and unrelated cleanup.

## Workflow

### 1. Establish the specification

1. Read `SPEC.md` and identify the outcome, constraints, non-goals, acceptance criteria, and unresolved decisions.
2. Read only the code needed to understand the affected path.
3. If it is missing, draft a minimal specification from the supplied requirements, mark assumptions, and stop for review unless told to continue.
4. Resolve conflicts between code and specification explicitly; do not silently reinterpret either.

### 2. Resolve material questions

- Invoke `grill-spec` when unresolved decisions materially affect behaviour, data, architecture, scope, security, or user experience.
- Investigate repository facts before asking the user.
- Do not block on cosmetic or easily reversible decisions.
- Record confirmed decisions in `SPEC.md` before planning.

### 3. Plan small vertical slices

- Produce ordered tasks with acceptance criteria, verification commands, dependencies, and likely files.
- Prefer user-visible or end-to-end slices over horizontal layers.
- Split tasks that span independent subsystems or cannot be verified in one focused pass.
- Put high-risk unknowns early and mark them as spikes.

### 4. Spike risky unknowns

- Invoke `spike` for questions that need evidence before production implementation.
- Answer one question with disposable, isolated code.
- Record the decision in `SPEC.md` and the plan, then remove the exploratory code unless rebuilt as tested production code.

### 5. Build one slice with TDD

For each behavioural task:

1. Select one task and state its acceptance criteria.
2. Write the smallest meaningful failing test.
3. Run it and confirm it fails for the expected reason.
4. Write the minimum production code needed to pass.
5. Run the focused test.
6. Run the relevant broader test suite and checks.
7. Refactor only while tests remain green.
8. Update the task status.

Do not implement multiple slices at once unless explicitly requested.

### 6. Simplify

After the selected slice passes:

- Remove unnecessary branches, wrappers, abstractions, configuration, and vocabulary.
- Prefer obvious, local code that is easy to delete.
- Keep useful duplication when abstraction would couple unrelated behaviour.
- Preserve behaviour exactly.
- Stop when further changes would be stylistic churn.

### 7. Review the complete diff

Invoke `preflight-review` against the current slice. Address only findings that are necessary to meet `SPEC.md`, preserve behaviour, or prevent a credible regression.

### 8. Finish

Summarize:

- What changed.
- What was verified, including exact commands.
- Remaining risks or decisions.
- The next smallest task, when work remains.

Use Conventional Commit types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`). Use `spike/<topic>` only for exploratory branches.

## Stop conditions

Stop and surface the issue when:

- The requested change contradicts a confirmed requirement.
- A destructive or security-sensitive action lacks explicit approval.
- A failing test cannot be attributed to the intended behaviour.
- The next step depends on a product decision that cannot be derived from the repository.

Do not stop for minor ambiguity. Choose the simplest reversible default and state it.
