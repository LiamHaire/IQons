import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const navIcons = execSync("node scripts/gen-icons.mjs", { cwd: "C:/Users/liam.haire/iqons" }).toString();

const iconsPath = "C:/Users/liam.haire/iqons/lib/icons.ts";
let src = readFileSync(iconsPath, "utf8");

// Remove the placeholder star icon (navigation category)
src = src.replace(/\s*\{[\s\S]*?id:\s*"star"[\s\S]*?\},\n/m, "\n");

// Inject nav icons before the closing bracket of the icons array
src = src.replace(/^(\];)$/m, navIcons + "$1");

writeFileSync(iconsPath, src, "utf8");
console.log("Done");
