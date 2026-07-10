"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, type ReactNode } from "react";
import {
  revealVariants,
  fadeIn,
  VIEWPORT,
  type MotionCustom,
  type RevealVariantName,
} from "@/lib/motion";

/**
 * Set by <RevealGroup>. When a <Reveal> renders inside a group it drops its
 * own initial/whileInView so the parent orchestrates the stagger.
 */
export const RevealGroupContext = createContext(false);

const tags = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
} as const;

export interface RevealProps {
  children: ReactNode;
  /** Entrance from the shared vocabulary. Defaults to fadeUp. */
  variant?: RevealVariantName;
  delay?: number;
  /** Horizontal drift for fadeUp: -24 left blocks, +24 right blocks. */
  x?: number;
  as?: keyof typeof tags;
  className?: string;
}

/**
 * Scroll-triggered entrance wrapper. Client component, but its children can
 * stay server-rendered. Reduced motion degrades every variant to fadeIn.
 */
export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  x = 0,
  as = "div",
  className,
}: RevealProps) {
  const reduced = useReducedMotion();
  const inGroup = useContext(RevealGroupContext);
  const Tag = tags[as];
  const customValue: MotionCustom = { delay, x };

  return (
    <Tag
      variants={reduced ? fadeIn : revealVariants[variant]}
      custom={customValue}
      {...(inGroup
        ? {}
        : { initial: "hidden", whileInView: "show", viewport: VIEWPORT })}
      className={className}
    >
      {children}
    </Tag>
  );
}
