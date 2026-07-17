import Image from "next/image";
import Button from "./Button";
import HeroCta from "./hero/HeroCta";
import HeroFeature from "./hero/HeroFeature";
import HeroFeatures from "./hero/HeroFeatures";
import HeroItem from "./hero/HeroItem";
import HeroSequence from "./hero/HeroSequence";
import HeroShowcase from "./hero/HeroShowcase";
import { FlameIcon, LeafIcon, MeatIcon } from "./Icons";

const features = [
  { label: "100% Beef", icon: MeatIcon },
  { label: "Made Fresh", icon: LeafIcon },
  { label: "Bold Flavor", icon: FlameIcon },
];


export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-var(--header-h))] w-full flex-col scroll-mt-[var(--header-h)] overflow-x-clip mb-8">
      <HeroSequence className="absolute inset-0">
        <HeroItem beat="image" className="absolute inset-0">
          <Image
            src="/hero/background.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </HeroItem>
      </HeroSequence>

      <HeroSequence className="relative mx-auto hidden w-full max-w-[1920px] flex-1 lg:flex">

        {/* Text column per Figma: x:100 (shared gutter with navbar logo),
            y:303→962 of the 1076 frame — vertically centered */}
        {/* In normal flow (not absolute) so the hero box can grow taller than
            the 1440/700 aspect if the text stack needs it — never clips. */}
        <div className="relative flex w-full flex-col justify-center px-6 py-12 md:px-12 xl:px-gutter">
          <div className="flex max-w-[55%] flex-col items-start">
            <HeroItem beat="art">
              <Image
                src="/assets/hero-image.svg"
                alt="Taste America. One Dog At A Time."
                width={533}
                height={353}
                preload
                className="h-auto w-[clamp(360px,37vw,533px)] min-[1920px]:w-[710px]"
              />
            </HeroItem>

            <HeroItem
              beat="subtext"
              className="mt-8 lg:mt-14 min-[1920px]:mt-[75px]"
            >
              <h1 className="text-[26px] leading-tight text-ink-soft lg:text-h3 min-[1920px]:text-[42px]">
                <span className="font-bold">
                  America&rsquo;s Favorite Flavors.
                </span>
                <span className="block font-normal">Built in Every Bite.</span>
              </h1>
            </HeroItem>

            <HeroCta className="mt-8 lg:mt-[42px] min-[1920px]:mt-14">
              <Button
                href="/menu"
                variant="filled"
                className="!h-[57px] w-[209px] !rounded-pill-lg !font-normal min-[1920px]:!h-[70px] min-[1920px]:w-[260px] min-[1920px]:!text-body-lg"
              >
                Browse Menu
              </Button>
            </HeroCta>

            <HeroFeatures className="mt-8 flex flex-wrap items-center gap-5 gap-y-3 lg:mt-11 min-[1920px]:mt-14 min-[1920px]:gap-x-5">
              {features.map(({ label, icon: Icon }) => (
                <HeroFeature
                  key={label}
                  className="flex items-center gap-3.5 text-body-lg font-normal text-ink-soft min-[1920px]:text-card-title"
                  icon={
                    <Icon className="h-12 w-12 shrink-0 text-primary min-[1920px]:h-14 min-[1920px]:w-14" />
                  }
                >
                  {label}
                </HeroFeature>
              ))}
            </HeroFeatures>
          </div>
        </div>

        {/* Rotating flavor showcase — hand bleeds off the hero's right edge. */}
        <HeroShowcase className="absolute bottom-0 right-0 hidden w-[clamp(520px,54vw,900px)] lg:block min-[1920px]:w-250" />
      </HeroSequence>

      {/* Below lg: sky backdrop behind the whole stack, showcase under text */}
      <HeroSequence className="relative flex flex-1 flex-col lg:hidden">
        <div className="relative flex flex-col items-start px-6 pt-12 pb-8 sm:px-10">
          <HeroItem beat="art">
            <Image
              src="/assets/hero-image.svg"
              alt="Taste America. One Dog At A Time."
              width={533}
              height={353}
              preload
              className="h-auto w-[clamp(280px,55vw,480px)] max-w-full"
            />
          </HeroItem>
          <HeroItem beat="subtext" className="mt-8">
            <h1 className="text-body-lg leading-tight text-ink-soft">
              <span className="font-bold">
                America&rsquo;s Favorite Flavors.
              </span>
              <span className="block font-normal">Built in Every Bite.</span>
            </h1>
          </HeroItem>
          <HeroCta className="mt-8">
            <Button
              href="/menu"
              variant="filled"
              className="!h-[57px] w-[209px] !rounded-pill-lg !font-normal"
            >
              Browse Menu
            </Button>
          </HeroCta>
          <HeroFeatures className="mt-8 flex flex-wrap justify-content items-center gap-x-4 gap-y-3">
            {features.map(({ label, icon: Icon }) => (
              <span key={label} className="flex items-center gap-x-3">
                <HeroFeature
                  className="flex items-center gap-2 text-body-lg font-normal text-ink-soft"
                  icon={<Icon className="h-8 w-8 shrink-0 text-primary" />}
                >
                  {label}
                </HeroFeature>
              </span>
            ))}
          </HeroFeatures>
        </div>
        <HeroShowcase className="relative mx-auto mt-auto w-full max-w-120 px-6 sm:max-w-135" />
      </HeroSequence>
    </section>
  );
}
