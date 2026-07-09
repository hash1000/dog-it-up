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

export default function SectionTitleRow({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center gap-4 sm:gap-5">
      <span className="h-px flex-1 bg-ink" aria-hidden="true" />
      <StarIcon className="h-6 w-6 shrink-0 text-ink" />
      <h3 className="whitespace-nowrap text-center text-h3 font-extrabold text-ink sm:text-[45px]">
        {title}
      </h3>
      <StarIcon className="h-6 w-6 shrink-0 text-ink" />
      <span className="h-px flex-1 bg-ink" aria-hidden="true" />
    </div>
  );
}
