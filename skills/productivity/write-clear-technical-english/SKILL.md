---
name: write-clear-technical-english
description: Write or edit concise technical prose, including replies, reviews, specs, documentation, PR descriptions, and code comments. Use to remove AI phrasing and make the result easy to understand without changing facts or requirements.
---

# Write clear technical English

Help the reader understand the result or take the next action with minimal reading.

## Draft

- Lead with the answer, result, decision, or required action.
- Use plain words, concrete verbs, and stable technical terms. Keep sentences complete and easy to read.
- Give each paragraph one purpose. Use lists only for sequences, choices, or parallel facts.
- For ordinary replies and closeouts, default to one short paragraph or up to three bullets. Include verification and material limitations when relevant. Expand when the requested deliverable needs more detail.
- Keep detailed evidence and useful history in the relevant document or PR. Link it from summaries. Never invent a link or omit a blocker to meet a length target.
- Follow the requested language and format. These are house rules inspired by ASD-STE100 and Zinsser, not a claim of formal compliance.

## Apply Unslop

Read [Unslop](references/unslop.md) once per task. Apply it while drafting, then make one cleanup pass before delivering each artifact. Reuse the loaded guidance across calling skills; do not stack separate editorial passes on the same unchanged text.

Keep exact symbols, commands, paths, quotations, and technical terms intact. Style rules must not alter code, required syntax, meaning, or factual uncertainty. Change skill instructions only when the user asks.

For code comments, explain only a non-obvious local constraint, invariant, or reason. Keep comments sparse. Put incident history and implementation chronology in the PR description. Preserve required directives and public API documentation.

## Verify and return

Compare the result with the source. Preserve facts, requirements, exceptions, evidence, causal relationships, and uncertainty. Never strengthen a claim or invent a measurement. State verification scope; focused tests do not prove the full suite passed. A summary may omit detail that does not affect the reader's decision; an edited source document must retain its requirements and useful record.

For substantial rewrites, track the facts and decisions that must survive. Ordinary edits need no separate ledger, agent, or tool workflow.

Return the finished prose. For a review, report only consequential problems and the requested revision. If the requested limit would hide essential information, state the conflict briefly.
