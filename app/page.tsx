import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureFlavorsBanner from "@/components/SignatureFlavorsBanner";
import MenuSection from "@/components/sections/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SubscriptionBar from "@/components/SubscriptionBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <SignatureFlavorsBanner />
        <MenuSection />
        <WhyChooseUs />
        <SubscriptionBar />
      </main>
      <Footer />
    </div>
  );
}
