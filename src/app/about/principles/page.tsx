import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { Reveal } from "@/components/ui/Reveal";
import { PrincipleList } from "@/components/about/PrincipleList";
import { PRINCIPLES } from "@/lib/about";

export const metadata: Metadata = {
  title: "Founding Principles",
  description:
    "Six founding principles form the operating logic of ALRION Pillar Capital — from science before capital to intellectual humility — embedded in how we research, allocate, govern and report.",
};

export default function PrinciplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Founding Principles"
        title={
          <>
            The operating logic
            <span className="text-gilt"> of the firm.</span>
          </>
        }
        intro="These principles are not aspirations on a wall. They are the rules we invest by — embedded in how we research, allocate, govern and report, and tested against every decision the firm makes."
        crumbs={[{ label: "About", href: "/about" }, { label: "Founding Principles" }]}
      />

      <Section tone="paper">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-pretty text-lg leading-relaxed text-slate-strong/85">
            Read in order, these six commitments describe a single discipline: follow
            insight rather than sentiment, earn conviction through evidence, and hold
            every dollar to a standard worthy of the partners who entrust it to us.
          </p>
        </Reveal>
        <PrincipleList items={PRINCIPLES} />
      </Section>

      <CtaBand
        title={<>Principles you can hold us to.</>}
        body="See how these commitments translate into independent oversight, transparent reporting and measurable responsibility."
        primary={{ href: "/governance", label: "Our governance" }}
        secondary={{ href: "/about/values", label: "Core values" }}
      />
    </>
  );
}
