---
name: spike
description: Run a disposable experiment to answer one risky technical question before implementation. Use when architecture, library behaviour, integration feasibility, performance, migration safety, or an unfamiliar API cannot be decided from documentation and existing code. Define evidence first, test at most three approaches, record the decision, and remove exploratory code.
---

# Spike

Answer one technical question with the smallest experiment that produces credible evidence.

## Principles

- Answer one question with evidence and disposable code.
- Avoid production polish, reusable frameworks, and speculative abstractions.
- Use the real dependency or environment when a mock would hide the risk.
- Prefer a tiny executable experiment over a large prototype.
- Stop when enough evidence exists to make the decision.

## Workflow

### 1. Frame the question

Write a brief spike note with `Question`, `Why it matters`, `Success evidence`, and `Constraints`.

Reject broad questions such as “Which architecture is best?” Narrow them to a decision that evidence can answer.

### 2. Inspect before experimenting

- Read `SPEC.md` and the affected code path.
- Check existing conventions and dependencies.
- Read primary documentation when available.
- State assumptions that could invalidate the result.

Do not create an experiment for a fact that can be established reliably from existing code or documentation.

### 3. Design the smallest experiment

- Test the most likely viable approach first and at most three approaches total.
- Isolate experimental files under a temporary or clearly named spike path.
- Use representative data and failure cases.
- Add measurement only when the decision depends on measurement.
- Avoid general-purpose APIs, abstractions, UI polish, and unrelated cleanup.

### 4. Run and capture evidence

Record exact commands and decisive results. Keep only useful log excerpts and separate observations from interpretations.

```markdown
## Experiments

### Approach A
- Command:
- Observation:
- Result: viable | not viable | inconclusive
```

Do not declare success from code that was not run.

### 5. Decide

Record `Decision`, `Evidence`, `Rejected approaches`, `Risks and unknowns`, `Required changes`, and `Cleanup`.

An inconclusive result is valid. State what evidence is missing instead of guessing.

### 6. Integrate knowledge, not prototype code

- Update `SPEC.md` and the plan with the confirmed constraint or decision.
- Delete the spike implementation.
- Rebuild retained code through the normal tested workflow.
- Keep only a concise spike report when the decision needs an audit trail.

Use `spike/<topic>` for a temporary branch. Do not use `spike` as the final commit type for production code.
