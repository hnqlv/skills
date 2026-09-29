---
name: spike
description: Run a disposable experiment to answer one risky technical question that existing code and documentation cannot settle. Record the evidence and decision, then remove exploratory code.
---

# Spike

Load `write-clear-technical-english` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Answer one technical question with the smallest experiment that produces credible evidence.

Use specification, plan, and spike-note paths supplied by the caller or repository instructions. Otherwise reuse existing repository conventions. Verify and preserve any supplied worktree, branch, and artifact paths. Do not switch branches or relocate artifacts. If the checkout differs from the handoff, stop and report the mismatch before proceeding.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Principles

- Answer one question with evidence and disposable code.
- Avoid production polish, reusable frameworks, and speculative abstractions.
- Use the real dependency or environment when a mock would hide the risk.
- Prefer a tiny executable experiment over a large prototype.
- Stop when enough evidence exists to make the decision.

## Workflow

### 1. Frame the question

Keep one compact spike note. State the question, why it matters, success evidence, and constraints; update that note as evidence arrives.

Reject broad questions such as “Which architecture is best?” Narrow them to a decision that evidence can answer.

### 2. Inspect before experimenting

- Read the selected specification and affected code path.
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

Lead with the decision and decisive evidence. Briefly retain rejected approaches, risks, required changes, and cleanup status when applicable. Do not repeat experiment logs or force a section for each field.

An inconclusive result is valid. State what evidence is missing instead of guessing.

### 6. Integrate knowledge, not prototype code

- Update the selected specification and plan with the confirmed constraint or decision.
- Delete the spike implementation.
- Rebuild retained code through the normal tested workflow.
- Keep only a concise spike report when the decision needs an audit trail.

Preserve exact commands, observations, measurements, rejected approaches, uncertainty, and cleanup status.

Use `spike/<topic>` for a temporary branch. Do not use `spike` as the final commit type for production code.
