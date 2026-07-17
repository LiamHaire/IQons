# IQons Build Pipeline

Status of the developer resource pipeline. Updated as steps are completed.

---

## Completed

### Step 1 — File naming convention
All SVGs renamed to `<name>-<variant>.svg` inside `raw-icons/<Category>/`.
No `icon-` prefix, no category prefix in filename.
Figma export convention: name components `<name>/outline`, `<name>/fill`, `<name>/duotone` and exports match automatically.

### Step 2 — Metadata + manifest
- `raw-icons/<Category>/<name>.json` sidecar per icon (title, description, keywords, aliases, variants)
- `icons.json` at repo root — compiled manifest for MCP/AI tools
- `npm run gen:meta` — generates sidecars for new icons (safe to re-run)
- `npm run build:manifest` — rebuilds icons.json

### Step 3 — React package
- `packages/iqons-react/` — 229 typed React components
- Props: `variant` (outline/fill/duotone), `size`, `label`, all SVG props
- `npm run build:react` — regenerates components from raw SVGs

### Step 4 — Bundler
- tsup bundles `packages/iqons-react/src/` → `dist/` (ESM + CJS + TypeScript declarations)
- `cd packages/iqons-react && npm run build` — full build
- Package is `npm link`'d locally for testing without publishing

### Step 5 — ShadCN registry
- `registry/<id>.json` per icon — installable via `npx shadcn add`
- `registry.json` index at repo root
- Install command: `npx shadcn add https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/<id>.json`
- `npm run build:registry` — regenerates registry files

---

## Remaining

### Step 6 — MCP server
AI tool discoverability — allows Claude and other AI dev tools to search icons by description and suggest the right one automatically.
**Decisions needed:** hosting location (Vercel, self-hosted, etc.), authentication requirements.

### Step 7 — GitHub Action
Auto-rebuilds manifest, React package and registry on every push to master. Removes the manual build step when new icons are added.
**Decisions needed:** which branch(es) trigger the action, npm registry credentials for publish.

### Step 8 — Pre-commit hook
Rejects SVG files that don't follow the naming convention before they land in the repo. Catches old Figma export names automatically.
**No external decisions needed** — can be built any time.

---

## Adding new icons (current manual workflow)

1. Drop SVGs into `raw-icons/<Category>/` using clean naming (`name-variant.svg`)
2. `npm run gen:meta` — creates .json sidecars for new icons only
3. `npm run build:manifest` — rebuilds icons.json
4. `cd packages/iqons-react && npm run build` — regenerates React components and bundles
5. `npm run build:registry` — regenerates ShadCN registry files
6. Commit and push

> Steps 3–5 will be replaced by the GitHub Action in Step 7.

---

## Decisions needed before publishing

- npm publish destination: public npm, Azure Artifacts, or GitHub Packages?
- MCP server hosting
- Who owns the npm publish step and on what release cadence?
