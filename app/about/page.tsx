import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionTitleRow from "@/components/shared/SectionTitleRow";
import FeatureGrid from "@/components/shared/FeatureGrid";
import PageEnter from "@/components/motion/PageEnter";
import AnimatedText from "@/components/motion/AnimatedText";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "About Us | DOG IT UP",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <Reveal variant="settle" className="overflow-hidden">
          <Image
            src="/about/about-hero.webp"
            alt="DOG IT UP restaurant experience"
            width={1440}
            height={699}
            priority
            className="h-auto w-full object-cover"
          />
        </Reveal>

        <section className="w-full bg-surface py-16 sm:py-[100px]">
          <div className="mx-auto flex max-w-content flex-col gap-16 px-6 sm:gap-[130px] md:px-12">
            <SectionTitleRow title="About DOG IT UP" />
            <div className="mx-auto flex max-w-[952px] flex-col items-start gap-10 sm:gap-[60px]">
              {/* Story blocks alternate a slight x drift: heading from the left, copy from the right */}
              <AnimatedText
                as="h2"
                text="A Taste of America"
                className="text-[40px] font-black leading-tight text-primary sm:text-h1 lg:text-[100px] lg:leading-[137px]"
              />
              <Reveal variant="fadeUp" x={24}>
              <p className="text-body-lg font-medium leading-10 text-ink">
                Dog It Up celebrates America&rsquo;s love affair with hot dogs
                by bringing together regional favorites inspired by iconic
                flavors from across the country. Every hot dog starts with a
                premium all-beef hot dog served on a fresh bakery bun and is
                topped with bold, familiar ingredients that guests know and
                love. Whether it&rsquo;s the smoky flavors of Kansas City, the
                hearty chili of Texas, or the creamy comfort of the Midwest,
                Dog It Up delivers an authentic American experience with every
                bite.
              </p>
              </Reveal>
              <Reveal variant="fadeUp" x={-24}>
                <Button
                  href="/partner"
                  variant="filled"
                  className="!h-[82px] w-[287px] !rounded-none text-body-lg !font-bold"
                >
                  Find out More
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface pb-16 sm:pb-[100px]">
          <div className="mx-auto flex max-w-content flex-col gap-16 px-6 sm:gap-[130px] md:px-12">
            <SectionTitleRow title="Our Promise" />
            <div className="mx-auto w-full max-w-[1002px]">
              <FeatureGrid />
            </div>
          </div>
        </section>
      </PageEnter>
      <Footer />
    </div>
  );
}
