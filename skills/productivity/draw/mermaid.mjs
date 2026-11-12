// Lay out a Mermaid file as SVG with pele: node mermaid.mjs <file> <font> <max width>
import { readFileSync } from 'node:fs';
import { render } from 'pele';

const [file, font, maxWidth] = process.argv.slice(2);
// The terminal font is monospace: each character is 0.6 em wide.
const measurer = { width: (text, size) => text.length * size * 0.6 };

try {
  const { svg } = render(readFileSync(file, 'utf8'), {
    measurer,
    fontFamily: font,
    fontFamilyMono: font,
    fontSize: 14,
    maxWidth: Number(maxWidth),
    responsive: false,
    padding: 24,
  });
  process.stdout.write(svg);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
