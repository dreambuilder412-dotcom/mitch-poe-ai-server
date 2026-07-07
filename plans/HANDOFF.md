# Project Handoff Summary — Family House Built-In Bed Plans

## Context

The goal was a professional, **carpenter-ready construction plan package** for
**two custom built-in bed projects** in a residential home. It had to be a real
planning/build document (not a design mood board), organized and printable, with
separate sections for each built-in.

**Overall style:** Modern warm family estate, high-end built-in millwork, clean
trim details, durable kid-friendly construction. Navy/charcoal accents,
warm-white trim, white oak / Cali oak wood tone, brass or matte-black hardware
options.

**Repository:** `dreambuilder412-dotcom/mitch-poe-ai-server` (a small Node/Express
server). Work was done on branch `claude/builtin-bed-plans-package-p5pnru`.

## What was built

A single **self-contained HTML/CSS document** (31 printable pages) with **scaled
inline-SVG drawings** — floor plans, elevations, sections, framing plans, etc. It
prints cleanly to US Letter portrait (one drawing "sheet" per page) via the
browser's Print / Save-as-PDF.

### Files added / changed

- `plans/index.html` — the full 31-page package (both plan sets, all deliverables, all drawings)
- `plans/styles.css` — print-oriented stylesheet (US Letter, portrait, professional title blocks)
- `plans/README.md` — usage / handoff notes
- `server.js` — updated to serve the package at `/plans/`
- `.gitignore` — added (ignores `node_modules/`)
- `package-lock.json` — dependency lockfile

### Where it lives

Everything is under the **`plans/`** folder. Entry point is **`plans/index.html`**.

### How to open / preview

- **Directly:** open `plans/index.html` in a browser → click **Print / Save as PDF** (US Letter portrait).
- **Via server:** run `npm install && npm start`, then visit `http://localhost:3000/plans/`.

### Standalone vs. connected

The package is **standalone** — the HTML/CSS renders and prints with no backend.
It is *optionally* served by the existing Express app at `/plans/` for
convenience, but does not depend on the app or its `/chat` route.

---

## Plan Set 1 — Boys Gamer Room Built-In Triple Bunk

**Intent:** Gamer-style room for the boys. Must read as **custom built-in
millwork/cabinetry, NOT a metal bunk bed.**

**Placement (as specified):** Runs along the **tall gray wall with the outlet**.
Sits to the **right of the door** when facing the door from inside (left as you
enter). **Kept clear of the sloped ceiling** — no sleeping surface under the slope.

**Design captured:** Two stacked built-in beds + a **third lower/floor-level bed**
to the right; a **cozy cubby nook with roof-slat detail**; integrated shelves;
warm-white reading LEDs plus RGB gaming mood lighting; opposite wall noted as an
optional gaming TV wall. Built-in box stair (with drawers) for access instead of
a metal ladder.

**Deliverables included (15), sheets A1.0–V1.0:**

1. Scaled floor plan
2. Front elevation
3. Side elevation
4. Section detail
5. Framing plan
6. Trim/millwork plan
7. Ladder/stair access concept
8. Safety rail notes
9. Material list
10. Cut list
11. Fastener/hardware list
12. Finish schedule
13. Electrical/LED notes
14. Carpenter build sequence
15. Field verification checklist

---

## Plan Set 2 — Window Nook Bed

**Given space:** 6 ft wide × 5 ft deep (72" × 60"), right-side ceiling height 75".
Window is low.

**Intent:** Cozy high-end built-in reading/sleeping nook. **Low platform bed, no
drawers underneath** (because of the low window). Bookshelves/storage on both
sides, soft upholstered back + side cushions and pillows, warm-white painted
millwork with optional white-oak accents, reading sconces + LED.

**Deliverables included (13), sheets B1.0–N5.0:**

1. Scaled floor plan
2. Front elevation
3. Side elevation
4. Section detail
5. Platform framing plan
6. Shelf/millwork layout
7. Material list
8. Cut list
9. Fastener/hardware list
10. Finish schedule
11. Lighting/electrical notes
12. Carpenter build sequence
13. Field verification checklist

---

## Important caveats / known limitations

- This is a **planning package, not a stamped/engineered drawing set.** Every
  dimension is preliminary and marked **"FIELD VERIFY BEFORE CUTTING"** with
  `[VERIFY]` placeholders throughout.
- **Set 1 dimensions are placeholders** (wall length, room depth, ceiling and
  bunk heights, stud locations, all three mattress sizes/thicknesses). The
  flat-ceiling height at the upper bunk must be confirmed so nothing lands under
  the slope. See field-verification sheet V1.0.
- **Set 2 has a real fit constraint:** the nook opening is 72" wide, but a
  standard twin mattress is 38" × 75" — **75" will not fit a 72" opening** once
  side bookcases are installed. The package flags three options as an owner
  decision *before framing*: (a) widen the opening to ≥76" if walls allow,
  (b) recess the mattress into one bookcase, or (c) use a custom/short mattress
  (~70"). See sheet N5.0.
- **Structural connections** (especially the upper bunk) should be confirmed by a
  local professional/engineer. **Guardrail heights and opening sizes** should be
  verified against local building code and current CPSC/ASTM bunk-bed safety
  guidance (the package references CPSC 16 CFR 1213/1513 and ASTM F1427, including
  the guard ≥5" above mattress and <3½" gap rules).
- The field-verification checklists (V1.0 and N5.0) must be completed and signed
  off before ordering or cutting material.

## Security note (pre-existing, not part of this work)

The repository's `server.js` contains a **hardcoded Anthropic API key** that
predates this branch. It should be **rotated/revoked and moved to an environment
variable** — it currently exists in git history. This was flagged but
intentionally left unchanged in this package.

## Current status

- All changes committed and pushed to branch `claude/builtin-bed-plans-package-p5pnru`.
- **Pull Request #1 is open:** https://github.com/dreambuilder412-dotcom/mitch-poe-ai-server/pull/1
- No pending feature changes.

---

## Related documents

- [`README.md`](./README.md) — quick usage notes
- [`CARPENTER_BRIEF.md`](./CARPENTER_BRIEF.md) — short field-facing brief for the carpenter
- [`index.html`](./index.html) — the full construction package (open in a browser)
