import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SUBSCRIPTION_STEPS, ELIGIBILITY } from "@/lib/investor-center";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscription Process",
  description:
    "A clear, step-by-step path from eligibility and KYC through subscription, capital commitment and ongoing reporting at ALRION Pillar Capital.",
};

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Subscription Process"
        title={
          <>
            From first conversation
            <span className="text-gilt"> to committed capital.</span>
          </>
        }
        intro="Every partnership follows the same disciplined path — diligence, alignment and complete transparency at each step. Here is exactly how capital is committed at ALRION Pillar Capital."
        crumbs={[
          { label: "Investor Center", href: "/investors" },
          { label: "Subscription Process" },
        ]}
      />

      {/* Vertical stepper */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="The six stages"
            title={<>A guided, end-to-end onboarding.</>}
            intro="Each stage is supported by a dedicated team, with secure digital documentation and white-glove assistance throughout."
          />
        </Reveal>

        <div className="mt-16 border-l border-line pl-8 md:pl-14">
          {SUBSCRIPTION_STEPS.map((step, i) => (
            <Reveal
              key={step.no}
              delay={i * 0.05}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[2.85rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-paper text-sm font-semibold text-gold-600 md:-left-[4.1rem]">
                {step.no}
              </span>

              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-strong/50">
                    {step.duration}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-light text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-strong/80">
                    {step.body}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line">
                    {step.detail.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 bg-cloud p-4"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        <span className="text-sm leading-relaxed text-slate-strong">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Eligibility & requirements */}
      <Section tone="cloud">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Eligibility & requirements"
              title={<>Who can subscribe.</>}
              intro="Our funds are available exclusively to qualified institutional and professional investors. Before subscription, we confirm that each partner meets the following requirements."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:self-center">
            <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line">
              {ELIGIBILITY.map((e, i) => (
                <li key={e} className="flex items-start gap-4 bg-paper p-6">
                  <span className="font-serif text-lg text-gold-500">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed text-slate-strong">{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Timeline expectations */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Timeline expectations"
            title={<>What to expect, and when.</>}
            intro="Most onboarding completes within four weeks, subject to the timeliness of documentation and verification. Figures are illustrative."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              metric: "~4 weeks",
              label: "Typical onboarding",
              body: "From first conversation to confirmed, funded commitment.",
            },
            {
              metric: "2 business days",
              label: "Initial response",
              body: "Our investor relations desk responds to qualified requests.",
            },
            {
              metric: "Quarterly",
              label: "Reporting cadence",
              body: "Capital-account and performance statements thereafter.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-navy-950 p-8">
              <p className="font-serif text-4xl font-light text-gold-400">
                {item.metric}
              </p>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-paper">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper/45">Illustrative timelines.</p>
      </Section>

      <CtaBand
        title={<>Ready to begin the subscription process?</>}
        body={`Register your interest and our investor relations desk will guide you from eligibility through commitment. Reach us at ${FIRM.email}.`}
        primary={{
          href: "/investors/capital-requests",
          label: "Register your interest",
        }}
        secondary={{ href: "/investors/faqs", label: "Read investor FAQs" }}
      />
    </>
  );
}
