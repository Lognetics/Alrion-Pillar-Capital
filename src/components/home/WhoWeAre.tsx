import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Button } from "@/components/ui/primitives";
import { FeatureImage } from "@/components/ui/media";
import { IMG } from "@/lib/imagery";

const PILLARS = [
  { k: "01", t: "Hedge Fund LP", d: "Global macro alpha across cross-asset dislocations, governed by daily Value-at-Risk." },
  { k: "02", t: "Private Equity LP", d: "Growth capital for mission-critical infrastructure, energy, grid and operational resilience." },
  { k: "03", t: "Venture Capital LP", d: "Founders at the inflection point between scientific validation and market deployment." },
  { k: "04", t: "Community Equity Fund LP", d: "Underserved markets as compelling, risk-adjusted opportunities in New York." },
];

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-paper py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-navy-950 md:text-5xl">
              A platform, not a product.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-slate-strong/85">
              Alrion Pillar Capital is an institutional alternative investment
              platform established in 2024 and headquartered in New York. Rather than
              stretch a single product across misaligned markets, we operate four
              autonomous strategies, each a separate Delaware Limited Partnership
              with its own investment committee and risk framework.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-slate-strong/85">
              What unifies them is not a market view but a standard: independent
              governance, aligned interests, and absolute transparency for the
              allocators who ask the harder questions.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Read our full story
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px self-start overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.k}
              delay={i * 0.08}
              className="group bg-paper p-8 transition-colors duration-500 hover:bg-navy-950"
            >
              <span className="font-serif text-2xl text-gold-500">{p.k}</span>
              <h3 className="mt-6 text-lg font-semibold text-navy-950 transition-colors duration-500 group-hover:text-paper">
                {p.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/75 transition-colors duration-500 group-hover:text-paper/65">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="shell mt-16 md:mt-24">
        <FeatureImage
          src={IMG.boardroom}
          alt="Inside ALRION Pillar Capital"
          ratio="aspect-[16/7]"
        />
      </Reveal>
    </section>
  );
}
