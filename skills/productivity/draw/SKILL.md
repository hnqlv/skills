---
name: draw
description: Draw a picture of what you are explaining and show it in a Herdr pane beside the conversation. Use when the user asks you to draw, sketch, diagram, or show something, or says an explanation is unclear and asks for an example. Requires a Herdr terminal (HC_TERMINAL_ID is set).
---

# Draw

Show the user a picture instead of more prose. You write an SVG. The `draw` script renders it and shows it in a canvas pane to the right of your pane.

If `HC_TERMINAL_ID` is not set, say that you are not in a Herdr terminal and give the file path instead.

`draw` controls the Herdr window and starts Chrome, so it must run outside a command sandbox. If the sandbox blocks it, request approval to run it without the sandbox. If `draw` is not on `PATH`, run the `draw` script in this skill's directory.

## Steps

1. Get the canvas size. This opens the canvas pane when it is not open.

   ```sh
   draw
   ```

   It prints the size and a viewBox that fills the canvas, for example `viewBox="0 0 632 871"`.

2. Write the SVG to a scratch directory, not to the repository. Use the printed viewBox width. Use a smaller height when the drawing is short.

3. Show it.

   ```sh
   draw /path/to/drawing.svg
   ```

   Each call replaces the previous drawing in the same pane. A PNG file also works.

4. Look at the result before you reply. Read `~/.cache/herdr-draw/$HC_TERMINAL_ID/current.png` and fix overlaps, clipped text, and unreadable colors.

5. Reply in a few lines: what each part of the drawing shows, and the file path. Do not repeat the drawing in prose.

Leave the canvas open. Run `draw --close` only when the user asks. The user can also press `q` in the canvas pane.

## Make the drawing

- Draw the concrete case from the conversation: the real names, lines, states, and values. Do not draw a generic diagram.
- Put the cases side by side when you compare: before and after, with and without, today and proposed.
- Number each section and give it a short heading. Put a one-line caption below each picture.
- Give each color one meaning and keep it for the whole drawing. Label things directly; avoid a legend.
- The drawing is scaled to fit the canvas. Keep the canvas proportions, or the text becomes small.

## SVG rules

- Set `viewBox` only. Leave the background transparent, so the pane color shows through.
- One unit is about one point. Use `font-size="14"` for body text, which matches the terminal text. Do not go below 12.
- Use `font-family="ui-monospace, Menlo, monospace"`.
- The pane is dark. Use `#e6e6e6` for text and `#8a8f98` for muted text. Use dark fills with lighter strokes and labels:

  | Meaning | Fill | Stroke or label |
  | --- | --- | --- |
  | blue | `#1f3a5f` | `#9cc7ff` |
  | purple | `#3a2f5f` | `#c9b8ff` |
  | green | `#1f4a36` | `#8fe3b8` |
  | amber | `#4a3a1f` | `#e0a458` |
  | red | `#4a2326` | `#f08a8a` |

- Use only static SVG: no scripts, animation, or external files.
