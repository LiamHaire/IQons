import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const RAW = "raw-icons";

const FOLDER_PREFIXES = {
  "Navigation":              "navigation",
  "Data actions":            "dataactions",
  "Search & discovery":      "search&discovery",
  "Calendar & scheduling":   "calendar&scheduling",
  "Communications":          "communications",
  "Sharing":                 "sharing",
  "Documents & content":     "documents&content",
  "Workflow & productivity":  "workflow&productivity",
  "User & ID":               "user&id",
  "Status & feedback":       "status&feedback",
  "Security & access":       "security&access",
  "Analytics & reports":     "analytics&reports",
  "Settings & admin":        "settings&admin",
  "System & utility":        "system&utility",
  "AI":                      "ai",
  "Layout":                  "layout",
  "Health":                  "health",
  "Education":               "education",
  "Legal":                   "legal",
  "Finance":                 "finance",
};

let renamed = 0;
let skipped = 0;

for (const [folder, prefix] of Object.entries(FOLDER_PREFIXES)) {
  const dir = join(RAW, folder);
  if (!existsSync(dir)) continue;

  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".svg")) continue;

    // Strip "icon-" prefix, then strip category prefix
    let newName = f;
    if (newName.startsWith("icon-")) newName = newName.slice(5);
    if (newName.startsWith(prefix + "-")) newName = newName.slice(prefix.length + 1);

    if (newName === f) {
      skipped++;
      continue;
    }

    const oldPath = join(dir, f);
    const newPath = join(dir, newName);

    execSync(`git mv "${oldPath}" "${newPath}"`);
    console.log(`  ${f} → ${newName}`);
    renamed++;
  }
}

console.log(`\nDone. Renamed: ${renamed}  Already clean: ${skipped}`);
