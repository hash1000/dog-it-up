/**
 * "By the numbers" brand marquee — pure CSS, no client JS.
 *
 * The track holds two identical copies of the phrase list, so the
 * `--animate-marquee` keyframe (translateX to -50%, 28s linear, defined in
 * globals.css) loops seamlessly. Hover pauses the animation; under
 * prefers-reduced-motion the duplicate copy is hidden and the phrases wrap
 * as a static centered band. Fixed line-height + padding = no CLS.
 */

const PHRASES = [
  "5 Signature Dogs",
  "Made Fresh Daily",
  "100% All-Beef",
  "Bold Flavors",
] as const;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
    </svg>
  );
}

function PhraseRun({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className={`flex shrink-0 items-center ${hidden ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center"}`}
    >
      {PHRASES.map((phrase) => (
        <span key={phrase} className="flex shrink-0 items-center">
          <span className="px-6 sm:px-10">{phrase}</span>
          <StarIcon className="h-5 w-5 shrink-0 text-cream/60 sm:h-7 sm:w-7" />
        </span>
      ))}
    </div>
  );
}

export default function StatsMarquee() {
  return (
    <section aria-label="DOG IT UP by the numbers" className="group w-full overflow-hidden bg-primary">
      <div className="flex w-max py-5 font-display text-[clamp(26px,4.5vw,48px)] uppercase leading-none text-cream sm:py-7 motion-safe:animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full">
        <PhraseRun />
        <PhraseRun hidden />
      </div>
    </section>
  );
}
