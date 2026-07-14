# Icon Variant Specifications

## Purpose

This document defines how the same icon concept should be constructed across the three supported visual variants:

- Outline
- Fill
- Duotone

All variants must represent the same underlying concept and belong to the same visual family.

Variants are not independent designs. They are different expressions of the same icon.

The following principles apply to all variants:

- Maintain the same proportions.
- Maintain the same visual balance.
- Maintain the same sizing rules.
- Maintain the same corner radius system.
- Maintain the same shape language.
- Maintain the same recognisable silhouette.

When creating variants, preserve the identity of the icon rather than simply converting between rendering techniques.

---

# Variant Relationship

## Source of Truth

The outline variant should normally be created first.

The generation sequence should be:

1. Define the core concept.
2. Create the outline version.
3. Derive the fill version.
4. Derive the duotone version.

The outline version establishes:

- Primary geometry
- Proportions
- Internal details
- Negative space
- Recognition

The fill and duotone versions should adapt this structure rather than introduce new concepts.

---

# Outline Variant

## Purpose

Outline icons communicate through linework and negative space.

They should feel:

- Light
- Precise
- Open
- Technical
- Clear

---

## Construction

Outline icons use line-based geometry represented as filled paths.

Do not use SVG strokes.

All linework must be converted into filled shapes.

Use:

```svg
fill="currentColor"
```

---

## Line Weight

Default:

```
1.5px
```

Use Standard weight for:

- Primary outlines
- Main structural elements
- Most icon geometry

Use Slimline:

```
1px
```

only for:

- Intricate internal details
- Small secondary elements
- Dense areas where Standard weight reduces clarity

---

## Shape Rules

Outline icons should:

- Use clean closed paths where possible.
- Maintain consistent spacing.
- Use negative space intentionally.
- Avoid unnecessary internal lines.

Avoid:

- Excessive detail
- Decorative outlines
- Multiple competing line weights

---

## Open vs Closed Paths

Prefer closed paths.

Open paths may be used when:

- The concept requires an open-ended line.
- The line itself communicates the meaning.
- Closing the shape would reduce clarity.

Do not use open paths simply as a shortcut.

---

# Fill Variant

## Purpose

Fill icons communicate primarily through silhouette and solid shape.

They should feel:

- Stronger than outline
- More compact
- More visually weighted

---

## Construction

Fill icons use solid filled shapes.

Primary forms:

```svg
fill="currentColor"
```

The silhouette should communicate the object without relying on outlines.

---

## Simplification

Fill variants should not be direct conversions of outline icons.

When converting to fill:

- Remove unnecessary internal detail.
- Strengthen the silhouette.
- Prioritise recognition.
- Preserve key negative spaces.

A good fill icon is a clear shape, not an outline icon with everything filled.

---

## Negative Space

Internal details should be created using negative space.

Preferred methods:

1. Compound paths using:

```svg
fill-rule="evenodd"
```

2. Separate knockout paths where cleaner.

Use whichever produces the cleanest geometry.

---

## Internal Symbols

Action symbols inside filled icons should use the Chonky weight:

```
2px
```

Examples:

- Plus
- Minus
- Add
- Remove
- Delete
- Close
- Check

Internal symbols should be knocked out using negative space.

Do not use white fills.

Do not use hardcoded colours.

---

## Knockout Rules

Never use:

```svg
fill="white"
```

for internal cut-outs.

Knockouts must adapt to the background.

Use:

- Compound paths
- Even-odd fill rules
- Masking only if absolutely required

---

# Duotone Variant

## Purpose

Duotone icons combine solid emphasis with a supporting tonal layer.

They should feel:

- Richer than outline
- Lighter than full fill
- More dimensional while remaining simple

---

## Colour System

Duotone uses only two tones.

Primary layer:

```svg
fill="currentColor"
```

Secondary layer:

```svg
fill="currentColor"
fill-opacity="0.2"
```

The secondary layer must always use 20% opacity.

Never introduce additional colours.

---

## Layer Order

Duotone construction:

1. Secondary tint layer
2. Primary detail layer

The primary layer always sits above the tint layer.

```
Tint background shape
        ↓
Primary outline / details
```

---

## Tint Usage

Do not tint every enclosed area.

The tint layer should highlight important regions, not fill the entire icon.

Good uses:

- Main body of an object
- Key surface area
- Supporting background shape
- Primary material area

Avoid:

- Filling every gap
- Making the icon visually heavy
- Removing useful negative space

---

## Inferring Good Tint Usage

Before generating a duotone variant, read a sample of existing duotone icons from `raw-icons/`:

```
find raw-icons -name "*-duotone.svg" | head -10
```

Study how tint is applied across those examples:

- Which regions receive the tint layer?
- Which regions are left as negative space?
- How does the tint relate to the primary linework?

Apply the same balance to the new icon.

The existing library is the living reference for duotone style. As more icons are added, this sample improves. Prefer inference from examples over guessing.

---

## Duotone Balance

The primary layer should remain the dominant visual element.

The tint layer should support recognition, not compete with it.

If removing the tint layer does not reduce recognition, the tint is probably unnecessary.

---

# Variant Consistency Rules

All variants must:

- Represent the same concept.
- Use the same proportions.
- Use the same bounding frame.
- Use the same corner radius system.
- Use the same visual centre.
- Use the same construction logic.

Do not:

- Add features to one variant that do not exist in others.
- Change the meaning between variants.
- Create different silhouettes for each style.

---

# Choosing Variant Detail

The complexity of all variants should be controlled.

At small sizes prioritise:

1. Recognition
2. Silhouette
3. Clarity
4. Detail

Remove details that do not survive at:

- 16px
- 24px

---

# Preview Requirements

Every icon should be reviewed in:

## Sizes

- 16px
- 24px
- 32px
- 48px

## Themes

Preview on:

- Light background
- Dark background

Verify:

- Contrast
- Recognition
- Visual balance
- Consistency with existing icons

---

# Final Checklist

Before approving a variant:

## Outline

- [ ] Uses filled paths only
- [ ] Uses `currentColor`
- [ ] Uses correct line weight
- [ ] Reads clearly at small sizes

## Fill

- [ ] Uses a strong silhouette
- [ ] Does not simply fill the outline version
- [ ] Uses negative space correctly
- [ ] Contains no white or hardcoded colour knockouts

## Duotone

- [ ] Uses `currentColor` only
- [ ] Uses exactly 20% opacity for secondary layer
- [ ] Tint usage inferred from existing library examples
- [ ] Uses tint selectively
- [ ] Maintains outline clarity

## All Variants

- [ ] Look like members of the same family
- [ ] Share the same geometry
- [ ] Share the same visual language
- [ ] Remain recognisable at small sizes
