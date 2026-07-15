import fs from "fs";
import path from "path";
import type { Icon, IconCategory, IconStyle } from "./types";

const RAW_DIR = path.join(process.cwd(), "raw-icons");

type FolderConfig = { id: IconCategory; prefix: string };

// Maps the folder name on disk → category ID + the prefix used in filenames
const FOLDER_MAP: Record<string, FolderConfig> = {
  "Navigation":          { id: "navigation",       prefix: "navigation" },
  "Data actions":        { id: "data-actions",     prefix: "dataactions" },
  "Search & discovery":  { id: "search-discovery", prefix: "search&discovery" },
  "Calendar & scheduling": { id: "calendar-scheduling", prefix: "calendar&scheduling" },
  "Communications":      { id: "communications",   prefix: "communications" },
  "Sharing":             { id: "sharing",          prefix: "sharing" },
  "Documents & content": { id: "documents-content", prefix: "documents&content" },
  "Workflow & productivity": { id: "workflow-productivity", prefix: "workflow&productivity" },
  "User & ID":           { id: "user-id",          prefix: "user&id" },
  "Status & feedback":   { id: "status-feedback",  prefix: "status&feedback" },
  "Security & access":   { id: "security-access",  prefix: "security&access" },
  "Analytics & reports": { id: "analytics-reports", prefix: "analytics&reports" },
  "Settings & admin":    { id: "settings-admin",   prefix: "settings&admin" },
  "System & utility":    { id: "system-utility",   prefix: "system&utility" },
  "AI":                  { id: "ai",               prefix: "ai" },
  "Health":              { id: "sector-health",    prefix: "health" },
  "Education":           { id: "sector-education", prefix: "education" },
  "Legal":               { id: "sector-legal",     prefix: "legal" },
  "Finance":             { id: "sector-finance",   prefix: "finance" },
};

const STYLE_MAP: Record<string, IconStyle> = {
  outline: "outline",
  fill:    "filled",
  duotone: "duotone",
  thin:    "thin",
};

function parseIconFile(filename: string, prefix: string): { iconId: string; style: IconStyle } | null {
  const base = filename.replace(/\.svg$/i, "");
  if (!base.startsWith("icon-")) return null;

  const rest = base.slice("icon-".length);

  // Find style suffix — check with hyphen first, then without (handles typos like "arrow-upoutline")
  let iconName: string | null = null;
  let styleKey: string | null = null;

  for (const s of ["duotone", "outline", "fill", "thin"]) {
    if (rest.endsWith(`-${s}`)) {
      styleKey = s;
      iconName = rest.slice(0, rest.length - s.length - 1);
      break;
    } else if (rest.endsWith(s)) {
      styleKey = s;
      iconName = rest.slice(0, rest.length - s.length);
      break;
    }
  }

  if (!iconName || !styleKey) return null;

  // Strip category prefix if present (e.g. "navigation-arrow-down" → "arrow-down")
  if (prefix && iconName.startsWith(`${prefix}-`)) {
    iconName = iconName.slice(prefix.length + 1);
  }

  if (!iconName) return null;

  return { iconId: iconName, style: STYLE_MAP[styleKey] };
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

  for (const [folderName, config] of Object.entries(FOLDER_MAP)) {
    const folderPath = path.join(RAW_DIR, folderName);
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) continue;

    for (const file of fs.readdirSync(folderPath)) {
      if (!file.toLowerCase().endsWith(".svg")) continue;

      const parsed = parseIconFile(file, config.prefix);
      if (!parsed) continue;

      const key = `${config.id}:${parsed.iconId}`;
      if (!iconMap.has(key)) {
        iconMap.set(key, { category: config.id, svgMap: {}, styles: new Set() });
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
