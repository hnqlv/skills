---
name: react-native-animation
description: Choose, implement, or review performant React Native animations. Use when deciding between Animated, Reanimated, and react-native-ease; building gesture-driven, state-driven, touch-feedback, enter/exit, or looping motion; or diagnosing animation frame, CPU, JS-thread, or memory costs.
---

# React Native Animation

Classify the animation before choosing a library.

## Choose

- Use Reanimated for continuous gestures: drag, scrub, swipe, pinch, or any value updated per input frame. Keep the gesture and animation on the UI thread. Enable Worklets Bundle Mode when supported.
- Use react-native-ease for declarative state, enter/exit, touch-feedback, and looping animations when low CPU, battery use, or many animated nodes matter. Do not use it for scrubbing.
- Use `Animated` with `useNativeDriver: true` as a dependency-free option for supported touch, state, and loop animations. Never drive continuous gestures through JS `setValue` calls.

Prefer the existing project dependency when it fits. Check installed versions and current compatibility before adding or changing a library.

## Verify

- Test a release build on a physical target device with a representative node count.
- Measure UI and JS frame drops, per-thread CPU, and memory; do not judge only by visual smoothness.
- Treat the 60-node benchmark's UI-cost ranking as stress-test evidence, not a universal result. Re-measure the real screen; Reanimated is often a strong default for one interactive element.

## Source

Adapted from Andrei Calazans's original post, [Which React Native Animation Library Should You Use for Performance?](https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/) (July 15, 2026), and its linked reproducible benchmark.
