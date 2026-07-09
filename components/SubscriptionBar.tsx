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
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-8 sm:min-h-[313px] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-0">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-md text-h2 font-bold text-surface">
            Get Exclusive Deals &amp; New Menu updates.
          </h2>

          <form onSubmit={handleSubmit} className="relative w-full max-w-[634px]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="h-[78px] w-full rounded-input bg-surface px-6 text-body-lg text-ink placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-[78px] w-[189px] max-w-[45%] rounded-input bg-ink text-body-lg text-surface transition-opacity hover:opacity-90"
            >
              Sign up
            </button>
          </form>

          <p className="text-body-lg text-surface">No Spam, Unsubscribe anytime.</p>
        </div>

        <div className="relative hidden h-[312px] w-[719px] max-w-[50%] shrink-0 self-end sm:block">
          <Image
            src="/shared/subscription-food.png"
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
