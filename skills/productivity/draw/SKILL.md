---
name: draw
description: Draw a picture of what you are explaining and show it in a Herdr pane beside the conversation. Use when the user asks you to draw, sketch, diagram, or show something, or says an explanation is unclear and asks for an example. Requires a Herdr terminal (HC_TERMINAL_ID is set).
---

# Draw

Show the user a picture instead of more prose. You write a Mermaid file or an SVG. The `draw` script shows it in a canvas pane to the right of your pane, in the terminal's font and colors.

If `HC_TERMINAL_ID` is not set, say that you are not in a Herdr terminal and give the file path instead.

`draw` controls the Herdr window. Run it outside the command sandbox, and request approval when that is necessary. If `draw` is not on `PATH`, run the `draw` script in this skill's directory.

## Steps

1. Choose the kind of drawing.
   - **Mermaid diagram** (`.mmd`): how things connect, or the order of events. Use it for flows, sequences, states, and relationships.
   - **Row drawing** (`.svg`): concrete content. Use it for lines, records, tables, and comparisons such as before and after.

2. Write the file to a scratch directory, not to the repository. Follow the rules for its kind below.

3. Show it. The first call opens the canvas pane. Each later call replaces the drawing in the same pane.

   ```sh
   draw /path/to/drawing.mmd
   ```

4. Look at the result before you reply. Read the preview file that `draw` prints. Fix overlaps, clipped text, and unreadable colors, then show it again. A Mermaid syntax error makes `draw` fail with the line and the cause.

5. Reply in a few lines: what each part of the drawing shows, and the file path. Do not repeat the drawing in prose.

Leave the canvas open. Run `draw --close` only when the user asks. The user can also press `q` in the canvas pane.

## Both kinds

- Draw the concrete case from the conversation: the real names, lines, states, and values. Do not draw a generic diagram.
- Show less. Cut every label that the picture already makes clear.
- Do not set fonts, colors, or themes. `draw` applies the terminal's.

## Mermaid diagrams

`draw` lays out Mermaid with pele, which supports the Mermaid diagram types.

- Write plain Mermaid. Do not use `%%{init}%%`, `classDef`, `style`, or `linkStyle`.
- Use the direction that fits a tall side pane: `flowchart TD` for most flows.
- Keep labels short: a name, or a few words. Put the detail in your reply.
- Keep one diagram to about ten nodes or ten messages. Cut content to fit.

## Row drawings

Read `example.svg` in this skill's directory before your first row drawing. Copy its look, not its content.

- Use `viewBox="0 0 640 H"`. Keep `H` at or below 800; a taller drawing is shrunk to fit and its text becomes small. Cut content to fit.
- Put the cases side by side when you compare: before and after, with and without, today and proposed.
- Number each section and give it a short heading. Use two or three sections, each with one idea.
- Put a short colored label above each stack that you compare. Add a caption of one or two lines below a picture only when the picture needs it. A caption takes the color of the thing it describes, or `--muted` when it describes several things.
- Give each color one meaning and keep it for the whole drawing. Label things directly.

### Make it look like the terminal

A row drawing sits beside terminal text and must look like part of it: flat, quiet, and on a grid. It must not look like a slide.

- Build pictures from rows. A row is a flat rectangle 24 units high with one line of text, like a line in a terminal. Inset the text 10 units from each end of the row and put its baseline 17 units below the top of the row. Stack rows with a 2-unit gap. Lists, tables, files, queues, and steps are all stacks of rows.
- Use square corners and flat fills. Do not use borders, rounded corners, dashed outlines, shadows, gradients, icons, emoji, or circled numbers.
- Use one weight and two sizes: the default size for all text, which is the size of the terminal text, and 18 for section headings. Do not use bold, italics, capitals for emphasis, or centered text.
- Use only the theme colors below. Show state with fill color, not with outlines. Most rows are plain. Color only the rows that the explanation is about.
- Show an empty, missing, or not-yet-built item as a hatched row with muted text.
- Join related rows with a flat band or a 1.5-unit line. A band takes the text color of its hue at 45% opacity. Use an arrowhead only when direction is not clear from the layout.
- Align everything to the left on a small set of columns. Align a column of numbers to the right with `text-anchor="end"`. Keep a 24-unit margin and 28 units or more between sections.
- Put text beside or below a picture as plain colored text. Do not put explanations in boxes.

### SVG rules

`draw` gives each SVG the terminal's font, its theme colors, and a hatch pattern. Do not set them yourself.

- Set only `xmlns` and `viewBox` on the `<svg>` element. Do not set a background, `font-family`, or hex colors.
- Text is 14 units by default, which `draw` shows at the size of the terminal text, in the terminal's text color. Set `font-size="18"` on section headings. Do not set any other size.
- One character is 8.4 units wide at the default size. Check that each text fits its row.
- SVG collapses runs of spaces. Align columns inside a row with `<tspan x="…">`, as `example.svg` does.
- Colors are CSS variables, used as `fill="var(--blue)"`:

  | Use | Variable |
  | --- | --- |
  | text | default; `--muted` for notes and for text on hatched rows |
  | colored text and bands | `--red`, `--green`, `--yellow`, `--blue`, `--magenta`, `--cyan` |
  | plain row | `--row` |
  | colored row | `--red-row`, `--green-row`, `--yellow-row`, `--blue-row`, `--magenta-row`, `--cyan-row` |
  | hatched row | `fill="url(#hatch)"` |

- Text on a colored row keeps the default color.
- Use only static SVG: no scripts, animation, or external files.
