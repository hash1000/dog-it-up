import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";

const columns = [
  {
    title: "Menu",
    links: [
      { label: "Signature Dogs", href: "/menu#signature-dogs" },
      { label: "Sides", href: "/menu#sides" },
      { label: "Drinks", href: "/menu#drinks" },
    ],
  },
  {
    title: "Restaurant",
    links: [
      { label: "About us", href: "/about" },
      { label: "Partner with us", href: "/partner" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
];

const footerLink =
  "relative inline-block text-body text-char/70 transition-colors duration-150 hover:text-flame " +
  "after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left " +
  "after:scale-x-0 after:bg-flame after:transition-transform after:duration-150 hover:after:scale-x-100";

export default function Footer() {
  return (
    <footer className="w-full border-t border-char/10 bg-cream pt-16">
      <div className="mx-auto max-w-[1440px] sm:px-5">
        <RevealGroup className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="flex flex-col items-center gap-4 text-center sm:col-span-2 sm:items-start sm:text-left lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo-mark.svg"
                alt=""
                width={64}
                height={34}
                className="h-9 w-auto"
              />
              <span className="font-display text-h3 uppercase leading-none">
                <span className="text-char">Dog</span>{" "}
                <span className="text-flame">It Up</span>
              </span>
            </Link>
            <p className="text-body-lg">
              <span className="font-bold text-char">Taste America.</span>
              <span className="block font-bold text-flame">One Dog at a time.</span>
            </p>
            <p className="max-w-xs text-caption text-char/70">
              Hot dogs, Bold Flavors, Made fresh, Made to Crave.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-char/20 text-char transition-[background-color,color,border-color,transform] duration-200 hover:scale-105 hover:border-flame hover:bg-flame hover:text-cream"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          {columns.map((col) => (
            <Reveal key={col.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h3 className="text-body-lg font-bold text-char">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal
          variant="fadeIn"
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-char/10 py-8 sm:flex-row"
        >
          <p className="text-body text-char/70">All rights reserved 2026</p>
          <div className="flex items-center gap-6">
            <Link href="#" className={footerLink}>
              Terms &amp; Conditions
            </Link>
            <Link href="#" className={footerLink}>
              Privacy Policy
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
