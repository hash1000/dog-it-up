"use client";

/**
 * About hero — full-bleed rotating sky imagery with kinetic headline.
 *
 * Art direction: each slot has a mobile crop (below md) and a web crop (md+),
 * toggled with hidden/md:block on two <Image>s — same pattern as the menu page.
 *
 * Layout split at md:
 * - md+:      unchanged approved desktop layout — absolute full-bleed image,
 *             left scrim, copy left-centered over the sky.
 * - below md: split zones, no text over the subject. Image is an in-flow top
 *             zone, copy sits below it on cream.
 *
 * Mobile zone tuning (tweak here):
 * - Image zone height   h-[48dvh] (floor min-h-60 / 240px for landscape phones)
 * - objectPosition      MOBILE_POS = object-[50%_80%] — crops are 500×700
 *                       with the food at ~y55–70% and the hand below it, so
 *                       the focal point biases toward the bottom to keep the
 *                       full subject in a roughly square viewport window.
 * - Seam                h-16 transparent→cream gradient over the image's
 *                       bottom edge, fading into the cream content zone.
 * - Ken Burns           image stack scales 1→1.06 over 16s (reverse repeat),
 *                       mobile only, origin biased toward the subject;
 *                       disabled for prefers-reduced-motion.
 *
 * Scrim (tweak here):
 * - Desktop: surface/65 → transparent across the left 60% (text sits left);
 *   mobile needs no scrim — text never overlaps imagery.
 *
 * Animation timing (kept in step with the Partner hero):
 * - ROTATE_MS     5000ms  crossfade interval (Partner SLIDE_MS)
 * - Crossfade     800ms   opacity-only between slides
 * - Entrance      staggerContainer(STAGGER.base = 0.08s, delayChildren 0.1s)
 * - Words         POP_SPRING (stiffness 320) with damping 22; travel 14px
 *                 on mobile / 28px on md+ (same values as Partner wordY)
 * - Parallax      currently disabled (the translateY-only wrapper is kept
 *                 commented in the JSX). If re-enabled: translateY ONLY,
 *                 drift ≤ 6%, bleed the layer above by ≥ the drift — never
 *                 animate scale on the hero imagery. There is deliberately
 *                 no Ken Burns zoom either: the source crops are ~2:1
 *                 banners and any scale pushes the subject out of frame.
 * - Scroll cue    chevron bounces y 0 → 8 → 0 over 1.6s, infinite
 *
 * Image framing (tweak in HERO_IMAGES):
 * - Web crops are 1440×700 with the hand + food centred at ~x70%; default
 *   focal point object-[70%_45%] keeps the subject in the right ~55% of the
 *   frame with sky headroom. Fries (6) and cup (7) reach higher, so their
 *   crops bias up (y 35% / 30%).
 * - On md+ the hero is 85vh rather than full-dvh, so the container aspect
 *   stays near the ~2:1 source aspect and object-cover cropping is minimal
 *   at common desktop sizes. Below md the hero is min-h-dvh: the 48dvh image
 *   zone plus the cream copy zone fill the first screen together (and grow
 *   naturally past dvh on short landscape viewports).
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Button from "@/components/Button";
import { fadeIn, fadeUp, POP_SPRING, STAGGER, staggerContainer } from "@/lib/motion";

/**
 * Per-slide focal points (Tailwind object-position classes, so v4 can see the
 * literal strings). Subject centre sits at ~x70% in every web crop; slides 6
 * (fries) and 7 (cup) extend higher, so their crops bias toward the top.
 */
const WEB_POS: Record<number, string> = {
  6: "object-[70%_35%]",
  7: "object-[70%_30%]",
};

/** Mobile focal point — bottom-biased so food + hand stay fully in frame. */
const MOBILE_POS = "object-[50%_80%]";

const HERO_IMAGES = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
  web: `/about/web/about-hero-${i}-web.webp`,
  mobile: `/about/mobile/about-hero-${i}-mobile.webp`,
  webPos: WEB_POS[i] ?? "object-[70%_45%]",
  mobilePos: MOBILE_POS,
}));

const ROTATE_MS = 5000;
const PARALLAX_DRIFT = "6%";

const HEADLINE: readonly { word: string; accent?: boolean }[] = [
  { word: "A" },
  { word: "Taste" },
  { word: "of" },
  { word: "America", accent: true },
] as const;

/** Headline words spring up; `custom` carries the y-distance (smaller on mobile). */
const wordVariants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  show: {
    opacity: 1,
    y: 0,
    transition: { ...POP_SPRING, damping: 22 },
  },
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function AboutHero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(false);

  // Background parallax: as the hero scrolls out, the image layer drifts
  // down 6% of its own (7%-bled) height, so it appears to scroll slower.
  // translateY only — scale is never animated on the hero imagery.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", PARALLAX_DRIFT]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMq.matches) return;

    const id = setInterval(
      () => setActive((i) => (i + 1) % HERO_IMAGES.length),
      ROTATE_MS,
    );
    const onChange = () => {
      if (reducedMq.matches) clearInterval(id);
    };
    reducedMq.addEventListener("change", onChange);
    return () => {
      clearInterval(id);
      reducedMq.removeEventListener("change", onChange);
    };
  }, []);

  const wordY = compact ? 14 : 28;

  return (
     <section
       ref={sectionRef}
       className="relative flex min-h-dvh w-full flex-col overflow-hidden md:min-h-[85vh] md:flex-row md:items-center"
     >

      {/* ————— Image zone: in-flow top band below md (48dvh), absolute full-bleed on md+ ————— */}
      <div className="relative h-[48dvh] min-h-60 w-full shrink-0 overflow-hidden md:absolute md:inset-0 md:h-auto md:min-h-0">
        {/* Ken Burns — mobile image zone only; desktop imagery is never scaled
            (see header). Origin sits at the subject so the zoom drifts into it. */}
        <motion.div
          className="absolute inset-0 origin-[50%_70%]"
          animate={compact && !reduced ? { scale: 1.06 } : { scale: 1 }}
          transition={
            compact && !reduced
              ? { duration: 16, repeat: Infinity, repeatType: "reverse", ease: "linear" }
              : { duration: 0.3 }
          }
        >
          {/* ————— Parallax image stack: translateY only, bled 7% above to cover the 6% drift ————— */}
          {/* <motion.div
            style={reduced ? undefined : { y: parallaxY }}
            className="absolute inset-x-0 top-[-7%] bottom-0"
            aria-hidden={false}
          > */}
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src.web}
              className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src.mobile}
                alt="Hand holding a DOG IT UP menu item against a blue sky"
                fill
                sizes="100vw"
                priority={i === 0}
                className={`object-cover md:hidden ${src.mobilePos}`}
              />
              <Image
                src={src.web}
                alt="Hand holding a DOG IT UP menu item against a blue sky"
                fill
                sizes="100vw"
                fetchPriority={i === 0 ? "high" : undefined}
                loading={i === 0 ? "eager" : "lazy"}
                className={`hidden object-cover md:block ${src.webPos}`}
              />
            </div>
          ))}
          {/* </motion.div> */}
        </motion.div>

        {/* Seam: fade the image's bottom edge into the cream content zone (mobile only) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-cream md:hidden"
          aria-hidden="true"
        />
      </div>

      {/* ————— Readability scrim, md+ only — mobile text never overlaps imagery ————— */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[60%] bg-linear-to-r from-surface/65 via-surface/30 to-transparent md:block"
        aria-hidden="true"
      />

      {/* ————— Copy block — cream zone below the image on mobile, centered over sky on md+ ————— */}
      <div className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col bg-cream px-6 md:bg-transparent md:px-12">
        <motion.div
          variants={staggerContainer(STAGGER.base, 0.1)}
          initial="hidden"
          animate="show"
          className="flex max-w-[620px] flex-1 flex-col items-start justify-center gap-5 pb-20 pt-8 sm:gap-7 md:max-w-[48%] md:pb-28 md:pt-20"
        >
          <motion.p
            variants={reduced ? fadeIn : fadeUp}
            className="flex items-center gap-3 text-caption font-extrabold uppercase tracking-[0.2em] text-ink sm:text-body"
          >
            <StarIcon className="h-4 w-4 text-primary" />
            Our Story
            <StarIcon className="h-4 w-4 text-primary" />
          </motion.p>

          <motion.h1
            variants={staggerContainer(STAGGER.base)}
            className="font-display text-[clamp(48px,9vw,92px)] uppercase leading-[0.95] text-ink"
          >
            <span className="sr-only">A Taste of America</span>
            <span aria-hidden className="flex flex-wrap gap-x-[0.28em]">
              {HEADLINE.map(({ word, accent }) => (
                <motion.span
                  key={word}
                  variants={reduced ? fadeIn : wordVariants}
                  custom={wordY}
                  className={accent ? "text-primary" : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            variants={reduced ? fadeIn : fadeUp}
            className="text-body font-medium leading-relaxed text-ink sm:text-body-lg sm:leading-9"
          >
            Dog It Up celebrates America&rsquo;s love affair with hot dogs by
            bringing together regional favorites inspired by iconic flavors
            from across the country. Every hot dog starts with a premium
            all-beef hot dog served on a fresh bakery bun and is topped with
            bold, familiar ingredients that guests know and love.
          </motion.p>

          <motion.div variants={reduced ? fadeIn : fadeUp}>
            <Button href="/partner" variant="filled" size="lg">
              Find out More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ————— Scroll cue — bounces until the user moves on ————— */}
      <motion.a
        href="#promise"
        aria-label="Scroll down to Our Promise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        className="absolute bottom-3 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-ink/70 transition-colors duration-200 hover:text-primary"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
