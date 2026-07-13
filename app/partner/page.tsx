import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitleRow from "@/components/shared/SectionTitleRow";
import PageEnter from "@/components/motion/PageEnter";
import BenefitCards from "@/components/partner/BenefitCards";
import HeroSlider from "@/components/partner/HeroSlider";

export const metadata = {
  title: "Partner With Us | DOG IT UP",
};

export default function PartnerPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <HeroSlider />

        <section className="w-full bg-surface py-16 sm:py-24">
          <div className="mx-auto flex max-w-content flex-col gap-10 px-6 sm:gap-16 md:px-12">
            <SectionTitleRow title="Why Operators Choose DOG IT UP" />
            <BenefitCards />
          </div>
        </section>
      </PageEnter>
      <Footer />
    </div>
  );
}
