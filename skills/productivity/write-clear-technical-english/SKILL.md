---
name: write-clear-technical-english
description: Write ultra-concise technical prose for agent messages, handoffs, summaries, task/PR descriptions, spike and investigation reports, reviews, specs, and code comments. Use throughout the task, preserving facts, requirements, and uncertainty.
---

# Write clear technical English

Help the reader understand the result or take the next action with minimal reading. Apply this skill from the first update, including communication between agents, task/PR descriptions, spike notes, investigations, and troubleshooting reports.

## Draft

- Lead with the answer, result, decision, or required action.
- Use plain words, concrete verbs, and stable technical terms. Keep sentences complete and easy to read.
- Give each paragraph one purpose. Use lists only for sequences, choices, or parallel facts.
- Default messages, summaries, handoffs, and task/PR descriptions to one short paragraph or up to three bullets. Lead with the result or next action; include decisive evidence and blockers. Expand only when the deliverable requires it.
- Put detailed evidence in one relevant artifact and link it. Keep task/PR descriptions concise too; do not dump logs or repeat the investigation there. Never invent a link or omit a blocker to meet a length target.
- For spikes, investigations, and troubleshooting, state the question or cause, decisive evidence, and decision or next check. Keep observations separate from hypotheses; omit routine tool narration.
- Give agents only the objective, scope, exact paths/refs, constraints, and required evidence. Ask them to use `write-clear-technical-english` and return concise findings with blockers. Preserve context needed to resume safely.
- Follow the requested language and format. These are house rules inspired by ASD-STE100 and Zinsser, not a claim of formal compliance.

## Apply Unslop

Read [Unslop](references/unslop.md) once per task. Apply it while drafting, then make one cleanup pass before delivering each artifact. Reuse the loaded guidance across calling skills; do not stack separate editorial passes on the same unchanged text.

Keep exact symbols, commands, paths, quotations, and technical terms intact. Style rules must not alter code, required syntax, meaning, or factual uncertainty. Change skill instructions only when the user asks.

For code comments, explain only a non-obvious local constraint, invariant, or reason. Keep comments sparse. Keep useful incident history in a linked artifact; summarize only the relevant cause and change in the PR description. Preserve required directives and public API documentation.

## Verify and return

Compare the result with the source. Preserve facts, requirements, exceptions, evidence, causal relationships, and uncertainty. Never strengthen a claim or invent a measurement. State verification scope; focused tests do not prove the full suite passed. A summary may omit detail that does not affect the reader's decision; an edited source document must retain its requirements and useful record.

For substantial rewrites, track the facts and decisions that must survive. Ordinary prose edits need no separate ledger or agent.

Return the finished prose. For a review, report only consequential problems and the requested revision. If the requested limit would hide essential information, state the conflict briefly.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.
