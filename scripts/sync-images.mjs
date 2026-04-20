#!/usr/bin/env node
// Reads data/images.xlsx and writes src/data/images.generated.ts.
// Non-technical users edit the xlsx; this script keeps the TS module in sync.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import * as XLSX from "xlsx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const XLSX_PATH = resolve(ROOT, "data/images.xlsx");
const OUT_PATH = resolve(ROOT, "src/data/images.generated.ts");

const VALID_CATEGORIES = new Set([
  "exterior",
  "living",
  "kitchen",
  "bedroom",
  "bathroom",
  "outdoor",
  "gameroom",
]);

const escapeString = (s) =>
  String(s ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, " ")
    .trim();

export function syncImages() {
  if (!existsSync(XLSX_PATH)) {
    console.error(`[sync-images] ${XLSX_PATH} not found`);
    process.exit(1);
  }

  const wb = XLSX.read(readFileSync(XLSX_PATH), { type: "buffer" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  const images = [];
  const warnings = [];

  for (const row of rows) {
    const id = String(row.id ?? row.ID ?? "").trim();
    if (!id || !/^\d+$/.test(id)) continue;

    const n = Number(id);
    const alt = escapeString(row.alt ?? row.Alt ?? "");
    const caption = escapeString(row.caption ?? row.Caption ?? "");
    const categoryRaw = String(row.category ?? row.Category ?? "exterior")
      .toLowerCase()
      .trim();

    let category = categoryRaw;
    if (!VALID_CATEGORIES.has(category)) {
      warnings.push(
        `  · id=${id}: invalid category "${categoryRaw}" → falling back to "exterior"`,
      );
      category = "exterior";
    }

    images.push({ n, id, alt, caption, category });
  }

  images.sort((a, b) => a.n - b.n);

  const header = `// AUTO-GENERATED from data/images.xlsx — do not edit by hand.
// Run \`npm run sync-images\` or save the xlsx while \`npm run dev\` is running.

import type { CabinImage } from "./images";

const lp = (n: number) => \`/photos/Picture-\${n}.jpg\`;

export const generatedImages: CabinImage[] = [
`;

  const body = images
    .map(
      ({ n, id, alt, caption, category }) =>
        `  { id: "${id}", url: lp(${n}), alt: "${alt}", caption: "${caption}", category: "${category}" },`,
    )
    .join("\n");

  const footer = `\n];\n`;

  writeFileSync(OUT_PATH, header + body + footer, "utf8");

  console.log(
    `[sync-images] wrote ${images.length} rows → src/data/images.generated.ts`,
  );
  if (warnings.length) {
    console.warn(`[sync-images] ${warnings.length} warning(s):`);
    warnings.forEach((w) => console.warn(w));
  }
  return images.length;
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  syncImages();
}
