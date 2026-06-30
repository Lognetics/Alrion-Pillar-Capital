import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CapitalRequestForm } from "@/components/investors/CapitalRequestForm";
import { REQUEST_PROCESS } from "@/lib/investor-center";

export const metadata: Metadata = {
  title: "Capital Requests",
  description:
    "Register your allocation interest with ALRION Pillar Capital. Confidential intake for qualified institutional and professional investors across our four platforms.",
};

export default function CapitalRequestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Capital Requests"
        title={
          <>
            Register your
            <span className="text-gilt"> allocation interest.</span>
          </>
        }
        intro="Tell us about your mandate and the platforms that interest you. Submissions are confidential and reviewed by our investor relations desk against fit, capacity and eligibility."
        crumbs={[
          { label: "Investor Center", href: "/investors" },
          { label: "Capital Requests" },
        ]}
      />

      {/* How requests are reviewed */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="How requests are reviewed"
            title={<>A confidential, three-step review.</>}
            intro="Every request is treated with discretion. Here is what happens after you submit."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {REQUEST_PROCESS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.08}
              className="flex flex-col bg-paper p-8"
            >
              <span className="font-serif text-2xl text-gold-500">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + what to expect */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Register your interest"
              title={<>Tell us about your mandate.</>}
            />
            <div className="mt-8 space-y-6 text-slate-strong/85">
              <p className="leading-relaxed">
                This intake is for qualified institutional and professional
                investors. The detail you provide helps us route your request to
                the right platform team and prepare for a focused first
                conversation.
              </p>
              <ul className="space-y-4">
                {[
                  "A named relationship manager reviews every submission.",
                  "Qualified requests progress to secure data-room access.",
                  "We typically respond within two business days.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-[0.95rem] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <CapitalRequestForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
