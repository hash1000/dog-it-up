"use client";

import Image from "next/image";
import { useState } from "react";

export default function SubscriptionBar() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="relative w-full overflow-hidden bg-primary py-16 sm:py-0">
      {/* Design uses a second red (#F82301) here vs primary #F33505 elsewhere — no token exists for it; using bg-primary, flagged in summary. */}
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-8 sm:min-h-[313px] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-md text-h3 font-bold text-surface sm:text-h2">
            Get Exclusive Deals &amp; New Menu updates.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[634px] flex-col gap-3 sm:relative sm:block sm:gap-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="h-14 w-full rounded-input bg-surface px-6 text-body text-ink placeholder:text-muted-foreground focus:outline-none sm:h-[78px] sm:text-body-lg"
            />
            <button
              type="submit"
              className="h-14 w-full rounded-input bg-ink text-body text-surface transition-opacity hover:opacity-90 sm:absolute sm:right-0 sm:top-0 sm:h-[78px] sm:w-[189px] sm:max-w-[45%] sm:text-body-lg"
            >
              Sign up
            </button>
          </form>

          <p className="text-body-lg text-surface">No Spam, Unsubscribe anytime.</p>
        </div>

        <div className="relative hidden h-[312px] w-[719px] max-w-[50%] shrink-0 self-end sm:block">
          <Image
            src="/shared/subscription-food.webp"
            alt="DOG IT UP hot dog, fries and drink"
            fill
            sizes="719px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
