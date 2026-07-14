# Badge Specification

## Purpose

This document defines how action modifier symbols are applied to existing icons.

Badges are a supporting pattern used to communicate an additional action, state, or modifier without changing the primary icon concept.

Examples:

- User + Add
- File + Remove
- Item + Edit
- Chat + Close

A badge is not a default solution.

The preferred approach is:

1. Integrate the modifier directly into the icon where possible.
2. Use a badge only when the modifier cannot be incorporated clearly.

The goal is to maintain a simple, recognisable icon system rather than adding unnecessary visual complexity.

---

# Badge Decision Rules

## Inline Modifier Preferred

Before creating a badge, determine whether the modifier can be incorporated into the primary icon body.

If sufficient space exists within the icon, the modifier should become part of the main icon construction.

Inline modifiers are preferred because they:

- Preserve the primary silhouette.
- Keep the icon compact.
- Avoid covering important details.
- Maintain stronger recognition at small sizes.
- Create a more natural relationship between the object and the action.

Examples:

- Calendar icons with add or state indicators integrated into the calendar form.
- Chat icons with action indicators integrated into the chat bubble.
- Document icons with edit or state indicators inside the document area.

---

## Inline Modifier References

When deciding whether a modifier should be integrated or placed as a badge, review existing examples.

### Calendar References

Use:

- Appointment-new
- Deadline
- Event

These demonstrate how actions and states can be integrated directly into the icon.

### Chat References

Use:

- New chat
- Close chat

These demonstrate how actions can become part of the primary icon construction.

Existing library examples always take priority over creating new badge patterns.

---

## When To Use A Badge

A badge should only be used when:

- The icon has insufficient internal space.
- The modifier would reduce recognition if placed internally.
- The modifier represents a secondary action rather than part of the object itself.
- The additional meaning requires separation from the primary concept.

A badge is a fallback pattern, not the default.

Do not add a badge simply because an action modifier exists.

---

# Badge Geometry

## Default Position

Badges are positioned in the bottom-right corner of the icon.

Default geometry:

- Diameter: 12px
- Radius: 6px
- Centre position: `(18, 18)`

The badge intentionally extends beyond the normal icon padding.

The badge may reach:

- Right edge: x = 24
- Bottom edge: y = 24

This is an intentional exception to the standard 1px padding rule.

---

## Badge Relationship To Main Icon

The badge should feel integrated into the icon composition.

Do not simply place a badge over an unchanged icon.

The primary icon must be adjusted to accommodate the badge.

Avoid:

- Covering important icon details.
- Reducing recognition of the primary object.
- Creating a sticker or overlay appearance.

---

## Badge Cutout Rule

The badge area must be removed from the main icon geometry.

The badge should appear embedded into the icon rather than placed above it.

The preferred construction method is a compound path using:

```svg
fill-rule="evenodd"
```

Construction:

1. Create the primary icon geometry.
2. Create the badge exclusion circle.
3. Combine the paths.
4. Apply even-odd fill behaviour.
5. Place the badge into the resulting cutout area.

Conceptually:

```svg
<path
  fill="currentColor"
  fill-rule="evenodd"
  d="
    PRIMARY_ICON_PATH
    BADGE_CUTOUT_PATH
  "
/>
```

The cutout must:

- Match the badge position.
- Remove only the required area.
- Preserve the remaining icon silhouette.

Do not use:

- White fills.
- Background-coloured masks.
- Overlay circles.
- Hardcoded background colours.

---

# Colour System

## General Rule

All badge elements must inherit colour from the design system.

Use:

```svg
fill="currentColor"
```

Never use:

- Hardcoded hex colours.
- RGB values.
- White fills.
- Background-colour fills.

The badge must support theme inheritance in the same way as all other icons.

---

## Badge Colour Behaviour By Variant

### Outline

Badge ring:

```svg
fill="currentColor"
```

Modifier symbol:

```svg
fill="currentColor"
```

The badge remains an outline treatment.

### Fill

Badge circle:

```svg
fill="currentColor"
```

Modifier symbol: removed through negative space, not drawn as a separate coloured element.

### Duotone

Badge circle:

```svg
fill="currentColor"
fill-opacity="0.2"
```

Modifier symbol:

```svg
fill="currentColor"
```

The badge circle is always the secondary tint layer.

---

# Stroke Rules

## No Stroke Exception

Badge elements follow the global icon construction rule:

All final SVG output must use filled paths only.

Do not use:

- `stroke`
- `stroke-width`
- `stroke-linecap`
- `stroke-linejoin`

This applies to:

- Badge rings.
- Plus symbols.
- Minus symbols.
- Close symbols.
- Edit symbols.

All badge geometry must be converted into filled paths.

The previous stroke-based badge symbol approach is deprecated.

---

## Badge Symbol Weight

Badge symbols use a dedicated weight rule.

At the native 24×24px canvas:

**Badge symbol visual weight: 1.5px**

This applies to:

- Add (+)
- Remove (−)
- Close (×)
- Edit

This rule overrides the general action symbol rule. Do not use 2px Chonky weight for badge symbols. The badge circle already provides emphasis — the internal symbol should remain balanced.

Badge symbols scale proportionally with icon size.

---

# Variant Construction

Each badge variant must follow the visual language of its parent icon variant.

The badge is not a separate component style.

---

## Outline Badge

### Purpose

The outline badge communicates through linework only. It should feel lightweight and consistent with the outline icon style.

### Construction Order

1. Primary outline icon geometry.
2. Badge cutout.
3. Badge outline ring.
4. Modifier symbol.

### Rules

The badge is represented as an outline circle.

The badge ring:

- Uses filled path geometry.
- Uses `fill="currentColor"`.
- Matches the visual weight of the icon outline.

The modifier symbol:

- Uses filled path geometry.
- Uses 1.5px visual weight.
- Uses rounded terminals where appropriate.
- Does not use SVG strokes.

The badge should never become a filled circle.

---

## Fill Badge

### Purpose

The fill badge communicates through silhouette and negative space. It should feel like a natural extension of the filled icon.

### Construction Order

1. Primary filled icon silhouette.
2. Badge cutout.
3. Solid badge circle.
4. Modifier symbol removed as negative space.

### Rules

The badge circle:

```svg
fill="currentColor"
```

The modifier symbol is created by removing geometry from the badge circle.

Preferred construction:

```svg
fill-rule="evenodd"
```

The final appearance should be:

- Solid colour badge circle.
- Transparent modifier symbol cut through the badge.

Do not:

- Place a coloured symbol inside the badge.
- Use white symbol fills.
- Use strokes.

---

## Duotone Badge

### Purpose

The duotone badge combines a supporting tint layer with a primary modifier symbol. It should feel integrated into the duotone icon system.

### Construction Order

1. Icon tint layer.
2. Badge cutout.
3. Icon detail layer.
4. Badge tint circle.
5. Modifier symbol.

### Rules

The badge circle is the secondary tint layer:

```svg
fill="currentColor"
fill-opacity="0.2"
```

The modifier symbol uses the primary colour:

```svg
fill="currentColor"
```

The badge must contain:

- A 20% opacity filled circle.
- A full-opacity symbol above it.

Do not:

- Use a solid colour badge circle.
- Introduce additional colours.
- Use opacity values other than 20%.

---

# Common Badge Symbols

## Add

Meaning: Create, New, Add

Construction:

- Plus symbol.
- Filled path geometry.
- 1.5px visual weight at 24px.
- Rounded terminals.
- Centred within badge.

---

## Remove

Meaning: Remove, Subtract, Disable

Construction:

- Minus symbol.
- Filled path geometry.
- 1.5px visual weight at 24px.
- Rounded terminals.
- Centred within badge.

---

## Close

Meaning: Close, Delete, Dismiss

Construction:

- Cross symbol.
- Filled path geometry.
- 1.5px visual weight at 24px.
- Rounded terminals.
- Centred within badge.

---

## Edit

Meaning: Modify, Update, Change

Construction:

- Simplified edit/pencil symbol.
- Filled path geometry.
- 1.5px visual weight at 24px.
- Must remain recognisable at badge scale.

---

# Reference Icons

Before creating new badge icons, review existing examples.

## Badge References

Required reading:

- `raw-icons/User & ID/` — user-add, user-remove, user-edit

These define the expected badge construction pattern.

## Inline Modifier References

Required reading:

- `raw-icons/Calendar & scheduling/` — appointment-new, deadline, event
- `raw-icons/Communications/` — new chat, close chat

These define when modifiers should be integrated directly into the icon rather than using a badge.

---

# SVG Path Data

Canonical badge geometry lives in the reference SVG files, not this document.

This document defines:

- Construction rules.
- Geometry rules.
- Colour rules.
- Variant behaviour.
- Decision rules.

Reference SVG files define:

- Exact badge paths.
- Approved proportions.
- Symbol geometry.
- Final implementation examples.

When creating a new badge:

1. Review existing reference SVGs.
2. Reuse established geometry where possible.
3. Only create new badge geometry when no suitable reference exists.

---

# Final Badge Checklist

Before creating a badge:

- [ ] Could the modifier be integrated into the icon body?
- [ ] Have inline modifier examples been reviewed?
- [ ] Is a badge genuinely required?

Before completing a badge:

- [ ] Uses 12px diameter geometry.
- [ ] Uses `(18, 18)` centre position.
- [ ] Intentionally allows canvas edge bleed.
- [ ] Main icon contains a badge cutout.
- [ ] Uses `currentColor`.
- [ ] Uses filled paths only.
- [ ] Uses no SVG strokes.
- [ ] Uses 1.5px badge symbol visual weight.
- [ ] Does not use 2px Chonky weight.
- [ ] Outline badge uses a ring.
- [ ] Fill badge removes the symbol as negative space.
- [ ] Duotone badge uses a 20% opacity circle.
- [ ] Matches existing reference icons.
