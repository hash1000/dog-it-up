"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { DUR, EASE, STAGGER, VIEWPORT, fadeIn } from "@/lib/motion";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

export interface AnimatedTextProps {
  text: string;
  as?: keyof typeof tags;
  stagger?: number;
  delay?: number;
  className?: string;
}

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
};

/**
 * Word-by-word headline reveal (generalized from the hero). Each word rises
 * into place on the brand ease; reduced motion collapses to one fade.
 * Words wrap naturally — layout is identical to plain text (no CLS).
 */
export default function AnimatedText({
  text,
  as = "h2",
  stagger = STAGGER.base,
  delay = 0,
  className,
}: AnimatedTextProps) {
  const reduced = useReducedMotion();
  const Tag = tags[as];

  if (reduced) {
    return (
      <Tag
        variants={fadeIn}
        custom={{ delay }}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className={className}
      >
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
          {i < text.split(" ").length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
