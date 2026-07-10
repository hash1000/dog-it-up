"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { heroVariants } from "./heroMotion";

/**
 * One feature (icon + label). Fades in as part of the HeroFeatures stagger;
 * on hover the icon does a single quick bounce — no idle animation.
 */
export default function HeroFeature({
  icon,
  children,
  className,
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;
  const v = heroVariants(reduced);

  return (
    <motion.span
      className={className}
      variants={v.featureItem}
      whileHover={reduced ? undefined : "iconBounce"}
    >
      <motion.span
        className="flex shrink-0 items-center"
        variants={{
          iconBounce: {
            y: [0, -4, 0],
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
      >
        {icon}
      </motion.span>
      {children}
    </motion.span>
  );
}
