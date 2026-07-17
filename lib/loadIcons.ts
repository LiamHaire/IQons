import fs from "fs";
import path from "path";
import type { Icon, IconCategory, IconStyle } from "./types";

const RAW_DIR = path.join(process.cwd(), "raw-icons");

// Maps the folder name on disk → category ID
const FOLDER_MAP: Record<string, IconCategory> = {
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

const STYLE_MAP: Record<string, IconStyle> = {
  outline: "outline",
  fill:    "filled",
  duotone: "duotone",
  thin:    "thin",
};

function parseIconFile(filename: string): { iconId: string; style: IconStyle } | null {
  const base = filename.replace(/\.svg$/i, "");

  for (const s of ["duotone", "outline", "fill", "thin"]) {
    if (base.endsWith(`-${s}`)) {
      const iconId = base.slice(0, base.length - s.length - 1);
      if (!iconId) return null;
      return { iconId, style: STYLE_MAP[s] };
    }
  }

  return null;
}

function toTitleCase(kebab: string): string {
  return kebab
    .replace(/-./g, (m) => " " + m[1].toUpperCase())
    .replace(/^./, (m) => m.toUpperCase());
}

export function getAllIcons(): Icon[] {
  if (!fs.existsSync(RAW_DIR)) return [];

  type Entry = { category: IconCategory; svgMap: Partial<Record<IconStyle, string>>; styles: Set<IconStyle> };
  const iconMap = new Map<string, Entry>();

  for (const [folderName, categoryId] of Object.entries(FOLDER_MAP)) {
    const folderPath = path.join(RAW_DIR, folderName);
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) continue;

    for (const file of fs.readdirSync(folderPath)) {
      if (!file.toLowerCase().endsWith(".svg")) continue;

      const parsed = parseIconFile(file);
      if (!parsed) continue;

      const key = `${categoryId}:${parsed.iconId}`;
      if (!iconMap.has(key)) {
        iconMap.set(key, { category: categoryId, svgMap: {}, styles: new Set() });
      }

      const entry = iconMap.get(key)!;
      const raw = fs.readFileSync(path.join(folderPath, file), "utf8").trim();
      // Normalise colours — preserve fill="white" inside <mask> blocks (required for mask to work)
      const normaliseSvg = (svg: string) => {
        // Temporarily replace mask blocks so their fill="white" is not touched
        const masks: string[] = [];
        const withoutMasks = svg.replace(/<mask[\s\S]*?<\/mask>/gi, (m) => {
          masks.push(m);
          return `__MASK_${masks.length - 1}__`;
        });

        const normalised = withoutMasks
          .replace(/fill="#E2DDCD"/gi, 'fill="currentColor" fill-opacity="0.15"')
          .replace(/stroke="#E2DDCD"/gi, 'stroke="currentColor" stroke-opacity="0.15"')
          .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
          .replace(/fill="black"/gi, 'fill="currentColor"')
          .replace(/fill="white"/gi, 'fill="currentColor"')
          .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
          .replace(/stroke="black"/gi, 'stroke="currentColor"')
          .replace(/stroke="white"/gi, 'stroke="currentColor"');

        // Restore mask blocks unchanged
        return normalised.replace(/__MASK_(\d+)__/g, (_, i) => masks[Number(i)]);
      };

      entry.svgMap[parsed.style] = normaliseSvg(raw);
      entry.styles.add(parsed.style);
    }
  }

  return Array.from(iconMap.entries()).map(([key, entry]) => {
    const iconId = key.split(":")[1];
    const name = toTitleCase(iconId);
    return {
      id: iconId,
      name,
      tags: name.toLowerCase().split(" "),
      category: entry.category,
      styles: Array.from(entry.styles),
      svg: entry.svgMap,
    };
  });
}
