import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { DIFFERENTIATORS } from "@/lib/site";

export function WhyAlrion() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="The Alrion Difference"
            title={<>Institutional excellence, engineered into every decision.</>}
            intro="The advantages that let us see further, move earlier and underwrite with confidence at the frontier."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.08}
              className="flex flex-col bg-paper p-8"
            >
              <span className="font-serif text-3xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-semibold text-navy-950">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
