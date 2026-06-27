import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { PROCESS } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="shell relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="The Investment Process"
            title={<>A disciplined path from thesis to realized value.</>}
            intro="Every commitment moves through the same rigorous, repeatable lifecycle — designed to protect capital and compound conviction."
          />
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal
              as="li"
              key={step.no}
              delay={(i % 4) * 0.08}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-navy-900"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-2xl font-light text-gold-500">{step.no}</span>
                <span className="h-2 w-2 rounded-full bg-white/15 transition-colors duration-500 group-hover:bg-gold-500" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-paper">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button href="/process" variant="ghost">
              Explore the full process
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
