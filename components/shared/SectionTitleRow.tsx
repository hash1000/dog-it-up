"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeIn,
  scalePop,
  growLine,
  clipReveal,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion";

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

/**
 * "— ★ Title ★ —" divider. Lines grow from center, stars pop, title
 * write-on (clipReveal — the accent-text signature). One stagger timeline.
 */
export default function SectionTitleRow({ title }: { title: string }) {
  const reduced = useReducedMotion();
  const v = (variant: typeof scalePop) => (reduced ? fadeIn : variant);

  return (
    <motion.div
      variants={staggerContainer(STAGGER.tight)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className="flex w-full items-center gap-4 sm:gap-5"
    >
      <motion.span
        variants={reduced ? fadeIn : growLine}
        className="h-px flex-1 origin-center bg-ink"
        aria-hidden="true"
      />
      <motion.span variants={v(scalePop)} className="shrink-0">
        <StarIcon className="h-6 w-6 text-ink" />
      </motion.span>
      <motion.h3
        variants={v(clipReveal)}
        className="text-center text-[24px] font-extrabold text-ink sm:text-h3 lg:text-[45px]"
      >
        {title}
      </motion.h3>
      <motion.span variants={v(scalePop)} className="shrink-0">
        <StarIcon className="h-6 w-6 text-ink" />
      </motion.span>
      <motion.span
        variants={reduced ? fadeIn : growLine}
        className="h-px flex-1 origin-center bg-ink"
        aria-hidden="true"
      />
    </motion.div>
  );
}
