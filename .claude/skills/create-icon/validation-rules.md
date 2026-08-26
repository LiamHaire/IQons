# IQons Validation Specification

## Purpose

This document defines the mandatory validation process that every newly generated icon must pass before it can be presented for review.

Validation is performed after SVG generation and before preview.

No icon should be shown to the user until every validation stage has completed successfully.

---

# Validation Philosophy

Validation exists to protect the consistency of the IQons design system.

The objective is not to determine whether an icon is "good".

The objective is to determine whether the icon belongs within IQons.

If any stage fails, the icon must be corrected before proceeding.

---

# Validation Stages

Validation occurs in the following order.

1. Existing Library Validation
2. Construction Validation
3. Geometry Validation
4. SVG Validation
5. Visual Validation
6. Variant Validation
7. Accessibility Validation
8. Final Design Review

Each stage must pass before the next stage begins.

---

# Stage 1 — Existing Library Validation

Determine whether a new icon should exist.

Confirm:

- [ ] No identical icon already exists.
- [ ] No synonymous icon already exists.
- [ ] No existing metaphor adequately communicates the concept.
- [ ] Construction Inheritance has been considered.
- [ ] Existing icon reuse has been maximised.

If an existing icon can satisfy the request:

STOP.

Present the existing icon instead.

---

# Stage 2 — Construction Validation

Compare the new icon with the reference icons selected during generation.

Confirm:

- [ ] Construction method matches.
- [ ] Visual language matches.
- [ ] Negative space is consistent.
- [ ] Corner treatment matches.
- [ ] Stroke rhythm matches.
- [ ] Complexity is comparable.
- [ ] Geometry follows neighbouring icons.

Do not continue until the icon appears visually related to its reference icons.

---

# Stage 3 — Geometry Validation

Validate against `design-rules.md`.

Confirm:

- [ ] 24 × 24 artboard (`width="24" height="24" viewBox="0 0 24 24"`).
- [ ] One of the five permitted size frames was chosen — no custom dimensions used.
- [ ] Correct frame selected for the icon's proportions and weight.
- [ ] Circle frame: artwork fits within 20×20px diameter.
- [ ] Square frame: artwork fits within 18×18px.
- [ ] Landscape frame: artwork fits within 20×16px.
- [ ] Portrait frame: artwork fits within 16×20px.
- [ ] Small frame: artwork fits within 14×14px.
- [ ] Padding respected for the chosen frame.
- [ ] Optical alignment correct.
- [ ] Optical centring correct.
- [ ] Visual weight balanced relative to the chosen frame.

---

# Stage 4 — SVG Validation

Inspect the SVG.

Confirm:

- [ ] Correct viewBox.
- [ ] Line weight correct.
- [ ] All spacing between elements is a multiple of the Standard line weight — no arbitrary gap values.
- [ ] No stroke attributes.
- [ ] No transforms.
- [ ] No clipping paths.
- [ ] No embedded styles.
- [ ] No unnecessary groups.
- [ ] No unnecessary nodes.
- [ ] Clean SVG formatting.
- [ ] No duplicate paths.
- [ ] No hidden elements.
- [ ] No metadata.
- [ ] Uses `currentColor` only.
- [ ] No hardcoded colour values.

---

# Stage 5 — Visual Validation

Use Playwright to generate previews.

Generate previews at:

- 16px
- 24px
- 32px
- 48px

Display on:

- Light background
- Dark background

Inspect each preview.

Confirm:

- [ ] Icon remains recognisable.
- [ ] No visual distortion.
- [ ] No cropped paths.
- [ ] Padding appears consistent.
- [ ] Optical weight matches neighbouring icons.
- [ ] No unexpected artefacts.
- [ ] Silhouette remains clear.

---

# Stage 6 — Variant Validation

Compare:

- Outline
- Fill
- Duotone

Confirm:

- [ ] Same proportions.
- [ ] Same metaphor.
- [ ] Same construction.
- [ ] Same alignment.
- [ ] Same optical balance.
- [ ] Variant styling follows `variant-specs.md`.

Variants should appear to belong to the same family.

---

# Stage 7 — Accessibility Validation

Confirm:

- [ ] Icon remains recognisable at 16px.
- [ ] Important details are preserved.
- [ ] No reliance on colour alone.
- [ ] Duotone remains understandable without the tint layer.
- [ ] Silhouette is distinguishable.
- [ ] Modifier remains visible at small sizes.

---

# Stage 8 — Final Design Review

Perform one final review.

Ask:

> Would an experienced IQons designer believe this icon already existed within the library?

If the answer is no: return to generation.

If uncertain: simplify. Never increase complexity.

---

# Validation Outcome

Only present an icon if every stage passes.

If any validation stage fails:

1. Correct the icon.
2. Repeat validation from the failed stage.

Do not ask the user to approve an icon that has failed validation.

---

# Continuous Improvement

After validation completes, identify any recurring failures.

Where appropriate, improve:

- `SKILL.md`
- `design-rules.md`
- `badge-spec.md`
- `categories.md`
- `variant-specs.md`
- `validation-rules.md`

The objective is continual improvement of the IQons design system.
