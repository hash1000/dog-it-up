import Image from "next/image";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/sections/MenuSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Menu | DOG IT UP",
};

export default function MenuPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Image
          src="/menu/menu-hero.webp"
          alt="DOG IT UP signature hot dogs, sides and drinks"
          width={1440}
          height={700}
          priority
          className="h-auto w-full object-cover"
        />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
