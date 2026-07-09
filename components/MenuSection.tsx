import Button from "./Button";
import MenuCategory from "./MenuCategory";
import { signatureDogs, sides, drinks } from "@/lib/menu-data";

export default function MenuSection() {
  return (
    <section id="menu" className="w-full bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-0">
        <div className="flex flex-col gap-6">
          <p className="text-h2 font-bold text-primary">Our Menu</p>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-h1 font-bold leading-tight">
              <span className="block text-ink">Signature Flavors.</span>
              <span className="block text-primary">Endless Cravings.</span>
            </h2>

            <Button href="#full-menu" variant="filled" size="xl" className="w-full sm:w-[271px]">
              View Full Menu &rarr;
            </Button>
          </div>

          <span className="h-px w-full bg-ink/10" aria-hidden="true" />
        </div>

        <div className="mt-16 flex flex-col gap-16">
          <MenuCategory title="Signature Dogs" items={signatureDogs} />
          <MenuCategory title="Sides" items={sides} />
          <MenuCategory title="Drinks" items={drinks} />
        </div>
      </div>
    </section>
  );
}
