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
      {/* Desktop/tablet: shorter 1440×700 export, capped at 700px so the
          hero fits the viewport while keeping the composition uncropped. */}
      <div className="relative mx-auto hidden w-full max-w-[1600px] sm:block sm:min-h-[560px] sm:h-[calc(100vh-68px)] sm:max-h-[700px]">
        <Image
          src="/hero/hero-cover1.webp"
          alt="Assortment of DOG IT UP signature hot dogs"
          fill
          priority
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover object-right-top"
        />

        {/* Text column per Figma: x:100 (shared gutter with navbar logo),
            y:303→962 of the 1076 frame — vertically centered */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 xl:px-gutter">
          <HeroRevealGroup className="flex max-w-[60%] flex-col items-start">
            <HeroRevealItem>
              <Image
                src="/assets/typo-hero.svg"
                alt="Taste America. One Dog At A Time."
                width={533}
                height={353}
                priority
                className="h-auto w-[400px] lg:w-[533px]"
              />
            </HeroRevealItem>

            <HeroRevealItem className="mt-8 lg:mt-14">
              <h1 className="text-[26px] leading-tight text-ink-soft lg:text-h3">
                <span className="font-bold">
                  America&rsquo;s Favorite Flavors.
                </span>
                <span className="block font-normal">Built in Every Bite.</span>
              </h1>
            </HeroRevealItem>

            <HeroRevealItem className="mt-8 lg:mt-[42px]">
              <Button
                href="/menu"
                variant="filled"
                className="!h-[57px] w-[209px] !rounded-pill-lg !font-normal"
              >
                Browse Menu
              </Button>
            </HeroRevealItem>

            <HeroRevealItem className="mt-8 flex flex-wrap items-center gap-x-[15px] gap-y-3 lg:mt-[42px]">
              {features.map(({ label, icon: Icon }, i) => (
                <span key={label} className="flex items-center gap-x-[15px]">
                  {i > 0 && (
                    <span
                      className="h-px w-[25px] bg-ink-soft"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-center gap-[14px] text-caption font-normal text-ink-soft">
                    <Icon className="h-6 w-6 shrink-0" />
                    {label}
                  </span>
                </span>
              ))}
            </HeroRevealItem>
          </HeroRevealGroup>
        </div>
      </div>

      {/* Mobile: text block above, image below cropped to the hot-dog zone */}
      <div className="flex flex-col sm:hidden">
        <div className="flex flex-col items-start px-6 py-12">
          <Image
            src="/assets/typo-hero.svg"
            alt="Taste America. One Dog At A Time."
            width={533}
            height={353}
            priority
            className="h-auto w-[280px]"
          />
          <h1 className="mt-8 text-body-lg leading-tight text-ink-soft">
            <span className="font-bold">America&rsquo;s Favorite Flavors.</span>
            <span className="block font-normal">Built in Every Bite.</span>
          </h1>
          <Button
            href="/menu"
            variant="filled"
            className="mt-8 !h-[57px] w-[209px] !rounded-pill-lg !font-normal"
          >
            Browse Menu
          </Button>
          <div className="mt-8 flex flex-wrap items-center gap-x-[15px] gap-y-3">
            {features.map(({ label, icon: Icon }, i) => (
              <span key={label} className="flex items-center gap-x-[15px]">
                {i > 0 && (
                  <span
                    className="h-px w-[25px] bg-ink-soft"
                    aria-hidden="true"
                  />
                )}
                <span className="flex items-center gap-[14px] text-caption font-normal text-ink-soft">
                  <Icon className="h-6 w-6 shrink-0" />
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-square w-full">
          <Image
            src="/hero/hero-cover.webp"
            alt="Assortment of DOG IT UP signature hot dogs"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
