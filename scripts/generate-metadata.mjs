/**
 * Generates a .json metadata sidecar for every icon that doesn't already have one.
 * Safe to re-run — skips icons where metadata already exists.
 *
 * Auto-generates:
 *   - title: from icon id (kebab-case → Title Case)
 *   - keywords: from the words in the icon id
 *   - variants: from which SVG files exist on disk
 *
 * Fields left for manual curation:
 *   - description
 *   - aliases
 */

import { existsSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

const RAW = "raw-icons";

const FOLDER_MAP = {
  "Navigation":              "navigation",
  "Data actions":            "data-actions",
  "Search & discovery":      "search-discovery",
  "Calendar & scheduling":   "calendar-scheduling",
  "Communications":          "communications",
  "Sharing":                 "sharing",
  "Documents & content":     "documents-content",
  "Workflow & productivity":  "workflow-productivity",
  "User & ID":               "user-id",
  "Status & feedback":       "status-feedback",
  "Security & access":       "security-access",
  "Analytics & reports":     "analytics-reports",
  "Settings & admin":        "settings-admin",
  "System & utility":        "system-utility",
  "AI":                      "ai",
  "Layout":                  "layout",
  "Health":                  "sector-health",
  "Education":               "sector-education",
  "Legal":                   "sector-legal",
  "Finance":                 "sector-finance",
};

const VARIANT_ORDER = ["outline", "fill", "duotone", "thin"];

function toTitle(id) {
  return id
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Expand abbreviated words into better keywords
const KEYWORD_EXPANSIONS = {
  "ai":       ["artificial intelligence", "machine learning"],
  "ui":       ["interface", "user interface"],
  "id":       ["identity", "identifier"],
  "api":      ["interface", "developer"],
  "url":      ["link", "web", "address"],
};

function toKeywords(id) {
  const words = id.split("-");
  const keywords = [...words];
  for (const word of words) {
    if (KEYWORD_EXPANSIONS[word]) {
      keywords.push(...KEYWORD_EXPANSIONS[word]);
    }
  }
  return [...new Set(keywords)];
}

let created = 0;
let skipped = 0;

for (const [folder, category] of Object.entries(FOLDER_MAP)) {
  const dir = join(RAW, folder);
  if (!existsSync(dir)) continue;

  const files = readdirSync(dir);

  // Group SVG files by icon id
  const iconMap = new Map();
  for (const f of files) {
    if (!f.endsWith(".svg")) continue;
    const match = f.match(/^(.+)-(outline|fill|duotone|thin)\.svg$/);
    if (!match) continue;
    const [, id, variant] = match;
    if (!iconMap.has(id)) iconMap.set(id, []);
    iconMap.get(id).push(variant);
  }

  for (const [id, variants] of iconMap) {
    const metaPath = join(dir, `${id}.json`);

    // Skip if metadata already exists
    if (existsSync(metaPath)) {
      skipped++;
      continue;
    }

    const sortedVariants = VARIANT_ORDER.filter(v => variants.includes(v));

    const meta = {
      title: toTitle(id),
      description: "",
      keywords: toKeywords(id),
      aliases: [],
      variants: sortedVariants,
    };

    writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");
    console.log(`  Created: ${folder}/${id}.json`);
    created++;
  }
}

console.log(`\nDone. Created: ${created}  Skipped (already exist): ${skipped}`);
