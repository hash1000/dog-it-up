# Design Tokens

Source: Figma — [America's Food Court](https://www.figma.com/design/ECT7ewuOazNto88yQck1pN/America-s-Food-Court?node-id=217-2), frame "Landing Page" (node `217:6`).

The file has no bound Figma variables (`get_variable_defs` returned empty) — all
values below were extracted from raw fills/text styles via `get_design_context`
and consolidated into a semantic scale. Where the Figma file used near-duplicate
values (e.g. two near-black colors, two reds), they were merged into one token —
noted below.

Defined in `app/globals.css` under `:root` / `@theme inline`, mirrored in
`tailwind.config.ts` for tooling.

## Colors

| Token | Value | Figma source | Usage |
|---|---|---|---|
| `primary` | `#f33505` | `#f33505` (dominant, 59 uses) + `#f82301` (1 use, merged — near-identical) | Primary CTA buttons, headline accents, dish-name labels |
| `accent` | `#fc9c05` | `#fc9c05` | Nav bar "Order Now" pill (gold/mustard accent) |
| `ink` | `#030102` | `#030102` (7 uses) + `#0a0808` (5 uses, merged — near-identical near-black) | Primary body/heading text, dark surfaces |
| `ink-soft` | `#0a0808` | `#0a0808` | Reserved alias if the two blacks need to diverge later |
| `surface` | `#ffffff` | `bg-white` / `text-white` | Page background, text-on-dark |
| `surface-muted` | `#fff0f0` | `#fff0f0` | Decorative pale pink ring/border accent |
| `muted-foreground` | `#919191` | `#919191` | Placeholder text (e.g. email input) |

Note: `ink` and `ink-soft` currently resolve to visually near-identical near-blacks
from the source file (`#030102` vs `#0a0808`). Kept as two tokens since the Figma
file used them somewhat differently (headings vs. hero sub-copy/badges); collapse
to one if that distinction proves unintentional.

## Typography

Font: **Inter** (Google Font, via `next/font/google`), weights 400 (Regular) and
700 (Bold) only — no other family or weight appears anywhere in the file.

| Token | Size | Figma usage |
|---|---|---|
| `text-display` | 70px / bold | "Make it a Combo" promo headline |
| `text-h1` | 64px / bold | "Signature Flavors. / Endless Cravings.", "Find us", "Why Choose DOG IT UP?" |
| `text-h2` | 36px / bold | "Our Menu" eyebrow, "Signature Dogs / Sides / Drinks" section headers |
| `text-h3` | 32px / bold+regular | Hero sub-headline pair, "Quality food served fast", feature headings |
| `text-card-title` | 28px / bold | Menu card dish titles (Classic American, Nashville Hot, etc.) |
| `text-body-lg` | 20px / regular | Newsletter input/label copy |
| `text-body` | 16px / bold+regular | Button labels, menu ingredient lists (most-used size) |
| `text-caption` | 14px / bold+regular | Nav links, hero feature badges (100% Beef, Made Fresh, Bold Flavor) |

The Figma file also had one-off 15px body text (footer paragraph); normalized to
`text-body` (16px) as a likely export inconsistency rather than an intentional
distinct size.

## Border Radius

| Token | Value | Figma usage |
|---|---|---|
| `rounded-input` | 16px | Newsletter email input container (rectangular, not pill) |
| `rounded-pill-sm` | 24px | Nav bar "Order Now" pill button |
| `rounded-pill-md` | 30px | Menu-card CTA buttons (most common radius, 26 uses) |
| `rounded-pill-lg` | 38px | Hero-level CTA buttons, "View Full Menu" band |

Pattern observed: radius roughly tracks button height (larger buttons → larger
radius, approaching a full pill), while the one rectangular input keeps a modest
16px radius.

## Spacing

The Figma file positions most elements with absolute coordinates rather than a
clean auto-layout spacing system, so there is no reliable spacing token scale to
extract. The few genuine auto-layout gaps found (6, 15, 22, 39, 47, 129px) don't
sit on a consistent grid and read as ad hoc per-component values rather than an
intentional system. **Recommendation:** use Tailwind's default spacing scale
(4/8/16/24/32/48/64/96px) for new layout work rather than reproducing those exact
figures.
