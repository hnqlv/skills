---
name: draw
description: Draw a picture of what you are explaining and show it in a Herdr pane beside the conversation. Use when the user asks you to draw, sketch, diagram, or show something, or says an explanation is unclear and asks for an example. Requires a Herdr terminal (HC_TERMINAL_ID is set).
---

# Draw

Show the user a picture instead of more prose. You write an SVG. The `draw` script renders it and shows it in a canvas pane to the right of your pane.

If `HC_TERMINAL_ID` is not set, say that you are not in a Herdr terminal and give the file path instead.

`draw` controls the Herdr window, so it must run outside a command sandbox. If the sandbox blocks it, request approval to run it without the sandbox. If `draw` is not on `PATH`, run the `draw` script in this skill's directory.

## Steps

1. Read `example.svg` in this skill's directory before your first drawing. Copy its look, not its content.

2. Write the SVG to a scratch directory, not to the repository. Use `viewBox="0 0 640 H"`. Keep `H` at or below 800; a taller drawing is shrunk to fit and its text becomes small. Split a longer explanation into two drawings.

3. Show it. The first call opens the canvas pane. Each later call replaces the drawing in the same pane. A PNG file also works.

   ```sh
   draw /path/to/drawing.svg
   ```

4. Look at the result before you reply. Read the preview file that `draw` prints. Fix overlaps, clipped text, and unreadable colors, then show it again.

5. Reply in a few lines: what each part of the drawing shows, and the file path. Do not repeat the drawing in prose.

Leave the canvas open. Run `draw --close` only when the user asks. The user can also press `q` in the canvas pane.

## Make the drawing

- Draw the concrete case from the conversation: the real names, lines, states, and values. Do not draw a generic diagram.
- Put the cases side by side when you compare: before and after, with and without, today and proposed.
- Number each section and give it a short heading. Put a caption of one or two lines below each picture, in the color of the thing it describes.
- Give each color one meaning and keep it for the whole drawing. Label things directly.
- Show less. Two or three sections, each with one idea. Cut every label that the picture already makes clear.

## Make it look like the terminal

The drawing sits beside terminal text and must look like part of it: flat, quiet, and on a grid. It must not look like a slide or a flowchart.

- Build pictures from rows. A row is a flat rectangle 24 units high with one line of text, like a line in a terminal. Stack rows with a 2-unit gap. Lists, tables, files, queues, and steps are all stacks of rows.
- Use square corners and flat fills. Do not use borders, rounded corners, dashed outlines, shadows, gradients, icons, emoji, or circled numbers.
- Use one weight and two sizes: regular 14 for all text and regular 18 for section headings. Do not use bold, italics, capitals for emphasis, or centered text.
- Show state with fill color, not with outlines. Most rows are plain. Color only the rows that the explanation is about.
- Show an empty, missing, or not-yet-built item as a hatched row with muted text.
- Join related rows with a flat band or a 1.5-unit line. A band takes the pane-text color of its hue at 45% opacity. Use an arrowhead only when direction is not clear from the layout.
- Align everything to the left on a small set of columns. Keep a 24-unit margin and 28 units or more between sections.
- Put text beside or below a picture as plain colored text. Do not put explanations in boxes.

## SVG rules

- Set `viewBox` only. Leave the background transparent; `draw` renders the SVG on the pane color.
- One unit is about one point; 14-unit text matches the terminal text. Do not go below 12.
- Use `font-family="ui-monospace, Menlo, monospace"`. One character is about 8.4 units wide; check that each text fits its row.
- SVG collapses runs of spaces. Align columns inside a row with `<tspan x="…">`, as `example.svg` does.
- The pane is dark. Use these colors:

  | Use | Row fill | Text on that fill | Text on the pane |
  | --- | --- | --- | --- |
  | plain | `#1f222a` | `#c9cdd4` | `#d7dae0` |
  | muted | hatch, see `example.svg` | | `#7d828c` |
  | blue | `#234a7d` | `#cfe3ff` | `#7ab0f5` |
  | green | `#1f4d38` | `#c8f0d8` | `#7fd49e` |
  | amber | `#5a431c` | `#f5d9a8` | `#e0a458` |
  | red | `#5a2528` | `#f7c9c9` | `#f07f7f` |
  | purple | `#47336e` | `#e0d2ff` | `#b59cf0` |

- Use only static SVG: no scripts, animation, or external files.
