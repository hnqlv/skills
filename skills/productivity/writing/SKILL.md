---
name: writing
description: Write or revise clear, concise prose for messages, documents, handoffs, task/PR descriptions, reports, specs, and code comments. Use simple, short, specific communication, with ASD-STE100 Simplified Technical English for technical English.
---

# Writing

Help the reader understand the result or take the next action with minimal reading. Apply this guidance from the first update through the final artifact, including agent exchanges. Follow the requested language, audience, and format.

## Simple, short, specific

Use [Peter Yang's communication framework](https://creatoreconomy.so/p/the-secret-to-effective-written-communication):

- **Simple:** Identify the reader and the decision they need to make. State the main point first, then at most three supporting arguments. Explain unfamiliar abbreviations. Prefer familiar words and active verbs.
- **Short:** Remove repetition and details that do not help the reader. Aim for one or two pages for a decision document, with supporting detail in an appendix or linked artifact. Use headings and lists when they help scanning.
- **Specific:** Replace vague claims with supported facts, quantities, units, dates, and named actions. Use only numbers you can explain and defend. Answer likely reader questions in the text or an FAQ.
- **Revise:** Read the draft for flow and clarity. For consequential documents, use available feedback from a subject expert and an unfamiliar reader when useful and authorized.

These are defaults, not reasons to omit required content. Remove ambiguous wording, but preserve real uncertainty. Never turn a hypothesis into a fact or invent precision.

## Technical English

Use **ASD-STE100 Simplified Technical English**, including its writing rules and controlled dictionary, for technical English. Read [the STE reference](references/asd-ste100.md) when drafting or editing technical English. Use the official standard to resolve vocabulary and rule questions. Do not substitute a generic plain-English style for STE.

Keep exact code, commands, paths, identifiers, quotations, and required syntax intact. Apply STE to the surrounding prose. If required wording prevents full compliance, preserve it and identify the exception when a compliance assessment is requested. Do not impose English grammar or vocabulary on another language.

## Engineering communication

- Default updates, summaries, handoffs, and task/PR descriptions to one short paragraph or up to three bullets. Expand when the deliverable needs more detail.
- Lead with the result or next action. Include decisive evidence, verification scope, uncertainty, and blockers. Put detailed evidence in one relevant artifact and link it. Never invent a link.
- In investigations, distinguish observations from hypotheses. State the question or cause, evidence, and decision or next check. Omit routine tool narration.
- Give agents the objective, scope, exact paths and refs, constraints, and required evidence. Ask them to use `writing` and return concise findings with blockers. Preserve enough context to resume safely.
- Keep code comments sparse. Explain a non-obvious local constraint, invariant, or reason. Preserve required directives and public API documentation.

## Verify and return

Make one editorial pass, then compare the result with the source. Preserve facts, requirements, exceptions, causal relationships, evidence, and uncertainty. A summary can omit details that do not affect the decision. An edited source document must retain its requirements and useful record.

State what verification actually covered. Focused tests do not prove that the full suite passed. For substantial rewrites, track the facts and decisions that must survive. Ordinary prose edits need no separate ledger or agent.

Return the finished prose. For a review, report consequential problems and the requested revision. If a requested length would hide essential information, state the conflict briefly. Change skill instructions only when the user asks.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.
