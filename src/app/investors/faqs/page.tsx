import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/investors/FaqAccordion";
import { FAQ_CATEGORIES } from "@/lib/investor-center";

export const metadata: Metadata = {
  title: "Investor FAQs",
  description:
    "Answers for prospective and current partners of ALRION Pillar Capital — getting started, strategies and risk, reporting, fees and liquidity, and compliance.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor FAQs"
        title={
          <>
            Answers for our
            <span className="text-gilt"> partners.</span>
          </>
        }
        intro="The questions prospective and current partners ask most often, organized by theme. For anything not covered here, our investor relations desk is a message away."
        crumbs={[
          { label: "Investor Center", href: "/investors" },
          { label: "Investor FAQs" },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Category index */}
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Categories"
              title={<>Browse by theme.</>}
            />
            <ul className="mt-8 space-y-px overflow-hidden rounded-sm border border-line bg-line">
              {FAQ_CATEGORIES.map((g, i) => (
                <li
                  key={g.category}
                  className="flex items-center gap-3 bg-cloud p-4"
                >
                  <span className="font-serif text-lg text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-navy-900">
                    {g.category}
                  </span>
                  <span className="ml-auto text-xs text-slate-strong/50">
                    {g.items.length}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1} className="lg:col-span-8">
            <FaqAccordion />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={<>Still have questions?</>}
        body="Our investor relations desk is here to help — from eligibility and terms to reporting and compliance."
        primary={{ href: "/contact", label: "Contact investor relations" }}
        secondary={{
          href: "/investors/capital-requests",
          label: "Register your interest",
        }}
      />
    </>
  );
}
