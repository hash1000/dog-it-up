"use client";

/**
 * Partner hero — full-bleed, auto-playing location-showcase slider.
 *
 * Layout: slides fill the entire hero (absolute inset-0, object-cover);
 * all text + controls are overlaid on a readability scrim.
 *
 * Scrim (tweak here):
 * - Left:   ink/85 → ink/45 at 30% → transparent at 60% width (headline zone)
 * - Bottom: ink/60 → transparent at 30% height (controls zone)
 * - Tint:   primary/10 multiply over the whole image for a branded warmth
 *
 * Animation timing:
 * - SLIDE_MS        5000ms  autoplay interval; also drives the progress bar
 * - SLIDE_SPRING    stiffness 260 / damping 30 — incoming slide settle
 * - EXIT_DUR        0.5s    outgoing slide parallax drift (12% of width)
 * - Travel          18% enter / 12% exit — short, cinema-style crossfade + scale
 * - KEN_BURNS       scale 1 → 1.06 over 7s per slide (off when reduced motion)
 * - CHIP_DELAY      0.35s   location chip entrance after each slide change
 * - Word stagger    STAGGER.base (0.08s) + POP_SPRING from lib/motion
 */

import { getImageProps } from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import Button from "@/components/Button";
import {
  DUR,
  EASE,
  POP_SPRING,
  STAGGER,
  fadeIn,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

interface Slide {
  /** Wide crop (1440×700) shown at md+ viewports. */
  desktop: string;
  /** Portrait crop (500×700) shown below md. */
  mobile: string;
  location: string;
  /**
   * Optional object-position utility (e.g. "object-[50%_35%]") for slides
   * whose focal point drifts off-center at extreme aspect ratios.
   * Defaults to object-center.
   */
  objectPosition?: string;
}

const SLIDES: readonly Slide[] = [
  {
    desktop: "/partner/web/restaurant-counters.webp",
    mobile: "/partner/mobile/restaurant-counters.webp",
    location: "Restaurant Counters",
  },
  {
    desktop: "/partner/web/drive-thru.webp",
    mobile: "/partner/mobile/drive-thru.webp",
    location: "Drive-Thru Windows",
  },
  {
    desktop: "/partner/web/food-courts-malls.webp",
    mobile: "/partner/mobile/food-courts-malls.webp",
    location: "Food Courts & Malls",
  },
  {
    desktop: "/partner/web/gas-stations.webp",
    mobile: "/partner/mobile/gas-stations.webp",
    location: "Gas Stations & C-Stores",
  },
  {
    desktop: "/partner/web/street-carts-kiosks.webp",
    mobile: "/partner/mobile/street-carts-kiosks.webp",
    location: "Street Carts & Kiosks",
  },
] as const;

const SLIDE_MS = 5000;
const EXIT_DUR = 0.5;
const CHIP_DELAY = 0.35;
const SIZES = "100vw";
const MOBILE_MEDIA = "(max-width: 767px)";

const emptySubscribe = () => () => {};

function subscribeToMobileMq(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_MEDIA);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function SlideImage({
  slide,
  eager = false,
  className = "",
}: {
  slide: Slide;
  eager?: boolean;
  className?: string;
}) {
  const common = {
    alt: `DOG IT UP at ${slide.location.toLowerCase()}`,
    sizes: SIZES,
    quality: 85,
    loading: eager ? ("eager" as const) : undefined,
  };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ ...common, src: slide.mobile, width: 500, height: 700 });
  const { props: desktopProps } = getImageProps({
    ...common,
    src: slide.desktop,
    width: 1440,
    height: 700,
  });

  return (
    <picture>
      <source media={MOBILE_MEDIA} srcSet={mobileSrcSet} />
      <img
        {...desktopProps}
        fetchPriority={eager ? "high" : undefined}
        draggable={false}
        className={`absolute inset-0 h-full w-full object-cover ${
          slide.objectPosition ?? "object-center"
        } ${className}`}
      />
    </picture>
  );
}

const SLIDE_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
} as const;

const slideVariants: Variants = {
  enter: (dir: 1 | -1) => ({
    x: dir > 0 ? "18%" : "-18%",
    scale: 1.08,
    opacity: 0,
    zIndex: 2,
  }),
  center: {
    x: "0%",
    scale: 1,
    opacity: 1,
    zIndex: 2,
    transition: {
      x: SLIDE_SPRING,
      scale: SLIDE_SPRING,
      opacity: { duration: DUR.base, ease: EASE },
    },
  },
  exit: (dir: 1 | -1) => ({
    x: dir > 0 ? "-12%" : "12%",
    opacity: 0,
    zIndex: 1,
    transition: { duration: EXIT_DUR, ease: EASE },
  }),
};

const slideFadeVariants: Variants = {
  enter: { opacity: 0, zIndex: 2 },
  center: { opacity: 1, zIndex: 2, transition: { duration: DUR.base } },
  exit: { opacity: 0, zIndex: 1, transition: { duration: DUR.base } },
};

const rollVariants: Variants = {
  enter: { y: "110%", opacity: 0 },
  center: {
    y: "0%",
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 26 },
  },
  exit: {
    y: "-110%",
    opacity: 0,
    transition: { duration: DUR.fast, ease: EASE },
  },
};

const wordVariants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  show: {
    opacity: 1,
    y: 0,
    transition: { ...POP_SPRING, damping: 22 },
  },
};

const HEADLINE: readonly { word: string; accent?: boolean }[] = [
  { word: "Bring" },
  { word: "DOG", accent: true },
  { word: "IT", accent: true },
  { word: "UP", accent: true },
  { word: "to" },
  { word: "your" },
  { word: "Location." },
] as const;

function StarburstIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0l2.3 7.1 7.4-.9-6 4.5 3 6.8-6.7-3.3L5.3 17.5l3-6.8-6-4.5 7.4.9L12 0z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function HeroSlider() {
  const reduced = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, 1 | -1]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const compact = useSyncExternalStore(
    subscribeToMobileMq,
    () => window.matchMedia(MOBILE_MEDIA).matches,
    () => false,
  );

  const goTo = useCallback((target: number, dir: 1 | -1) => {
    const n = SLIDES.length;
    setSlide([((target % n) + n) % n, dir]);
    setCycle((c) => c + 1);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  const resume = useCallback(() => {
    setPaused(false);
    setCycle((c) => c + 1);
  }, []);

  // Single timeout-based autoplay loop keyed to the active slide.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setSlide(([i]) => [(i + 1) % SLIDES.length, 1]),
      SLIDE_MS,
    );
    return () => clearTimeout(t);
  }, [index, paused, cycle]);

  const onDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      setPaused(false);
      if (info.offset.x < -60 || info.velocity.x < -500) next();
      else if (info.offset.x > 60 || info.velocity.x > 500) prev();
      else setCycle((c) => c + 1);
    },
    [next, prev],
  );

  const slide = SLIDES[index];
  const wordY = compact ? 14 : 28;

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Where DOG IT UP fits"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={resume}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={resume}
      onTouchCancel={resume}
      className="relative flex min-h-[calc(100dvh-var(--header-h))] w-full flex-col overflow-hidden bg-ink"
    >
      {mounted && (
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0">
          {SLIDES.map((s) => (
            <SlideImage key={s.location} slide={s} eager />
          ))}
        </div>
      )}

      {/* ————— Full-bleed slide layer (swipeable) ————— */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={reduced ? slideFadeVariants : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag={reduced ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragStart={() => setPaused(true)}
          onDragEnd={onDragEnd}
          className="absolute inset-0 touch-pan-y"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: reduced ? 1 : 1.06 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0"
          >
            <SlideImage slide={slide} eager={index === 0} />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ————— Readability scrim (values documented in file header) ————— */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-5">
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/85 from-0% via-ink/45 via-30% to-transparent to-60%" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/60 from-0% to-transparent to-30%" />
      </div>

      {/* ————— Overlay content — pointer-events pass through to the slider
            except on interactive controls ————— */}
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-[1920px] flex-1 flex-col px-6 md:px-12 xl:px-gutter">
        <motion.div
          variants={staggerContainer(STAGGER.base, 0.1)}
          initial="hidden"
          animate="show"
          className="flex max-w-2xl flex-1 flex-col justify-start pb-10 pt-16 md:justify-center md:pb-16"
        >
          <motion.p
            variants={reduced ? fadeIn : fadeUp}
            className="flex items-center gap-2 text-caption font-bold uppercase tracking-[0.2em] text-accent"
          >
            <motion.span
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-flex"
            >
              <StarburstIcon className="h-4 w-4" />
            </motion.span>
            Partner With Us
          </motion.p>

          <motion.h1
            variants={staggerContainer(STAGGER.base)}
            className="mt-5 font-display text-[44px] uppercase leading-[0.95] text-cream sm:text-h1 xl:text-display"
          >
            <span className="sr-only">Bring DOG IT UP to your Location.</span>
            <span aria-hidden className="flex flex-wrap gap-x-[0.28em]">
              {HEADLINE.map(({ word, accent }) => (
                <motion.span
                  key={word}
                  variants={reduced ? fadeIn : wordVariants}
                  custom={wordY}
                  className={
                    accent
                      ? "bg-linear-to-r from-accent to-primary bg-clip-text text-transparent"
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            variants={reduced ? fadeIn : fadeUp}
            aria-live="polite"
            className="mt-6 flex flex-wrap items-baseline gap-x-2 text-body-lg text-cream/80"
          >
            Franchising And Licensing opportunities Available
          </motion.p>

          <motion.div
            variants={reduced ? fadeIn : fadeUp}
            className="pointer-events-auto mt-10 flex flex-wrap gap-4"
          >
            <Button href="#contact" variant="filled" size="lg">
              Request More Info
            </Button>
            <Button
              href="/menu"
              variant="on-dark"
              size="lg"
              className="bg-surface/10 backdrop-blur-sm"
            >
              View Our Menu
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={reduced ? fadeIn : fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-end justify-between gap-6 pb-6 md:pb-8"
        >
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={slide.location}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
                animate={
                  reduced
                    ? { opacity: 1, transition: { delay: CHIP_DELAY } }
                    : {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { ...POP_SPRING, delay: CHIP_DELAY },
                      }
                }
                exit={{ opacity: 0, transition: { duration: DUR.fast } }}
                className="flex w-fit items-center gap-2 rounded-pill-sm bg-surface/15 px-4 py-2 text-caption font-bold text-surface shadow-lg backdrop-blur-md"
              >
                <PinIcon className="h-4 w-4 text-accent" />
                {slide.location}
              </motion.div>
            </AnimatePresence>
            <div
              className="pointer-events-auto flex items-center gap-2"
              role="tablist"
              aria-label="Slides"
            >
              {SLIDES.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.location}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to slide ${i + 1}: ${s.location}`}
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    className={`relative h-2 overflow-hidden rounded-full bg-surface/25 transition-[width,background-color] duration-300 ${
                      active ? "w-12" : "w-6 hover:bg-surface/40"
                    }`}
                  >
                    {active && (
                      <motion.span
                        key={`${index}-${cycle}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: paused || reduced ? 0.3 : SLIDE_MS / 1000,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 left-0 rounded-full bg-primary"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="pointer-events-auto flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-surface/10 text-surface shadow-lg backdrop-blur-md transition-colors duration-200 hover:bg-primary hover:text-surface"
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-surface/10 text-surface shadow-lg backdrop-blur-md transition-colors duration-200 hover:bg-primary hover:text-surface"
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
