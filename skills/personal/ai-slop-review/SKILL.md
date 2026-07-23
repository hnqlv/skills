---
name: ai-slop-review
description: Review and edit AI-generated or AI-assisted professional prose, including reports, memos, specifications, RFCs, proposals, documentation, and research summaries. Use when a useful draft contains generic framing, inflated claims, repetition, canned transitions, excessive structure, vague recommendations, mechanical rhythm, or recognizable AI phrasing. Preserve facts, intent, technical meaning, uncertainty, citations, and meaningful formatting.
---

# AI Slop Review

Turn a useful draft into direct, credible prose. Improve the document, not merely its tone.

## Preserve

- Keep the purpose, audience, argument, facts, decisions, requirements, scope, and level of formality.
- Keep numbers, dates, names, terminology, negations, assumptions, and obligation levels such as `must`, `should`, and `may`.
- Keep uncertainty intact; never promote a possibility, interpretation, or recommendation into a fact.
- Keep meaningful structure and formatting, including frontmatter, links, citations, tables, code, and diagrams.
- Do not invent evidence, examples, metrics, risks, quotations, outcomes, or implementation details.

## Edit

1. Identify the document's job and its semantic invariants: claims, decisions, open questions, requirements, evidence, constraints, risks, and tradeoffs.
2. Delete before rewriting. Remove repeated setup or conclusions, generic framing, empty importance claims, fake contrasts, decorative caveats, unnecessary frameworks, and headings that do not aid navigation.
3. Make the existing meaning concrete. Name actors and actions, move rationale beside the claim it supports, and state recommendations at the strength justified by the draft.
4. Vary mechanical rhythm only where it improves readability. Treat familiar AI phrases, em dashes, bold labels, rhetorical questions, and one-line paragraphs as warning signs, not automatic violations.
5. Preserve useful repetition in requirements, definitions, policies, runbooks, and safety-critical material. Prefer precise duplication over elegant ambiguity.
6. Keep domain terms stable. Do not replace exact language merely for variety.

For specifications and runbooks, prioritize semantic precision, identifiers, sequence, interfaces, edge cases, and acceptance criteria over stylistic smoothness. For reports, separate evidence, interpretation, and recommendation. For memos and proposals, surface the decision, rationale, tradeoffs, and requested action early.

## Verify

Before returning the edit, confirm:

- no fact, citation, requirement, decision, or technical term changed accidentally;
- no unsupported claim became stronger;
- no necessary exception, context, risk, or tradeoff disappeared;
- every remaining section and paragraph performs a clear job;
- the result reads as specific to this subject and audience.

## Output

By default, return only the revised document in its source format.

If the user asks for a review, return:

1. two to five consequential problems;
2. the revised document;
3. only the claims or ambiguities that require author verification.

Honor requested edit intensity. Keep a light edit local; for an aggressive edit, consolidate and restructure while preserving all invariants.
