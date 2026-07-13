"use client";

/**
 * "Our Promise" — editorial band with four promise cards.
 *
 * Animation timing:
 * - Header words    staggerContainer(STAGGER.base = 0.08s), POP_SPRING
 *                   with damping 22, travel 20px (Partner headline language).
 *                   Headline runs leading-[1.05] — Passion One at 0.95 clips
 *                   rising words against the neighbouring line when the
 *                   statement wraps; keep leading ≥ 1 while words y-transform.
 * - Cards           whileInView stagger 0.08s per card, fadeUp (y 24 → 0)
 * - Card hover      lift y -6px; icon badge pops scale 1.12 + rotate -8°
 *                   on POP_SPRING (desktop only, off under reduced motion)
 * - All reveals     VIEWPORT = { once: true, margin: "-80px" }
 *
 * Background: cream tint + giant outlined "PROMISE" watermark (Passion One,
 * 1.5px primary stroke at 7% opacity) clipped at the section's bottom edge.
 */

import type { ComponentType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  POP_SPRING,
  STAGGER,
  staggerContainer,
  VIEWPORT,
} from "@/lib/motion";
import {
  FlavorIcon,
  FreshIcon,
  QualityIcon,
  SpeedIcon,
} from "@/components/shared/FeatureGrid";

interface Promise {
  index: string;
  title: string;
  copy: string;
  icon: ComponentType<{ className?: string }>;
  /** Inverted brand-red card — the grid's focal point (home-page accent pattern). */
  accent?: boolean;
}

const PROMISES: readonly Promise[] = [
  {
    index: "01",
    title: "Quality Ingredients",
    copy: "100% all-beef dogs on fresh bakery buns. No shortcuts, ever.",
    icon: QualityIcon,
  },
  {
    index: "02",
    title: "Made Fresh Daily",
    copy: "Prepped every morning. If it isn’t fresh, it isn’t served.",
    icon: FreshIcon,
  },
  {
    index: "03",
    title: "Bold Flavors",
    copy: "Regional American classics, turned all the way up.",
    icon: FlavorIcon,
    accent: true,
  },
  {
    index: "04",
    title: "Fast Service",
    copy: "Hot off the roller and in your hands in minutes.",
    icon: SpeedIcon,
  },
] as const;

const STATEMENT = "Four things we never compromise." as const;

const headerWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ...POP_SPRING, damping: 22 } },
};

const badgePop: Variants = {
  hover: { scale: 1.12, rotate: -8, transition: POP_SPRING },
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
    </svg>
  );
}

export default function PromiseSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="promise"
      className="relative w-full scroll-mt-[var(--header-h)] overflow-hidden bg-cream/40 py-16 sm:py-24 lg:py-28"
    >
      {/* Oversized outlined watermark, clipped at the section's bottom edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(120px,24vw,380px)] leading-none text-transparent opacity-[0.07] [-webkit-text-stroke:1.5px_var(--color-primary)]"
      >
        PROMISE
      </span>

      <div className="relative mx-auto flex max-w-content flex-col gap-10 px-6 sm:gap-14 md:px-12">
        {/* ————— Section header: star-flanked eyebrow + kinetic statement ————— */}
        {/* data-motion-fallback: forces the SSR'd hidden state visible when JS is off (globals.css) */}
        <div
          data-motion-fallback
          className="flex flex-col items-center gap-4 text-center sm:gap-5"
        >
          <motion.p
            variants={reduced ? fadeIn : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex items-center gap-3 text-caption font-extrabold uppercase tracking-[0.2em] text-primary sm:text-body"
          >
            <StarIcon className="h-4 w-4" />
            Our Promise
            <StarIcon className="h-4 w-4" />
          </motion.p>

          <motion.h2
            variants={staggerContainer(STAGGER.base)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="max-w-[16ch] font-display text-[clamp(36px,6.5vw,72px)] uppercase leading-[1.05] text-ink"
          >
            <span className="sr-only">{STATEMENT}</span>
            <span aria-hidden className="flex flex-wrap justify-center gap-x-[0.28em]">
              {STATEMENT.split(" ").map((word) => (
                <motion.span
                  key={word}
                  variants={reduced ? fadeIn : headerWord}
                  className={word === "never" ? "text-primary" : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h2>
        </div>

        {/* ————— Promise cards ————— */}
        <motion.ul
          data-motion-fallback
          variants={staggerContainer(STAGGER.base)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {PROMISES.map(({ index, title, copy, icon: Icon, accent }) => (
            <motion.li key={title} variants={reduced ? fadeIn : fadeUp} className="h-full">
              <motion.article
                whileHover={reduced ? undefined : "hover"}
                variants={{ hover: { y: -6 } }}
                className="group relative h-full"
              >
                {/* GPU-friendly hover shadow: pre-rendered layer, opacity only */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_24px_48px_-16px_rgba(28,25,23,0.22)] transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ring-1 sm:p-7 ${
                    accent ? "bg-primary ring-surface/10" : "bg-cream ring-ink/5"
                  }`}
                >
                  {/* Huge index numeral as background texture */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-2 -top-7 select-none font-display text-[128px] leading-none ${
                      accent ? "text-surface/10" : "text-primary/[0.08]"
                    }`}
                  >
                    {index}
                  </span>

                  <motion.span
                    variants={reduced ? undefined : badgePop}
                    className={`relative grid h-14 w-14 place-items-center rounded-full ${
                      accent ? "bg-surface/15 text-surface" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.span>

                  <h3
                    className={`relative mt-6 font-display text-[26px] uppercase leading-none ${
                      accent ? "text-surface" : "text-ink"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`relative mt-3 text-body font-medium leading-relaxed ${
                      accent ? "text-surface/85" : "text-ink/75"
                    }`}
                  >
                    {copy}
                  </p>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
