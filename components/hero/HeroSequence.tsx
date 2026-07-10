"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroVariants } from "./heroMotion";

/**
 * Root of the hero entrance timeline. Runs once on mount (above the fold),
 * driving every HeroItem/HeroCta/HeroFeatures descendant via variant
 * propagation.
 */
export default function HeroSequence({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const v = heroVariants(useReducedMotion() ?? false);

  return (
    <motion.div
      className={className}
      variants={v.root}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
