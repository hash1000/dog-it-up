"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroVariants } from "./heroMotion";

/**
 * CTA beat: fade/slide entrance with a single post-landing scale pulse,
 * plus hover (scale + brightness) and tap feedback. All interaction motion
 * is disabled under prefers-reduced-motion.
 */
export default function HeroCta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;
  const v = heroVariants(reduced);

  return (
    <motion.div
      className={className}
      variants={v.cta}
      whileHover={
        reduced ? undefined : { scale: 1.03, filter: "brightness(1.05)" }
      }
      whileTap={reduced ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.div>
  );
}
