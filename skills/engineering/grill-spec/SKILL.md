---
name: grill-spec
description: Interrogate SPEC.md before planning or coding. Use when a specification has open questions, vague behaviour, hidden assumptions, competing options, missing edge cases, or unclear scope. Inspect repository facts, ask dependency-safe decisions in numbered rounds with recommendations, and write confirmed answers back into the specification.
---

# Grill Spec

Turn vague requirements into explicit decisions through dependency-safe rounds.

## Rules

- Read `SPEC.md` and relevant repository files first.
- Separate discoverable facts from decisions only the user can make.
- Ask every currently unblocked decision in one numbered round.
- Keep questions concise and include a recommended answer with a brief reason.
- Prefer bounded options when they represent the real decision space.
- Do not ask about implementation-irrelevant preferences or discoverable facts.
- Update `SPEC.md` after each round when editing is available.

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

### 2. Compute the frontier

The frontier contains every unresolved decision whose prerequisites are settled. Questions that depend on another open question wait for a later round.

Investigate facts from the repository, filesystem, or tools instead of asking the user. When parallel research is available, let it proceed without blocking unrelated frontier questions; only dependent questions wait.

### 3. Ask one round

Ask the whole frontier as a numbered list. Use this structure for each item:

```text
[Number]. [One concrete question]

Recommendation: [specific option]. [One-sentence reason.]
```

Offer two to four bounded options when useful. Avoid broad prompts such as “What do you want?” Then wait for the user's answers.

### 4. Record and recompute

After each round:

1. Record confirmed decisions in the relevant `SPEC.md` sections.
2. Check which branches were resolved, changed, or newly opened.
3. Recompute the frontier and ask the next round.

Do not repeat confirmed questions in different words.

### 5. Stop at sufficient clarity

Stop grilling when the frontier is empty because all remaining uncertainty is either:

- discoverable from the repository,
- covered by an existing convention,
- safely reversible,
- outside the current scope, or
- minor enough to choose the simplest default.

Then summarize:

- Decisions added or changed.
- Assumptions still present.
- Whether the specification is ready for planning.

Do not plan or code until the user confirms shared understanding.

## Autonomous mode

When the user explicitly asks to proceed without interaction, replace the interview loop with these rules:

- Do not fabricate certainty.
- Add a short `Assumptions` section to `SPEC.md`.
- Choose the simplest reversible defaults.
- Flag only decisions that create material product, security, data, or cost risk.
