"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menuSections } from "@/lib/menu-data";
import MenuHeroGrid from "@/components/menu/MenuHeroGrid";
import MenuSection from "@/components/menu/MenuSection";
import AnimatedText from "@/components/motion/AnimatedText";
import { DUR, EASE } from "@/lib/motion";

export type MenuCategory = "Signature Dogs" | "Sides" | "Drinks";

export default function MenuExplorer() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<MenuCategory | null>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Clicking the active tile again brings the full menu back
  const handleSelect = (category: MenuCategory) => {
    setActive((current) => (current === category ? null : category));
    sectionsRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const visibleSections = active
    ? menuSections.filter((section) => section.title === active)
    : menuSections;

  return (
    <>
      <div className="w-full bg-surface">
        <MenuHeroGrid active={active} onSelect={handleSelect} />
      </div>

      <section
        id="menu"
        ref={sectionsRef}
        className="w-full scroll-mt-24 bg-surface py-16 sm:py-24"
      >
        <div className="mx-auto flex w-full max-w-360 flex-col gap-16 px-6 sm:gap-24 md:px-12">
          <AnimatedText
            as="h1"
            text="MENU"
            className="text-center font-display text-h1 font-black text-primary"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active ?? "all"}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: DUR.fast, ease: EASE }}
              className="flex w-full flex-col gap-16 sm:gap-24"
            >
              {visibleSections.map((section) => (
                <MenuSection
                  key={section.title}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
