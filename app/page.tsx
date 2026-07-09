import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DealSection from "@/components/DealSection";
import LocationSection from "@/components/LocationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SubscriptionBar from "@/components/SubscriptionBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <MenuSection />
        <DealSection />
        <LocationSection />
        <WhyChooseUs />
        <SubscriptionBar />
      </main>
      <Footer />
    </div>
  );
}
