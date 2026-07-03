import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { REPORT_LIBRARY } from "@/lib/governance";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "The ALRION Pillar Capital report library, covering the annual report, audited financial statements and ESG report for each independent Limited Partnership.",
};

export default function ReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance · Reports"
        title={
          <>
            The documented record of our
            <span className="text-gilt"> stewardship.</span>
          </>
        }
        intro="Our reporting is organized around three document types, published for each independent Limited Partnership. Together they form the account of how we govern the capital entrusted to us."
        crumbs={[{ label: "Governance", href: "/governance" }, { label: "Reports" }]}
      />

      {/* Report library */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Report Library"
            title={<>Three documents, one transparent record.</>}
            intro="Each strategy is a separate Delaware Limited Partnership. Its financial statements are audited annually by a Big Four firm and supported by comprehensive third-party administration."
          />
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-sm border border-line">
          {REPORT_LIBRARY.map((doc) => (
            <Reveal key={doc.label}>
              <div className="flex flex-col gap-4 border-t border-line bg-paper p-6 first:border-t-0 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
                <div className="flex items-start gap-4 md:col-span-8">
                  <span className="mt-1 font-serif text-xs text-gold-500">{doc.type}</span>
                  <div>
                    <span className="text-[0.95rem] font-medium text-navy-950">{doc.label}</span>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-strong/75">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <span
                  aria-disabled="true"
                  className="shrink-0 cursor-not-allowed select-none self-start rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-slate-strong/40 md:self-center"
                  title="Available to institutional partners through investor relations"
                >
                  Request
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-sm leading-relaxed text-slate-strong/65">
            Certified copies of any filing are provided to institutional partners
            through our investor relations team. Financial statements are audited
            annually by a Big Four firm, with comprehensive third-party
            administration across every Limited Partnership.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Request a report or audited filing.</>}
        body="Our investor relations team can provide audited documents and current filings on request."
        primary={{ href: "/contact", label: "Request a report" }}
        secondary={{ href: "/governance/transparency", label: "Our transparency" }}
      />
    </>
  );
}
