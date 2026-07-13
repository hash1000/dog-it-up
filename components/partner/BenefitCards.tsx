"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";

interface Benefit {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  /** Inverted brand-red card — the grid's focal point. */
  accent?: boolean;
  /** Bento placement: top row spans 2 of 6 columns, bottom row spans 3. */
  span: string;
}

const benefits: Benefit[] = [
  {
    title: "PREMIUM BRAND RECOGNITION",
    description:
      "Featuring a trusted all-American hot dog experience that customers love.",
    icon: BadgeIcon,
    span: "lg:col-span-2",
  },
  {
    title: "SIMPLE OPERATIONS",
    description:
      "A focused menu and streamlined processes designed for speed, consistency, and minimal training.",
    icon: SettingsIcon,
    span: "lg:col-span-2",
  },
  {
    title: "HIGH MARGIN MENU",
    description:
      "Cross-utilized ingredients and efficient preparation help maximize profitability.",
    icon: GraphIcon,
    accent: true,
    span: "lg:col-span-2",
  },
  {
    title: "FLEXIBLE FORMATS",
    description:
      "Built for convenience stores, travel centers, food courts, and other non-traditional environments.",
    icon: NewsIcon,
    span: "lg:col-span-3",
  },
  {
    title: "FAST STARTUP",
    description:
      "Simple equipment packages and streamlined operations reduce implementation time.",
    icon: TimerIcon,
    span: "sm:col-span-2 lg:col-span-3",
  },
];

export default function BenefitCards() {
  const reduced = useReducedMotion();

  return (
    <RevealGroup className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
      {benefits.map(({ title, description, icon: Icon, accent, span }) => (
        <Reveal key={title} className={span}>
          <motion.article
            whileHover={reduced ? undefined : { y: -6 }}
            className="group relative h-full"
          >
            {/* GPU-friendly hover shadow: pre-rendered layer, opacity only */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[0_24px_48px_-16px_rgba(28,25,23,0.18)] transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div
              className={`relative flex h-full flex-col rounded-3xl p-7 ring-1 sm:p-8 ${
                accent
                  ? "bg-primary ring-surface/10"
                  : "bg-surface-hero ring-ink/5"
              }`}
            >
              <Reveal
                as="span"
                variant="scalePop"
                className={`grid h-14 w-14 place-items-center rounded-full ${
                  accent
                    ? "bg-surface/15 text-surface"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-7 w-7" />
              </Reveal>
              <h3
                className={`mt-6 text-[24px] font-bold leading-[30px] ${
                  accent ? "text-surface" : "text-primary"
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-3 text-body font-medium leading-relaxed ${
                  accent ? "text-surface/85" : "text-ink"
                }`}
              >
                {description}
              </p>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </RevealGroup>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.09a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z" />
    </svg>
  );
}

function GraphIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 4 3 5-7" />
    </svg>
  );
}

function NewsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h13v16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" />
      <path d="M6 8h7M6 12h7M6 16h7" />
    </svg>
  );
}

function TimerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2h4" />
      <circle cx="12" cy="14" r="8" />
      <path d="M12 14V9" />
    </svg>
  );
}
