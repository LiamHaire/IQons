Create a new SVG icon for the IQons library based on the user's description: $ARGUMENTS

## Your goal

Generate three SVG variants of the requested icon (outline, fill, duotone) that match the visual style, conventions, and quality of the existing IQons library, then save them to the correct location.

## Step 1 — Check for existing matches

Before doing anything else, scan the existing library to avoid duplication.

List all icon files across all category folders:
```
find raw-icons -name "*.svg" | sed 's/.*icon-//' | sed 's/-outline\.svg//' | sed 's/-fill\.svg//' | sed 's/-duotone\.svg//' | sort -u
```

From the resulting list, extract the icon slugs (the part after the category prefix) and compare them against the requested description. Look for:
- **Exact or near-exact name matches** (e.g. request for "lock" when "padlock" exists)
- **Conceptual overlaps** (e.g. request for "warning" when "alert" exists)

Keep this assessment pragmatic — only flag genuinely close matches, not distant ones. If the description is clearly distinct, say so briefly and move on.

**If a close match is found:** Show the user the existing icon slug and category, explain the similarity, and ask:
> **"[icon-name]** already exists in the **[Category]** category and may cover this use case. Would you like to use the existing icon, or proceed with creating a new one?"

Wait for their response. If they want to proceed, continue to Step 2. If they want the existing icon, stop here.

**If no close match is found:** State briefly that no duplicates were found and continue.

### Base icon detection

After the duplicate check, look at the request for action modifier words: **add, new, remove, delete, edit, copy, duplicate, upload, download, send, close**, etc.

If the request implies a variant of an existing icon (e.g. "add medication", "edit document", "remove user"), identify the base icon slug and read all three of its variants before generating anything:

```
cat raw-icons/{Folder}/icon-{prefix}-{slug}-outline.svg
cat raw-icons/{Folder}/icon-{prefix}-{slug}-fill.svg
cat raw-icons/{Folder}/icon-{prefix}-{slug}-duotone.svg
```

Then generate the new icon by **starting from those exact paths** and adding the action modifier — either inline if it fits naturally, or as a badge (see badge rules below) if it doesn't. This ensures visual consistency between the base icon and its action variants.

State which base icon you are building from before generating.

---

## Step 2 — Study the existing style

Before drawing anything, read a representative sample of existing icons from the library. Run:

```
ls raw-icons/
```

Then read 3–4 icons across different categories — at least one of each variant (outline, fill, duotone) — paying attention to how paths are constructed and how the design rules below are applied in practice.

Key file facts:
- ViewBox is always `0 0 24 24`, width/height always `24`
- Colors are always literal `#424138` (foreground) and `#E2DDCD` (duotone tint) — never use `currentColor` in raw files; the app substitutes these at runtime
- All strokes must be converted to filled outline paths — no `stroke` attributes. This ensures consistent scaling at all sizes.

## Step 3 — Apply the IQons design rules

### Canvas & padding
- 24×24px canvas, `viewBox="0 0 24 24"`
- Minimum 1px padding on all four sides — no part of the icon should touch the canvas edge

### Icon sizing by shape
Choose the appropriate bounding box for the icon's primary shape:

| Shape type | Bounding box | Use for |
|---|---|---|
| Circular | 22×22px | Round forms, faces, globes, coins, badges |
| Square | 20×20px | Documents, screens, tiles, cards |
| Rectangular (landscape) | 22×18px | Wide shapes, cameras, screens, banners |
| Rectangular (portrait) | 18×22px | Tall shapes, phones, pages, keys |
| Small / navigational | 16×16px | Arrows, chevrons, simple directional icons |

These are defaults — slight adjustments (e.g. 14×22px) are acceptable to maintain visual balance or correct proportions, but try to adjust only one dimension to preserve consistency.

All icons must be **centred** horizontally and vertically within the 24×24 canvas.

### Action badges (add, edit, remove, etc.)

When an icon conveys an action modifier (add, remove, edit, copy, etc.) and the symbol **cannot logically fit within the main icon shape**, use a **badge** instead.

**Badge specification:**
- **Frame:** Circular, **12px diameter** (radius 6px), centred at `(18, 18)` — sits in the bottom-right corner, bleeding to the canvas edge at `(24, 24)`. This intentionally overlaps the standard 2px padding.
- **No white background circle.** The main icon path must be **redrawn to exclude the badge area** using `fill-rule="evenodd"` with the badge circle as a subpath cutout — this punches a clean hole in the icon shape where the badge sits. The badge then sits directly on the background with no overlap. See `raw-icons/User & ID/icon-user&id-user-add-outline.svg` for reference.

**Outline badge:**
1. Icon path redrawn with badge area cut out (trimmed at the `r=6` boundary)
2. Badge ring (1.5px, `r=6` outer / `r=4.5` inner): `<path d="M22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5V24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18C24 21.3137 21.3137 24 18 24V22.5C20.4853 22.5 22.5 20.4853 22.5 18Z" fill="#424138"/>`
3. Symbol stroke in `#424138`

**Fill badge:**
1. Icon silhouette as `evenodd`(outer pill path + badge circle subpath) — punches hole where badge sits
2. Solid badge circle: `<path d="M18 12C21.3137 12 24 14.6863 24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12Z" fill="#424138"/>`
3. Symbol stroke in `white`

**Duotone badge:**
1. Icon tint as `evenodd`(outer pill silhouette + badge circle subpath) — punches hole where badge sits, fills rest with `#E2DDCD`
2. Icon ring path (trimmed at badge boundary) in `#424138` — upper lobe reads as ring, lower lobe shows tint through
3. Solid accent fill badge circle: `<path d="M18 12C21.3137 12 24 14.6863 24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12Z" fill="#E2DDCD"/>`
4. Badge ring on top of accent fill (same ring path as outline): `fill="#424138"`
5. Symbol stroke in `#424138`

- **Symbol lines:** Use `stroke` with `stroke-linecap="round"` and `stroke-width="1.5"` — this is the one exception to the no-stroke rule. Stroke colour is `#424138` on outline/duotone, `white` on fill.

**Common badge symbols centred at (18, 18):**
- **Add (+):**
  ```
  <path d="M18 15.75V20.25" stroke="#424138" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M15.75 18H20.25" stroke="#424138" stroke-width="1.5" stroke-linecap="round"/>
  ```
- **Remove (−):** `<path d="M15.75 18H20.25" stroke="#424138" stroke-width="1.5" stroke-linecap="round"/>`
- **Close/delete (×):**
  ```
  <path d="M16.5 16.5L19.5 19.5" stroke="#424138" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M19.5 16.5L16.5 19.5" stroke="#424138" stroke-width="1.5" stroke-linecap="round"/>
  ```

**Reference icons:** `user-add`, `user-remove`, `user-edit` in `raw-icons/User & ID/` — read these before constructing any badge to match the existing approach exactly.

**When to use a badge vs. inline symbol:**
- Use a badge when the action symbol would crowd or conflict with the primary icon shape
- If the symbol can be incorporated naturally into the icon design (e.g. a plus sign on a document tab), do that instead — badges are a fallback, not a default

### Corner radius
- Default: **2px** on outer corners
- Internal lines/joins: **1px** where a small radius improves the shape
- Sharp (0px) only when the icon concept demands it (e.g. a lightning bolt)
- **No sharp corners anywhere in the icon** — even where two shapes meet (e.g. a rounded body meeting a stick), apply the standard 2px radius. Shapes that appear to have a flat bottom or flat side should still have rounded corners at every vertex.

### Line ends
- All exposed line ends must be **rounded** — never flat/square
- Achieved by using a pill-shaped filled rect (`rx` = half the line width) or by extending the path endpoint with a semicircle
- Applies to all line weights and all variants (outline, fill, duotone)

### Line thickness (strokes converted to filled paths)
| Weight | Width | When to use |
|---|---|---|
| Default | **1.5px** | Almost all lines — outlines, structural forms |
| Slimline | **1px** | Delicate internal detail where 1.5px is too heavy |
| Chonky | **2px** | Action lines inside a container (add +, minus −, cancel ×) |

Chonky lines should only appear inside a circle or square container. Default is the right choice in most cases.

### Shape language
- Simple and geometric — avoid decorative or illustrative detail
- Maintain visual consistency with the existing icon library (study the examples before generating)
- Prefer clean closed paths over complex overlapping shapes

---

## Step 4 — Style variant specifications

### Outline
- Linework only — paths represent the outlines of the shape, not a silhouette
- All paths use `fill="#424138"`, no stroke attributes
- Use **1.5px default line weight** for structural lines, converted to filled paths
- Keep it clean: the outline variant should read clearly at small sizes

### Fill
- Solid silhouette version of the icon
- The primary shape is fully filled with `fill="#424138"`
- Internal negative space (cutouts, holes) created with `fill-rule="evenodd"` or separate white-knockout paths
- Often sits inside a rounded-rectangle or circle container (filled solid)
- Any internal action lines (e.g. + or −) use **2px chonky weight** as white knockout paths

### Duotone
- Two-layer composition:
  1. **Tint layer** (`fill="#E2DDCD"`) — the primary mass of the icon, the largest background shape
  2. **Detail layer** (`fill="#424138"`) — outlines, structural lines, and selective fills drawn over the tint
- **Do not fill every internal space** — leave some areas unfilled for contrast and visual interest. The outline paths from the outline variant typically form the detail layer, with only select enclosed regions receiving the tint fill.
- Study the existing duotone examples carefully before generating — the balance between filled and unfilled areas is key to the style.

---

## Step 5 — Choose the category

Pick the most appropriate folder from:

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

State which category you chose and why.

## Step 6 — Determine the filename prefix

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

## Step 7 — Derive the icon slug

Convert the icon name to lowercase kebab-case:
- "Arrow Diagonal" → `arrow-diagonal`
- "Bar Chart" → `bar-chart`
- "ID Card" → `id-card`

## Step 8 — Generate the three SVG files

Produce the SVG content for all three variants in memory. Do NOT write any files yet.

Filenames (for reference):
```
icon-{prefix}-{slug}-outline.svg
icon-{prefix}-{slug}-fill.svg
icon-{prefix}-{slug}-duotone.svg
```

All three use this wrapper:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- paths here -->
</svg>
```

## Step 9 — Preview for approval

Present the icons for review before saving anything. Show:

1. **Category** chosen and why
2. **Sizing rule** applied and any adjustments
3. **All three SVG variants** displayed inline — render each one at a larger preview size (e.g. `width="96" height="96"`) so the shapes are clearly visible, with the variant name labelled beneath each
4. A clear prompt:

> **Do these look right?**
> Reply **"approve"** to save them to the library, or **"reject"** to discard. You can also say **"adjust: [feedback]"** and I'll revise before saving.

Wait for the user's response before proceeding.

## Step 10 — Save or discard based on response

**If approved:** Write each file to `raw-icons/{Folder}/` using the Write tool. Use the exact folder name including capitalisation and spaces (e.g. `raw-icons/Security & access/`). Then confirm the three filenames and that the icons are live in the browser immediately.

**If rejected:** Confirm the files have been discarded and no changes were made to the library.

**If adjust:** Apply the requested changes and return to Step 8 with the revised previews. Do not save until explicitly approved.
