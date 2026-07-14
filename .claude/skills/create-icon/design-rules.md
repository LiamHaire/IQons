# Icon Design Rules

## Purpose

This document defines the visual system for the icon library.

The purpose of these rules is to ensure that every icon feels like part of the same family, regardless of subject matter or source reference.

These rules govern:

- SVG construction
- Visual proportions
- Geometry
- Colour handling
- Line weights
- Corner treatment
- Shape language
- Reference interpretation

Consistency is more important than novelty.

Reference images should be used to understand the concept of an icon, not copied directly. New icons must be adapted into this visual system.

If a reference conflicts with these rules, these rules take priority.

---

# Core Design Principles

Icons should be:

- Simple
- Geometric
- Clean
- Modern
- Balanced
- Recognisable
- Consistent

Icons should avoid:

- Decorative detail
- Realistic rendering
- Perspective
- Excessive complexity
- Unnecessary internal elements
- Inconsistent proportions
- Visual noise

Every icon should remain recognisable at small sizes.

If removing a detail does not reduce recognition, remove it.

---

# SVG Technical Specification

## Canvas

All icons must use:

```svg
viewBox="0 0 24 24"
width="24"
height="24"
```

The artwork must fit within the 24×24 canvas.

Maintain a minimum of:

- 1px padding from all edges

Icons should be optically centred rather than mathematically centred.

Visual balance takes priority over exact positioning.

---

# Colour System

## Primary Colour

Icons must inherit colour from their parent design system.

Always use:

```svg
fill="currentColor"
```

Never use:

- Hexadecimal colours
- RGB colours
- HSL colours
- Named colours
- Embedded colour variables

Examples of prohibited values:

```svg
fill="#424138"
fill="black"
fill="rgb(0,0,0)"
```

Icons must remain theme-compatible and should adapt automatically to:

- Light mode
- Dark mode
- Brand themes
- Accessibility themes

---

## Duotone Icons

Duotone icons use only two tones:

### Primary

```svg
fill="currentColor"
```

### Secondary

```svg
fill="currentColor"
fill-opacity="0.2"
```

Secondary elements must use exactly 20% opacity.

Do not introduce:

- Additional colours
- Multiple opacity levels
- Fixed tint colours

The icon should derive all colour from `currentColor`.

---

# SVG Construction

## Paths

Icons must use filled paths.

Do not use SVG strokes.

Avoid:

- `stroke`
- `stroke-width`
- `stroke-linecap`
- `stroke-linejoin`

Any stroke-based artwork must be converted into filled outlines before final output.

---

## Geometry

Prefer:

- Simple paths
- Clean curves
- Minimal anchor points
- Closed shapes
- Logical construction

Avoid:

- Excessive nodes
- Hidden geometry
- Unnecessary complexity
- Clipping masks
- Filters

The simplest construction that communicates the concept is preferred.

---

# Visual Balance

Icons should be sized according to perceived visual weight, not only mathematical dimensions.

Different shapes occupy different amounts of space because filled and outlined forms have different visual impact.

---

## Default Size Frames

| Frame | Size | Usage |
|---|---|---|
| Circle | 22×22px diameter | Circular objects, faces, globes, badges |
| Square | 20×20px | Solid objects, documents, cards, tiles |
| Landscape | 22×18px | Wide objects, cameras, banners, monitors |
| Portrait | 18×22px | Tall objects, phones, pages, keys |
| Small | 16×16px | Navigation, arrows, chevrons, compact symbols |

---

## Optical Sizing Rules

### Solid Shapes

Solid filled shapes carry more visual weight.

Use:

- Solid squares: 20×20px
- Solid rectangles: sized proportionally to maintain equivalent weight

Do not enlarge solid filled shapes to 22×22px unless specifically required.

A 22×22px solid shape will usually appear visually heavier than surrounding icons.

---

### Non-Solid Shapes

Outlined, hollow, or detailed icons may occupy more space because they carry less visual weight.

Use:

- Up to 22×22px visual area

A non-solid icon should feel balanced when placed beside:

- A 20×20px solid square
- A 22px circle

---

## Optical Balance

The objective is equal perceived size.

Rules:

- Heavy filled shapes should generally be smaller.
- Lighter outlined shapes may occupy more space.
- Irregular shapes should be sized by visual weight.
- Icons should align visually when viewed together.

---

# Line Weight

Three line weights exist.

## Standard

**1.5px**

This is the default.

Use Standard for:

- Almost all icon construction
- Primary shapes
- Main structural elements

Unless there is a clear reason otherwise, always use Standard.

---

## Slimline

**1px**

Use only for:

- Intricate internal details
- Small secondary elements
- Fine information that would become crowded at 1.5px

Do not use Slimline for the main structure of an icon.

---

## Chonky

**2px**

Use only for action symbols contained within icons.

Examples:

- Plus
- Minus
- Add
- Remove
- Delete
- Close
- Check

Do not use Chonky for the overall icon construction.

---

# Corner Radius

Rounded corners are part of the icon language.

## Standard

**2px**

Default radius.

Use for:

- Outer corners
- Primary shapes
- Most geometry

---

## Small

**1px**

Use only when required.

Appropriate for:

- Intricate internal details
- Small internal shapes
- Tight construction areas

Do not use Small as the default radius.

---

## Large

**4px**

Do not use Large radius unless explicitly requested.

Large radius is reserved for cases where a softer or more rounded treatment is specifically required by the icon concept. This is an exception, not a default. If in doubt, use Standard (2px).

---

# Line Ends

All exposed line ends must be rounded.

Never use:

- Flat line endings
- Square terminals

Rounded endings should be created through the path geometry.

Do not rely on SVG stroke properties.

---

# Shape Language

Icons should feel:

- Calm
- Precise
- Friendly
- Geometric

Prefer:

- Rounded rectangles
- Circles
- Simple curves
- Consistent spacing
- Clear silhouettes
- Intentional negative space

Avoid:

- Decorative flourishes
- Cartoon styling
- Realistic shading
- Complex silhouettes
- Unnecessary elements

---

# Icon Construction Rules

Build icons using the minimum number of elements required.

Prioritise:

1. Recognition
2. Simplicity
3. Consistency
4. Detail

Use:

- Strong primary shapes
- Clear hierarchy
- Balanced spacing
- Reusable patterns

Avoid:

- Tiny isolated details
- Crowded compositions
- Awkward overlaps
- Tangencies that reduce clarity

---

# Reference Interpretation

References define the concept, not the final style.

When adapting a reference:

1. Understand the object or action being represented.
2. Simplify the concept.
3. Apply this icon system's geometry.
4. Match existing proportions and motifs.
5. Remove unnecessary detail.

Do not copy:

- Another library's stroke style
- Another library's proportions
- Another library's colour system
- Another library's construction approach

The final icon should look native to this library.

---

# Consistency Rules

When creating a new icon:

- Prefer existing patterns over inventing new ones.
- Match existing proportions.
- Match existing corner radii.
- Match existing visual weight.
- Match existing spacing.
- Reuse established motifs where possible.

A new icon should feel like it was designed alongside existing icons.

---

# Final Quality Checklist

Before completing an icon, confirm:

- [ ] Uses 24×24 viewBox
- [ ] Uses 24×24 dimensions
- [ ] Maintains minimum 1px padding
- [ ] Uses filled paths only
- [ ] Does not use SVG strokes
- [ ] Uses `currentColor`
- [ ] Uses 20% opacity for duotone secondary elements
- [ ] Uses correct optical sizing frame
- [ ] Uses Standard 1.5px weight unless an exception applies
- [ ] Uses 2px corner radius unless an exception applies
- [ ] Uses rounded line terminals
- [ ] Is recognisable at small sizes
- [ ] Contains no unnecessary detail
- [ ] Matches the existing icon family
