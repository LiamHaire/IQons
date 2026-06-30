import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const SRC = "C:/Users/liam.haire/Downloads/Iqons";
const ICONS_TS = "C:/Users/liam.haire/iqons/lib/icons.ts";

function normSvg(raw) {
  return raw
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/ width="24"/, "")
    .replace(/ height="24"/, "")
    .replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, "")
    .replace(/viewBox="0 0 24 24"/, 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"')
    .replace(/fill="#424138"/g, 'fill="currentColor"')
    .replace(/stroke="#424138"/g, 'stroke="currentColor"')
    .replace(/fill="#E2DDCD"/g, 'fill="currentColor" fill-opacity="0.15"')
    .trim();
}

function readSvg(name) {
  const path = join(SRC, name);
  try { return normSvg(readFileSync(path, "utf8")); } catch { return null; }
}

const icons = [
  { id: "arrow-down",    name: "Arrow Down",    tags: ["arrow","down","navigate","direction"],    files: { outline: "icon-arrow-down.svg" } },
  { id: "arrow-left",    name: "Arrow Left",    tags: ["arrow","left","navigate","back"],          files: { outline: "icon-arrow-left.svg" } },
  { id: "arrow-right",   name: "Arrow Right",   tags: ["arrow","right","navigate","forward"],      files: { outline: "icon-arrow-right.svg" } },
  { id: "arrow-up",      name: "Arrow Up",      tags: ["arrow","up","navigate","direction"],       files: { outline: "icon-arrow-up.svg" } },
  { id: "chevron-down",  name: "Chevron Down",  tags: ["chevron","down","expand","dropdown"],      files: { outline: "icon-chevron-down.svg" } },
  { id: "chevron-left",  name: "Chevron Left",  tags: ["chevron","left","back","previous"],        files: { outline: "icon-chevron-left.svg" } },
  { id: "chevron-right", name: "Chevron Right", tags: ["chevron","right","forward","next"],        files: { outline: "icon-chevron-right.svg" } },
  { id: "chevron-up",    name: "Chevron Up",    tags: ["chevron","up","collapse","expand"],        files: { outline: "icon-chevron-up.svg" } },
  { id: "close",         name: "Close",         tags: ["close","dismiss","x","cancel","remove"],  files: { outline: "icon-close-outline.svg", filled: "icon-close-fill.svg", duotone: "icon-close-duotone.svg" } },
  { id: "fullscreen",    name: "Fullscreen",    tags: ["fullscreen","expand","maximize","view"],   files: { outline: "icon-fullscreen-outline.svg", filled: "icon-fullscreen-fill.svg", duotone: "icon-fullscreen-duotone.svg" } },
  { id: "grid",          name: "Grid",          tags: ["grid","layout","view","tiles"],            files: { outline: "icon-grid-outline.svg", filled: "icon-grid-fill.svg", duotone: "icon-grid-duotone.svg" } },
  { id: "home",          name: "Home",          tags: ["home","house","main","dashboard"],         files: { outline: "icon-home-outline.svg", filled: "icon-home-fill.svg", duotone: "icon-home-duotone.svg" } },
  { id: "layout",        name: "Layout",        tags: ["layout","panel","sidebar","view"],         files: { outline: "icon-layout-outline.svg", filled: "icon-layout-fill.svg", duotone: "icon-layout-duotone.svg" } },
  { id: "layout-list",   name: "Layout List",   tags: ["list","layout","view","rows"],             files: { outline: "icon-layout-list-outline.svg", filled: "icon-layout-list-fill.svg", duotone: "icon-layout-list-duotone.svg" } },
  { id: "marketplace",   name: "Marketplace",   tags: ["marketplace","shop","store","market"],     files: { outline: "icon-marketplace-outline.svg", filled: "icon-marketplace-fill.svg", duotone: "icon-marketplace-duotone.svg" } },
  { id: "menu",          name: "Menu",          tags: ["menu","hamburger","nav","navigation"],     files: { outline: "icon-menu-outline.svg" } },
  { id: "minimise",      name: "Minimise",      tags: ["minimise","minimize","collapse","window"], files: { outline: "icon-minimise.svg" } },
  { id: "more",          name: "More",          tags: ["more","ellipsis","dots","options"],        files: { outline: "icon-more-outline.svg" } },
  { id: "restore-down",  name: "Restore Down",  tags: ["restore","window","resize","down"],        files: { outline: "icon-restoredown-outline.svg", filled: "icon-restoredown-fill.svg", duotone: "icon-restoredown-duotone.svg" } },
  { id: "sidebar-left",  name: "Sidebar Left",  tags: ["sidebar","panel","left","layout"],         files: { outline: "icon-sidebar-left-outline.svg", filled: "icon-sidebar-left-fill.svg", duotone: "icon-sidebar-left-duotone.svg" } },
  { id: "sidebar-right", name: "Sidebar Right", tags: ["sidebar","panel","right","layout"],        files: { outline: "icon-sidebar-right-outline.svg", filled: "icon-sidebar-right-fill.svg", duotone: "icon-sidebar-right-duotone.svg" } },
  { id: "swap",          name: "Swap",          tags: ["swap","switch","exchange","arrows"],       files: { outline: "icon-swap.svg" } },
];

let newEntries = "";
for (const icon of icons) {
  const styleKeys = Object.keys(icon.files);
  // single-SVG icons (arrow/chevron/menu/minimise/more/swap) — same SVG for all three display styles
  const isUniversal = styleKeys.length === 1 && !["close","fullscreen","grid","home","layout","layout-list","marketplace","restore-down","sidebar-left","sidebar-right"].includes(icon.id);

  let svgBlock = "";
  if (isUniversal) {
    const svg = readSvg(icon.files[styleKeys[0]]);
    svgBlock = `      outline:  \`${svg}\`,\n      filled:   \`${svg}\`,\n      duotone:  \`${svg}\`,`;
  } else {
    const parts = [];
    if (icon.files.outline) parts.push(`      outline:  \`${readSvg(icon.files.outline)}\``);
    if (icon.files.filled)  parts.push(`      filled:   \`${readSvg(icon.files.filled)}\``);
    if (icon.files.duotone) parts.push(`      duotone:  \`${readSvg(icon.files.duotone)}\``);
    svgBlock = parts.join(",\n") + ",";
  }

  const styles = isUniversal ? `["outline", "filled", "duotone"]` : JSON.stringify(styleKeys);

  newEntries += `  {
    id: "${icon.id}",
    name: "${icon.name}",
    tags: ${JSON.stringify(icon.tags)},
    category: "navigation",
    styles: ${styles},
    svg: {
${svgBlock}
    },
  },\n`;
}

let src = readFileSync(ICONS_TS, "utf8");

// Remove placeholder star icon (navigation category)
src = src.replace(/  \{\n    id: "star"[\s\S]*?\n  \},\n/, "");

// Insert nav icons before the closing ]; of the icons array (last ]; in file)
const lastBracket = src.lastIndexOf("];\r\n") !== -1 ? src.lastIndexOf("];\r\n") : src.lastIndexOf("];\n");
if (lastBracket === -1) throw new Error("Could not find icons array closing bracket");
src = src.slice(0, lastBracket) + newEntries + src.slice(lastBracket);

writeFileSync(ICONS_TS, src, "utf8");
console.log(`Injected ${icons.length} navigation icons.`);
