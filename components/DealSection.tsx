import Image from "next/image";
import Button from "./Button";

export default function DealSection() {
  return (
    <section className="relative w-full overflow-visible bg-primary py-16 sm:h-[314px] sm:py-0">
      <div className="mx-auto flex h-full max-w-content flex-col items-center gap-8 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-0">
        <div className="relative order-2 h-[220px] w-[220px] shrink-0 sm:order-1 sm:h-[380px] sm:w-[380px] sm:-translate-y-8">
          <Image
            src="/assets/american-classic.jpg"
            alt="Hot dog combo with fries and drink"
            fill
            sizes="380px"
            className="object-contain"
          />
        </div>

        <div className="order-1 flex flex-col items-center gap-4 text-center sm:order-2 sm:items-start sm:text-left">
          <h2 className="text-h3 sm:text-display font-bold text-ink">Make it a Combo</h2>
          <p className="text-body-lg sm:text-h3 font-bold text-surface">
            Add Fries and Drinks to your Combo to level up your meal
          </p>
          <Button href="#combo" variant="on-dark" size="lg" className="w-[219px]">
            Build your Combo
          </Button>
        </div>
      </div>
    </section>
  );
}
