import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Menu",
    links: ["All Menu", "Signature Dogs", "Sides", "Drinks", "Combos"],
  },
  {
    title: "Restaurant",
    links: ["About us", "Partner with us"],
  },
  {
    title: "Help",
    links: ["FAQs", "Contact us"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface pt-16">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Image
              src="/assets/nav-bar-logo.jpg"
              alt="Dog It Up"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <p className="text-body-lg">
              <span className="font-bold text-ink">Taste America.</span>
              <span className="block font-bold text-primary">One Dog at a time.</span>
            </p>
            <p className="text-caption text-ink-soft">
              Hot dogs, Bold Flavors, Made fresh, Made to Crave.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <h3 className="text-body-lg font-bold text-ink">{col.title}</h3>
              <ul className="mt-2">
                {col.links.map((link) => (
                  <li key={link} className="leading-[50px]">
                    <Link href="#" className="text-body text-ink-soft hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-8 leading-[50px] sm:flex-row">
          <p className="text-body text-ink-soft">All rights reserved 2026</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-body text-ink-soft underline">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="text-body text-ink-soft underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-ink">
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}
