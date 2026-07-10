"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, STAGGER, VIEWPORT } from "@/lib/motion";
import { RevealGroupContext } from "@/components/motion/Reveal";

const tags = {
  div: motion.div,
  ul: motion.ul,
  section: motion.section,
} as const;

export interface RevealGroupProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  as?: keyof typeof tags;
  className?: string;
}

/**
 * Stagger orchestrator for lists/grids. Direct or nested <Reveal> children
 * inherit the timeline automatically (they detect the group via context and
 * yield control of initial/whileInView to this parent).
 */
export default function RevealGroup({
  children,
  stagger = STAGGER.base,
  delayChildren = 0,
  as = "div",
  className,
}: RevealGroupProps) {
  const Tag = tags[as];

  return (
    <RevealGroupContext.Provider value={true}>
      <Tag
        variants={staggerContainer(stagger, delayChildren)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className={className}
      >
        {children}
      </Tag>
    </RevealGroupContext.Provider>
  );
}
