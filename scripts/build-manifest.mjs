/**
 * Compiles all icon metadata sidecars into a single icons.json manifest at the repo root.
 * Run after adding or updating any icon or its metadata.
 *
 * Output: icons.json
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const RAW = "raw-icons";
const OUT = "icons.json";

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

const icons = [];

for (const [folder, category] of Object.entries(FOLDER_MAP)) {
  const dir = join(RAW, folder);
  if (!existsSync(dir)) continue;

  const files = readdirSync(dir);

  // Find all metadata sidecars in this folder
  const metaFiles = files.filter(f => f.endsWith(".json"));

  for (const metaFile of metaFiles) {
    const id = metaFile.replace(/\.json$/, "");
    const metaPath = join(dir, metaFile);

    let meta;
    try {
      meta = JSON.parse(readFileSync(metaPath, "utf8"));
    } catch {
      console.warn(`  Warning: Could not parse ${metaPath} — skipping`);
      continue;
    }

    // Derive variants from SVG files on disk (source of truth)
    const variants = VARIANT_ORDER.filter(v =>
      existsSync(join(dir, `${id}-${v}.svg`))
    );

    icons.push({
      id,
      category,
      title:       meta.title       ?? id,
      description: meta.description ?? "",
      keywords:    meta.keywords    ?? [],
      aliases:     meta.aliases     ?? [],
      variants,
    });
  }
}

// Sort alphabetically by id for stable diffs
icons.sort((a, b) => a.id.localeCompare(b.id));

const manifest = {
  version: "1.0.0",
  count: icons.length,
  icons,
};

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Built ${OUT} — ${icons.length} icons across ${Object.keys(FOLDER_MAP).length} categories`);
