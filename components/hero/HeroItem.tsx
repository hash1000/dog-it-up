"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroVariants } from "./heroMotion";

type HeroBeat = "art" | "image" | "subtext";

/**
 * A single beat of the hero timeline. `beat` selects the named variant from
 * heroMotion.ts, so all sequencing stays in the TIMING constant.
 */
export default function HeroItem({
  beat,
  children,
  className,
}: {
  beat: HeroBeat;
  children: ReactNode;
  className?: string;
}) {
  const v = heroVariants(useReducedMotion() ?? false);

  return (
    <motion.div className={className} variants={v[beat]}>
      {children}
    </motion.div>
  );
}
