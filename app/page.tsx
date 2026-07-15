import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureFlavorsBanner from "@/components/SignatureFlavorsBanner";
import MenuSection from "@/components/menu/MenuSection";
import { menuSections } from "@/lib/menu-data";
import WhyChooseUs from "@/components/WhyChooseUs";
import SubscriptionBar from "@/components/SubscriptionBar";
import Footer from "@/components/Footer";
import PageEnter from "@/components/motion/PageEnter";
import AnimatedText from "@/components/motion/AnimatedText";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <Hero />
        <SignatureFlavorsBanner />
        <section id="menu" className="w-full bg-surface py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-360 flex-col gap-16 px-6 sm:gap-24 md:px-12">
            <AnimatedText
              as="h2"
              text="MENU"
              className="text-center font-display text-h1 font-black text-primary"
            />
            {menuSections.map((section) => (
              <MenuSection
                key={section.key}
                id={section.key}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </section>
        <WhyChooseUs />
        <SubscriptionBar />
      </PageEnter>
      <Footer />
    </div>
  );
}
