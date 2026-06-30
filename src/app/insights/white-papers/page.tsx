import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { WHITE_PAPERS } from "@/lib/research";

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "In-depth research papers from ALRION Pillar Capital on AI infrastructure, the energy transition, quantitative discipline, impact measurement and more.",
};

export default function WhitePapersPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            The deep work,
            <span className="text-gilt"> documented.</span>
          </>
        }
        intro="Our most rigorous research, written for allocators. Each paper sets out a framework, the evidence behind it and the asymmetries we believe are mispriced."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "White Papers" }]}
      />

      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Library"
            title="The white-paper catalog"
            intro="Download affordances are illustrative placeholders. Figures within each paper are illustrative."
          />
          <span className="text-sm font-semibold text-slate-strong/55">
            {WHITE_PAPERS.length} papers
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {WHITE_PAPERS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className="group flex h-full flex-col rounded-sm border border-line bg-paper p-7 transition-all hover:border-gold-500 hover:shadow-[0_28px_64px_-38px] hover:shadow-navy-950/40">
                {/* faux document icon */}
                <div className="flex items-start justify-between">
                  <div className="relative flex h-14 w-11 flex-col justify-end rounded-[3px] border border-line bg-cloud p-1.5">
                    <span className="absolute right-0 top-0 h-3 w-3 border-b border-l border-line bg-paper" />
                    <span className="h-0.5 w-full rounded bg-gold-500/60" />
                    <span className="mt-1 h-0.5 w-3/4 rounded bg-line" />
                    <span className="mt-1 h-0.5 w-2/3 rounded bg-line" />
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-gold-600">
                    {p.category}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-light leading-snug text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-strong/80">
                  {p.abstract}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-xs text-slate-strong/55">
                  <span>
                    {p.pages} pages · {p.date}
                  </span>
                </div>

                <button
                  type="button"
                  disabled
                  className="mt-4 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-sm border border-line bg-cloud px-5 py-3 text-sm font-semibold text-slate-strong/55"
                  title="Download coming soon"
                >
                  <span aria-hidden>↓</span> Download PDF
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Need a paper not listed here?"
        body="Our research desk can share working papers with qualified institutional partners."
        primary={{ href: "/contact", label: "Request access" }}
        secondary={{ href: "/insights/downloads", label: "Download center" }}
      />
    </>
  );
}
