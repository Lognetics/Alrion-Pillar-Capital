import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";
import { POLICIES } from "@/lib/governance";

export const metadata: Metadata = {
  title: "Compliance & Ethics",
  description:
    "ALRION Pillar Capital's compliance and ethics framework — code of conduct, regulatory adherence, AML/KYC, conflicts management, whistleblower protection and firm-wide training, codified and enforced.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance · Compliance & Ethics"
        title={
          <>
            A culture of integrity,
            <span className="text-gilt"> codified and enforced.</span>
          </>
        }
        intro="Strong compliance is not a constraint on our business — it is a precondition for earning the trust of long-term institutional partners."
        crumbs={[{ label: "Governance", href: "/governance" }, { label: "Compliance & Ethics" }]}
      />

      {/* — Ethics statement —————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Standard"
              title={<>Doing the right thing, even when no one is watching.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Integrity is the foundation on which {FIRM.name} is built. Our
                compliance program exists to protect our partners, our people and
                the markets in which we operate — and to ensure that the firm's
                conduct always reflects the principles we espouse.
              </p>
              <p>
                The standards below are not aspirational. They are documented,
                attested and enforced, maintained by a Compliance Committee that
                operates independently of the investing teams and reports directly
                to the Board.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Policy register ——————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Policy Register"
            title={<>The policies that govern our conduct.</>}
            intro="A structured framework of standards spanning every employee, partner and counterparty relationship."
          />
        </Reveal>
        <div className="mt-14 overflow-hidden rounded-sm border border-line bg-paper">
          {POLICIES.map((p, i) => (
            <Reveal key={p.code} delay={(i % 4) * 0.05}>
              <div className="grid items-start gap-4 border-t border-line p-6 first:border-t-0 md:grid-cols-12 md:gap-6 md:p-8">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-serif text-sm text-gold-500">{p.code}</span>
                  <h3 className="text-lg font-semibold text-navy-950">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-strong/80 md:col-span-6">
                  {p.body}
                </p>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-block rounded-full border border-line px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-strong/70">
                    {p.cadence}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Pledge ————————————————————————————————————————————— */}
      <Section tone="navy">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-400">Our Ethics Pledge</span>
          <p className="mt-8 text-balance font-serif text-3xl font-light leading-snug text-paper md:text-4xl">
            “We hold the capital of others to a higher standard than our own — and
            we accept that trust, once earned, must be re-earned every single day.”
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-paper/50">
            ALRION Pillar Capital · Compliance Committee
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Questions on conduct or compliance?</>}
        body="Our compliance function maintains confidential, retaliation-free channels for raising concerns. Reach our team directly."
        primary={{ href: "/contact", label: "Contact compliance" }}
        secondary={{ href: "/governance", label: "Back to governance" }}
      />
    </>
  );
}
