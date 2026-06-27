import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Button } from "@/components/ui/primitives";
import { IMPACT_STATS } from "@/lib/site";

export function Impact() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>ESG &amp; Responsible Capital</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-navy-950 md:text-5xl">
              Returns and responsibility, never a trade-off.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-slate-strong/85">
              We are building a future where financial prosperity aligns with
              environmental stewardship, social progress and ethical governance.
              Sustainability and impact are integrated into diligence, ownership and
              reporting — not appended to them — and measured against the UN Sustainable
              Development Goals.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/esg" variant="navy">
                Our ESG framework
              </Button>
              <Button href="/insights/reports" variant="outline">
                Impact reports
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-paper p-8">
              <div className="font-serif text-4xl font-light text-navy-900">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-navy-950">{stat.label}</p>
              <p className="mt-1 text-xs text-mist-500">{stat.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
