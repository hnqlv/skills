---
name: write-clear-technical-english
description: Write, revise, or review English professional and technical prose so it is precise, concise, credible, and easy to scan, including for readers with ADHD. Use for summaries, reviews, plans, specifications, runbooks, reports, memos, RFCs, proposals, research, status updates, issue or PR text, explanations, or AI-assisted drafts with generic framing, inflated claims, repetition, canned transitions, vague recommendations, mechanical rhythm, or recognizable AI phrasing. Apply an ASD-STE100-inspired house style and Zinsser's principles without claiming formal compliance. Preserve facts, history, rationale, requirements, uncertainty, evidence, and technical details.
---

# Write Clear Technical English

Help a specific reader understand the result or act without reconstructing missing context.

Use an [ASD-STE100](https://www.asd-ste100.org/)-inspired house style. For a compliance request, consult the current official standard and report the checks performed. Follow the requested language; apply this structure to non-English prose without calling it Simplified Technical English.

Default to a light final pass. Use the full review workflow when the user asks for a review or substantial rewrite, or when the draft needs semantic restructuring.

## Preserve the record

Before editing, record:

- purpose, audience, scope, voice, and requested action;
- facts, numbers, dates, terminology, citations, evidence, commands, paths, identifiers, code, and quotations;
- chronology, decisions, rationale, tradeoffs, causal links, and useful history;
- requirements, negations, exceptions, assumptions, risks, uncertainty, open questions, and obligation levels;
- meaningful structure and formatting.

These are semantic invariants. Shorten their wording without erasing a distinct event, decision, reason, requirement, result, limitation, or unresolved point. Preserve history that explains the current state, accountability, learning, or a changed decision. Keep useful repetition in requirements, definitions, policies, runbooks, and safety-critical material. Never invent evidence or strengthen a claim.

## Apply the writing standard

Follow Zinsser's four principles of quality writing:

1. Simplicity: use direct words and constructions.
2. Brevity: remove excess wording while preserving meaning.
3. Clarity: make actors, actions, conditions, and relationships explicit.
4. Humanity: sound like a person helping a specific reader.

Then:

1. Lead with the outcome, decision, finding, question, or required action. Answer a direct question first with `yes`, `no`, a number, or `I don't know`.
2. Give each sentence one topic and each paragraph one job. Keep connected context together.
3. Name the actor when it matters. Prefer direct verbs and words over noun phrases, vague passives, and inflated constructions.
4. Put a condition before its action. Give one instruction per procedural step and keep limits or expected results beside it.
5. Use one stable term per concept. Do not rotate synonyms. Repeat a noun when a pronoun could be ambiguous.
6. Keep sentences below 30 words. Target 20 words for procedures and 25 for descriptions; exceed those targets only when splitting would obscure meaning.
7. Replace adjectives, adverbs, buzzwords, weasel words, and vague qualifiers with available data or observable evidence. Never invent a measurement.
8. Apply the "so what?" test. Keep claims that help the reader decide, act, or understand.
9. Use lists for real sequences, mappings, or choices. Keep prose when bullets would fragment the reasoning.
10. Separate evidence, interpretation, recommendation, and open questions. Delete filler, fake contrasts, decorative caveats, empty importance claims, and useless headings.

In specifications and runbooks, prioritize precision, sequence, interfaces, edge cases, and acceptance criteria. In reports, separate evidence, interpretation, and recommendation. In memos and proposals, surface the decision, rationale, tradeoffs, and requested action early.

## Prevent recurring slop

Read [references/forbidden-patterns.md](references/forbidden-patterns.md) and remove every listed pattern without changing meaning. Add each newly observed recurring pattern immediately with a short cue and replacement rule.

## Control writer context

Keep a writer agent below 50% of its available context window. If the source, instructions, and draft would cross that limit, delegate coherent sections to subagents. Give each only its section, audience, purpose, invariants, and forbidden list. Reconcile their work against one compact preservation ledger.

## Verify and return

Compare the revision with the source. Confirm that no invariant changed or disappeared, no claim became stronger, terms remain stable, references remain clear, instructions remain executable, each paragraph has a job, and no forbidden pattern remains.

Preserve the calling skill's format. By default, return only the finished prose in its source format. If the user asks for a review, return two to five consequential problems, the revision, and only the claims or ambiguities that require author verification. If a hard limit cannot fit every invariant, identify the required omission instead of deleting it silently.

## Orchestration and review

For substantive work, load the `herdr` skill, follow its workflow, and use Herdr panes for independent parallel work. Use separate worktrees for concurrent mutations, branch isolation, or preserving an active checkout; skip parallelism when tasks are trivial or dependency-bound.

Before finishing substantive repository work with a diff, run `hunk skill path`, load the returned skill, and review the diff with Hunk. If no session exists, start `hunk diff --watch` in a dedicated Herdr pane, or another persistent interactive terminal, so the user does not need to launch it. Then use `hunk session *` for review control. Skip Hunk when no repository diff exists.
