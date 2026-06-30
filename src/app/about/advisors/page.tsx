import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BioGrid } from "@/components/about/BioGrid";
import { FIRM } from "@/lib/site";
import { ADVISORS } from "@/lib/about";

export const metadata: Metadata = {
  title: "Global Advisors",
  description:
    "ALRION Pillar Capital's global advisory network brings frontier scientific, macroeconomic and operating expertise to bear on the firm's most consequential decisions.",
};

export default function AdvisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Advisors"
        title={
          <>
            A network of expertise
            <span className="text-gilt"> at the frontier.</span>
          </>
        }
        intro="Our advisory board extends the firm's reach into domains no single team could master alone — from foundation models and robotics to macro policy, biotechnology and inclusive finance."
        crumbs={[{ label: "About", href: "/about" }, { label: "Global Advisors" }]}
      />

      {/* — Value of the network ———————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why It Matters"
              title={<>Expertise we could never hire in full.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Investing at the frontier means evaluating technologies and markets
                that sit at the edge of human knowledge. {FIRM.short} maintains a
                global advisory network precisely so that the people interrogating a
                thesis can stand among the world&apos;s foremost authorities in the
                relevant field.
              </p>
              <p>
                Our advisors do not make investment decisions — that authority rests
                with the firm and its committee. They sharpen them. They challenge our
                assumptions, validate our diligence and connect us to the founders,
                institutions and ideas defining what comes next.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Advisory board grid ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Advisory Board"
            title={<>Counsel across every domain we touch.</>}
            intro="A representative advisory network spanning the scientific and economic frontiers behind our four platforms."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={ADVISORS} columns={4} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Names, titles and affiliations shown are representative for illustration.
        </p>
      </Section>

      <CtaBand
        title={<>Conviction, informed by the best minds.</>}
        body="Explore how advisory counsel feeds into our research-led process and our investment committee."
        primary={{ href: "/about/investment-committee", label: "Investment committee" }}
        secondary={{ href: "/process", label: "Our process" }}
      />
    </>
  );
}
