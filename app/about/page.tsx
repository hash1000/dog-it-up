import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import SectionTitleRow from "@/components/shared/SectionTitleRow";
import FeatureGrid from "@/components/shared/FeatureGrid";
import PageEnter from "@/components/motion/PageEnter";

export const metadata = {
  title: "About Us | DOG IT UP",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <AboutHero />

        <section className="w-full bg-surface py-16 sm:py-[100px]">
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
