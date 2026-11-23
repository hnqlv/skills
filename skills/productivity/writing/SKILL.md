---
name: writing
description: "Writes and revises clear, concise prose: messages, updates, handoffs, task and PR descriptions, reports, specs, and code comments, with ASD-STE100 for technical English. Use when the user asks to write, rewrite, shorten, or review text, and when another skill asks for it."
---

# Writing

Help the reader understand the result or act on it with the least reading. Apply this from the first update to the final artifact, including messages to agents. Follow the requested language, audience, and format.

## Simple, short, specific

From [Peter Yang's framework](https://creatoreconomy.so/p/the-secret-to-effective-written-communication):

- **Simple:** Know the reader and the decision they face. State the main point first, then at most three supporting points. Explain unfamiliar abbreviations. Prefer familiar words and active verbs.
- **Short:** Cut repetition and detail that does not help the reader. Keep decision documents to one or two pages, with detail in an appendix or a linked artifact. Use headings and lists when they help scanning.
- **Specific:** Replace vague claims with facts, quantities, units, dates, and named actions. Use only numbers that you can defend.
- **Revise:** Read the draft once for flow. For consequential documents, get feedback from an expert and an unfamiliar reader when useful and authorized.

Never omit required content, turn a hypothesis into a fact, or invent precision. Remove ambiguity, but keep real uncertainty.

## Technical English

Use ASD-STE100 Simplified Technical English for technical English, not a generic plain-English style. Read [the STE reference](references/asd-ste100.md) when you draft or edit it. Keep code, commands, paths, identifiers, quotations, and required syntax exact, and apply STE to the prose around them. Do not apply English rules to another language.

## Engineering communication

- Default updates, summaries, handoffs, and task and PR descriptions to one short paragraph or up to three bullets. Expand only when the deliverable needs it.
- Lead with the result or next action. Include the decisive evidence, what verification covered, uncertainty, and blockers. Put details in one linked artifact. Never invent a link.
- In investigations, separate observations from hypotheses. Omit routine tool narration.
- Give agents the objective, scope, exact paths and refs, constraints, and the evidence to return. Ask them to use `writing`.
- Keep code comments sparse: non-obvious constraints, invariants, or reasons, plus required directives and public API documentation.

## Examples

Each rewrite keeps every fact and the level of certainty of its source. It adds nothing.

**Status update**

```text
Before: I've spent most of the day on the flaky checkout test. I added logging, and it's
definitely a race: the retry timer fires before the payment mock resolves. I pushed a fix
and ran the test 200 times locally, and it passed every time. Haven't seen CI yet though.

After: Fixed the flaky checkout test. Logs showed that the retry timer fired before the
payment mock resolved. The test passed 200 of 200 local runs. CI has not run yet.
```

**Agent handoff**

```text
Before: Can you take a look at the auth stuff and fix whatever is going on with the tokens?
It's been failing since the deploy, and there's a log in logs/deploy.txt. Don't touch
anything outside src/auth.

After: Fix the 401 errors from `refreshToken()` that started after the deploy.
- Scope: `src/auth/` only.
- Evidence: `logs/deploy.txt`.
- Return: the cause, the fix, and how you verified it, in up to three bullets.
```

**PR description**

```text
Before: So this PR is basically about adding rate limiting to the login endpoint, since
right now people can keep trying passwords forever. After 5 failed tries from the same IP
in a minute, we now send back a 429 with a Retry-After header. I added tests for the limit
and the reset in login_rate_limit.test.ts. I also reordered the middleware in app.ts while
I was in there, but that shouldn't change anything.

After: Limits `POST /login` to 5 failed attempts per IP address per minute. The next
attempt gets `429` with a `Retry-After` header.
- `login_rate_limit.test.ts` tests the limit and the reset.
- Also reorders the middleware in `app.ts`. I expect no change in behaviour from this.
```

## Verify and return

Compare the result with the source. Keep facts, requirements, exceptions, causes, evidence, and uncertainty. A summary may drop details that do not affect the decision. An edited document must keep its requirements and record. Focused tests do not prove that the full suite passed.

Return only the finished prose, unless the user asked for comments. For a review, report the consequential problems and the revision. If a requested length would hide essential information, say so briefly. Change skill instructions only when the user asks.
