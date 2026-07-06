import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ADVISORY_BOARD } from "@/lib/about";

export const metadata: Metadata = {
  title: "Advisory Board",
  description:
    "The Alrion Pillar Advisory Board provides cross-strategy counsel on macro conditions, sector diligence, ESG standards, and governance. Advisory Board members do not vote on investments.",
};

export default function AdvisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Board"
        title={
          <>
            Challenge, perspective,
            <span className="text-gilt"> and access.</span>
          </>
        }
        intro="The Alrion Pillar Advisory Board provides cross-strategy counsel on macro conditions, sector diligence, ESG standards, and governance. Advisory Board members do not vote on investments; their role is challenge, perspective and access."
        crumbs={[{ label: "About", href: "/about" }, { label: "Advisory Board" }]}
      />

      {/* Advisory board by focus and discipline, no names */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Advisory Board"
            title={<>Counsel by discipline, not by name.</>}
            intro="We do not publish placeholder names. Role titles stand until each advisor has signed a formal advisory letter and consented in writing to public listing."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ADVISORY_BOARD.map((a, i) => (
            <Reveal key={a.focus} delay={(i % 3) * 0.06} className="flex flex-col bg-paper p-8">
              {/* Uniform gold rule beneath the focus, per brief */}
              <h3 className="text-lg font-semibold text-navy-950">{a.focus}</h3>
              <span className="mt-4 h-px w-10 bg-gold-500" />
              <p className="mt-4 text-sm leading-relaxed text-slate-strong/75">
                {a.discipline}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-strong/55">
          Advisory Board members do not make investment decisions. That authority
          rests with each strategy and its investment committee. Advisors sharpen
          those decisions, challenge assumptions and validate the diligence behind
          them.
        </p>
      </Section>

      <CtaBand
        title={<>Conviction, informed by serious counsel.</>}
        body="Explore how advisory counsel feeds into our rigorous framework and each strategy's investment committee."
        primary={{ href: "/about/investment-committee", label: "Investment committees" }}
        secondary={{ href: "/about/leadership", label: "Leadership" }}
      />
    </>
  );
}
