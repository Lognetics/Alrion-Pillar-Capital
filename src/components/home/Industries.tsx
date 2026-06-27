import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { SECTORS } from "@/lib/site";

const GROUPS = ["Intelligence & Compute", "Life & Climate", "Real Economy"];

export function Industries() {
  return (
    <section className="bg-cloud py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title={<>Investing where the future is being built.</>}
              intro="Twenty-one frontier sectors mapped to secular demand, durable competitive moats and real-world impact."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/industries" variant="outline">
              View all sectors
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 space-y-12">
          {GROUPS.map((group, gi) => (
            <div key={group}>
              <Reveal>
                <div className="mb-5 flex items-center gap-4">
                  <span className="eyebrow text-navy-700">{group}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
              </Reveal>
              <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {SECTORS.filter((s) => s.group === group).map((s, i) => (
                  <Reveal
                    key={s.slug}
                    delay={(gi * 0.02) + i * 0.04}
                    className="group"
                  >
                    <Link
                      href={`/industries/${s.slug}`}
                      className="flex h-full flex-col bg-paper p-6 transition-colors duration-500 hover:bg-navy-950"
                    >
                      <h3 className="text-base font-semibold text-navy-950 transition-colors duration-500 group-hover:text-gold-300">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-strong/70 transition-colors duration-500 group-hover:text-paper/60">
                        {s.blurb}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
