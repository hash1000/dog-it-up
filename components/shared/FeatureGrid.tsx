const features = [
  {
    title: "Quality Ingredients",
    description: "We only use the best to serve you the best.",
    icon: QualityIcon,
  },
  {
    title: "Made Fresh Daily",
    description: "Every bite is crafted fresh in store.",
    icon: FreshIcon,
  },
  {
    title: "Bold Flavors",
    description: "Big Taste in Every Single Bite.",
    icon: FlavorIcon,
  },
  {
    title: "Fast Service",
    description: "Quality food served fast.",
    icon: SpeedIcon,
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[129px]">
      {features.map(({ title, description, icon: Icon }) => (
        <div key={title} className="flex flex-col items-center gap-4 text-center">
          <Icon className="h-[60px] w-[60px] text-primary" />
          <h3 className="text-h3 font-bold text-ink">{title}</h3>
          <p className="text-body text-ink-soft">{description}</p>
        </div>
      ))}
    </div>
  );
}

function QualityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2Z" />
    </svg>
  );
}

function FreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21c9-1 14-6 14-15C10 7 5 12 5 21Z" />
      <path d="M5 21c2-4 5-7 9-9" />
    </svg>
  );
}

function FlavorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22c4 0 6-2.5 6-6 0-3-2-4.5-2-4.5.5 2-1 3-1 3 .5-4-3-6-3-8.5-2 1.5-2.5 3.5-2.5 5.5-1-1-1-2.5-1-2.5C6 11 6 14 6 16c0 3.5 2 6 6 6Z" />
    </svg>
  );
}

function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
