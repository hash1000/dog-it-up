"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroVariants } from "./heroMotion";

/** Staggered container for the features row (final beat of the timeline). */
export default function HeroFeatures({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const v = heroVariants(useReducedMotion() ?? false);

  return (
    <motion.div className={className} variants={v.features}>
      {children}
    </motion.div>
  );
}
