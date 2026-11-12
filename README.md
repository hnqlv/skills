# Henrique's Agent Skills

Opinionated engineering and productivity skills for Claude Code, Codex, and other Agent Skills-compatible clients.

The approach: define the contract in a specification. Plan multi-slice work. Prove behaviour with tests. Finish with `simplicity`, `preflight-review`, and a short factual summary.

## Skills

| Skill | Use |
| --- | --- |
| `define-spec` | Define the outcome, scope, non-goals, and testable acceptance criteria. |
| `plan-from-spec` | Turn a specification into an ordered plan and task queue for multi-slice work. |
| `build-from-spec` | Build the next approved slice with tests, then run `simplicity` and `preflight-review`. |
| `spike` | Answer one risky technical question with a disposable experiment. |
| `debug-with-proof` | Reproduce a bug with a failing test, then apply a minimal fix. |
| `simplicity` | Simplify code without a change in behaviour. |
| `preflight-review` | Review a completed slice against its specification, tests, and diff in Hunk. |
| `pr-walkthrough` | Explain a PR one concern at a time, then check the full diff for bugs. |
| `writing` | Write simple, short, specific prose. Use ASD-STE100 for technical English. |
| `draw` | Show a Mermaid diagram or a row drawing in a Herdr pane, in the terminal's font and colors. |

Engineering skills are in `skills/engineering/`. `writing` and `draw` are in `skills/productivity/`.

## Install

Link each skill directory into the skills directory of your client:

```sh
ln -s "$PWD/skills/engineering/define-spec" ~/.agents/skills/define-spec
ln -s "$PWD/skills/engineering/define-spec" ~/.claude/skills/define-spec
```

A linked skill is live. A change in this checkout changes agent behaviour immediately, so review it as you review code.

`draw` also needs the Herdr app, Google Chrome, Node, and pnpm:

```sh
pnpm install --frozen-lockfile --dir skills/productivity/draw
ln -s "$PWD/skills/productivity/draw/draw" ~/.local/bin/draw
```

`draw` controls the Herdr window, so it runs outside the command sandbox. In Codex, approve it on first use, or add `prefix_rule(pattern=["draw"], decision="allow")` to `~/.codex/rules/default.rules`.

## Security

A skill is an instruction that an agent obeys, and it can include code.

- **No remote instructions.** The skills have no hidden text and no download or install commands. Herdr and Hunk instructions come from the installed tools, not from the web.
- **Untrusted text is data.** The skills do not obey text from PRs, issues, web pages, logs, tool output, or dependencies. `pr-walkthrough` does not run code from a PR.
- **Dependencies.** `build-from-spec` and `spike` require a confirmed package name, a pinned version, a committed lockfile, and disabled install scripts. `preflight-review` flags changed dependencies, install scripts, CI workflows, and agent instruction files.
- **`draw`.** Its one dependency, `pele`, has an exact version and a lockfile hash. pnpm installs only versions that are 7 days old or more, refuses a trust downgrade, and does not run install scripts. A drawing renders as an image without network access, so its scripts do not run and external files do not load.

Before you install a skill from another source, read all its files, including scripts, and pin it to a commit. Do not let an agent install skills without your review.

## Conventions

Each skill states its own rules. These apply to all of them, for direct and composed use:

- **Writing.** Load `writing` first and use it for every message, handoff, and artifact. Default to one short paragraph or up to three bullets. Keep detailed evidence in one linked artifact. Keep blockers and uncertainty.
- **Code.** Prefer code that is easy to understand, change, and delete. Prefer small vertical slices. Keep comments sparse and local. Do not design for hypothetical requirements.
- **Paths.** Use the specification and plan paths that the caller or repository supplies. Default to `SPEC.md` and `tasks/` only when no convention exists.
- **Herdr.** For substantive repository work, load the Herdr instructions for your session: `hc --skill` and `herdr-app --skill` in the Herdr app, or the `herdr` skill in the Herdr multiplexer. Use panes for independent work and worktrees for concurrent edits.
- **Hunk.** Review every repository diff in Hunk, including documentation. If no session matches, open the diff in a persistent Herdr pane for the user. Report unavailable review tooling as pending.
- **Authorization.** Reuse the authorization that the user already gave. Do not add approval gates between skills.
- **Git.** Use `feat`, `fix`, `refactor`, `test`, `docs`, and `chore` commit types. Use `spike/<topic>` for exploratory branches.

## Usage

```text
Use define-spec to turn this feature idea into a concise specification at <spec-path>.
Use plan-from-spec to break <spec-path> into verifiable slices at <plan-path>.
Use build-from-spec to implement the next slice.
Run a spike to determine whether this API supports idempotent retries.
Use debug-with-proof. Reproduce this bug with a failing test before fixing it.
Use pr-walkthrough to walk me through PR #123, one concern at a time.
Draw it. Show me the two cases side by side.
```

## References

These skills adapt or take inspiration from:

- [Spec-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/spec-driven-development), [Planning and Task Breakdown](https://github.com/addyosmani/agent-skills/tree/main/skills/planning-and-task-breakdown), [Incremental Implementation](https://github.com/addyosmani/agent-skills/tree/main/skills/incremental-implementation), [Test-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development), [Code Simplification](https://github.com/addyosmani/agent-skills/tree/main/skills/code-simplification), and [Code Review and Quality](https://github.com/addyosmani/agent-skills/tree/main/skills/code-review-and-quality) by Addy Osmani
- [OpenClaw Test Audit](https://github.com/openclaw/openclaw/blob/main/.agents/skills/test-audit/SKILL.md): test value and evidence before deletion
- [Caveman](https://github.com/JuliusBrussee/caveman/tree/main/skills/caveman): concise technical communication
- [Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls): good-agent-task principles
- [Cursor Bugbot Reviews in 90 Seconds](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release): motivation for a local review gate
- [Herdr agent skill](https://herdr.dev/docs/agent-skill/) and [Hunk agent review](https://www.hunk.dev/docs/agents/review-with-an-agent/): terminal control and live diff reviews
- [ASD-STE100, Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf) and [The Secret to Effective Written Communication](https://creatoreconomy.so/p/the-secret-to-effective-written-communication) by Peter Yang: the basis of `writing`
- [Pele](https://pele.run/) and the [Kitty graphics protocol](https://sw.kovidgoyal.net/kitty/graphics-protocol/): layout and display for `draw`

## License

MIT
