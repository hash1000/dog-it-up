import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionTitleRow from "@/components/shared/SectionTitleRow";
import PageEnter from "@/components/motion/PageEnter";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";

export const metadata = {
  title: "Partner With Us | DOG IT UP",
};

const benefits = [
  {
    title: "PREMIUM BRAND RECOGNITION",
    description:
      "Featuring a trusted all-American hot dog experience that customers love.",
    icon: BadgeIcon,
  },
  {
    title: "SIMPLE OPERATIONS",
    description:
      "A focused menu and streamlined processes designed for speed, consistency, and minimal training.",
    icon: SettingsIcon,
  },
  {
    title: "HIGH MARGIN MENU",
    description:
      "Cross-utilized ingredients and efficient preparation help maximize profitability.",
    icon: GraphIcon,
  },
  {
    title: "FLEXIBLE FORMATS",
    description:
      "Built for convenience stores, travel centers, food courts, and other non-traditional environments.",
    icon: NewsIcon,
  },
  {
    title: "FAST STARTUP",
    description:
      "Simple equipment packages and streamlined operations reduce implementation time.",
    icon: TimerIcon,
  },
];

export default function PartnerPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <PageEnter className="flex flex-1 flex-col">
        <div className="relative w-full">
          <Reveal variant="settle" className="overflow-hidden">
            <Image
              src="/partner/partner-hero.webp"
              alt="DOG IT UP counter in a convenience retail location"
              width={1440}
              height={1080}
              priority
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </div>

        <section className="relative z-10 w-full">
          <div className="mx-auto max-w-content px-6 md:px-12">
            <RevealGroup className="w-full max-w-[832px] border border-surface bg-surface/60 px-6 py-12 backdrop-blur-sm sm:-mt-[290px] sm:px-20 sm:py-[103px]">
              <Reveal variant="fadeUp">
                <h1 className="text-h3 font-black leading-tight text-ink sm:text-[48px]">
                  Bring Dog It Up
                  <span className="block">to your Location.</span>
                </h1>
              </Reveal>
              <Reveal variant="fadeUp">
              <p className="mt-10 max-w-[656px] text-body-lg leading-10 text-ink sm:mt-[90px]">
                Dog It Up was created specifically for today&rsquo;s
                convenience retail and non-traditional restaurant environments.
                Our streamlined menu, premium ingredients, and simple operating
                model allow operators to deliver exceptional quality with
                minimal labor and equipment. Whether you&rsquo;re expanding an
                existing foodservice program or introducing a new hot food
                offering, Dog It Up provides a turnkey solution designed for
                speed, consistency, and profitability.
              </p>
              </Reveal>
              <Reveal variant="fadeUp" className="mt-10 flex flex-wrap gap-10 sm:mt-[87px]">
                <Button
                  href="#contact"
                  variant="filled"
                  className="!h-[79px] w-full sm:w-[296px] !rounded-none text-body-lg !font-normal"
                >
                  Request More Info
                </Button>
                <Button
                  href="/menu"
                  variant="outlined"
                  className="!h-[79px] w-full sm:w-[296px] !rounded-none !border text-body-lg !font-normal"
                >
                  View Our Menu
                </Button>
              </Reveal>
            </RevealGroup>
          </div>
        </section>

        <section className="w-full bg-surface py-16 sm:py-[127px]">
          <div className="mx-auto flex max-w-content flex-col gap-16 px-6 sm:gap-[160px] md:px-12">
            <SectionTitleRow title="Why Operators Choose DOG IT UP" />
            <RevealGroup className="mx-auto grid w-full max-w-[1069px] grid-cols-1 gap-x-[140px] gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ title, description, icon: Icon }) => (
                <Reveal key={title} className="flex max-w-[263px] flex-col">
                  <Icon className="h-[50px] w-[50px] text-primary" />
                  <h3 className="mt-8 max-w-[222px] text-[24px] font-bold leading-[34px] text-primary">
                    {title}
                  </h3>
                  <p className="mt-8 text-body font-medium leading-[23px] text-ink">
                    {description}
                  </p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      </PageEnter>
      <Footer />
    </div>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.09a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z" />
    </svg>
  );
}

function GraphIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 4 3 5-7" />
    </svg>
  );
}

function NewsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h13v16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" />
      <path d="M6 8h7M6 12h7M6 16h7" />
    </svg>
  );
}

function TimerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2h4" />
      <circle cx="12" cy="14" r="8" />
      <path d="M12 14V9" />
    </svg>
  );
}
