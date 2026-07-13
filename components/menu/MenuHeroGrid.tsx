"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE, STAGGER, TAP_SCALE } from "@/lib/motion";
import type { MenuCategory } from "@/components/menu/MenuExplorer";

interface HeroTile {
  category: MenuCategory;
  label: string;
  image: string;
  alt: string;
}

const tiles: HeroTile[] = [
  {
    category: "Signature Dogs",
    label: "Hot Dogs",
    image: "/menu/menu-page/hot-dogs.webp",
    alt: "Five loaded signature hot dogs on an orange backdrop",
  },
  {
    category: "Sides",
    label: "Sides",
    image: "/menu/menu-page/sides.webp",
    alt: "Boxes of crinkle fries, mac n cheese and onion rings",
  },
  {
    category: "Drinks",
    label: "Drinks",
    image: "/menu/menu-page/drinks.webp",
    alt: "Two branded cups with an iced drink and a lemonade",
  },
];

export interface MenuHeroGridProps {
  active: MenuCategory | null;
  onSelect: (category: MenuCategory) => void;
}

export default function MenuHeroGrid({ active, onSelect }: MenuHeroGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid h-[calc(100svh-65px)] w-full grid-cols-1 grid-rows-[2fr_1fr_1fr] gap-1 sm:h-[calc(100svh-69px)] md:grid-cols-2 md:grid-rows-2 xl:h-[calc(100svh-73px)] 2xl:h-[calc(100svh-77px)]">
      {tiles.map((tile, index) => {
        const isHotDogs = tile.category === "Signature Dogs";
        const isActive = active === tile.category;

        return (
          <motion.button
            key={tile.category}
            type="button"
            onClick={() => onSelect(tile.category)}
            aria-pressed={isActive}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: DUR.slow,
              ease: EASE,
              delay: index * STAGGER.base * 2,
            }}
            whileTap={reduceMotion ? undefined : { scale: TAP_SCALE }}
            className={`group relative block h-full w-full cursor-pointer overflow-hidden text-left outline-none transition-shadow duration-300 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-mustard ${
              isActive ? "ring-4 ring-inset ring-mustard" : "ring-0"
            } ${isHotDogs ? "md:row-span-2" : ""}`}
          >
            <Image
              src={tile.image}
              alt={tile.alt}
              fill
              preload={isHotDogs}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-500 ease-out ${
                reduceMotion ? "" : "group-hover:scale-[1.05]"
              }`}
            />

            {/* Bottom scrim so the label pill stays readable on busy imagery */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-char/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <span
              className={`absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 font-display text-body font-black uppercase tracking-wide transition-colors duration-300 sm:bottom-5 sm:left-5 ${
                isActive
                  ? "bg-mustard text-char"
                  : "bg-cream/90 text-char group-hover:bg-mustard"
              }`}
            >
              {tile.label}
              <motion.span
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : isActive
                      ? { rotate: [0, -12, 10, 0] }
                      : { rotate: 0 }
                }
                transition={{ duration: DUR.base, ease: EASE }}
                className="inline-block"
              >
                {isActive ? "🔥" : "→"}
              </motion.span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
