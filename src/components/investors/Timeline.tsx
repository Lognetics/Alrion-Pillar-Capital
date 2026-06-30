import { Reveal } from "@/components/ui/Reveal";

type Step = { no: string; title: string; body: string };

/** Vertical numbered timeline used by several investor pages. */
export function Timeline({
  steps,
  light = false,
}: {
  steps: Step[];
  light?: boolean;
}) {
  return (
    <div className={`border-l pl-8 md:pl-12 ${light ? "border-white/15" : "border-line"}`}>
      {steps.map((step, i) => (
        <Reveal
          key={step.no}
          delay={i * 0.06}
          className="relative grid gap-2 pb-12 last:pb-0 md:grid-cols-12 md:gap-8"
        >
          <span
            className={`absolute -left-[2.6rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold md:-left-[3.65rem] ${
              light
                ? "border-gold-400/40 bg-navy-950 text-gold-400"
                : "border-gold-500/40 bg-paper text-gold-600"
            }`}
          >
            {step.no}
          </span>
          <h3
            className={`font-serif text-2xl font-light md:col-span-5 ${
              light ? "text-paper" : "text-navy-950"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`leading-relaxed md:col-span-7 ${
              light ? "text-paper/70" : "text-slate-strong/80"
            }`}
          >
            {step.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
