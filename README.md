# Henrique's Agent Skills

A small collection of opinionated engineering skills for Claude Code, Codex, and other Agent Skills-compatible clients.

Core approach:

> Define the contract at the selected specification path. Resolve important uncertainty one decision at a time. Use Herdr and an isolated Git worktree when the workstream needs it. Plan multi-slice work, prove behaviour with tests, then finish with `simplicity`, `preflight-review`, and a concise factual summary in clear technical English.

## Skills

### `define-spec`

Defines what to build at the selected specification path: outcome, scope, non-goals, constraints, and testable acceptance criteria.

### `plan-from-spec`

Creates a plan and task queue at caller-supplied, repository-defined, or conventional paths for multi-slice, dependency-heavy, risky, or multi-session work. Small bounded changes skip this step.

### `build-from-spec`

Builds the next approved slice from the selected plan, or a small bounded change directly from the selected specification. It finishes with tests, `simplicity`, and Hunk-backed `preflight-review`. It uses `writing` throughout.

### `spike`

Runs the smallest disposable experiment needed to answer one risky technical question. It captures evidence, updates the specification and plan, then removes exploratory code.

### `debug-with-proof`

Reproduces a bug with a failing test before changing production code. It reduces the failure, tests one hypothesis at a time, applies a minimal fix, and retains regression coverage.

### `simplicity`

Simplifies code without changing behaviour, prioritizing clarity and maintainability over fewer lines.

### `react-native-animation`

Chooses and verifies performant React Native animation approaches based on interaction type and measured cost.

### `preflight-review`

Reviews a completed slice against its spec, plan task, tests, and diff in Hunk after simplification. Leaves inline notes and keeps the review open for the user.

### `pr-walkthrough`

Explains a PR one concern at a time, with a pause for the user after each concern. Uses concise technical English and checks the full diff for bugs at the end. Keeps the walkthrough in the conversation.

### `writing`

Writes or revises prose using Peter Yang's simple, short, specific framework. Uses ASD-STE100 Simplified Technical English for technical English, with the official rules and dictionary as the authority. Preserves evidence and real uncertainty.

### `draw`

Draws what the agent is explaining and shows it in a Herdr pane beside the conversation. The agent writes an SVG; the `draw` script renders it with headless Chrome and paints it with the Kitty graphics protocol. Requires the Herdr app, Google Chrome, and `draw` on `PATH`:

```sh
ln -s "$PWD/skills/productivity/draw/draw" ~/.local/bin/draw
```

`draw` controls the Herdr window, so it must run outside a command sandbox. In Codex, approve it on first use or add `prefix_rule(pattern=["draw"], decision="allow")` to `~/.codex/rules/default.rules`.

## Conventions

- Load `writing` before the first update. Use it for every message, agent exchange, summary, handoff, task/PR description, and artifact.
- Default to one short paragraph or up to three bullets, including spike, investigation, and troubleshooting summaries. Keep detailed evidence in one linked artifact; retain blockers and uncertainty.
- Make one editorial pass per artifact. Use the official ASD-STE100 rules and dictionary for technical English; preserve facts, requirements, and evidence.
- Keep inline comments sparse, short, and local. Explain non-obvious constraints; preserve required directives and public API documentation.
- Prefer code that is easy to understand, change, and delete.
- Prefer small vertical slices over broad horizontal layers.
- Use caller- or repository-supplied specification and plan paths. Default to `SPEC.md` and `tasks/` only when no convention exists.
- For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its environment check. Reuse verified workspaces; use panes for independent work and persistent commands, and worktrees for concurrent edits or branch isolation. Preserve focus, supplied paths, and cleanup ownership.
- Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Load `hunk skill path`, inspect the exact session, add concise inline notes, and read user comments.
- If no matching Hunk session exists, open the correct diff in a dedicated, persistent Herdr pane. Keep it open for the user to inspect and add notes; include its session/pane in the handoff. Report unavailable review tooling as pending. Skip Hunk only when no repository diff exists.
- These rules apply to direct skill invocations as well as composed workflows. Reuse existing tool sessions and loaded writing guidance.
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
    spike/
    debug-with-proof/
    simplicity/
    react-native-animation/
    preflight-review/
    pr-walkthrough/
  productivity/
    writing/
    draw/
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
Use pr-walkthrough to walk me through PR #123, one concern at a time.
```

```text
Use writing to make this implementation summary precise and easy to scan.
```

```text
Draw it. Show me the two cases side by side.
```

## References

These skills are opinionated adaptations and inspired by:

- [Caveman](https://github.com/JuliusBrussee/caveman/tree/main/skills/caveman) — concise technical communication
- [Spec-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/spec-driven-development) — explicit product contracts and acceptance criteria
- [Planning and Task Breakdown](https://github.com/addyosmani/agent-skills/tree/main/skills/planning-and-task-breakdown) — small verifiable tasks and vertical slices
- [Incremental Implementation](https://github.com/addyosmani/agent-skills/tree/main/skills/incremental-implementation) — verified vertical-slice execution
- [Test-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development) — failing tests before implementation and regression proof
- [OpenClaw Test Audit](https://github.com/openclaw/openclaw/blob/main/.agents/skills/test-audit/SKILL.md) — test value, distinct coverage, and evidence before deletion
- [Code Simplification](https://github.com/addyosmani/agent-skills/tree/main/skills/code-simplification) — behaviour-preserving simplification
- [Code Review and Quality](https://github.com/addyosmani/agent-skills/tree/main/skills/code-review-and-quality) — actionable diff review
- [Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls) — inspiration for the good-agent-task principles
- [Cursor Bugbot Reviews in 90 Seconds](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release) — motivation for an earlier local review gate
- [Herdr agent skill](https://herdr.dev/docs/agent-skill/) — terminal, workspace, worktree, and agent-control contract
- [Hunk agent review](https://www.hunk.dev/docs/agents/review-with-an-agent/) — shared live reviews and inline notes
- [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) — original benchmark and selection guidance by Andrei Calazans
- [ASD-STE100 Simplified Technical English, Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf) — authority for technical English rules and vocabulary
- [Kitty graphics protocol](https://sw.kovidgoyal.net/kitty/graphics-protocol/) — how `draw` paints images in a terminal pane
- [The Secret to Effective Written Communication](https://creatoreconomy.so/p/the-secret-to-effective-written-communication) — Peter Yang's simple, short, specific framework

## License

MIT
