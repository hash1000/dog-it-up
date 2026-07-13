import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import PromiseSection from "@/components/about/PromiseSection";
import StatsMarquee from "@/components/about/StatsMarquee";
import Footer from "@/components/Footer";
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
        <PromiseSection />
        <StatsMarquee />
      </PageEnter>
      <Footer />
    </div>
  );
}
