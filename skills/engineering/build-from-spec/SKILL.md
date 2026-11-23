---
name: build-from-spec
description: Implements an approved spec or the next planned task as one tested slice, then runs simplicity and preflight-review. Use when the user asks to build, implement, or continue a spec or plan. Use define-spec first when no approved spec exists.
argument-hint: "[spec-or-plan-path]"
effort: medium
---

# Build From Spec

Load `writing` before your first update and `repo-work` before repository work.

The spec is the source of truth. A plan orders the work but cannot override it. Use the spec, plan, and queue paths from the caller or repository. Otherwise use the repository's convention, then `SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`.

## Principles

- Make the smallest local, explicit change that meets the requirement. Inspect existing conventions first.
- Work in vertical slices. Leave the system working after each one.
- Avoid speculative flexibility, premature abstractions, and unrelated cleanup.
- Keep comments sparse. Explain only non-obvious constraints, invariants, or reasons. Keep incident history in a linked artifact. Keep required directives and public API documentation.

## Workflow

### 1. Select the work

1. Read the spec: outcome, constraints, non-goals, acceptance criteria, and open decisions.
2. Read the repository instructions and only the code on the affected path.
3. If the plan covers the work, take the next unchecked task and use its scope and verification.
4. Build directly from the spec only for one focused slice with clear acceptance criteria and no material migration, rollout, or cross-subsystem dependency. Otherwise invoke `plan-from-spec` first.

If no approved spec exists, hand off to `define-spec`. Do not draft a hidden plan.

### 2. Resolve questions

- Return to `define-spec` when an open decision materially affects behaviour, data, architecture, scope, security, cost, or user experience.
- Investigate repository facts before you ask the user. Do not block on cosmetic or easily reversible choices.
- Record confirmed decisions in the spec. Update the plan when its order or scope changes.
- Invoke `spike` when a question needs evidence before production code.

### 3. Build one slice with meaningful tests

State the task's acceptance criteria. Inspect existing coverage before you write a test. Add a test only when you can name:

- the behaviour, invariant, or contract it protects
- a credible regression that would make it fail
- the coverage gap it fills, preferably by extending an existing case

Test through the real boundary, not through exports, flags, or hooks added only for the test. A new test layer needs a distinct risk. Avoid assertions that copy the implementation or source text, expected values computed by the code under test, and mocks that supply the asserted behaviour. A source check is acceptable when it protects a real contract.

Prove crash recovery by killing the real process, and rollback by checking the database after a real rollback, in an isolated environment. An injected exception or a mocked transaction proves neither.

For a behaviour change or bug fix:

1. Reuse or extend a failing test, or add the smallest justified case.
2. Run it and confirm that it fails for the intended reason.
3. Make the minimum change and rerun it.
4. Run the broader suite and required checks.
5. Refactor while the tests pass, and update the task status.

For behaviour-preserving changes, run existing coverage and add no duplicates. For documentation or low-risk edits, validate instead of inventing tests. Always run the repository's required checks.

When you add or change a CI check, run its real command against a known violation and a clean control. The violation must fail, the control must pass, and tool errors must fail. For thresholds, a below-threshold finding must pass. Record this evidence before you claim enforcement.

Build one planned slice at a time unless the user asks for more. Leave unrelated worktree changes alone.

### 4. Simplify, then review

Invoke `simplicity` on the passing slice and rerun the checks its edits affect. Then invoke `preflight-review` on the complete slice. Fix in-scope findings, rerun the affected checks, and review once more if the diff changed materially.

### 5. Close out

Report what changed and which spec or task it satisfies, the verification and any material unrun checks, and open risks or the next task. Keep detailed evidence in one task artifact and link it.

Use Conventional Commit types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`. Use `spike/<topic>` only for exploratory branches.

## Stop and ask when

- The request contradicts a confirmed requirement.
- A destructive or security-sensitive action lacks explicit approval.
- A test fails for a reason you cannot attribute.
- The next step needs a product decision that the repository cannot answer.
- The plan and the spec disagree on scope or acceptance.

For minor ambiguity, choose the simplest reversible default and state it.
