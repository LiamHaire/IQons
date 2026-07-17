/**
 * Generates the ShadCN-compatible registry files from packages/iqons-react/src/.
 *
 * Outputs:
 *   registry/<icon-id>.json   — one installable item per icon
 *   registry.json             — full registry index at repo root
 *
 * Install a single icon:
 *   npx shadcn add https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/align-left.json
 *
 * Run: node scripts/build-registry.mjs
 */

import { existsSync, readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const SRC        = "packages/iqons-react/src";
const REG_DIR    = "registry";
const REG_INDEX  = "registry.json";
const REPO_RAW   = "https://raw.githubusercontent.com/LiamHaire/IQons/master";

mkdirSync(REG_DIR, { recursive: true });

function toIconId(componentName) {
  return componentName
    .replace(/([A-Z])/g, (m, l, i) => (i > 0 ? "-" : "") + l.toLowerCase())
    .replace(/^-/, "");
}

// Collect all generated component files
const componentFiles = readdirSync(SRC).filter(
  f => f.endsWith(".tsx") && f !== "types.ts"
);

const items = [];

for (const file of componentFiles) {
  const componentName = file.replace(/\.tsx$/, "");
  const id = toIconId(componentName);
  const srcPath = join(SRC, file);

  if (!existsSync(srcPath)) continue;

  const content = readFileSync(srcPath, "utf8");

  // Extract available variants from the component source
  const variantsMatch = content.match(/const AVAILABLE = (\[.*?\]) as const/);
  const variants = variantsMatch ? JSON.parse(variantsMatch[1]) : ["outline"];

  // Extract description from JSDoc comment if present
  const descMatch = content.match(/\/\*\*\n \* \w+ icon\n \* Variants: (.+)\n \*\//);

  // Build the registry item
  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: id,
    type: "registry:ui",
    title: componentName.replace(/([A-Z])/g, (m, l, i) => (i > 0 ? " " : "") + l),
    description: `IQons ${componentName} icon. Variants: ${variants.join(", ")}.`,
    dependencies: ["iqons-react"],
    files: [
      {
        path: `packages/iqons-react/src/${file}`,
        type: "registry:ui",
        content,
      },
    ],
  };

  writeFileSync(join(REG_DIR, `${id}.json`), JSON.stringify(item, null, 2) + "\n");
  items.push({
    name: id,
    type: "registry:ui",
    title: item.title,
    description: item.description,
    dependencies: ["iqons-react"],
    files: [{ path: `packages/iqons-react/src/${file}`, type: "registry:ui" }],
  });
}

// Write index
const index = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "iqons",
  homepage: "https://github.com/LiamHaire/IQons",
  items: items.sort((a, b) => a.name.localeCompare(b.name)),
};

writeFileSync(REG_INDEX, JSON.stringify(index, null, 2) + "\n");

console.log(`Built ${items.length} registry items → ${REG_DIR}/`);
console.log(`Registry index → ${REG_INDEX}`);
