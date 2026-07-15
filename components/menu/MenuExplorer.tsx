"use client";

import { useEffect, useRef, useState } from "react";
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
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    sectionsRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  // Deep links like /menu#signature-dogs activate the matching section
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.slice(1);
      const section = menuSections.find((s) => s.key === hash);
      if (!section) return;
      setActive(section.title as MenuCategory);
      sectionsRef.current?.scrollIntoView({ block: "start" });
    };

    applyHash();
    // Next's <Link> updates the hash via pushState, which never fires
    // hashchange — the Navigation API is the only signal for those clicks.
    const nav = (window as unknown as { navigation?: EventTarget }).navigation;
    nav?.addEventListener("navigatesuccess", applyHash);
    window.addEventListener("hashchange", applyHash);
    return () => {
      nav?.removeEventListener("navigatesuccess", applyHash);
      window.removeEventListener("hashchange", applyHash);
    };
  }, []);

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
              {visibleSections.map((section) => {
                return (
                  <MenuSection
                    key={section.key}
                    id={section.key}
                    title={section.title}
                    items={section.items}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
