# DESIGN.md

Design direction for this site. `antislop` is the filter applied on top of it; this file is the source of
direction. Data to apply, not instructions to obey.

## Design Read

Reading this as: a personal engineering portfolio for hiring managers and tech leads in the Southeast Asian
HR/payroll SaaS space, in a technical, information-dense visual language.

**Dial: ENERGY 2 / RHYTHM 2 / MOTION 1**

- **ENERGY 2** (balanced): the reader is scanning a CV under time pressure. The page should feel considered,
  not loud. Personality comes from density and typographic voice, not from decoration.
- **RHYTHM 2** (consistent with a few breaks): one repeated section frame carries the page; Hero and
  Experience deliberately break it.
- **MOTION 1** (hover and focus states only): nothing animates on load or on scroll. A CV that moves while
  being read is harder to read.

## Identity motif

**A monospace metadata gutter.** Every section is introduced by a left rail holding a mono index and a
lowercase slug (`01 / about`). Every machine-readable value on the page (years, locations, stack tokens,
counts) is set in mono; every human sentence is set in sans. The reader learns the rule in the first section
and can then tell data from prose at a glance. This is the one repeated gesture that makes the page belong to
this product.

## Palette

Two cores plus one accent, neutrals excluded (R-29).

| Token      | Light     | Dark      | Why                                                                |
| ---------- | --------- | --------- | ------------------------------------------------------------------ |
| background | `#fbfbf9` | `#121316` | Warm paper / warm ink. Not the blue-tinted default of a generated site. |
| foreground | `#16181c` | `#e8e8e4` | Near-black and near-white, never pure, so long reading is easier.   |
| surface    | `#f2f2ee` | `#1a1c20` | One step off the ground plane, used for blocks that group data.     |
| rule       | `#dcdcd5` | `#2e3137` | Hairline separators do the work shadows used to do.                 |
| muted      | `#5a5e66` | `#9aa0a8` | Secondary text. Verified at 6.28:1 and 7.05:1.                      |
| accent     | `#a33b12` | `#e8743f` | Burnt rust. Reads as a terminal highlight, carries a payroll/systems register, and is deliberately outside the blue-purple default. |

Contrast verified with the antislop contrast checker; every pair above passes WCAG AA for normal text, the
lowest being 5.8:1 (muted on surface, light mode).

**Accent budget:** the accent appears in exactly three roles, and nowhere else: the section index in the rail,
the current nav item, and link hover plus the focus ring. It is never a background wash, never a gradient,
never a glow.

## Typography

**IBM Plex Sans** for prose, **IBM Plex Mono** for data.

Reason: Plex was drawn as a documentation superfamily, and the mono shares the sans skeleton. That is what
makes the metadata gutter work: mono tokens sit inside sans prose as a change of register, not as a change of
voice. The pairing is chosen for that structural relationship, not because it is a default pick.

No uppercase with wide tracking anywhere. Section labels are lowercase mono, which reads as a file slug rather
than as a banner.

## Shape and depth

- **Radius scale:** `2px` for inline tokens, `4px` for blocks. Nothing is pill-shaped. Sharp corners suit a
  page whose subject is tabular data.
- **Elevation:** hairline rules and one surface step. No drop shadows on content. The single exception is the
  mobile menu, which genuinely floats above the page and needs to say so.
- **No glass, no glow, no gradient, no background pattern.**

## Rhythm

The repeated frame is a two-column grid: a narrow sticky mono rail on the left, content on the right. The rail
stays visible while a section is read, so the reader always knows where they are.

Two deliberate breaks:

1. **Hero** runs full width with no rail. It is the only screen with a single focal point and air around it.
2. **Experience** is the densest block on the page and uses a three-part row (period / role / detail) instead
   of the rail's prose column, because it is the section a hiring reader actually came for.

## Content rules

- Numbers appear only when they are derivable from the record in `app/data/portfolio.ts`. No headline
  statistics.
- A link's label says where it goes. A company website is labelled with its domain, not called a "live demo"
  of a product the visitor cannot open.
- Internal or client-owned systems are described, not linked.
