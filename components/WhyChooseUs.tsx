import FeatureGrid from "@/components/shared/FeatureGrid";
import Reveal from "@/components/motion/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="w-full border-t border-ink bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal variant="fadeUp">
          <h2 className="text-center text-h3 font-bold text-ink sm:text-h2 lg:text-h1">
            Why Choose <span className="text-primary">DOG IT UP?</span>
          </h2>
        </Reveal>
        <div className="mt-16">
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
}
