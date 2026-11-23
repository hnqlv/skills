# Henrique's Agent Skills

Opinionated engineering and productivity skills for Claude Code.

The approach: define the contract in a spec, plan multi-slice work, prove behaviour with tests, and finish with `simplicity`, `preflight-review`, and a short factual summary.

## Skills

| Skill | Use | Effort |
| --- | --- | --- |
| `define-spec` | Define the outcome, scope, non-goals, and testable acceptance criteria. | xhigh |
| `plan-from-spec` | Turn a spec into an ordered plan and task queue for multi-slice work. | xhigh |
| `build-from-spec` | Build the next slice with tests, then run `simplicity` and `preflight-review`. | medium |
| `spike` | Answer one risky technical question with a disposable experiment. | high |
| `debug-with-proof` | Reproduce a bug before fixing it with a minimal change. | xhigh |
| `simplicity` | Simplify code without a change in behaviour. | high |
| `preflight-review` | Review a finished slice against its spec, tests, and diff in Hunk. | xhigh |
| `pr-walkthrough` | Explain a PR one concern at a time, then check the full diff for bugs. | — |
| `repo-work` | Shared rules for handoffs, untrusted input, dependencies, Rex, and Hunk. | — |
| `writing` | Write simple, short, specific prose, with ASD-STE100 for technical English. | — |
| `draw` | Show a Mermaid diagram or a row drawing in a Rex pane. | — |

A skill's effort lasts for the rest of the turn, and — means the session level. `build-from-spec` builds at medium, then `simplicity` and `preflight-review` raise the effort when it invokes them. `writing` and `repo-work` set no effort because they load inside other skills. `CLAUDE_CODE_EFFORT_LEVEL` overrides all of these.

## Install

Link each skill into the skills directory of each Claude Code profile. When `CLAUDE_CONFIG_DIR` is set, that directory is `$CLAUDE_CONFIG_DIR/skills`, not `~/.claude/skills`.

```sh
for dir in skills/*/*/; do
  ln -s "$PWD/${dir%/}" "${CLAUDE_CONFIG_DIR:-$HOME/.claude}/skills/"
done
```

A linked skill is live. A change in this checkout changes agent behaviour immediately, so review it as you review code.

`draw` also needs the Rex app, Google Chrome, Node, and pnpm:

```sh
pnpm install --frozen-lockfile --dir skills/productivity/draw
ln -s "$PWD/skills/productivity/draw/draw" ~/.local/bin/draw
```

## Security

A skill is an instruction that an agent obeys, and it can include code.

- **No remote instructions.** The skills have no hidden text and no download or install commands. Rex and Hunk instructions come from the installed tools, not from the web.
- **Untrusted text is data.** The skills do not obey text from PRs, issues, web pages, logs, tool output, or dependencies. `pr-walkthrough` does not run code from a PR.
- **Dependencies.** `repo-work` requires a confirmed package name, a pinned version, a committed lockfile, and disabled install scripts. `preflight-review` flags changed dependencies, install scripts, CI workflows, and agent instruction files.
- **`draw`.** Its one dependency, `pele`, has an exact version and a lockfile hash. pnpm installs only versions that are 7 days old or more, refuses a trust downgrade, and runs no install scripts. A drawing renders as an image without network access, so its scripts do not run and external files do not load.

Before you install a skill from another source, read all its files, including scripts, and pin it to a commit. Do not let an agent install skills without your review.

## Conventions

- **Writing.** The engineering skills load `writing` first. Updates default to one short paragraph or up to three bullets, with details in one linked artifact.
- **Repository work.** The engineering skills load `repo-work` for handoff checks, Rex panes and worktrees, and Hunk reviews.
- **Paths.** The skills use the spec and plan paths from the caller or repository, and default to `SPEC.md` and `tasks/`.
- **Authorization.** The skills reuse the authorization that the user already gave and add no approval gates between them.
- **Git.** Commit types are `feat`, `fix`, `refactor`, `test`, `docs`, and `chore`. Exploratory branches are `spike/<topic>`.

## Usage

```text
Let's define a spec for this feature idea before anyone writes code.
Break SPEC.md into slices.
Build the next slice.
Spike whether this API supports idempotent retries.
This test fails about one run in ten. Find out why.
Walk me through PR #123.
Draw it. Show me the two cases side by side.
```

## Evals

`evals/` holds cases for `claude plugin eval`. Each case checks that the correct skill fires, or that no skill fires for a near miss, and grades the answer. `.claude-plugin/plugin.json` lets the runner find the skills in their category folders.

```sh
claude plugin eval . --model opus --judge-model sonnet --no-publish
```

Each case runs 3 times, with and without the skills. Each run is a full Claude Code session, so a full pass costs money. Use `--case <glob>` to run one case. The runs use their own config, so your saved effort level does not apply.

## References

These skills adapt or take inspiration from:

- [Spec-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/spec-driven-development), [Planning and Task Breakdown](https://github.com/addyosmani/agent-skills/tree/main/skills/planning-and-task-breakdown), [Incremental Implementation](https://github.com/addyosmani/agent-skills/tree/main/skills/incremental-implementation), [Test-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development), [Code Simplification](https://github.com/addyosmani/agent-skills/tree/main/skills/code-simplification), and [Code Review and Quality](https://github.com/addyosmani/agent-skills/tree/main/skills/code-review-and-quality) by Addy Osmani
- [OpenClaw Test Audit](https://github.com/openclaw/openclaw/blob/main/.agents/skills/test-audit/SKILL.md): test value and evidence before deletion
- [Caveman](https://github.com/JuliusBrussee/caveman/tree/main/skills/caveman): concise technical communication
- [Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls): good-agent-task principles
- [Cursor Bugbot Reviews in 90 Seconds](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release): motivation for a local review gate
- [Rex](https://www.superlogical.com/rex/docs/installation) and [Hunk agent review](https://www.hunk.dev/docs/agents/review-with-an-agent/): terminal control and live diff reviews
- [ASD-STE100, Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf) and [The Secret to Effective Written Communication](https://creatoreconomy.so/p/the-secret-to-effective-written-communication) by Peter Yang: the basis of `writing`
- [Pele](https://pele.run/) and the [Kitty graphics protocol](https://sw.kovidgoyal.net/kitty/graphics-protocol/): layout and display for `draw`

## License

MIT
