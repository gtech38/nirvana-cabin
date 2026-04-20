#!/usr/bin/env node
// One-time seeder: creates data/images.xlsx with 70 empty rows if it doesn't exist.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import * as XLSX from "xlsx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const XLSX_PATH = resolve(ROOT, "data/images.xlsx");
const TOTAL = 70;

if (existsSync(XLSX_PATH)) {
  console.log(
    `[seed] ${XLSX_PATH} already exists — leaving untouched. Delete it if you want to regenerate.`,
  );
  process.exit(0);
}

mkdirSync(resolve(ROOT, "data"), { recursive: true });

const rows = [
  ["id", "filename", "alt", "caption", "category"],
  ...Array.from({ length: TOTAL }, (_, i) => {
    const n = i + 1;
    return [n, `Picture-${n}.jpg`, "", "", "exterior"];
  }),
];

const ws = XLSX.utils.aoa_to_sheet(rows);

// Column widths (chars): id, filename, alt, caption, category
ws["!cols"] = [
  { wch: 4 },
  { wch: 16 },
  { wch: 40 },
  { wch: 70 },
  { wch: 12 },
];

// Freeze the header row
ws["!freeze"] = { xSplit: 0, ySplit: 1 };

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "images");
XLSX.writeFile(wb, XLSX_PATH);

console.log(`[seed] wrote ${TOTAL}-row template → data/images.xlsx`);
