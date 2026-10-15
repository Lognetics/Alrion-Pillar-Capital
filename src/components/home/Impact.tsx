import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Button } from "@/components/ui/primitives";
import { IMPACT_INDICATORS } from "@/lib/site";

export function Impact() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Eyebrow>Impact Through Investment</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-navy-950 md:text-5xl">
              Underserved markets, measured honestly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-slate-strong/85">
              The Community Equity Fund LP is built on a simple conviction: that
              underserved markets represent some of the most compelling
              risk-adjusted opportunities in New York. Seeded by carried interest
              from our institutional strategies, it directs capital toward
              underserved communities across New York.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-slate-strong/85">
              We hold ourselves to indicators that matter, not vanity metrics.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/impact" variant="navy">
                The impact model
              </Button>
              <Button href="/strategies/community-equity" variant="outline">
                Community Equity Fund LP
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line">
          {IMPACT_INDICATORS.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.08} className="bg-paper p-8">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-navy-950">{ind.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-strong/80">{ind.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
