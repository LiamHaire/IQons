# raw-icons

Drop SVG files here to have them automatically appear in the icon browser.

## Folder structure

```
raw-icons/
  <category>/
    <icon-id>/
      outline.svg
      filled.svg
      duotone.svg
      thin.svg
      meta.json      ← optional
```

### Category names

Must match one of the category IDs defined in `lib/types.ts`:

- `navigation`
- `search-discovery`
- `data-actions`
- `calendar-scheduling`
- `communications`
- `sharing`
- `documents-content`
- `workflow-productivity`
- `user-id`
- `status-feedback`
- `security-access`
- `analytics-reports`
- `settings-admin`
- `system-utility`
- `ai`
- `sector-health`

### Icon ID

Use kebab-case, e.g. `bell`, `arrow-down`, `user-circle`. This becomes the icon's unique ID. If the ID already exists in the hardcoded list (`lib/icons.ts`), the raw SVG file wins for that style.

### Styles

Place as many style variants as you have. Only `outline.svg` is required; the others are optional.

### meta.json (optional)

Override the auto-generated name and tags:

```json
{
  "name": "Bell Notification",
  "tags": ["bell", "alert", "notification", "ring"]
}
```

If omitted, the name is derived from the icon ID (kebab-case → Title Case) and tags default to the words in the name.
