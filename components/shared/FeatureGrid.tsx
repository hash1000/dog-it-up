"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, fadeIn, fadeUp, staggerContainer, STAGGER, VIEWPORT } from "@/lib/motion";

const features = [
  {
    title: "Quality Ingredients",
    icon: QualityIcon,
  },
  {
    title: "Made Fresh Daily",
    icon: FreshIcon,
  },
  {
    title: "Bold Flavors",
    icon: FlavorIcon,
  },
  {
    title: "Fast Service",
    icon: SpeedIcon,
  },
];

export default function FeatureGrid() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer(STAGGER.base)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-40"
    >
      {features.map(({ title, icon: Icon }) => (
        <motion.div
          key={title}
          variants={reduced ? fadeIn : fadeUp}
          whileHover={reduced ? undefined : "bounce"}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.span
            variants={{ bounce: { y: [0, -4, 0], transition: { duration: 0.4, ease: EASE } } }}
            className="inline-flex"
          >
            <Icon className="h-16 w-16 text-primary" />
          </motion.span>
          <h3 className="text-h3 font-bold text-ink">{title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function QualityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2Z" />
    </svg>
  );
}

export function FreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21c9-1 14-6 14-15C10 7 5 12 5 21Z" />
      <path d="M5 21c2-4 5-7 9-9" />
    </svg>
  );
}

export function FlavorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22c4 0 6-2.5 6-6 0-3-2-4.5-2-4.5.5 2-1 3-1 3 .5-4-3-6-3-8.5-2 1.5-2.5 3.5-2.5 5.5-1-1-1-2.5-1-2.5C6 11 6 14 6 16c0 3.5 2 6 6 6Z" />
    </svg>
  );
}

export function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
