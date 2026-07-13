import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuExplorer from "@/components/menu/MenuExplorer";
import PageEnter from "@/components/motion/PageEnter";

export const metadata = {
  title: "Menu | DOG IT UP",
};

export default function MenuPage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <MenuExplorer />
      </PageEnter>
      <Footer />
    </div>
  );
}
