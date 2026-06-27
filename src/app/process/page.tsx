import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Process",
  description:
    "A disciplined, eight-stage investment process — from thematic sourcing and specialist diligence to independent committee review, active ownership and transparent reporting.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Process"
        title={
          <>
            A disciplined path from
            <span className="text-gilt"> conviction to realization.</span>
          </>
        }
        intro="Every commitment ALRION Pillar Capital makes moves through the same rigorous, repeatable process — engineered so that capital follows evidence, risk is governed independently, and our partners are kept informed at every step."
        crumbs={[{ label: "Process" }]}
      />

      {/* — Intro ——————————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Methodology"
              title={<>Process is the discipline behind conviction.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Outstanding investment outcomes are rarely the product of a
                single brilliant decision. They are the cumulative result of a
                disciplined process applied consistently, with the same rigor in
                a quiet market as in a frenzied one. At ALRION Pillar Capital, our
                process is the operating system of the firm.
              </p>
              <p>
                Each opportunity advances through eight deliberate stages. Insight
                is sourced through proprietary networks and thematic research,
                interrogated by specialists across disciplines, debated by an
                independent committee, structured to protect downside, and
                monitored continuously through ownership to exit. No stage is
                skipped, and no conviction goes unexamined.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — The 8-step timeline ————————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="The Process"
              title={<>Eight stages, one standard of rigor.</>}
              intro="From first signal to final realization, every commitment is governed by the same disciplined sequence."
              className="mx-auto"
            />
          </Reveal>

          <div className="relative mt-16">
            {/* vertical spine */}
            <div className="absolute left-[1.6rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold-500/60 via-white/15 to-transparent md:block" />
            <ol className="space-y-px overflow-hidden rounded-sm border border-white/10 bg-white/10">
              {PROCESS.map((step, i) => (
                <Reveal
                  key={step.no}
                  as="li"
                  delay={(i % 4) * 0.06}
                  className="group relative grid gap-5 bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 md:grid-cols-12 md:items-center md:gap-8 md:p-10"
                >
                  <div className="flex items-center gap-5 md:col-span-3">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-navy-950 font-serif text-lg text-gold-400 transition-colors duration-500 group-hover:border-gold-400 group-hover:text-gold-300">
                      {step.no}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-paper md:hidden">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="hidden font-serif text-2xl font-light text-paper md:col-span-4 md:block">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-paper/65 md:col-span-5">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* — Diligence rigor ————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Diligence Rigor"
            title={<>Diligence conducted by specialists, not generalists.</>}
            intro="Frontier technology cannot be evaluated by financial analysis alone. Our diligence brings the right expertise to bear on every dimension of an opportunity."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={4}
            items={[
              {
                title: "Technical diligence",
                body: "Engineers and scientists assess the underlying technology, its defensibility and a realistic path to industrial scale.",
              },
              {
                title: "Commercial diligence",
                body: "We map demand, competitive dynamics and unit economics to test whether a thesis survives contact with the market.",
              },
              {
                title: "Financial diligence",
                body: "Rigorous modeling, quality-of-earnings review and downside analysis frame every valuation and structuring decision.",
              },
              {
                title: "ESG diligence",
                body: "Environmental, social and governance factors are assessed as material risks and as sources of durable value.",
              },
            ]}
          />
        </div>
      </Section>

      {/* — Investment Committee ———————————————————————————————— */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="The Investment Committee"
          title={<>No capital is committed without independent challenge.</>}
          bullets={[
            "Formal review of thesis, structure and risk",
            "Adversarial debate before any commitment",
            "Members independent of the sponsoring team",
            "Documented rationale for every decision",
          ]}
        >
          <p>
            Conviction at ALRION Pillar Capital is collective, not individual.
            Before any commitment, each opportunity is presented to a formal
            Investment Committee composed of senior investors and risk
            professionals — several of whom are deliberately independent of the
            team that sourced the deal.
          </p>
          <p>
            The committee&apos;s role is to challenge: to probe the weakest points
            of the thesis, interrogate the proposed structure and confirm that the
            risk is understood, sized and acceptable. Decisions and their rationale
            are documented, creating an auditable record that strengthens both our
            discipline and our accountability.
          </p>
        </SplitContent>
      </Section>

      {/* — Risk oversight —————————————————————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Risk Oversight"
            title={<>Risk governed independently of the investing teams.</>}
            intro="An independent oversight function monitors exposure continuously and reports directly to governance — separating those who take risk from those who measure it."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              title: "Continuous monitoring",
              body: "Proprietary models track exposure, correlation and volatility in real time, surfacing emerging risk before it becomes loss.",
            },
            {
              title: "Pre-committed limits",
              body: "Position, concentration and drawdown limits are set in advance and enforced independently of the investing teams.",
            },
            {
              title: "Direct escalation",
              body: "Risk reports to governance through a separate reporting line, ensuring concerns are never filtered by the desk that created them.",
            },
          ].map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Portfolio support ——————————————————————————————————— */}
      <Section tone="paper">
        <SplitContent
          reverse
          eyebrow="Portfolio Support"
          title={<>Ownership is where value is created.</>}
          bullets={[
            "Operating expertise across functions and stages",
            "Talent and executive network access",
            "A global commercialization and partnership network",
            "Active board-level engagement and governance uplift",
          ]}
        >
          <p>
            Capital is the beginning of our partnership, not the end of it. Once
            committed, our portfolio teams work alongside management to
            professionalize operations, recruit critical talent and open the
            doors that accelerate growth — drawing on a global network built
            across two decades of frontier investing.
          </p>
          <p>
            We engage actively but never intrusively, contributing strategic
            guidance, governance discipline and commercial relationships where
            they create the most value. Our objective is simple: to help every
            company in our portfolio reach its full potential, responsibly and
            durably.
          </p>
        </SplitContent>
      </Section>

      {/* — Transparent reporting ——————————————————————————————— */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Transparent Reporting"
            title={<>Clarity our partners can rely on.</>}
            intro="The final stage of our process closes the loop — returning capital and accounting for it with institutional-grade transparency."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              title: "Consistent cadence",
              body: "Detailed exposure, attribution and performance reporting delivered on a reliable institutional schedule.",
            },
            {
              title: "Impact accountability",
              body: "Measurable social and environmental outcomes reported alongside financial results, aligned to the UN SDGs.",
            },
            {
              title: "Deliberate exits",
              body: "Realization is planned, not improvised — maximizing value and returning capital to partners with full transparency.",
            },
          ].map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07} className="bg-ink p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>See how disciplined process becomes durable return.</>}
        body="Speak with our investor relations team to explore how ALRION Pillar Capital's process aligns with your mandate."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/strategies", label: "Our strategies" }}
      />
    </>
  );
}
