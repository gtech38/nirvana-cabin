import { generatedImages } from "./images.generated";

export interface CabinImage {
  id: string;
  url: string;
  alt: string; // Room/Space label for accessibility
  caption: string; // Marketing caption shown in gallery hover & lightbox
  category:
    | "exterior"
    | "living"
    | "kitchen"
    | "bedroom"
    | "bathroom"
    | "outdoor"
    | "gameroom";
}

// ─────────────────────────────────────────────────────────────────────────────
//  SOURCE OF TRUTH:  data/images.xlsx
//
//  Non-technical editors: open that spreadsheet, edit the alt / caption /
//  category columns, save. While `npm run dev` is running the page will
//  auto-refresh. For a production build, `npm run build` re-syncs first.
//
//  Columns:
//    • id       — 1-based picture number (matches filename Picture-N.jpg)
//    • filename — reference only, not read by the app
//    • alt      — short accessibility label
//    • caption  — marketing line shown on hover & lightbox
//    • category — exterior | living | kitchen | bedroom | bathroom | outdoor
//                 | gameroom  (invalid values fall back to "exterior")
// ─────────────────────────────────────────────────────────────────────────────
export const images: CabinImage[] = generatedImages;

// Named exports for hero/editorial use in HomePage.
// Change the id lookups below to pick different pictures for each slot.
export const heroImage = images.find((i) => i.id === "58")!;
export const hotTubImage = images.find((i) => i.id === "41")!;
export const firepitImage = images.find((i) => i.id === "6")!;
export const livingImage = images.find((i) => i.id === "7")!;
export const exteriorImage = images.find((i) => i.id === "62")!;
export const gazeboNightImage = images.find((i) => i.id === "57")!;
export const windowWallImage = images.find((i) => i.id === "8")!;
export const arcadeImage = images.find((i) => i.id === "46")!;

export const getByCategory = (cat: CabinImage["category"]) =>
  images.filter((i) => i.category === cat);
