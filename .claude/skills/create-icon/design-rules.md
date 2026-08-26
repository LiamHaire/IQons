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

Padding is determined by the chosen size frame — see the Size Frames table below.

Minimum padding is 2px (Circle frame). Never place artwork closer than 2px to any canvas edge.

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

## Size Frames

These are the **only** permitted artwork dimensions within the 24×24 canvas.

Do not use any other dimensions.

Do not invent custom sizes.

Do not resize the SVG canvas — it is always `width="24" height="24" viewBox="0 0 24 24"`.

The size frame defines the bounding area of the artwork **within** the canvas, not the canvas itself.

| Frame | Artwork size | Padding each side | Usage |
|---|---|---|---|
| Circle | 20×20px diameter | 2px | Circular objects, faces, globes, badges |
| Square | 18×18px | 3px | Solid fill squares, icons contained within a square, or icons that are primarily square in shape |
| Landscape | 20×16px | 2px h / 4px v | Wide objects, cameras, banners, monitors |
| Portrait | 16×20px | 4px h / 2px v | Tall objects, phones, pages, keys |
| Small | 14×14px | 5px | Navigation icons, arrows, chevrons, compact directional symbols |

**Frame selection must be driven by the concept's natural proportions** — the shape the artwork would naturally occupy if drawn without constraints.

- A cup is wider than it is tall → Landscape (20×16px)
- A phone is taller than it is wide → Portrait (16×20px)
- A document is roughly square → Square (18×18px)
- A globe is circular → Circle (20×20px)
- An arrow is compact and directional → Small (14×14px)

If a concept does not obviously fit one frame, choose the closest match based on the dominant axis.

Never choose a frame based on what fits the artwork you have already drawn — choose the frame first, then draw to fit it.

---

## Optical Sizing Rules

### Solid Shapes

Solid filled shapes carry more visual weight.

Use:

- Solid squares: 18×18px
- Solid rectangles: sized proportionally to maintain equivalent weight

Do not enlarge solid filled shapes to 20×20px unless specifically required.

An 18×18px solid square will usually appear visually heavier than surrounding icons if enlarged further.

---

### Non-Solid Shapes

Outlined, hollow, or detailed icons may occupy more space because they carry less visual weight.

Use:

- Up to 20×20px visual area

A non-solid icon should feel balanced when placed beside:

- An 18×18px solid square
- A 20px circle

---

## Optical Balance

The objective is equal perceived size across all icons in the library.

**The 20×20px circle is the optical reference.**

Every size frame is derived from this reference — its dimensions are chosen so that the artwork produces the same perceived visual weight as a 20×20px circle.

- Square icons use 18×18px because a solid square at larger sizes appears heavier than a 20px circle.
- Portrait and Landscape icons use one 20px axis and one 16px axis because the shorter axis compensates for the shape's directionality.
- Small icons use 14×14px because compact symbols carry concentrated weight.

Rules:

- Always size artwork so it feels equal in weight to a 20×20px circle.
- Heavy filled shapes must be smaller — do not expand them to fill the maximum frame.
- Lighter outlined shapes may use more of the frame because they carry less visual weight.
- Irregular or complex shapes should be sized by visual weight, not mathematical bounds.
- When in doubt, compare the new icon against an existing circle icon at the same size.

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

# Spacing

## Spacing System

All spacing between elements must be a multiple of the Standard line weight.

This ties the spatial rhythm of the icon to its stroke weight, keeping the construction visually coherent.

| Multiplier | Value | Use |
|---|---|---|
| 1× Standard | 1 unit | Minimum gap between adjacent elements |
| 2× Standard | 2 units | Default separation between distinct parts |
| 3× Standard | 3 units | Larger separation when visual breathing room is needed |

Do not use arbitrary spacing values.

Do not use fractional multiples.

---

## Applying the Spacing Rule

Examples of correct application:

- The gap between a cup body and a saucer line should be **1× Standard**.
- The gap between the top of a cup body and the base of steam lines should be **1× Standard**.
- The gap between a base icon and a badge cutout should follow the badge specification, which is also grounded in Standard weight.

When two elements are touching, they share an edge — there is no gap. A gap only exists when the elements are visually separated.

---

## Internal Element Spacing

Spacing between internal elements within a single shape follows the same rule.

Use:

- **1× Standard** as the minimum internal gap
- **2× Standard** for comfortable separation inside a larger shape

Do not reduce internal spacing below **1× Standard** to fit more detail. Simplify the design instead.

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
- [ ] Maintains correct padding for the chosen frame (Circle 2px, Square 3px, Landscape 2px h/4px v, Portrait 4px h/2px v, Small 5px)
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
