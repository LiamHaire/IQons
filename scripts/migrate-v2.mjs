/**
 * Migrates raw-icons to v2.0 SVGs.
 *
 * - Skips Health, Legal, Finance entirely (icons added later)
 * - Fixes naming errors in "raw-icons 2.0" before copying
 * - Replaces SVGs for all other categories
 * - Writes merged/consolidated JSON metadata
 * - Does NOT run downstream builds — do those manually afterwards
 */

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "fs";
import { join } from "path";

const SRC  = "raw-icons 2.0";
const DEST = "raw-icons";

const SKIP_CATEGORIES = ["Health", "Legal", "Finance"];

// ─── Step 1: Fix naming errors in source ────────────────────────────────────

console.log("\n── Step 1: Fix naming errors in source ──");

// organisation-outlineoutline.svg → organisation-outline.svg
const orgDir = join(SRC, "User & ID");
const orgBad  = join(orgDir, "organisation-outlineoutline.svg");
const orgGood = join(orgDir, "organisation-outline.svg");
if (existsSync(orgBad)) {
  if (existsSync(orgGood)) {
    rmSync(orgBad);
    console.log("  Deleted duplicate:", orgBad);
  } else {
    renameSync(orgBad, orgGood);
    console.log("  Renamed:", orgBad, "→", orgGood);
  }
}

// calendar&scheduling-coffee-break-*.svg → coffee-break-*.svg
const calDir = join(SRC, "Calendar & scheduling");
for (const f of readdirSync(calDir)) {
  if (f.startsWith("calendar&scheduling-coffee-break")) {
    const newName = f.replace("calendar&scheduling-coffee-break", "coffee-break");
    renameSync(join(calDir, f), join(calDir, newName));
    console.log("  Renamed:", f, "→", newName);
  }
}

// sign-out-outline-1.svg — delete if sign-out-outline.svg also exists
const navDir = join(SRC, "Navigation");
const soExtra = join(navDir, "sign-out-outline-1.svg");
const soClean  = join(navDir, "sign-out-outline.svg");
if (existsSync(soExtra) && existsSync(soClean)) {
  rmSync(soExtra);
  console.log("  Deleted duplicate:", soExtra);
}

// ─── Step 2: Copy new SVGs into raw-icons (skip Health/Legal/Finance) ───────

console.log("\n── Step 2: Copy new SVGs into raw-icons ──");

const categories = readdirSync(SRC, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const cat of categories) {
  if (SKIP_CATEGORIES.includes(cat)) {
    console.log("  Skipped:", cat);
    continue;
  }

  const srcDir  = join(SRC, cat);
  const destDir = join(DEST, cat);

  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  // Remove old SVGs from destination (keep JSON sidecars — we'll overwrite them below)
  for (const f of readdirSync(destDir)) {
    if (f.endsWith(".svg")) rmSync(join(destDir, f));
  }

  // Copy new SVGs
  let count = 0;
  for (const f of readdirSync(srcDir)) {
    if (!f.endsWith(".svg")) continue;
    copyFileSync(join(srcDir, f), join(destDir, f));
    count++;
  }
  console.log(`  ${cat}: ${count} SVGs copied`);
}

// ─── Step 3: Write metadata ──────────────────────────────────────────────────

console.log("\n── Step 3: Write metadata ──");

function writeMeta(dir, id, meta) {
  const variants = ["outline", "fill", "duotone", "thin"].filter(v =>
    existsSync(join(dir, `${id}-${v}.svg`))
  );
  writeFileSync(
    join(dir, `${id}.json`),
    JSON.stringify({ ...meta, variants }, null, 2) + "\n"
  );
  console.log("  Wrote:", join(dir, `${id}.json`));
}

// ── check (consolidated from: approve + success-round) ──
writeMeta(join(DEST, "Status & feedback"), "check", {
  title: "Check",
  description: "A tick or checkmark indicating confirmation, approval, or a completed action",
  keywords: ["check", "tick", "confirm", "approve", "accept", "done", "complete", "correct", "valid"],
  aliases: ["approve", "accept", "confirm", "tick", "correct", "valid"],
});

// ── check-round (consolidated from: success-round) ──
writeMeta(join(DEST, "Status & feedback"), "check-round", {
  title: "Check Round",
  description: "A tick inside a circle indicating success or a completed action",
  keywords: ["check", "round", "circle", "success", "done", "complete", "tick", "approved"],
  aliases: ["success-round", "check-circle", "done", "complete", "tick-circle", "approve-circle"],
});

// ── check-square (consolidated from: approve-square) ──
writeMeta(join(DEST, "Status & feedback"), "check-square", {
  title: "Check Square",
  description: "A tick inside a square, used for checkboxes and task completion",
  keywords: ["check", "square", "approve", "accept", "checkbox", "tick", "done", "task"],
  aliases: ["approve-square", "checkbox", "confirm-square", "tick-square"],
});

// ── cross (consolidated from: cancel) ──
writeMeta(join(DEST, "Status & feedback"), "cross", {
  title: "Cross",
  description: "An X mark indicating cancellation, rejection, or removal",
  keywords: ["cross", "x", "cancel", "reject", "deny", "decline", "remove", "clear", "close"],
  aliases: ["cancel", "reject", "deny", "decline", "x-mark"],
});

// ── cross-circle (consolidated from: close) ──
writeMeta(join(DEST, "Status & feedback"), "cross-circle", {
  title: "Cross Circle",
  description: "An X mark inside a circle, used to close, dismiss, or remove",
  keywords: ["cross", "circle", "close", "dismiss", "cancel", "remove", "clear", "x"],
  aliases: ["close", "dismiss", "x", "remove", "cancel-circle", "close-circle"],
});

// ── cross-square (consolidated from: cancel-square) ──
writeMeta(join(DEST, "Status & feedback"), "cross-square", {
  title: "Cross Square",
  description: "An X mark inside a square, used to cancel or reject with a square button",
  keywords: ["cross", "square", "cancel", "reject", "stop", "x", "remove"],
  aliases: ["cancel-square", "reject-square", "x-square"],
});

// ── Renamed icons — carry forward existing metadata with old name added as alias ──

const RENAMES = [
  {
    dir: join(DEST, "AI"),
    id: "agent-create",
    meta: {
      title: "Agent Create",
      description: "AI agent capable of performing autonomous tasks",
      keywords: ["agent", "create", "ai", "autonomous", "bot", "assistant", "task", "automation", "new"],
      aliases: ["agent", "ai-agent", "bot", "assistant-agent", "new-agent"],
    },
  },
  {
    dir: join(DEST, "Documents & content"),
    id: "audio-file",
    meta: {
      title: "Audio File",
      description: "An audio file or sound recording",
      keywords: ["audio", "file", "sound", "music", "recording", "mp3", "wav"],
      aliases: ["audio", "sound", "music-file"],
    },
  },
  {
    dir: join(DEST, "Documents & content"),
    id: "image-file",
    meta: {
      title: "Image File",
      description: "An image or photo file",
      keywords: ["image", "file", "photo", "picture", "img", "media", "graphic"],
      aliases: ["image", "photo", "picture", "img"],
    },
  },
  {
    dir: join(DEST, "Documents & content"),
    id: "video-file",
    meta: {
      title: "Video File",
      description: "A video file or recording",
      keywords: ["video", "file", "movie", "film", "clip", "media", "recording", "mp4"],
      aliases: ["video", "movie", "film", "clip"],
    },
  },
  {
    dir: join(DEST, "Communications"),
    id: "communications-send",
    meta: {
      title: "Send",
      description: "Send a message or submit a form",
      keywords: ["send", "submit", "message", "email", "paper-plane", "dispatch"],
      aliases: ["send", "submit", "send-message", "paper-plane"],
    },
  },
  {
    dir: join(DEST, "Communications"),
    id: "conversation-new",
    meta: {
      title: "New Conversation",
      description: "Start a new conversation or thread",
      keywords: ["new", "conversation", "thread", "compose", "start", "chat"],
      aliases: ["new-conversation", "compose", "new-thread"],
    },
  },
  {
    dir: join(DEST, "Navigation"),
    id: "restore-down",
    meta: {
      title: "Restore Down",
      description: "Restore a maximised window back to its previous size",
      keywords: ["restore", "down", "window", "resize", "shrink"],
      aliases: ["restoredown", "restore-window"],
    },
  },
  {
    dir: join(DEST, "Calendar & scheduling"),
    id: "coffee-break",
    meta: {
      title: "Coffee Break",
      description: "A scheduled break or rest period",
      keywords: ["coffee", "break", "rest", "pause", "schedule", "calendar"],
      aliases: ["break", "rest", "pause"],
    },
  },
  // icon-prefix renames
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-circle-dashed",
    meta: {
      title: "Circle Dashed",
      description: "A dashed circle indicating a pending or inactive state",
      keywords: ["circle", "dashed", "pending", "inactive", "empty", "placeholder"],
      aliases: ["circle-dashed", "pending", "empty-state", "placeholder"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-circle-notch",
    meta: {
      title: "Circle Notch",
      description: "Spinning circle used as a loading or progress indicator",
      keywords: ["circle", "notch", "loading", "spinner", "progress", "wait", "busy", "throbber"],
      aliases: ["circle-notch", "spinner", "loading", "loader"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-help",
    meta: {
      title: "Help",
      description: "Help or support information",
      keywords: ["help", "support", "question", "faq", "info", "guide"],
      aliases: ["help", "question", "support", "faq"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-hype",
    meta: {
      title: "Hype",
      description: "Registers excitement or enthusiasm for shared content",
      keywords: ["hype", "excited", "boost", "fire", "energy", "positive", "trending", "reaction"],
      aliases: ["hype", "excited", "boost", "fire", "reaction"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-info-square",
    meta: {
      title: "Info",
      description: "Informational notice or tooltip content",
      keywords: ["info", "information", "about", "notice", "hint", "tooltip"],
      aliases: ["info", "information", "about", "notice"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-warning",
    meta: {
      title: "Warning",
      description: "A warning or caution alert",
      keywords: ["warning", "alert", "caution", "danger", "triangle", "exclamation"],
      aliases: ["warning", "alert", "caution", "danger", "triangle"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-priority-high",
    meta: {
      title: "Priority High",
      description: "High priority item requiring urgent attention",
      keywords: ["priority", "high", "urgent", "critical", "important", "alert"],
      aliases: ["priority-high", "urgent", "critical", "high"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-priority-low",
    meta: {
      title: "Priority Low",
      description: "Low priority item that can be addressed later",
      keywords: ["priority", "low", "minor", "deferred", "later", "backlog"],
      aliases: ["priority-low", "low", "minor", "deferred"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-priority-medium",
    meta: {
      title: "Priority Medium",
      description: "Medium priority item for normal workflow",
      keywords: ["priority", "medium", "normal", "moderate", "standard"],
      aliases: ["priority-medium", "medium", "normal", "moderate"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-signal-high",
    meta: {
      title: "Signal High",
      description: "High signal strength or strong connection",
      keywords: ["signal", "high", "strong", "full", "connection", "bars"],
      aliases: ["signal-high", "signal-full", "strong-signal"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-signal-low",
    meta: {
      title: "Signal Low",
      description: "Low signal strength or weak connection",
      keywords: ["signal", "low", "weak", "poor", "connection", "bars"],
      aliases: ["signal-low", "signal-weak", "weak-signal"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-signal-medium",
    meta: {
      title: "Signal Medium",
      description: "Medium signal strength or moderate connection",
      keywords: ["signal", "medium", "fair", "moderate", "connection", "bars"],
      aliases: ["signal-medium", "signal-fair", "medium-signal"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-thumbs-up",
    meta: {
      title: "Thumbs Up",
      description: "Positive feedback or approval",
      keywords: ["thumbs", "up", "like", "yes", "approve", "positive", "feedback"],
      aliases: ["thumbs-up", "like", "yes"],
    },
  },
  {
    dir: join(DEST, "Status & feedback"),
    id: "icon-thumbs-down",
    meta: {
      title: "Thumbs Down",
      description: "Negative feedback or disapproval",
      keywords: ["thumbs", "down", "dislike", "no", "reject", "negative", "feedback"],
      aliases: ["thumbs-down", "dislike", "no"],
    },
  },
];

for (const { dir, id, meta } of RENAMES) {
  writeMeta(dir, id, meta);
}

// ─── Step 4: Remove stale metadata from old icon names ──────────────────────

console.log("\n── Step 4: Remove stale metadata for retired/renamed icons ──");

const STALE = [
  // Consolidated into check family
  [join(DEST, "Workflow & productivity"), "approve"],
  [join(DEST, "Workflow & productivity"), "approve-square"],
  [join(DEST, "Status & feedback"),       "success-round"],
  // Consolidated into cross family
  [join(DEST, "Workflow & productivity"), "cancel"],
  [join(DEST, "Workflow & productivity"), "cancel-square"],
  [join(DEST, "Navigation"),              "close"],
  // Renamed — old name metadata no longer needed
  [join(DEST, "AI"),                      "agent"],
  [join(DEST, "Documents & content"),     "audio"],
  [join(DEST, "Documents & content"),     "image"],
  [join(DEST, "Documents & content"),     "video"],
  [join(DEST, "Communications"),          "send"],
  [join(DEST, "Communications"),          "new-conversation"],
  [join(DEST, "Navigation"),              "restoredown"],
  [join(DEST, "Status & feedback"),       "circle-dashed"],
  [join(DEST, "Status & feedback"),       "circle-notch"],
  [join(DEST, "Status & feedback"),       "help"],
  [join(DEST, "Status & feedback"),       "hype"],
  [join(DEST, "Status & feedback"),       "info"],
  [join(DEST, "Status & feedback"),       "warning"],
  [join(DEST, "Status & feedback"),       "priority-high"],
  [join(DEST, "Status & feedback"),       "priority-low"],
  [join(DEST, "Status & feedback"),       "priority-medium"],
  [join(DEST, "Status & feedback"),       "signal-high"],
  [join(DEST, "Status & feedback"),       "signal-low"],
  [join(DEST, "Status & feedback"),       "signal-medium"],
  [join(DEST, "Status & feedback"),       "thumbs-up"],
  [join(DEST, "Status & feedback"),       "thumbs-down"],
  [join(DEST, "Status & feedback"),       "error"],
  [join(DEST, "Documents & content"),     "folder-basic"],
];

for (const [dir, id] of STALE) {
  const jsonPath = join(dir, `${id}.json`);
  if (existsSync(jsonPath)) {
    rmSync(jsonPath);
    console.log("  Removed stale:", jsonPath);
  }
}

console.log("\n✓ Migration complete.");
console.log("\nNext steps:");
console.log("  1. npm run build:manifest");
console.log("  2. cd packages/iqons-react && npm run build");
console.log("  3. npm run build:registry");
console.log("  4. npm run build:plugin");
console.log("  5. Review browser at localhost:3000/icons");
console.log("  6. git add . && git commit");
