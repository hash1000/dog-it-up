import FeatureGrid from "@/components/shared/FeatureGrid";

export default function WhyChooseUs() {
  return (
    <section className="w-full border-t border-ink bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-0">
        <h2 className="text-center text-h1 font-bold text-ink">
          Why Choose <span className="text-primary">DOG IT UP?</span>
        </h2>
        <div className="mt-16">
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
}
