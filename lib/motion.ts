import type { Variants, Transition } from "framer-motion";

/**
 * DOG IT UP — site-wide animation vocabulary.
 *
 * Every entrance on the site is built from these tokens so all four pages
 * share one easing curve, one timing scale and one reveal language.
 * Import from here — never restate ease arrays or durations in components.
 */

/** Brand ease — decisive start, soft landing. Used everywhere. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Timing scale (seconds). */
export const DUR = { fast: 0.3, base: 0.5, slow: 0.8 } as const;

/** Stagger scale (seconds between siblings). */
export const STAGGER = { tight: 0.05, base: 0.08 } as const;

/**
 * Shared whileInView viewport config: reveal fires once, ~80px before the
 * element fully enters, so sections are already moving as they arrive.
 */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Spring used by scalePop. */
export const POP_SPRING: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 18,
};

/** Optional per-instance overrides passed via motion's `custom` prop. */
export interface MotionCustom {
  delay?: number;
  /** Horizontal drift for fadeUp (e.g. -24 left blocks, +24 right blocks). */
  x?: number;
}

const custom = (c?: MotionCustom) => ({ delay: c?.delay ?? 0, x: c?.x ?? 0 });

/** Workhorse entrance: opacity 0→1, y 24→0 (+ optional x drift). */
export const fadeUp: Variants = {
  hidden: (c?: MotionCustom) => ({ opacity: 0, y: 24, x: custom(c).x }),
  show: (c?: MotionCustom) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: DUR.base, ease: EASE, delay: custom(c).delay },
  }),
};

/** Opacity-only entrance — also the universal reduced-motion fallback. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (c?: MotionCustom) => ({
    opacity: 1,
    transition: { duration: DUR.fast, delay: custom(c).delay },
  }),
};

/** Springy emphasis entrance for badges, dots, success states. */
export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (c?: MotionCustom) => ({
    opacity: 1,
    scale: 1,
    transition: { ...POP_SPRING, delay: custom(c).delay },
  }),
};

/**
 * Signature write-on reveal (left → right). Reserved for script / accent
 * text only — overusing it dilutes the brand moment.
 */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  show: (c?: MotionCustom) => ({
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: DUR.slow, ease: EASE, delay: custom(c).delay },
  }),
};

/** Image settle: fade in while easing scale 1.04 → 1. Non-hero imagery. */
export const settle: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: (c?: MotionCustom) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DUR.slow, ease: EASE, delay: custom(c).delay },
  }),
};

/** Divider line growing from its center (pair with origin-center class). */
export const growLine: Variants = {
  hidden: { scaleX: 0 },
  show: (c?: MotionCustom) => ({
    scaleX: 1,
    transition: { duration: DUR.base, ease: EASE, delay: custom(c).delay },
  }),
};

/** Orchestration parent — no visual change of its own. */
export function staggerContainer(
  stagger: number = STAGGER.base,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export type RevealVariantName =
  | "fadeUp"
  | "fadeIn"
  | "scalePop"
  | "clipReveal"
  | "settle"
  | "growLine";

export const revealVariants: Record<RevealVariantName, Variants> = {
  fadeUp,
  fadeIn,
  scalePop,
  clipReveal,
  settle,
  growLine,
};

/** Interaction tokens — buttons and tappable cards site-wide. */
export const HOVER_SCALE = 1.03;
export const TAP_SCALE = 0.97;
export const HOVER_TRANSITION: Transition = { duration: 0.2, ease: EASE };
