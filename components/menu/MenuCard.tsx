"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { MenuItem } from "@/lib/menu-data";
import MenuCardSkeleton from "@/components/menu/MenuCardSkeleton";
import { DUR, EASE, STAGGER, VIEWPORT } from "@/lib/motion";

export interface MenuCardProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  price?: MenuItem["price"];
  badge?: MenuItem["badge"];
  index: number;
}

export default function MenuCard({
  name,
  tagline,
  description,
  image,
  price,
  badge,
  index,
}: MenuCardProps) {
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DUR.base, ease: EASE, delay: index * STAGGER.base }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative h-full"
    >
      {/* GPU-friendly hover shadow: pre-rendered layer, opacity only */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[0_24px_48px_-16px_rgba(28,25,23,0.25)] transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream p-6 ring-1 ring-char/5 sm:p-7">
        {badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-mustard px-3 py-1 font-body text-caption font-bold uppercase tracking-wide text-char">
            {badge}
          </span>
        )}
        {price && (
          <span className="absolute right-5 top-5 z-10 rounded-full bg-flame px-3 py-1 font-body text-caption font-bold text-cream">
            {price}
          </span>
        )}

        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setLoaded(true)}
            className={`object-contain transition-transform duration-300 ease-out ${
              reduceMotion ? "" : "group-hover:-rotate-2 group-hover:scale-[1.06]"
            }`}
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col items-center gap-2 text-center">
          <h4 className="font-display text-card-title font-bold uppercase leading-none text-char">
            {name}
          </h4>
          <p className="font-body text-body italic text-char/60 transition-colors duration-200 group-hover:text-flame">
            {tagline}
          </p>
          <p className="font-body text-caption leading-relaxed text-char/80">
            {description}
          </p>
        </div>
      </div>

      {/* Skeleton overlay, crossfaded out once the product image loads */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <MenuCardSkeleton />
      </div>
    </motion.article>
  );
}
