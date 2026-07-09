import Image from "next/image";

export default function SignatureFlavorsBanner() {
  return (
    <section className="relative w-full overflow-visible">
      {/* Red band: full-bleed across the viewport, bottom 314/428 = 73.36% of section height */}
        <div
          className="absolute inset-x-0 bottom-0 h-[73.36%] bg-primary"
          aria-hidden="true"
        />

      <div className="relative mx-auto aspect-[1440/428] w-full max-w-[1600px]">
        {/* Photo: inset 100/1440 = 6.94% each side, top-aligned, spans full height */}
        <div className="absolute inset-x-[6.94%] top-0 h-full overflow-hidden">
          <Image
            src="/signature-flavors/signature-flavors-hero.webp"
            alt="Signature DOG IT UP flavors"
            fill
            sizes="(min-width: 1024px) 1240px, 100vw"
            className="object-cover"
          />

          {/* Headline: left 10px in from photo edge (~0.81% of 1240 content width), top 210/428 = 49.07% down */}
          <div className="absolute left-[0.81%] top-[49.07%] flex flex-col gap-[6.78%]">
            <h2 className="text-[clamp(18px,4.4vw,64px)] font-bold leading-tight text-surface">
              Signature Flavors.
            </h2>
            <h2 className="text-[clamp(18px,4.4vw,64px)] font-normal leading-tight text-[#fffaf9]">
              Endless Cravings.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
