/**
 * Generates the iqons-react package source files from raw-icons/.
 * Reads every SVG, normalises colours to currentColor, and outputs:
 *   packages/iqons-react/src/<ComponentName>.tsx  — one file per icon
 *   packages/iqons-react/src/index.ts             — barrel exports
 *
 * Run: node scripts/build-react.mjs
 */

import { existsSync, readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const RAW   = "raw-icons";
const OUT   = "packages/iqons-react/src";
const TYPES = "packages/iqons-react/src/types.ts";

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

function toComponentName(id) {
  return id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function normaliseSvg(raw) {
  const masks = [];
  const withoutMasks = raw.replace(/<mask[\s\S]*?<\/mask>/gi, (m) => {
    masks.push(m);
    return `__MASK_${masks.length - 1}__`;
  });

  const normalised = withoutMasks
    .replace(/\s*width="[^"]*"\s*/g, " ")
    .replace(/\s*height="[^"]*"\s*/g, " ")
    .replace(/fill="#E2DDCD"/gi, 'fill="currentColor" fill-opacity="0.15"')
    .replace(/stroke="#E2DDCD"/gi, 'stroke="currentColor" stroke-opacity="0.15"')
    .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
    .replace(/fill="black"/gi, 'fill="currentColor"')
    .replace(/fill="white"/gi, 'fill="currentColor"')
    .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
    .replace(/stroke="black"/gi, 'stroke="currentColor"')
    .replace(/stroke="white"/gi, 'stroke="currentColor"')
    .replace(/\s{2,}/g, " ")
    .trim();

  return normalised.replace(/__MASK_(\d+)__/g, (_, i) => masks[Number(i)]);
}

// Strip outer <svg ...> wrapper and return just the inner paths
function extractInner(svg) {
  return svg
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();
}

// Collect all icons
const iconMap = new Map(); // id → { category, variants: { outline?, fill?, duotone?, thin? } }

for (const [folder, category] of Object.entries(FOLDER_MAP)) {
  const dir = join(RAW, folder);
  if (!existsSync(dir)) continue;

  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".svg")) continue;
    const match = file.match(/^(.+)-(outline|fill|duotone|thin)\.svg$/);
    if (!match) continue;
    const [, id, variantRaw] = match;
    const variant = variantRaw === "fill" ? "fill" : variantRaw;

    if (!iconMap.has(id)) iconMap.set(id, { category, variants: {} });
    const entry = iconMap.get(id);
    const raw = readFileSync(join(dir, file), "utf8");
    entry.variants[variant] = normaliseSvg(raw);
  }
}

mkdirSync(OUT, { recursive: true });

const exports = [];
let generated = 0;

for (const [id, { variants }] of iconMap) {
  const name = toComponentName(id);
  const availableVariants = VARIANT_ORDER.filter(v => variants[v]);
  const defaultVariant = availableVariants.includes("outline")
    ? "outline"
    : availableVariants[0];

  // Build variant SVG map as a JS object literal
  const variantEntries = availableVariants
    .map(v => {
      const inner = extractInner(variants[v]);
      // Escape backticks in SVG content (rare but safe)
      const escaped = inner.replace(/`/g, "\\`");
      return `  ${v}: \`${escaped}\``;
    })
    .join(",\n");

  const component = `import type { IqonProps } from "./types";

const VARIANTS: Partial<Record<string, string>> = {
${variantEntries},
};

const AVAILABLE = ${JSON.stringify(availableVariants)} as const;
type Variant = (typeof AVAILABLE)[number];

/**
 * ${name} icon
 * Variants: ${availableVariants.join(", ")}
 */
export function ${name}({
  variant = "${defaultVariant}",
  size = 24,
  label,
  ...props
}: IqonProps) {
  const inner = VARIANTS[variant] ?? VARIANTS["${defaultVariant}"] ?? "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      {...props}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

${name}.displayName = "${name}";
${name}.variants = AVAILABLE;
`;

  writeFileSync(join(OUT, `${name}.tsx`), component);
  exports.push({ name, id });
  generated++;
}

// Write barrel index
const indexLines = [
  `// Auto-generated by scripts/build-react.mjs — do not edit manually`,
  `export type { IqonProps, IqonVariant } from "./types";`,
  "",
  ...exports
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name }) => `export { ${name} } from "./${name}";`),
];

writeFileSync(join(OUT, "index.ts"), indexLines.join("\n") + "\n");

console.log(`Built ${generated} components → ${OUT}/`);
console.log(`Barrel index → ${OUT}/index.ts`);
