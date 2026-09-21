# Henrique's Agent Skills

A small collection of opinionated engineering skills for Claude Code, Codex, and other Agent Skills-compatible clients.

Core approach:

> Define the contract at the selected specification path. Resolve important uncertainty one decision at a time. Use Herdr and an isolated Git worktree when the workstream needs it. Plan multi-slice work, prove behaviour with tests, then finish with `simplicity`, `preflight-review`, and a concise factual summary in clear technical English.

## Skills

### `define-spec`

Defines what to build at the selected specification path: outcome, scope, non-goals, constraints, and testable acceptance criteria.

### `grill-spec`

Resolves material product decisions one at a time. It investigates repository facts first, recommends a default, and preserves confirmed decisions in the selected specification.

### `plan-from-spec`

Creates a plan and task queue at caller-supplied, repository-defined, or conventional paths for multi-slice, dependency-heavy, risky, or multi-session work. Small bounded changes skip this step.

### `build-from-spec`

Builds the next approved slice from the selected plan, or a small bounded change directly from the selected specification. It finishes with tests, `simplicity`, `preflight-review`, and a `write-clear-technical-english` pass over the closeout summary.

### `spike`

Runs the smallest disposable experiment needed to answer one risky technical question. It captures evidence, updates the specification and plan, then removes exploratory code.

### `debug-with-proof`

Reproduces a bug with a failing test before changing production code. It reduces the failure, tests one hypothesis at a time, applies a minimal fix, and retains regression coverage.

### `simplicity`

Simplifies code without changing behaviour, prioritizing clarity and maintainability over fewer lines.

### `react-native-animation`

Chooses and verifies performant React Native animation approaches based on interaction type and measured cost.

### `preflight-review`

Reviews a completed slice against its spec, plan task, tests, and diff after simplification.

### `write-clear-technical-english`

Writes or reviews professional and technical prose with stable terminology, explicit actions, short sentences, and preserved evidence. It combines an ASD-STE100-inspired house style with Zinsser's principles and a pinned local adaptation of Unslop.

## Conventions

- Default replies and closeouts to one short paragraph or up to three bullets. Expand when the deliverable requires it.
- Use `write-clear-technical-english` and its local Unslop reference while drafting, with one cleanup pass per artifact.
- Preserve facts, requirements, evidence, and uncertainty. Keep detailed history in the relevant document or PR and link it from summaries.
- Keep inline comments sparse, short, and local. Explain non-obvious constraints; preserve required directives and public API documentation.
- Prefer code that is easy to understand, change, and delete.
- Prefer small vertical slices over broad horizontal layers.
- Use caller- or repository-supplied specification and plan paths. Default to `SPEC.md` and `tasks/` only when no convention exists.
- When the user explicitly requests Herdr, invoke the installed `herdr` skill for concurrent branches, persistent remote agents, and worktree lifecycle. Keep individual engineering skills inside the supplied worktree and artifact context.
- Let the calling workflow own Herdr, worktree setup, delegation, and Hunk review. Standalone skills do not start these tools.
- Reuse existing user authorization; do not add approval gates between skills for already authorized work.
- Do not generalize for hypothetical future requirements.
- Use `feat`, `fix`, `refactor`, `test`, `docs`, and `chore` commit types.
- Use `spike/<topic>` for temporary exploratory branches.

## Repository layout

```text
skills/
  engineering/
    define-spec/
    plan-from-spec/
    build-from-spec/
    grill-spec/
    spike/
    debug-with-proof/
    simplicity/
    react-native-animation/
    preflight-review/
  productivity/
    write-clear-technical-english/
```

Each skill directory under `skills/engineering/` or `skills/productivity/` is editable source. Private skills live outside this repository.

## Usage examples

```text
Use herdr to create a no-focus worktree from main and hand this task to Codex.
```

```text
Use define-spec to turn this feature idea into a concise specification at <spec-path>.
```

```text
Use grill-spec to resolve the important open questions in <spec-path>.
```

```text
Use plan-from-spec to break <spec-path> into verifiable vertical slices at <plan-path> and <queue-path>.
```

```text
Use build-from-spec to implement the next slice using the supplied specification, plan, and queue paths.
```

```text
Run a spike to determine whether this API supports idempotent retries.
```

```text
Use debug-with-proof. Reproduce this bug with a failing test before fixing it.
```

```text
Use simplicity to make this implementation clearer without changing its behaviour.
```

```text
Use write-clear-technical-english to make this implementation summary precise and easy to scan.
```

## References

These skills are opinionated adaptations and inspired by:

- [Caveman](https://github.com/JuliusBrussee/caveman/tree/main/skills/caveman) — concise technical communication
- [Spec-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/spec-driven-development) — explicit product contracts and acceptance criteria
- [Planning and Task Breakdown](https://github.com/addyosmani/agent-skills/tree/main/skills/planning-and-task-breakdown) — small verifiable tasks and vertical slices
- [Incremental Implementation](https://github.com/addyosmani/agent-skills/tree/main/skills/incremental-implementation) — verified vertical-slice execution
- [Test-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development) — failing tests before implementation and regression proof
- [Code Simplification](https://github.com/addyosmani/agent-skills/tree/main/skills/code-simplification) — behaviour-preserving simplification
- [Code Review and Quality](https://github.com/addyosmani/agent-skills/tree/main/skills/code-review-and-quality) — actionable diff review
- [Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls) — inspiration for the good-agent-task principles
- [Cursor Bugbot Reviews in 90 Seconds](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release) — motivation for an earlier local review gate
- [Grilling](https://github.com/mattpocock/skills/tree/main/skills/productivity/grilling) — one-question-at-a-time decision-tree interviewing
- [Herdr v0.8.0 skill](https://github.com/herdrdev/herdr/blob/v0.8.0/skills/herdr/SKILL.md) — terminal, workspace, worktree, and agent-control contract
- [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) — original benchmark and selection guidance by Andrei Calazans
- [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) — controlled-language principles adapted for the clear technical English house style
- [Unslop](https://github.com/cursor/plugins/blob/e8d856f0273b42ebafe0ec3546bd645709e7c1b0/pstack/skills/unslop/SKILL.md) — plain language and AI-pattern cleanup; adapted locally with its MIT license
- William Zinsser, *On Writing Well* — simplicity, brevity, clarity, and humanity
- Amazon, *Write Like an Amazonian* (2018) — short sentences, objective evidence, direct answers, and the "so what?" test

## License

MIT
