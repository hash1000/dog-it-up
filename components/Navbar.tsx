"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "menu" },
  { label: "About us", href: "about" },
  { label: "Partner with us", href: "partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shrink-0 border-b border-ink/5 bg-surface">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 md:px-12 xl:px-gutter">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/assets/nav-bar-logo.jpg"
            alt="Dog It Up"
            width={168}
            height={44}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>
        <ul className="hidden items-center gap-[47px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-caption font-bold text-ink hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button href="#order" variant="filled" className="!hidden !h-9 !rounded-pill-sm !bg-accent !px-6 lg:!inline-flex">
            Order Now
          </Button>
          <button
            type="button"
            aria-label="Profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink sm:flex"
          >
            <ProfileIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink sm:flex"
          >
            <CartIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <MenuIcon open={open} className="h-6 w-6" />
          </button>
        </div>
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

function MenuIcon({ open, className }: { open: boolean; className?: string }) {
  if (open) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9.99976 18.5C10.3975 18.5 10.779 18.6582 11.0603 18.9395C11.3416 19.2208 11.4998 19.6022 11.4998 20C11.4998 20.3978 11.3416 20.7792 11.0603 21.0605C10.779 21.3418 10.3975 21.5 9.99976 21.5C9.60202 21.4999 9.22046 21.3418 8.93921 21.0605C8.65798 20.7793 8.49976 20.3978 8.49976 20C8.49976 19.6022 8.65798 19.2207 8.93921 18.9395C9.22046 18.6582 9.60202 18.5001 9.99976 18.5ZM16.9998 18.5C17.3975 18.5 17.779 18.6582 18.0603 18.9395C18.3416 19.2208 18.4998 19.6022 18.4998 20C18.4998 20.3978 18.3416 20.7792 18.0603 21.0605C17.779 21.3418 17.3975 21.5 16.9998 21.5C16.602 21.4999 16.2205 21.3418 15.9392 21.0605C15.658 20.7793 15.4998 20.3978 15.4998 20C15.4998 19.6022 15.658 19.2207 15.9392 18.9395C16.2205 18.6582 16.602 18.5001 16.9998 18.5ZM4.99097 2.5C5.09579 2.49973 5.1987 2.53274 5.28394 2.59375C5.36838 2.65431 5.4319 2.73961 5.46558 2.83789V2.83887L6.57593 6.1582L6.69019 6.5H20.9988C21.0794 6.50013 21.1589 6.52021 21.2302 6.55762C21.3003 6.59438 21.3603 6.6473 21.406 6.71191C21.4937 6.84627 21.5155 7.01722 21.4587 7.17969L18.7019 14.5244V14.5254C18.5951 14.8111 18.4034 15.0573 18.1531 15.2314C17.9026 15.4056 17.6046 15.4994 17.2996 15.5H9.70972C9.39433 15.5003 9.08663 15.4013 8.83081 15.2168C8.57506 15.0324 8.38428 14.7719 8.28491 14.4727L8.28394 14.4717L4.7439 3.8418L4.63062 3.5H2.48999V2.5H4.99097Z" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}
