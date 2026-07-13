"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DUR, EASE } from "@/lib/motion";

export interface PageEnterProps {
  children: ReactNode;
  className?: string;
}

/**
 * Page-mount transition: the content root of every page rises in with a
 * quick fadeUp. Deliberately no exit animations / AnimatePresence — App
 * Router route exits are brittle, so we keep entrances only.
 */
export default function PageEnter({ children, className }: PageEnterProps) {
  const reduced = useReducedMotion();

  return (
    <motion.main
      data-motion-fallback
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: DUR.fast, ease: EASE }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
