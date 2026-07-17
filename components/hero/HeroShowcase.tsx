"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";
import { TIMING } from "./heroMotion";

interface Flavor {
  name: string;
  src: string;
}

const FLAVORS: Flavor[] = [
  { name: "American Classic", src: "/hero/american-classic.webp" },
  { name: "Nashville Hot", src: "/hero/nashville-hot.webp" },
  { name: "Texas Chilli Cheese", src: "/hero/texas-chilli-cheese.webp" },
  { name: "Midwest MAC Daddy", src: "/hero/midwest-mac-daddy.webp" },
  { name: "Kansas City Smokehouse", src: "/hero/kansas-city-smokehouse.webp" },
  { name: "Loaded Fries", src: "/hero/loaded-fries.webp" },
];

/** How long each flavor is held up before the next one rises in. */
const HOLD_MS = 3800;

/**
 * Auto-cycling flavor showcase: each signature dog smoothly flips out around
 * its vertical axis and the next flips in. Pauses on hover/focus; dots jump
 * straight to a flavor. Reduced motion collapses everything to cross-fades.
 */
export default function HeroShowcase({ className }: { className?: string }) {
  const reduced = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Only the very first slide waits for its beat in the hero timeline.
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % FLAVORS.length),
      HOLD_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  const flavor = FLAVORS[index];
  const enterDelay = hasEntered ? 0 : TIMING.showcase;

  const slide = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.3 } },
        transition: { duration: 0.3, delay: enterDelay },
      }
    : {
        initial: { opacity: 0, rotateY: -55, scale: 0.94 },
        animate: { opacity: 1, rotateY: 0, scale: 1 },
        exit: {
          opacity: 0,
          rotateY: 55,
          scale: 0.94,
          transition: { duration: 0.35, ease: EASE },
        },
        transition: { duration: 0.55, ease: EASE, delay: enterDelay },
      };

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex w-full flex-col items-center gap-3">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={flavor.name}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="rounded-pill-sm bg-surface px-5 py-2 text-caption font-bold text-primary shadow-md sm:text-body"
            aria-live="polite"
          >
            {flavor.name}
          </motion.span>
        </AnimatePresence>

        <div className="flex items-center gap-2" role="tablist">
          {FLAVORS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${f.name}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-pill-sm transition-all duration-300 ${
                i === index
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-surface/70 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>

        {/* Box matches the photos' real ~758x430 ratio so no dead space above. */}
        <div className="relative aspect-7/4 w-full perspective-distant">
          <AnimatePresence initial={true} mode="wait">
            <motion.div
              key={flavor.name}
              className="absolute inset-0"
              initial={slide.initial}
              animate={slide.animate}
              exit={slide.exit}
              transition={slide.transition}
              onAnimationComplete={() => setHasEntered(true)}
            >
              <Image
                src={flavor.src}
                alt={`${flavor.name} held up in DOG IT UP wrapping`}
                fill
                sizes="(min-width: 1920px) 1000px, (min-width: 1024px) 54vw, (min-width: 640px) 540px, 95vw"
                className="object-contain object-bottom"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
