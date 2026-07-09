import Image from "next/image";
import Button from "./Button";
import { HeroRevealGroup, HeroRevealItem } from "./HeroReveal";
import BeefIcon from "../public/assets/icons/hugeicons-beef.svg";
import LeafIcon from "../public/assets/icons/boxicons-leaf.svg";
import FireIcon from "../public/assets/icons/ri-fire-line.svg";

const features = [
  { label: "100% Beef", icon: BeefIcon },
  { label: "Made Fresh", icon: LeafIcon },
  { label: "Bold Flavor", icon: FireIcon },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-0 xl:pl-[60px]">
          <HeroRevealGroup className="flex max-w-xl flex-col items-start gap-6">
            <HeroRevealItem>
              <Image
                src="/assets/typo-hero.svg"
                alt="Taste America. One Dog, At a time."
                width={578}
                height={320}
                priority
                className="h-auto w-[280px] sm:w-[360px] lg:w-[420px]"
              />
            </HeroRevealItem>

            <HeroRevealItem>
              <h1 className="text-body-lg sm:text-h3 leading-[1.2] text-ink">
                <span className="font-bold">
                  America&rsquo;s Favorite Flavors.
                </span>
                <span className="block font-normal text-ink-soft">
                  Built in Every Bite.
                </span>
              </h1>
            </HeroRevealItem>

            <HeroRevealItem className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Button
                href="#order"
                variant="filled"
                className="w-[209px] !h-[57px] justify-between !rounded-pill-lg"
              >
                Browse Menu
              </Button>
            </HeroRevealItem>

            <HeroRevealItem className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6">
              {features.map(({ label, icon: Icon }, i) => (
                <span key={label} className="flex items-center gap-4">
                  {i > 0 && (
                    <span
                      className="h-6 w-px bg-ink-soft"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-center gap-2 text-caption font-normal text-ink-soft">
                    <Icon className="h-6 w-6 shrink-0" />
                    {label}
                  </span>
                </span>
              ))}
            </HeroRevealItem>
          </HeroRevealGroup>
        </div>

        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[720px]">
          <Image
            src="/assets/hero-web-cover.jpg"
            alt="Assortment of DOG IT UP hot dogs"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
