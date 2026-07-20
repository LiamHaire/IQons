/**
 * Generates figma-plugin/plugin-data.json from packages/iqons-react/src/
 * Extracts SVG inner paths per icon per variant, replaces currentColor with #000000
 * for Figma compatibility (Figma doesn't resolve CSS custom properties).
 *
 * Run: node scripts/build-plugin-data.mjs
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const SRC      = "packages/iqons-react/src";
const MANIFEST = "icons.json";
const OUT      = "figma-plugin/plugin-data.json";

// Load metadata manifest for titles, categories, descriptions, keywords
const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
const icons    = manifest.icons ?? manifest;
const metaMap  = Object.fromEntries(icons.map(icon => [icon.id, icon]));

const VARIANT_ORDER = ["outline", "fill", "duotone"];

function extractVariants(source) {
  // Pull the VARIANTS object literal out of the component source
  const match = source.match(/const VARIANTS[^=]*=\s*\{([\s\S]*?)\};\s*\n\nconst AVAILABLE/);
  if (!match) return {};

  const block = match[1];
  const result = {};

  for (const variant of VARIANT_ORDER) {
    // Match:  outline: `...`,  or  duotone: `...`,  (backtick-delimited)
    const re = new RegExp(`${variant}:\\s*\`([\\s\\S]*?)\`(?:,|\\s*$)`, "m");
    const m = block.match(re);
    if (m) {
      result[variant] = m[1]
        .trim()
        // Replace currentColor with #000000 for Figma
        .replace(/fill="currentColor"/g, 'fill="#000000"')
        .replace(/stroke="currentColor"/g, 'stroke="#000000"')
        // Figma doesn't support <mask> elements — strip them entirely
        .replace(/<mask[\s\S]*?<\/mask>/gi, "")
        // Remove mask="url(#...)" references from paths (path still renders without it)
        .replace(/\s*mask="url\([^)]*\)"/g, "")
        // Clean up any double spaces left behind
        .replace(/  +/g, " ")
        .trim();
    }
  }

  return result;
}

const output = {};
let count = 0;

for (const file of readdirSync(SRC)) {
  if (!file.endsWith(".tsx") || file === "types.ts") continue;

  const source   = readFileSync(join(SRC, file), "utf8");
  const variants = extractVariants(source);
  if (!Object.keys(variants).length) continue;

  // Derive icon id from component filename using same logic as build-registry
  const componentName = file.replace(/\.tsx$/, "");
  const id = componentName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  const meta = metaMap[id] || {};

  output[id] = {
    id,
    title:       meta.title       || componentName,
    category:    meta.category    || "uncategorised",
    description: meta.description || "",
    keywords:    meta.keywords    || [],
    aliases:     meta.aliases     || [],
    variants,
  };

  count++;
}

writeFileSync(OUT, JSON.stringify(output, null, 2) + "\n");
console.log(`Built plugin-data.json — ${count} icons`);
