"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { EASE, POP_SPRING } from "@/lib/motion";

export default function SubscriptionBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const rise: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
    }),
  };

  return (
    <section aria-labelledby="subscribe-heading" className="mt-12 overflow-hidden bg-primary lg:mt-24">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="w-full px-6 sm:px-10 lg:px-gutter"
      >
        <div className="relative mx-auto max-w-[1920px]">
          {/* Depth: soft radial glow behind the product, oversized ghost wordmark */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/2 hidden h-96 w-96 -translate-y-1/2 rounded-full bg-surface/10 blur-3xl lg:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap font-display text-[180px] uppercase leading-none text-surface/[0.06] lg:block"
          >
            Dog it up
          </span>

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)] lg:gap-8 lg:py-20 lg:pl-16 lg:pr-8">
            <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
              <motion.h2
                id="subscribe-heading"
                custom={0}
                variants={rise}
                className="max-w-md text-balance text-h3 font-bold leading-tight text-surface sm:text-h2"
              >
                Get Exclusive Deals &amp; New Menu updates.
              </motion.h2>

              <motion.form
                custom={1}
                variants={rise}
                onSubmit={handleSubmit}
                className="w-full max-w-[634px]"
              >
                {submitted ? (
                  <motion.p
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    transition={reduceMotion ? { duration: 0.3 } : POP_SPRING}
                    role="status"
                    className="flex h-14 items-center justify-center rounded-input bg-surface/15 px-6 text-body-lg font-bold text-surface backdrop-blur-sm sm:h-field-h lg:justify-start"
                  >
                    You&rsquo;re in — first deal lands in your inbox soon. 🌭
                  </motion.p>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:rounded-input sm:bg-surface sm:p-2 sm:shadow-[0_12px_40px_rgba(3,1,2,0.18)] sm:transition-shadow sm:focus-within:shadow-[0_12px_40px_rgba(3,1,2,0.3)]">
                    <label htmlFor="subscribe-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="subscribe-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="h-14 w-full min-w-0 rounded-input bg-surface px-6 text-body text-ink placeholder:text-muted-foreground focus:outline-none sm:h-[62px] sm:flex-1 sm:text-body-lg"
                    />
                    <button
                      type="submit"
                      className="h-14 shrink-0 rounded-input bg-ink px-10 text-body font-bold text-surface transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:h-[62px] sm:text-body-lg"
                    >
                      Sign up
                    </button>
                  </div>
                )}
              </motion.form>

              <motion.p custom={2} variants={rise} className="text-body-lg text-surface/90">
                No Spam, Unsubscribe anytime.
              </motion.p>
            </div>

            <div className="relative hidden lg:block" aria-hidden />
          </div>

          {/* Hot dog breaks the card edge for depth */}
          <motion.div
            custom={1}
            variants={rise}
            className="pointer-events-none absolute bottom-0 right-4 hidden w-[46%] max-w-[640px] lg:block"
          >
            <Image
              src="/assets/new/hot-dog-big.webp"
              alt=""
              width={719}
              height={420}
              sizes="(min-width: 1024px) 640px, 0px"
              className="h-auto w-full object-contain drop-shadow-[0_24px_36px_rgba(3,1,2,0.28)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
