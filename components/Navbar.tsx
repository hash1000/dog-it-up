"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Button from "./Button";
import { CartIcon, MenuIcon, ProfileIcon } from "./Icons";
import { fadeIn, fadeUp, staggerContainer, STAGGER } from "@/lib/motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "menu" },
  { label: "About us", href: "about" },
  { label: "Partner with us", href: "partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <nav
      className={`sticky top-0 z-50 w-full shrink-0 border-b border-ink/5 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-surface/90 shadow-[0_8px_24px_-12px_rgba(28,25,23,0.25)] backdrop-blur-md"
          : "bg-surface"
      }`}
    >
      {/* Row height comes from --header-h so layout offsets (hero min-h,
          scroll margins) can never drift from the real navbar height. */}
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-[1920px] items-center justify-between px-6 md:px-12 xl:px-gutter">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="flex shrink-0"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Dog It Up"
              width={120}
              height={40}
              priority
              className="h-8 w-auto object-contain sm:h-9 xl:h-10 2xl:h-11"
            />
          </Link>
        </motion.div>
        <motion.ul
          variants={staggerContainer(STAGGER.tight)}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <motion.li key={link.label} variants={reduced ? fadeIn : fadeUp}>
              <Link
                href={link.href}
                className="text-body-lg font-bold text-ink hover:text-primary"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 sm:gap-3 xl:gap-4"
        >
          <Button
            href="#order"
            variant="filled"
            className="!hidden !h-9 lg:!h-10 xl:!h-11 !rounded-pill-sm bg-primary !px-6 lg:!inline-flex"
          >
            Order Now
          </Button>
          <button
            type="button"
            aria-label="Profile"
            className="hidden h-9 w-9 md:h-10 md:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-full bg-primary sm:flex"
          >
            <ProfileIcon className="h-6 w-6 xl:h-7 xl:w-7 text-surface" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="hidden h-9 w-9 md:h-10 md:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-full bg-primary sm:flex"
          >
            <CartIcon className="h-6 w-6 xl:h-7 xl:w-7 text-surface" />
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <MenuIcon open={open} className="h-6 w-6" />
          </button>
        </motion.div>
      </div>

      {open && (
        <div
          id="mobile-nav-panel"
          className="flex flex-col gap-6 border-t border-ink/5 bg-surface px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-caption font-bold text-ink hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href="#order"
            variant="filled"
            className="!h-9 w-full !rounded-pill-sm !bg-accent !px-6"
            onClick={() => setOpen(false)}
          >
            Order Now
          </Button>
        </div>
      )}
    </nav>
  );
}
