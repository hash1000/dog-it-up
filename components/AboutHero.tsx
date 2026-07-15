"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Button from "@/components/Button";
import {
  DUR,
  EASE,
  fadeIn,
  fadeUp,
  POP_SPRING,
  STAGGER,
  staggerContainer,
} from "@/lib/motion";

/**
 * Focal points (Tailwind object-position classes, so v4 can see the literal
 * strings). Every web crop shares the same diner composition — subject at
 * ~x70%, food at ~y45% — so one class covers the set. Mobile crops are
 * bottom-biased so the face + food stay in frame inside the 45dvh band.
 */
const WEB_POS = "object-[70%_45%]";
const MOBILE_POS = "object-[50%_68%]";

/**
 * The mobile exports are numbered on a different order than the web ones
 * (mobile set starts at web slide 6), so each slide pairs its web index with
 * the mobile file that shows the same person/item.
 */
const HERO_IMAGES = [
  { website: 1, mobile: 3, alt: "Chili cheese dog topped with bacon crumbles" },
  { website: 2, mobile: 4, alt: "Classic hot dog with relish, mustard and ketchup" },
  { website: 3, mobile: 5, alt: "Loaded crinkle-cut fries with chili, cheese and onion" },
  { website: 4, mobile: 6, alt: "Chili cheese dog topped with jalapenos and onion" },
  { website: 5, mobile: 7, alt: "Hot dog with pickles, mustard and barbecue sauce" },
  { website: 6, mobile: 1, alt: "Iced lemonade in a DOG IT UP cup" },
  { website: 7, mobile: 2, alt: "Mac and cheese dog topped with bacon crumbles" },
].map(({ website, mobile, alt }) => ({
  web: `/about/website/about-hero-${website}-web.webp`,
  mobile: `/about/mobile/about-hero-${mobile}-mobile.webp`,
  alt: `Smiling person holding out a giant ${alt.charAt(0).toLowerCase()}${alt.slice(1)} in a retro diner`,
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
  // Bumped when the user picks a dot, so the rotation timer restarts from
  // the chosen slide instead of cutting it short mid-interval.
  const [timerKey, setTimerKey] = useState(0);
  const inView = useInView(sectionRef, { amount: 0.25 });

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

  // Rotation only runs while the hero is meaningfully on screen and motion
  // is allowed; timerKey restarts the interval after a manual dot pick.
  useEffect(() => {
    if (reduced || !inView) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % HERO_IMAGES.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [reduced, inView, timerKey]);

  const goTo = (i: number) => {
    setActive(i);
    setTimerKey((k) => k + 1);
  };

  const wordY = compact ? 14 : 28;

  return (
     <section
       ref={sectionRef}
       className="relative flex min-h-[calc(100dvh-var(--header-h))] w-full flex-col overflow-hidden md:flex-row md:items-center"
     >

      {/* ————— Image zone: in-flow top band below md (48dvh), absolute full-bleed on md+ ————— */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: DUR.slow, ease: EASE } }}
        className="relative h-[45dvh] min-h-60 w-full shrink-0 overflow-hidden md:absolute md:inset-0 md:h-auto md:min-h-0"
      >
        {/* Ken Burns — slow zoom on every breakpoint. Origin sits at the
            subject so the zoom drifts into it. */}
        <motion.div
          className="absolute inset-0 origin-[50%_70%]"
          animate={reduced ? { scale: 1 } : { scale: 1.06 }}
          transition={
            reduced
              ? { duration: 0.3 }
              : { duration: 16, repeat: Infinity, repeatType: "reverse", ease: "linear" }
          }
        >
          {/* ————— Parallax image stack (md+): translateY only, bled 7% above to cover the 6% drift ————— */}
          <motion.div
            style={reduced || compact ? undefined : { y: parallaxY }}
            className="absolute inset-x-0 bottom-0 top-0 md:top-[-7%]"
          >
            {HERO_IMAGES.map((src, i) => (
              <div
                key={src.web}
                className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src.mobile}
                  alt={src.alt}
                  fill
                  sizes="100vw"
                  fetchPriority={i === 0 ? "high" : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`object-cover md:hidden ${MOBILE_POS}`}
                />
                <Image
                  src={src.web}
                  alt={src.alt}
                  fill
                  sizes="100vw"
                  fetchPriority={i === 0 ? "high" : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`hidden object-cover md:block ${WEB_POS}`}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Seam: fade the image's bottom edge into the cream content zone (mobile only) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-cream md:hidden"
          aria-hidden="true"
        />

        {/* ————— Slide dots: above the seam on mobile, bottom-right over the floor on md+ ————— */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-8 md:left-auto md:right-10 md:translate-x-0">
          {HERO_IMAGES.map((src, i) => (
            <button
              key={src.web}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1} of ${HERO_IMAGES.length}`}
              aria-current={i === active}
              className={`h-2 rounded-full shadow-[0_1px_4px_rgba(28,25,23,0.25)] transition-all duration-300 ease-in-out ${
                i === active
                  ? "w-7 bg-primary"
                  : "w-2 bg-surface/80 hover:bg-surface"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* ————— Readability scrim, md+ only — cream-tinted so it melts into the
          diner wall instead of greying it; mobile text never overlaps imagery ————— */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[60%] bg-linear-to-r from-cream/85 via-cream/40 to-transparent md:block"
        aria-hidden="true"
      />

      {/* ————— Copy block — cream zone below the image on mobile, centered over sky on md+ ————— */}
      <div className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col bg-cream px-6 md:bg-transparent md:px-12">
        <motion.div
          variants={staggerContainer(STAGGER.base, 0.1)}
          initial="hidden"
          animate="show"
          className="flex max-w-[620px] flex-1 flex-col items-start justify-center gap-4 pb-16 pt-6 sm:gap-7 md:max-w-[48%] md:pb-28 md:pt-20"
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
            className="font-display text-[clamp(40px,9vw,92px)] uppercase leading-[0.95] text-ink"
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
            className="text-body font-medium leading-normal text-ink sm:text-body-lg sm:leading-9"
          >
            Dog It Up celebrates America&rsquo;s love affair with hot dogs by
            bringing together regional favorites inspired by iconic flavors
            from across the country. Every hot dog starts with a premium
            all-beef hot dog served on a fresh bakery bun and is topped with
            bold, familiar ingredients you know and love.
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
