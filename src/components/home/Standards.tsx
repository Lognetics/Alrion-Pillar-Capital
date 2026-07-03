import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { GOVERNANCE_STANDARDS, FIRM } from "@/lib/site";

export function Standards() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="shell relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <Reveal>
            <SectionHeading
              light
              eyebrow="Governance &amp; Standards"
              title={<>The assurances institutional capital deserves.</>}
              intro="Independence is only credible when it is governed. Each strategy is a separate Delaware Limited Partnership, held to a single, uncompromising standard."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="eyebrow text-gold-400">Headquarters</p>
              <p className="mt-3 text-lg text-paper">{FIRM.address}</p>
              <p className="mt-1 text-sm text-paper/55">
                {FIRM.phone} · {FIRM.email}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <Button href="/governance" variant="ghost">
                Our governance framework
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px self-start overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
          {GOVERNANCE_STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
