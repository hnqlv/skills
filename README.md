# Henrique's Agent Skills

A small collection of opinionated engineering skills for Claude Code, Codex, and other Agent Skills-compatible clients.

Core approach:

> Define the contract in `SPEC.md`. Resolve important uncertainty one decision at a time. Plan when the work needs multiple slices; otherwise build directly from the spec. Prove behaviour with tests. Finish with `simplicity`, `preflight-review`, and a concise factual summary.

## Skills

### `define-spec`

Defines what to build in `SPEC.md`: outcome, scope, non-goals, constraints, and testable acceptance criteria.

### `grill-spec`

Resolves material product decisions one at a time. It investigates repository facts first, recommends a default, and preserves confirmed decisions in `SPEC.md`.

### `plan-from-spec`

Creates `tasks/plan.md` and `tasks/todo.md` for multi-slice, dependency-heavy, risky, or multi-session work. Small bounded changes skip this step.

### `build-from-spec`

Builds the next approved slice from the plan, or a small bounded change directly from `SPEC.md`. It finishes with tests, `simplicity`, `preflight-review`, and an `ai-slop-review` pass over the closeout summary.

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

### `ai-slop-review`

Makes AI-assisted professional prose concise and easy to scan without losing facts, chronology, history, rationale, or uncertainty.

## Conventions

- Keep communication concise without dropping important context.
- Preserve useful history and rationale; concise wording is not permission to erase the record.
- Use complete sentences when compression could create ambiguity.
- Prefer code that is easy to understand, change, and delete.
- Prefer small vertical slices over broad horizontal layers.
- Give agents bounded, closed-loop tasks with focused context, acceptance criteria, and runnable verification.
- Prefer reversible, low-blast-radius delegation; keep critical decisions and final acceptance with a human.
- Use agents freely for tedious maintenance, issue reproductions, disposable experiments, and as a sounding board before committing to an idea.
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
  personal/
    ai-slop-review/
```

Each skill directory under `skills/engineering/` or `skills/personal/` is editable source. Private skills live outside this repository.

## Usage examples

```text
Use define-spec to turn this feature idea into a concise SPEC.md.
```

```text
Use grill-spec to resolve the important open questions in SPEC.md.
```

```text
Use plan-from-spec to break this approved spec into verifiable vertical slices.
```

```text
Use build-from-spec to implement the next slice from the plan, or this small change directly from SPEC.md.
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
- [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) — original benchmark and selection guidance by Andrei Calazans

## License

MIT
