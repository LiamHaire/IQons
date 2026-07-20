/**
 * Finalises the Figma plugin by injecting plugin-data.json into ui.html.
 * Reads ui.html as a template, replaces __PLUGIN_DATA__, writes to dist/ui.html.
 * The manifest.json points to dist/ui.html at runtime.
 *
 * Run: node scripts/build-plugin.mjs
 * (Or use npm run build:plugin which runs build-plugin-data first)
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";

const DATA_FILE = "figma-plugin/plugin-data.json";
const TEMPLATE  = "figma-plugin/ui.html";
const OUT_DIR   = "figma-plugin/dist";
const OUT_FILE  = `${OUT_DIR}/ui.html`;

mkdirSync(OUT_DIR, { recursive: true });

const data = readFileSync(DATA_FILE, "utf8").trim();
let   ui   = readFileSync(TEMPLATE,  "utf8");

if (!ui.includes("__PLUGIN_DATA__")) {
  console.error("ERROR: __PLUGIN_DATA__ placeholder not found in ui.html");
  process.exit(1);
}

ui = ui.replace("__PLUGIN_DATA__", data);

writeFileSync(OUT_FILE, ui);
copyFileSync("figma-plugin/code.js", `${OUT_DIR}/code.js`);
console.log(`Plugin built → ${OUT_DIR}/ (${Math.round(ui.length / 1024)}kb total)`);
