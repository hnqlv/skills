---
name: react-native-animation
description: Choose, implement, or review React Native animations based on interaction type and measured performance. Use for animation-library decisions, gestures, transitions, or frame, CPU, and memory problems.
---

# React Native Animation

Load `write-clear-technical-english` before the first update. Apply it to all messages, agent prompts and replies, handoffs, summaries, task/PR descriptions, and artifacts. Default messages and summaries to one short paragraph or up to three bullets; preserve evidence, uncertainty, and blockers. Expand artifacts only as their requirements demand.

Classify the animation before choosing a library.

## Herdr and Hunk

For substantive repository work, load the [Herdr skill](https://herdr.dev/docs/agent-skill/) and follow its `HERDR_ENV=1` check. Reuse the verified workspace and worktree. Use panes for independent work and persistent commands; use separate workspaces/worktrees for concurrent edits or branch isolation. Preserve user focus and skip needless parallelism. Never control Herdr from outside it.

Use [Hunk](https://www.hunk.dev/docs/agents/review-with-an-agent/) for every repository diff review, including documentation. Run `hunk skill path`, load that skill, and select the exact repository/session with `hunk session *`. If none matches, open the correct diff in a dedicated, persistent Herdr pane for the user; keep agent control in the session CLI. Leave concise inline notes, read user comments, and keep the review open for the user's manual pass. Include the session and pane in the handoff. If unavailable, report the review as pending; do not silently substitute a plain diff review. Skip Hunk only when no repository diff exists.

## Choose

- Use Reanimated for continuous gestures: drag, scrub, swipe, pinch, or any value updated per input frame. Keep the gesture and animation on the UI thread. Enable Worklets Bundle Mode when supported.
- Use react-native-ease for declarative state, enter/exit, touch-feedback, and looping animations when low CPU, battery use, or many animated nodes matter. Do not use it for scrubbing.
- Use `Animated` with `useNativeDriver: true` as a dependency-free option for supported touch, state, and loop animations. Never drive continuous gestures through JS `setValue` calls.

Prefer the existing project dependency when it fits. Check installed versions and current compatibility before adding or changing a library.

## Verify

- Test a release build on a physical target device with a representative node count.
- Measure UI and JS frame drops, per-thread CPU, and memory; do not judge only by visual smoothness.
- Treat the 60-node benchmark's UI-cost ranking as stress-test evidence, not a universal result. Re-measure the real screen; Reanimated is often a strong default for one interactive element.

Preserve measurements, compatibility constraints, uncertainty, and exact API names.

## Source

Adapted from Andrei Calazans's original post, [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) (July 15, 2026), and its linked reproducible benchmark.
