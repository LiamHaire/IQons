import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const SRC = "C:/Users/liam.haire/Downloads/Iqons";
const ALL_STYLES = ["outline", "filled", "duotone"];
const files = readdirSync(SRC).filter(f => f.endsWith(".svg"));

const styleMap = { fill: "filled", outline: "outline", duotone: "duotone" };

// Parse filename → { name, style }
function parseFile(fname) {
  const base = fname.replace(/^icon-/, "").replace(/\.svg$/, "");
  for (const [suffix, style] of [["duotone","duotone"],["fill","filled"],["outline","outline"]]) {
    if (base.endsWith("-" + suffix)) {
      return { name: base.slice(0, -(suffix.length+1)), style };
    }
  }
  return { name: base, style: null }; // no style suffix = single universal icon
}

// Group by icon name
const groups = {};
for (const f of files) {
  const { name, style } = parseFile(f);
  if (!groups[name]) groups[name] = {};
  const key = style || "_universal";
  groups[name][key] = f;
}

function normSvg(raw) {
  return raw
    .replace(/\s*width="24"\s*/g, " ")
    .replace(/\s*height="24"\s*/g, " ")
    .replace(/\s*xmlns="[^"]*"\s*/g, " ")
    .replace(/\s*viewBox="[^"]*"\s*/g, " ")
    .replace(/<svg\s+/g, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" `)
    .replace(/fill="#424138"/g, 'fill="currentColor"')
    .replace(/stroke="#424138"/g, 'stroke="currentColor"')
    .replace(/fill="#E2DDCD"/g, 'fill="currentColor" fill-opacity="0.15"')
    .replace(/\s{2,}/g, " ")
    .trim();
}

const nameMeta = {
  "arrow-down":    { label: "Arrow Down",    tags: ["arrow","down","navigate","direction"] },
  "arrow-left":    { label: "Arrow Left",    tags: ["arrow","left","navigate","back"] },
  "arrow-right":   { label: "Arrow Right",   tags: ["arrow","right","navigate","forward"] },
  "arrow-up":      { label: "Arrow Up",      tags: ["arrow","up","navigate","direction"] },
  "chevron-down":  { label: "Chevron Down",  tags: ["chevron","down","expand","dropdown"] },
  "chevron-left":  { label: "Chevron Left",  tags: ["chevron","left","back","previous"] },
  "chevron-right": { label: "Chevron Right", tags: ["chevron","right","forward","next"] },
  "chevron-up":    { label: "Chevron Up",    tags: ["chevron","up","collapse","expand"] },
  "close":         { label: "Close",         tags: ["close","dismiss","x","cancel","remove"] },
  "fullscreen":    { label: "Fullscreen",    tags: ["fullscreen","expand","maximize","view"] },
  "grid":          { label: "Grid",          tags: ["grid","layout","view","tiles"] },
  "home":          { label: "Home",          tags: ["home","house","main","dashboard"] },
  "layout":        { label: "Layout",        tags: ["layout","panel","sidebar","view"] },
  "layout-list":   { label: "Layout List",   tags: ["list","layout","view","rows"] },
  "marketplace":   { label: "Marketplace",   tags: ["marketplace","shop","store","market"] },
  "menu":          { label: "Menu",          tags: ["menu","hamburger","nav","navigation"] },
  "minimise":      { label: "Minimise",      tags: ["minimise","minimize","collapse","window"] },
  "more":          { label: "More",          tags: ["more","ellipsis","dots","options","overflow"] },
  "restoredown":   { label: "Restore Down",  tags: ["restore","window","resize","down"] },
  "sidebar-left":  { label: "Sidebar Left",  tags: ["sidebar","panel","left","layout"] },
  "sidebar-right": { label: "Sidebar Right", tags: ["sidebar","panel","right","layout"] },
  "swap":          { label: "Swap",          tags: ["swap","switch","exchange","arrows","transfer"] },
};

let out = "";
for (const [name, styleFiles] of Object.entries(groups)) {
  const meta = nameMeta[name] || { label: name, tags: [name] };
  const isUniversal = "_universal" in styleFiles;

  let styles, svgLines;
  if (isUniversal) {
    // Single SVG shown for all styles
    const raw = readFileSync(join(SRC, styleFiles["_universal"]), "utf8");
    const normed = normSvg(raw);
    styles = ALL_STYLES;
    svgLines = ALL_STYLES.map(s => `      ${s}: \`${normed}\``).join(",\n");
  } else {
    styles = Object.keys(styleFiles);
    svgLines = Object.entries(styleFiles).map(([style, fname]) => {
      const raw = readFileSync(join(SRC, fname), "utf8");
      return `      ${style}: \`${normSvg(raw)}\``;
    }).join(",\n");
  }

  out += `  {\n    id: "${name}",\n    name: "${meta.label}",\n    tags: ${JSON.stringify(meta.tags)},\n    category: "navigation",\n    styles: ${JSON.stringify(styles)},\n    svg: {\n${svgLines},\n    },\n  },\n`;
}

console.log(out);
