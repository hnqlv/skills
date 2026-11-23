---
name: draw
description: Draws the current explanation as a Mermaid diagram or SVG row drawing and shows it in a Rex canvas pane beside the conversation. Use when the user asks to draw, sketch, diagram, or show something, or asks for an example of an unclear explanation. Requires Rex (REX_BLOCK is set).
allowed-tools: "Bash(draw *) Bash(${CLAUDE_SKILL_DIR}/draw *)"
---

# Draw

Show a picture instead of more prose. Write a Mermaid or SVG file, and `draw` shows it in a canvas pane to the right of yours, in the terminal's font and colors.

If `REX_BLOCK` is not set, say that this is not a Rex terminal and give the file path. `draw` controls Rex panes, so run it outside the command sandbox. If it is not on `PATH`, run `${CLAUDE_SKILL_DIR}/draw`.

## Steps

1. Choose the kind:
   - **Mermaid** (`.mmd`) for connections and order: flows, sequences, states, and relationships.
   - **Row drawing** (`.svg`) for concrete content: lines, records, tables, and before-and-after comparisons.
2. Write the file to a scratch directory, not to the repository.
3. Run `draw /path/to/file`. The first call opens the pane. Later calls replace the drawing.
4. Read the preview file that `draw` prints. Fix overlaps, clipped text, and unreadable colors, and show it again. A Mermaid syntax error fails with the line and the cause.
5. Reply in a few lines: what each part shows, and the file path. Do not repeat the drawing in prose.

Leave the pane open. Run `draw --close` only when the user asks. The user can press `q` to close it.

## Both kinds

- Draw the concrete case from the conversation, with its real names and values, not a generic diagram.
- Cut every label that the picture already makes clear.
- Do not set fonts, colors, or themes. Drawings cannot run scripts or load files, and they render without network access.

## Mermaid

- Write plain Mermaid. Do not use `%%{init}%%`, `classDef`, `style`, or `linkStyle`.
- Use `flowchart TD` for most flows, to fit the tall pane.
- Keep labels to a name or a few words. Put the detail in your reply.
- Keep to about ten nodes or ten messages.

## Row drawings

Read `${CLAUDE_SKILL_DIR}/example.svg` before your first row drawing. Copy its look, not its content. A row drawing must look like terminal text: flat, quiet, and on a grid. It must not look like a slide.

Layout:

- Use `viewBox="0 0 640 H"` with `H` at most 800. A taller drawing shrinks, and its text becomes small.
- Use two or three numbered sections, each with a short heading and one idea. Put compared cases side by side, with a short colored label above each stack.
- A row is a flat rectangle 24 units high with one line of text. Inset the text 10 units and put its baseline 17 units below the top. Stack rows with a 2-unit gap. Lists, tables, files, queues, and steps are stacks of rows.
- Align to the left on a few columns. Align number columns to the right with `text-anchor="end"`. Keep a 24-unit margin and at least 28 units between sections.
- Join related rows with a flat band or a 1.5-unit line. A band uses its hue's text color at 45% opacity. Add an arrowhead only when the layout does not show direction.
- Put explanations beside or below the picture as plain colored text, not in boxes. Add a caption of one or two lines only when needed, in the color of what it describes, or `--muted` for several things.

Style:

- Use square corners and flat fills. Do not use borders, rounded corners, dashed outlines, shadows, gradients, icons, emoji, or circled numbers.
- Text is 14 units by default, shown at 85% of the terminal text size. Use `font-size="18"` for section headings and no other size. Do not use bold, italics, capitals for emphasis, or centered text.
- One character is 8.4 units wide at size 14. Check that each text fits its row. SVG collapses spaces, so align columns with `<tspan x="…">`.
- Give each color one meaning for the whole drawing, and label things directly. Color only the rows that the explanation is about. Show state with fill, not outlines. Show an empty or missing item as a hatched row with muted text.

SVG:

- Set only `xmlns` and `viewBox` on `<svg>`. Do not set a background, `font-family`, or hex colors. Use only static SVG: no scripts, animation, or external files.
- Use these CSS variables, as in `fill="var(--blue)"`:

  | Use | Variable |
  | --- | --- |
  | text | default, or `--muted` for notes and hatched rows |
  | colored text and bands | `--red`, `--green`, `--yellow`, `--blue`, `--magenta`, `--cyan` |
  | plain row | `--row` |
  | colored row | `--red-row`, `--green-row`, `--yellow-row`, `--blue-row`, `--magenta-row`, `--cyan-row` |
  | hatched row | `fill="url(#hatch)"` |

- Text on a colored row keeps the default color.
