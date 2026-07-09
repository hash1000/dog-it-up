import Button from "./Button";

const pins = [
  { top: "22%", left: "18%" },
  { top: "18%", left: "62%" },
  { top: "38%", left: "78%" },
  { top: "55%", left: "40%" },
  { top: "60%", left: "68%" },
  { top: "75%", left: "22%" },
];

export default function LocationSection() {
  return (
    <section id="locations" className="w-full bg-surface py-16 sm:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-h1 font-bold text-primary">Find us Near you.</h2>
          <span className="h-px w-24 bg-ink/10" aria-hidden="true" />
          <p className="text-body font-bold text-ink">
            with locations Nation wide, Great Flavors are always close.
          </p>
          <Button href="#find-location" variant="outlined" size="lg">
            Find a Location
          </Button>
        </div>

        <div className="relative aspect-[4/3] w-full">
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full text-surface-muted"
            aria-hidden="true"
          >
            <path
              d="M40 60 L120 40 L200 55 L260 45 L340 70 L370 130 L340 200 L280 240 L200 260 L120 250 L60 210 L30 140 Z"
              fill="currentColor"
              stroke="#f33505"
              strokeWidth="1"
            />
          </svg>
          <span className="sr-only">Map of DOG IT UP locations across the United States</span>

          {pins.map((pin, i) => (
            <span
              key={i}
              className="absolute h-6 w-6 -translate-x-1/2 -translate-y-full text-primary"
              style={{ top: pin.top, left: pin.left }}
            >
              <PinIcon className="h-6 w-6" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.5" r="2.5" fill="white" />
    </svg>
  );
}
