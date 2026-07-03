import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BioGrid } from "@/components/about/BioGrid";
import { FIRM } from "@/lib/site";
import { LEADERSHIP } from "@/lib/about";

export const metadata: Metadata = {
  title: "Management Team",
  description:
    "ALRION Pillar Capital is led by managing partners accountable for each of four autonomous strategies, held to one rigorous framework of independent risk and governance.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Management Team"
        title={
          <>
            Partners who own
            <span className="text-gilt"> their conviction.</span>
          </>
        }
        intro="Each strategy is led by partners accountable for their own mandate, and each is checked by independent risk and governance functions, so that no allocation rests on an unexamined assumption."
        crumbs={[{ label: "About", href: "/about" }, { label: "Management Team" }]}
      />

      {/* — Leadership philosophy ——————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Leadership Philosophy"
              title={<>Leadership as stewardship, not spectacle.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                At {FIRM.short}, leadership is measured by the quality of the
                decisions it enables, not the certainty it projects. Our partners
                lead teams encouraged to challenge them, and the platform&apos;s
                most senior voices are the ones most willing to be proven wrong.
              </p>
              <p>
                Each partner carries responsibility for a strategy or function,
                yet all are bound by one rigorous framework, Independence by
                Design and Conviction by Discipline, and a shared accountability
                to the allocators whose capital they steward.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Team grid ——————————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="The Team"
            title={<>The people accountable for every decision.</>}
            intro="A leadership group spanning the platform's four strategies and its independent risk and governance functions."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={LEADERSHIP} columns={4} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Team members shown are representative and illustrative, pending final
          disclosure.
        </p>
      </Section>

      <CtaBand
        title={<>Build the platform with us.</>}
        body="We seek people who believe independence should be engineered into the structure and conviction earned through discipline."
        primary={{ href: "/careers", label: "View opportunities" }}
        secondary={{ href: "/about/investment-committee", label: "Investment committee" }}
      />
    </>
  );
}
