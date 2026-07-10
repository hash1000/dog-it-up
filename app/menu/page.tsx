import Image from "next/image";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/menu/MenuSection";
import Footer from "@/components/Footer";
import { menuSections } from "@/lib/menu-data";
import PageEnter from "@/components/motion/PageEnter";
import AnimatedText from "@/components/motion/AnimatedText";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Menu | DOG IT UP",
};

export default function MenuPage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <Reveal variant="settle" className="overflow-hidden">
          <Image
            src="/menu/menu-hero.webp"
            alt="DOG IT UP signature hot dogs, sides and drinks"
            width={1440}
            height={700}
            preload
            className="h-auto w-full object-cover"
          />
        </Reveal>
        <section id="menu" className="w-full bg-surface py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-360 flex-col gap-16 px-6 sm:gap-24 md:px-12">
            <AnimatedText
              as="h1"
              text="MENU"
              className="text-center font-display text-h1 font-black text-primary"
            />
            {menuSections.map((section) => (
              <MenuSection
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </section>
      </PageEnter>
      <Footer />
    </div>
  );
}
