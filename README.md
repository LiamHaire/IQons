# IQons

A design-system icon library for React with outline, fill, and duotone variants. Icons are available as a React npm package and as individually installable components via the ShadCN registry.

---

## Icon browser

The icon browser runs locally with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse, search, filter by category and style, and copy usage snippets.

---

## Installation

### Option 1 — npm package

Install the full library and import what you need. Unused icons are tree-shaken at build time.

```bash
npm install iqons-react
```

> **Note:** `iqons-react` is not yet published to the public npm registry. Until it is, install from a local clone (see [Local development](#local-development)) or wait for the publish.

```tsx
import { UserAdd, IDBadge, UserRemove } from 'iqons-react'

<UserAdd variant="outline" size={24} className="text-foreground" />
<IDBadge variant="duotone" size={32} />
```

---

### Option 2 — ShadCN registry (cherry-pick)

Install individual icons directly into your project using the ShadCN CLI. Each icon is copied as a standalone `.tsx` file into `components/ui/` — no library import required once installed.

**Prerequisites:** A project with [ShadCN v2+](https://ui.shadcn.com/docs/installation) already initialised (`npx shadcn init`).

```bash
# Install a single icon
npx shadcn add https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/user-add.json

# Install multiple icons
npx shadcn add \
  https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/user-add.json \
  https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/id-badge.json \
  https://raw.githubusercontent.com/LiamHaire/IQons/master/registry/user-remove.json
```

The icon component lands in your project at `components/ui/UserAdd.tsx` and can be imported and customised like any local component:

```tsx
import { UserAdd } from '@/components/ui/UserAdd'

<UserAdd variant="duotone" size={24} className="text-primary" />
```

> **Current limitation:** Each installed component imports `IqonProps` from `iqons-react`. Until `iqons-react` is published to npm, you also need to install it locally (see [Local development](#local-development)). A future update will make each component fully self-contained with no package dependency.

#### How the ShadCN registry approach works

The ShadCN CLI fetches a JSON file from GitHub that contains the full component source code embedded within it. The CLI then:

1. Copies the component `.tsx` file into your project's `components/ui/` directory
2. Installs any declared npm dependencies (`iqons-react`)

This is the same mechanism used by the official ShadCN component registry (Button, Card, Dialog, etc.), applied to icons. It means:

- **No library lock-in** — the component lives in your codebase and you can modify it freely
- **Cherry-pick** — install only the icons your project actually uses
- **Version-stable** — the installed component reflects the icon at the point of install; updates are opt-in

This approach is distinct from how other icon libraries (Lucide, Phosphor, Heroicons) work — they are npm-only with no per-icon install mechanism.

---

## Usage

All icons share the same props interface:

```tsx
interface IqonProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'outline' | 'fill' | 'duotone'
  size?: number
  label?: string   // sets aria-label for accessibility
}
```

```tsx
// Outline (default)
<UserAdd variant="outline" size={24} />

// Fill
<UserAdd variant="fill" size={24} />

// Duotone — uses currentColor at full opacity + 20% opacity layer
<UserAdd variant="duotone" size={24} />

// Accessible
<UserAdd variant="outline" size={24} label="Add user" />

// Sized inline with text
<UserAdd size={16} className="text-zinc-600" />
```

Icons use `currentColor` throughout, so they inherit colour from CSS and work correctly with Tailwind colour utilities and dark mode.

---

## Repository structure

```
raw-icons/          Source SVG files organised by category folder
  Navigation/
  User & ID/
  ...
icons.json          Generated manifest — all icon metadata (run build:manifest)
registry/           ShadCN registry items — one JSON per icon (run build:registry)
registry.json       ShadCN registry index
packages/
  iqons-react/      npm package source
    src/            Generated React components (run build:react)
    dist/           Built output (ESM + CJS + types)
scripts/
  build-manifest.mjs   Compiles icons.json from raw-icons/
  build-react.mjs      Generates React components and barrel index
  build-registry.mjs   Generates ShadCN registry JSON files
lib/
  loadIcons.ts      Runtime icon loader (used by the browser app)
  icons.ts          Category labels and static metadata
  types.ts          Shared TypeScript types
```

---

## Local development

### Running the icon browser

```bash
npm install
npm run dev
```

### Building the npm package locally

```bash
cd packages/iqons-react
npm install
npm run build
```

To install it in another local project:

```bash
npm install /path/to/iqons/packages/iqons-react
```

### Testing the ShadCN registry locally

The ShadCN CLI requires a URL — it does not accept local file paths. Serve the registry over HTTP:

```bash
# From the repo root
node -e "
const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  const f = path.join(process.cwd(), req.url);
  if (fs.existsSync(f) && fs.statSync(f).isFile()) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(fs.readFileSync(f));
  } else { res.writeHead(404); res.end(); }
}).listen(4001, () => console.log('Registry on http://localhost:4001'));
"
```

Then install from the local server in your test project:

```bash
npx shadcn add http://localhost:4001/registry/user-add.json
```

### Rebuilding generated artifacts

After adding or editing icons in `raw-icons/`, run the build pipeline in order:

```bash
npm run build:manifest   # Rebuilds icons.json
npm run build:react      # Rebuilds packages/iqons-react/src/
npm run build:registry   # Rebuilds registry/ and registry.json
```

---

## Adding icons

See `.claude/skills/create-icon/SKILL.md` for the full process, naming conventions, and design spec.

---

## Roadmap

- [ ] Publish `iqons-react` to npm
- [ ] Make ShadCN registry components fully self-contained (no `iqons-react` dependency)
- [ ] Expand icon set
