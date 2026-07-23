# Henrique's Agent Skills

A small collection of opinionated engineering skills for Claude Code, Codex, and other Agent Skills-compatible clients.

Core approach:

> Start from `SPEC.md`. Resolve important uncertainty. Break work into small vertical slices. Prove behaviour with tests. Prefer simple disposable code. Finish with simplification and review.

## Skills

### `build-from-spec`

Main workflow for implementing a feature or product change from `SPEC.md`.

It coordinates:

1. Specification review
2. Important open questions
3. Planning and task breakdown
4. Technical spikes
5. Test-driven implementation
6. Simplification
7. Final code review

### `grill-spec`

Questions an incomplete specification in dependency-safe rounds. It investigates repository facts first, recommends defaults, and writes confirmed decisions back into `SPEC.md`.

### `spike`

Runs the smallest disposable experiment needed to answer one risky technical question. It captures evidence, updates the specification and plan, then removes exploratory code.

### `debug-with-proof`

Reproduces a bug with a failing test before changing production code. It reduces the failure, tests one hypothesis at a time, applies a minimal fix, and retains regression coverage.

### `simplicity`

Simplifies code without changing behaviour, prioritizing clarity and maintainability over fewer lines.

### `react-native-animation`

Chooses and verifies performant React Native animation approaches based on interaction type and measured cost.

### `preflight-review`

Reviews a completed slice against its spec and diff before merge, with a narrow simplification and AI-slop check.

### `ai-slop-review`

Edits AI-assisted professional prose to remove generic, inflated, or repetitive writing without changing meaning.

## Conventions

- Keep communication concise without dropping important context.
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
Use build-from-spec to implement the next slice from SPEC.md.
```

```text
Use grill-spec to resolve the important open questions in SPEC.md.
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
- [Planning and Task Breakdown](https://github.com/addyosmani/agent-skills/tree/main/skills/planning-and-task-breakdown) — small verifiable tasks and vertical slices
- [Test-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development) — failing tests before implementation and regression proof
- [Code Simplification](https://github.com/addyosmani/agent-skills/tree/main/skills/code-simplification) — behaviour-preserving simplification
- [Code Review and Quality](https://github.com/addyosmani/agent-skills/tree/main/skills/code-review-and-quality) — actionable diff review
- [Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls) — inspiration for the good-agent-task principles
- [Cursor Bugbot Reviews in 90 Seconds](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release) — motivation for an earlier local review gate
- [Grilling](https://github.com/mattpocock/skills/tree/main/skills/productivity/grilling) — round-by-round design-tree interviewing
- [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) — original benchmark and selection guidance by Andrei Calazans

## License

MIT
