import type { Variants } from "framer-motion";

/**
 * Hero entrance choreography — single source of truth for the timeline.
 *
 * The shipped hero renders the headline, script tagline and splash marks as
 * one SVG lockup (typo-hero.svg) over a single full-bleed photo, so the
 * per-word / per-splash / per-hot-dog beats of the original storyboard are
 * collapsed onto those two elements:
 *
 *  t=0.00s  art      — typo lockup: clip-path write-on, left → right
 *                      (stands in for headline words + splash + tagline)
 *  t=0.30s  image    — hero photo: fade + settle from scale 1.04 → 1
 *                      (stands in for the staggered hot-dog float-in)
 *  t=1.00s  subtext  — "America's Favorite Flavors…": fade + y 16 → 0
 *  t=1.15s  cta      — Browse Menu: fade + y, then one scale pulse
 *  t=1.30s  features — icons + labels fade, stagger 0.08s
 */
export const TIMING = {
  art: 0,
  image: 0.3,
  /** First HeroShowcase flavor rises in just after the backdrop settles. */
  showcase: 0.5,
  subtext: 1.0,
  cta: 1.15,
  ctaPulse: 1.65,
  features: 1.3,
  featureStagger: 0.08,
} as const;

// Shared brand ease — re-exported so existing hero imports keep working.
export { EASE } from "@/lib/motion";
import { EASE } from "@/lib/motion";

const fade = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, delay } },
});

/**
 * Returns the full variant set for the sequence. When `reduced` is true
 * every transform / clip-path is replaced by a plain 0.3s opacity fade.
 */
export function heroVariants(reduced: boolean) {
  if (reduced) {
    return {
      root: fade(0),
      art: fade(TIMING.art),
      image: fade(TIMING.image),
      subtext: fade(TIMING.subtext),
      cta: fade(TIMING.cta),
      features: {
        hidden: {},
        show: { transition: { delayChildren: TIMING.features } },
      } satisfies Variants,
      featureItem: fade(0),
    };
  }

  return {
    root: {
      hidden: {},
      show: {},
    } satisfies Variants,

    art: {
      hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      show: {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        transition: { duration: 0.9, delay: TIMING.art, ease: EASE },
      },
    } satisfies Variants,

    image: {
      hidden: { opacity: 0, scale: 1.04 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, delay: TIMING.image, ease: EASE },
      },
    } satisfies Variants,

    subtext: {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: TIMING.subtext, ease: EASE },
      },
    } satisfies Variants,

    cta: {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        // Single attention pulse once the button has landed — never loops.
        scale: [1, 1.04, 1],
        transition: {
          opacity: { duration: 0.45, delay: TIMING.cta, ease: EASE },
          y: { duration: 0.45, delay: TIMING.cta, ease: EASE },
          scale: {
            delay: TIMING.ctaPulse,
            duration: 0.6,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          },
        },
      },
    } satisfies Variants,

    features: {
      hidden: {},
      show: {
        transition: {
          delayChildren: TIMING.features,
          staggerChildren: TIMING.featureStagger,
        },
      },
    } satisfies Variants,

    featureItem: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
    } satisfies Variants,
  };
}
