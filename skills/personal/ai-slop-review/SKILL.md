---
name: ai-slop-review
description: Review and edit AI-generated or AI-assisted professional prose, including reports, memos, specifications, RFCs, proposals, documentation, implementation summaries, and research. Use when a useful draft contains generic framing, inflated claims, repetition, canned transitions, excessive structure, vague recommendations, mechanical rhythm, or recognizable AI phrasing, or when copy should be concise and easy to scan for a reader with ADHD. Preserve facts, chronology, history, rationale, requirements, uncertainty, evidence, citations, and meaningful formatting.
---

# AI Slop Review

Turn a useful draft into direct, credible prose. Improve the document, not merely its tone.

## Build a preservation ledger

Before editing, identify:

- purpose, audience, argument, scope, voice, formality, and requested action;
- facts, numbers, dates, names, terminology, citations, and evidence;
- chronology, earlier states, decisions, rationale, tradeoffs, and causal links;
- requirements, obligation levels, negations, exceptions, assumptions, risks, and open questions;
- meaningful structure and formatting, including frontmatter, links, tables, code, and diagrams.

These are semantic invariants. Concision may compress their wording, but must not erase a distinct event, decision, reason, requirement, result, limitation, or unresolved point. Preserve history when it explains the current state, accountability, learning, or why a decision changed. Do not collapse `first X, then Y, now Z` into only `now Z`.

## Edit

1. Lead with the point, decision, result, or requested action.
2. Delete repeated wording, generic framing, empty importance claims, fake contrasts, decorative caveats, unnecessary frameworks, and headings that do not aid navigation. Never treat “historical” as a reason to delete content.
3. Make the existing meaning concrete. Name actors and actions, move rationale beside the claim it supports, and keep evidence separate from interpretation and recommendation.
4. Make the result easy to scan: short descriptive sections, one idea per paragraph or bullet, direct sentences, and enough connective context that the reader does not have to reconstruct the logic.
5. Treat familiar AI phrases, em dashes, bold labels, rhetorical questions, and one-line paragraphs as warning signs, not automatic violations.
6. Preserve useful repetition in requirements, definitions, policies, runbooks, and safety-critical material. Prefer precise duplication over elegant ambiguity.
7. Keep uncertainty and domain terms stable. Never strengthen a possibility, interpretation, or recommendation into a fact merely to sound direct.

Do not invent evidence, examples, metrics, risks, quotations, outcomes, or implementation details.

For specifications and runbooks, prioritize semantic precision, identifiers, sequence, interfaces, edge cases, and acceptance criteria over stylistic smoothness. For reports, separate evidence, interpretation, and recommendation. For memos and proposals, surface the decision, rationale, tradeoffs, and requested action early.

## Verify

Before returning the edit, confirm:

- no fact, citation, requirement, decision, or technical term changed accidentally;
- no unsupported claim became stronger;
- every ledger item remains present, including relevant history, rationale, limitations, and open work;
- no necessary exception, context, risk, causal link, or tradeoff disappeared;
- every remaining section and paragraph performs a clear job;
- the result reads as specific to this subject and audience and remains easy to scan.

Compare the revision with the source, not from memory. Restore any missing invariant before returning it.

## Output

By default, return only the revised document in its source format.

If the user asks for a review, return:

1. two to five consequential problems;
2. the revised document;
3. only the claims or ambiguities that require author verification.

Honor requested edit intensity. Keep a light edit local. For an aggressive edit or hard length limit, consolidate and restructure while preserving the ledger; if all invariants cannot fit, say what would be omitted instead of silently deleting it.
