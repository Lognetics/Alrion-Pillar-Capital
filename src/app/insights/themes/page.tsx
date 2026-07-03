import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { THEMES } from "@/lib/research";

export const metadata: Metadata = {
  title: "Investment Themes",
  description:
    "The research themes ALRION Pillar Capital watches across its four strategies, from frontier technology in venture to the mission-critical infrastructure behind our private equity work.",
};

export default function ThemesPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            The themes behind
            <span className="text-gilt"> the thesis.</span>
          </>
        }
        intro="Six research themes that map to our four strategies. Each is a multi-year area we watch, where technology, infrastructure and impact converge."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Investment Themes" }]}
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="Where we look"
          title="Six themes, four strategies"
          intro="We organize our research around durable themes rather than transient trades. Each theme is anchored to the strategy that expresses it."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {THEMES.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-paper transition-all hover:border-gold-500 hover:shadow-[0_30px_70px_-40px] hover:shadow-navy-950/40">
                {/* themed header band */}
                <div className="relative overflow-hidden bg-navy-950 px-8 py-7 text-paper">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-500/15 blur-2xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow text-gold-400">{t.kicker}</p>
                      <h3 className="mt-3 font-serif text-2xl font-light leading-snug">
                        {t.name}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold-500/30 bg-gold-500/15 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-gold-300">
                      {t.strategy}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-[0.95rem] leading-relaxed text-slate-strong/85">{t.thesis}</p>

                  <ul className="mt-6 grid gap-2.5">
                    {t.thrust.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-slate-strong">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {x}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-slate-strong/55">
                      Horizon · {t.horizon}
                    </span>
                    <span className="rounded-full border border-gold-500/30 bg-gold-500/15 px-3 py-1 font-semibold tracking-wide text-gold-600">
                      {t.strategy}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="See how these themes translate into portfolios."
        body="Our four platforms express these convictions across public and private markets."
        primary={{ href: "/strategies", label: "Our strategies" }}
        secondary={{ href: "/insights/economic-outlook", label: "Read the outlook" }}
      />
    </>
  );
}
