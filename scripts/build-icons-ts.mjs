import { readFileSync } from "fs";

const SRC = "C:/Users/liam.haire/Downloads/Iqons";

function r(fname) {
  return readFileSync(`${SRC}/${fname}`, "utf8")
    .replace(/\r?\n/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/ width="24"/, "")
    .replace(/ height="24"/, "")
    .replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, "")
    // ensure xmlns and viewBox are first attrs after <svg
    .replace(/(<svg )([^>]*)(viewBox="0 0 24 24")/, '$1xmlns="http://www.w3.org/2000/svg" $3')
    // colour replacements
    .replace(/fill="#424138"/g, 'fill="currentColor"')
    .replace(/stroke="#424138"/g, 'stroke="currentColor"')
    .replace(/fill="#E2DDCD"/g, 'fill="currentColor" fill-opacity="0.15"')
    .trim();
}

// single-SVG icons reuse the same path for all 3 styles
function uni(file) {
  const s = r(file);
  return { outline: s, filled: s, duotone: s };
}

const nav = [
  { id:"arrow-down",    name:"Arrow Down",    tags:["arrow","down","navigate","direction"],
    styles:["outline","filled","duotone"], svg: uni("icon-arrow-down.svg") },
  { id:"arrow-left",    name:"Arrow Left",    tags:["arrow","left","navigate","back"],
    styles:["outline","filled","duotone"], svg: uni("icon-arrow-left.svg") },
  { id:"arrow-right",   name:"Arrow Right",   tags:["arrow","right","navigate","forward"],
    styles:["outline","filled","duotone"], svg: uni("icon-arrow-right.svg") },
  { id:"arrow-up",      name:"Arrow Up",      tags:["arrow","up","navigate","direction"],
    styles:["outline","filled","duotone"], svg: uni("icon-arrow-up.svg") },
  { id:"chevron-down",  name:"Chevron Down",  tags:["chevron","down","expand","dropdown"],
    styles:["outline","filled","duotone"], svg: uni("icon-chevron-down.svg") },
  { id:"chevron-left",  name:"Chevron Left",  tags:["chevron","left","back","previous"],
    styles:["outline","filled","duotone"], svg: uni("icon-chevron-left.svg") },
  { id:"chevron-right", name:"Chevron Right", tags:["chevron","right","forward","next"],
    styles:["outline","filled","duotone"], svg: uni("icon-chevron-right.svg") },
  { id:"chevron-up",    name:"Chevron Up",    tags:["chevron","up","collapse","expand"],
    styles:["outline","filled","duotone"], svg: uni("icon-chevron-up.svg") },
  { id:"close",         name:"Close",         tags:["close","dismiss","x","cancel","remove"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-close-outline.svg"), filled:r("icon-close-fill.svg"), duotone:r("icon-close-duotone.svg") } },
  { id:"fullscreen",    name:"Fullscreen",    tags:["fullscreen","expand","maximize","view"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-fullscreen-outline.svg"), filled:r("icon-fullscreen-fill.svg"), duotone:r("icon-fullscreen-duotone.svg") } },
  { id:"grid",          name:"Grid",          tags:["grid","layout","view","tiles"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-grid-outline.svg"), filled:r("icon-grid-fill.svg"), duotone:r("icon-grid-duotone.svg") } },
  { id:"home",          name:"Home",          tags:["home","house","main","dashboard"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-home-outline.svg"), filled:r("icon-home-fill.svg"), duotone:r("icon-home-duotone.svg") } },
  { id:"layout",        name:"Layout",        tags:["layout","panel","sidebar","view"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-layout-outline.svg"), filled:r("icon-layout-fill.svg"), duotone:r("icon-layout-duotone.svg") } },
  { id:"layout-list",   name:"Layout List",   tags:["list","layout","view","rows"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-layout-list-outline.svg"), filled:r("icon-layout-list-fill.svg"), duotone:r("icon-layout-list-duotone.svg") } },
  { id:"marketplace",   name:"Marketplace",   tags:["marketplace","shop","store","market"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-marketplace-outline.svg"), filled:r("icon-marketplace-fill.svg"), duotone:r("icon-marketplace-duotone.svg") } },
  { id:"menu",          name:"Menu",          tags:["menu","hamburger","nav","navigation"],
    styles:["outline","filled","duotone"], svg: uni("icon-menu-outline.svg") },
  { id:"minimise",      name:"Minimise",      tags:["minimise","minimize","collapse","window"],
    styles:["outline","filled","duotone"], svg: uni("icon-minimise.svg") },
  { id:"more",          name:"More",          tags:["more","ellipsis","dots","options"],
    styles:["outline","filled","duotone"], svg: uni("icon-more-outline.svg") },
  { id:"restore-down",  name:"Restore Down",  tags:["restore","window","resize","down"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-restoredown-outline.svg"), filled:r("icon-restoredown-fill.svg"), duotone:r("icon-restoredown-duotone.svg") } },
  { id:"sidebar-left",  name:"Sidebar Left",  tags:["sidebar","panel","left","layout"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-sidebar-left-outline.svg"), filled:r("icon-sidebar-left-fill.svg"), duotone:r("icon-sidebar-left-duotone.svg") } },
  { id:"sidebar-right", name:"Sidebar Right", tags:["sidebar","panel","right","layout"],
    styles:["outline","filled","duotone"],
    svg:{ outline:r("icon-sidebar-right-outline.svg"), filled:r("icon-sidebar-right-fill.svg"), duotone:r("icon-sidebar-right-duotone.svg") } },
  { id:"swap",          name:"Swap",          tags:["swap","switch","exchange","arrows"],
    styles:["outline","filled","duotone"], svg: uni("icon-swap.svg") },
];

const entries = nav.map(icon => `  {
    id: "${icon.id}",
    name: "${icon.name}",
    tags: ${JSON.stringify(icon.tags)},
    category: "navigation",
    styles: ${JSON.stringify(icon.styles)},
    svg: {
      outline:  \`${icon.svg.outline}\`,
      filled:   \`${icon.svg.filled}\`,
      duotone:  \`${icon.svg.duotone}\`,
    },
  }`).join(",\n");

const out = `import type { Icon, IconCategory, IconStyle } from "./types";

export const CATEGORY_LABELS: Record<IconCategory, string> = {
  "navigation":            "Navigation",
  "search-discovery":      "Search & Discovery",
  "data-actions":          "Data Actions",
  "calendar-scheduling":   "Calendar & Scheduling",
  "communications":        "Communications",
  "sharing":               "Sharing",
  "documents-content":     "Documents & Content",
  "workflow-productivity": "Workflow & Productivity",
  "user-id":               "User & ID",
  "status-feedback":       "Status & Feedback",
  "security-access":       "Security & Access",
  "analytics-reports":     "Analytics & Reports",
  "settings-admin":        "Settings & Admin",
  "system-utility":        "System & Utility",
  "ai":                    "AI",
  "sector-health":         "Health",
};

// Categories in display order
export const CATEGORY_ORDER: IconCategory[] = [
  "navigation",
  "search-discovery",
  "data-actions",
  "calendar-scheduling",
  "communications",
  "sharing",
  "documents-content",
  "workflow-productivity",
  "user-id",
  "status-feedback",
  "security-access",
  "analytics-reports",
  "settings-admin",
  "system-utility",
  "ai",
  "sector-health",
];

// Categories that belong to the Sector group (rendered under a "Sector" heading)
export const SECTOR_CATEGORIES = new Set<IconCategory>(["sector-health"]);

export const ICON_STYLES: IconStyle[] = ["outline", "filled", "duotone"];

export const STYLE_LABELS: Record<IconStyle, string> = {
  outline: "Outline",
  filled:  "Filled",
  duotone: "Duotone",
  thin:    "Thin",
};

export const icons: Icon[] = [
${entries},
];

export function getIconsByCategory() {
  const grouped = new Map<string, Icon[]>();
  for (const icon of icons) {
    const existing = grouped.get(icon.category) ?? [];
    grouped.set(icon.category, [...existing, icon]);
  }
  return grouped;
}

export function searchIcons(query: string, style?: string, category?: string): Icon[] {
  const q = query.toLowerCase().trim();
  return icons.filter((icon) => {
    if (category && icon.category !== category) return false;
    if (style && !icon.styles.includes(style as IconStyle)) return false;
    if (!q) return true;
    return (
      icon.name.toLowerCase().includes(q) ||
      icon.tags.some((t) => t.includes(q)) ||
      icon.category.includes(q)
    );
  });
}
`;

process.stdout.write(out);
