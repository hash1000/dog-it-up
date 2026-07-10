"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const HERO_IMAGES = [
  "/about/1.webp",
  "/about/2.webp",
  "/about/3.webp",
  "/about/4.webp",
  "/about/5.webp",
  "/about/6.webp",
  "/about/7.webp",
];

const ROTATE_MS = 4000;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
    </svg>
  );
}

export default function AboutHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = setInterval(
      () => setActive((i) => (i + 1) % HERO_IMAGES.length),
      ROTATE_MS,
    );
    const onChange = () => {
      if (reduced.matches) clearInterval(id);
    };
    reduced.addEventListener("change", onChange);
    return () => {
      clearInterval(id);
      reduced.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden md:min-h-[85vh] md:items-center">
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hand holding a DOG IT UP menu item against a blue sky"
          fill
          sizes="100vw"
          fetchPriority={i === 0 ? "high" : undefined}
          loading={i === 0 ? "eager" : "lazy"}
          className={`object-cover object-right transition-opacity duration-[800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Readability scrim: bottom-up on mobile, left-to-right on desktop */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-surface/55 to-transparent md:inset-y-0 md:left-0 md:h-auto md:w-[55%] md:bg-linear-to-r"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-12 pt-24 md:px-12 md:py-24">
        <div className="flex max-w-[560px] flex-col items-start gap-6 sm:gap-8 md:max-w-[45%]">
          <p className="flex items-center gap-3 text-body font-extrabold uppercase tracking-widest text-ink motion-safe:animate-hero-fade-up">
            <StarIcon className="h-4 w-4" />
            Our Story
            <StarIcon className="h-4 w-4" />
          </p>
          <h1 className="text-[40px] font-black leading-tight text-primary motion-safe:animate-hero-fade-up motion-safe:[animation-delay:120ms] sm:text-h1 lg:text-[80px] lg:leading-[1.1]">
            A Taste of America
          </h1>
          <p className="text-body-lg font-medium leading-9 text-ink motion-safe:animate-hero-fade-up motion-safe:[animation-delay:240ms]">
            Dog It Up celebrates America&rsquo;s love affair with hot dogs by
            bringing together regional favorites inspired by iconic flavors
            from across the country. Every hot dog starts with a premium
            all-beef hot dog served on a fresh bakery bun and is topped with
            bold, familiar ingredients that guests know and love.
          </p>
          <div className="motion-safe:animate-hero-fade-up motion-safe:[animation-delay:360ms]">
            <Button
              href="/partner"
              variant="filled"
              className="!h-[82px] w-[287px] !rounded-none text-body-lg !font-bold"
            >
              Find out More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
