function ShimmerBlock({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-char/10 ${className ?? ""}`}>
      <div
        className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-cream/70 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export default function MenuCardSkeleton() {
  return (
    <div
      className="flex h-full w-full flex-col rounded-3xl bg-cream p-6 sm:p-7"
      aria-hidden="true"
    >
      <div className="relative aspect-square w-full">
        <ShimmerBlock className="h-full w-full rounded-2xl" />
      </div>
      <div className="mt-5 flex flex-1 flex-col items-center gap-3 text-center">
        <ShimmerBlock className="h-8 w-3/4" />
        <ShimmerBlock className="h-4 w-1/2" />
        <ShimmerBlock className="h-4 w-full" />
        <ShimmerBlock className="h-4 w-5/6" />
      </div>
    </div>
  );
}
