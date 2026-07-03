Create a new SVG icon for the IQons library based on the user's description: $ARGUMENTS

## Your goal

Generate three SVG variants of the requested icon (outline, fill, duotone) that match the visual style, conventions, and quality of the existing IQons library, then save them to the correct location.

## Step 1 — Study the existing style

Before drawing anything, read a representative sample of existing icons to infer the house style. Run:

```
ls raw-icons/
```

Then read 3–4 icons across different categories — at least one of each variant (outline, fill, duotone) — to understand:
- Path construction approach (pixel-hinted coordinates, sharp corners vs rounded, stroke style)
- How outline differs from fill (outline = stroked paths with `fill="#424138"`; fill = solid filled shape, often inside a rounded rectangle or circle container)
- How duotone layers work: a background shape in `fill="#E2DDCD"` (the tint layer) plus foreground detail paths in `fill="#424138"`
- ViewBox is always `0 0 24 24`, width/height always `24`
- Colors are always literal `#424138` (foreground) and `#E2DDCD` (duotone tint) — never use `currentColor` in the raw files; the app substitutes these at runtime

## Step 2 — Choose the category

Pick the most appropriate category folder from:

| Folder | Category |
|---|---|
| `Navigation` | Arrows, chevrons, directional, menus, layout controls |
| `Search & discovery` | Search, filter, sort, explore |
| `Data actions` | CRUD operations, import/export, clipboard |
| `Calendar & scheduling` | Dates, time, events, reminders |
| `Communications` | Chat, email, notifications, calls |
| `Sharing` | Share, link, social, export |
| `Documents & content` | Files, folders, pages, media |
| `Workflow & productivity` | Tasks, flow, automation, tools |
| `User & ID` | People, profiles, teams, identity |
| `Status & feedback` | Alerts, success, warning, info, loading |
| `Security & access` | Lock, key, shield, permissions, privacy |
| `Analytics & reports` | Charts, graphs, metrics, data |
| `Settings & admin` | Gear, config, admin, preferences |
| `System & utility` | Device, OS, power, clipboard |
| `AI` | AI, magic, generate, model |
| `Finance` | Money, banking, payment, currency |
| `Health` | Medical, wellness, body |
| `Education` | Learning, books, school |
| `Legal` | Law, contract, compliance |

State which category you chose and why before generating.

## Step 3 — Determine the filename prefix

Each category has a filename prefix derived from the folder name (spaces removed, `&` kept):

| Folder | Prefix |
|---|---|
| `Navigation` | `navigation` |
| `Search & discovery` | `search&discovery` |
| `Data actions` | `dataactions` |
| `Calendar & scheduling` | `calendar&scheduling` |
| `Communications` | `communications` |
| `Sharing` | `sharing` |
| `Documents & content` | `documents&content` |
| `Workflow & productivity` | `workflow&productivity` |
| `User & ID` | `user&id` |
| `Status & feedback` | `status&feedback` |
| `Security & access` | `security&access` |
| `Analytics & reports` | `analytics&reports` |
| `Settings & admin` | `settings&admin` |
| `System & utility` | `system&utility` |
| `AI` | `ai` |
| `Finance` | `finance` |
| `Health` | `health` |
| `Education` | `education` |
| `Legal` | `legal` |

## Step 4 — Derive the icon slug

Convert the icon name to lowercase kebab-case. Examples:
- "Arrow Diagonal" → `arrow-diagonal`
- "Bar Chart" → `bar-chart`
- "ID Card" → `id-card`

## Step 5 — Generate the three SVG files

Filenames follow this exact pattern:
```
icon-{prefix}-{slug}-outline.svg
icon-{prefix}-{slug}-fill.svg
icon-{prefix}-{slug}-duotone.svg
```

**Outline** — clean linework icon, single filled path using `fill="#424138"`. Think of it as a precise line-art version — paths describe the outline/stroke of the shape, not a filled silhouette.

**Fill** — solid silhouette. Often (but not always) set inside a rounded rectangle or circle container. Single `fill-rule="evenodd"` path or a small set of paths, all `fill="#424138"`.

**Duotone** — two-layer composition:
1. A background shape in `fill="#E2DDCD"` (the tint) — usually the primary mass of the icon
2. Foreground detail paths in `fill="#424138"` — outlines, details, cutouts drawn over the tint

All three files share this SVG wrapper:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- paths here -->
</svg>
```

## Step 6 — Save the files

Write each file to `raw-icons/{Folder}/` using the Write tool. Use the exact folder name including capitalisation and spaces (e.g. `raw-icons/Security & access/`).

## Step 7 — Confirm

List what was created and tell the user:
- The category chosen and why
- The three filenames
- That the icon will appear live in the browser immediately (no rebuild needed)
- That they can move the files to a different category folder if the category choice isn't right
