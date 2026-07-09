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
      <div className="relative aspect-[1441/1076] w-full min-h-[420px] sm:min-h-[560px]">
        <Image
          src="/assets/hero-web-cover.jpg"
          alt="Assortment of DOG IT UP hot dogs"
          fill
          priority
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-content px-6 md:px-12">
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
        </div>
      </div>
    </section>
  );
}
