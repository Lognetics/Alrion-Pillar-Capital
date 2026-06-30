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
    "ALRION Pillar Capital is led by a multidisciplinary team of investors, engineers and scientists who organize themselves to challenge one another and earn every conviction.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Management Team"
        title={
          <>
            Investors, engineers and
            <span className="text-gilt"> scientists, in one room.</span>
          </>
        }
        intro="Our leadership is deliberately multidisciplinary. The deliberate collision of finance, engineering and science is the engine of our conviction — and the reason no allocation rests on an unexamined assumption."
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
                lead teams that are encouraged to challenge them, and the firm&apos;s
                most senior voices are the ones most willing to be proven wrong.
              </p>
              <p>
                Each leader carries deep responsibility for a platform or function,
                yet all are bound by a single methodology — science before capital,
                conviction earned through evidence — and a shared accountability to
                the partners whose capital they steward.
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
            intro="A representative leadership group spanning the firm's four platforms and its independent governance functions."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={LEADERSHIP} columns={4} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Names, titles and roles shown are representative for illustration.
        </p>
      </Section>

      <CtaBand
        title={<>Build the frontier with us.</>}
        body="We are always seeking multidisciplinary talent who believe capital should be as rigorous as the science it backs."
        primary={{ href: "/careers", label: "View opportunities" }}
        secondary={{ href: "/about/investment-committee", label: "Investment committee" }}
      />
    </>
  );
}
