import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BioGrid } from "@/components/about/BioGrid";
import { FIRM } from "@/lib/site";
import { ADVISORS, TECHNICAL_ADVISORY_BOARD } from "@/lib/about";

export const metadata: Metadata = {
  title: "Advisors",
  description:
    "ALRION Pillar Capital's advisory network, including a Venture Capital Technical Advisory Board of former government and military leaders, sharpens the diligence behind the platform's four strategies.",
};

export default function AdvisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisors"
        title={
          <>
            Counsel across
            <span className="text-gilt"> every strategy.</span>
          </>
        }
        intro="Our advisory network extends the platform's reach into domains no single team could master alone, from artificial intelligence and biotechnology to infrastructure, macro policy and community equity."
        crumbs={[{ label: "About", href: "/about" }, { label: "Advisors" }]}
      />

      {/* — Value of the network ———————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why It Matters"
              title={<>Expertise that sharpens conviction.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Investing at the frontier means evaluating technologies and
                markets that sit at the edge of validated knowledge. {FIRM.short}
                {" "}maintains an advisory network so that the people interrogating
                a thesis can stand among authorities in the relevant field.
              </p>
              <p>
                Our advisors do not make investment decisions. That authority
                rests with each strategy and its investment committee. They
                sharpen those decisions, challenge assumptions and validate the
                diligence behind them.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Advisory board grid ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Advisory Network"
            title={<>Counsel across the domains we invest in.</>}
            intro="An advisory network spanning the scientific and economic domains behind our four strategies."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={ADVISORS} columns={4} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Team members shown are representative and illustrative, pending final
          disclosure.
        </p>
      </Section>

      {/* — Technical Advisory Board ————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Advisory Board"
            title={<>Former government and military leaders.</>}
            intro="The Venture Capital LP is supported by a Technical Advisory Board of former government and military leaders, guiding diligence into dual-use frontier technology across defense and space."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={TECHNICAL_ADVISORY_BOARD} columns={3} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Team members shown are representative and illustrative, pending final
          disclosure.
        </p>
      </Section>

      <CtaBand
        title={<>Conviction, informed by serious counsel.</>}
        body="Explore how advisory counsel feeds into our rigorous framework and each strategy's investment committee."
        primary={{ href: "/about/investment-committee", label: "Investment committee" }}
        secondary={{ href: "/process", label: "Our process" }}
      />
    </>
  );
}
