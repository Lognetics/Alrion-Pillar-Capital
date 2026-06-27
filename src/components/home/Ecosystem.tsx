import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { STRATEGIES } from "@/lib/site";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="shell relative">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="The Investment Ecosystem"
            title={<>Four platforms. One disciplined philosophy.</>}
            intro="From liquid public markets to private innovation and inclusive impact, our platforms are engineered to compound capital across the full technology cycle."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-2">
          {STRATEGIES.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 0.08}
              className="group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 md:p-10"
            >
              <Link href={`/strategies/${s.slug}`} className="absolute inset-0 z-10" aria-label={s.name} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-gold-400">{s.kicker}</p>
                  <h3 className="mt-4 font-serif text-3xl font-light text-paper">{s.name}</h3>
                </div>
                <span className="font-serif text-5xl font-light text-white/10 transition-colors duration-500 group-hover:text-gold-500/40">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-paper/65">
                {s.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-sm font-semibold text-gold-300">{m.value}</p>
                    <p className="text-xs text-paper/45">{m.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors group-hover:text-gold-300">
                Explore platform
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
