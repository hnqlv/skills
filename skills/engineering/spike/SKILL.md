---
name: spike
description: Answers one risky technical question with a small, disposable experiment, records the evidence and decision, then deletes the experiment. Use when the user asks to spike or prototype, or whether an approach, library, or API will work, and code and docs cannot settle it.
argument-hint: "[question]"
effort: high
---

# Spike

Load `writing` before your first update and `repo-work` before repository work.

Answer one technical question with the smallest experiment that gives credible evidence. Stop when the evidence supports a decision. Use the spec, plan, and spike-note paths from the caller or repository, or the repository's convention.

## Workflow

### 1. Frame the question

Keep one short spike note with the question, why it matters, the evidence that would settle it, and the constraints. Update it as evidence arrives. Narrow a broad question, such as "Which architecture is best?", to a decision that evidence can answer.

### 2. Check what is already known

Read the spec, the affected code, existing dependencies, and primary documentation. Do not run an experiment for a fact that code or documentation already settles. State assumptions that could invalidate the result.

### 3. Design the smallest experiment

- Try the most likely approach first, and at most three approaches.
- Keep experimental files under a temporary or clearly named spike path.
- Use representative data and failure cases. Use the real dependency or environment when a mock would hide the risk.
- Measure only when the decision depends on it.
- Avoid production polish, general-purpose APIs, abstractions, and unrelated cleanup.
- Run unfamiliar code without credentials. Keep production secrets, tokens, and cloud profiles out of its environment.

### 4. Run it and record evidence

Record exact commands and decisive results. Keep observations separate from interpretation.

```markdown
### Approach A
- Command:
- Observation:
- Result: viable | not viable | inconclusive
```

Do not claim success for code that did not run.

### 5. Decide

Lead with the decision and the decisive evidence. Briefly note rejected approaches, risks, and cleanup status. An inconclusive result is valid: say what evidence is missing.

### 6. Keep the knowledge, not the code

Record the decision in the spec and plan. Delete the spike code. Rebuild anything worth keeping through the normal tested workflow. Keep a short spike report only when the decision needs an audit trail.

Use `spike/<topic>` for a temporary branch. Never use `spike` as the commit type for production code.
