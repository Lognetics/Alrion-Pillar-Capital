import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { REPORT_ARCHIVE } from "@/lib/governance";

export const metadata: Metadata = {
  title: "Annual Reports",
  description:
    "The ALRION Pillar Capital report archive — annual reports, audited financial statements and ESG & impact reports across 2025, 2024, 2023 and 2022.",
};

export default function ReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance · Annual Reports"
        title={
          <>
            The record of our
            <span className="text-gilt"> stewardship, year by year.</span>
          </>
        }
        intro="A complete archive of our annual reports, audited financial statements and ESG & impact reporting — the documented account of how we govern the capital entrusted to us."
        crumbs={[{ label: "Governance", href: "/governance" }, { label: "Annual Reports" }]}
      />

      {/* — Archive ————————————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Report Archive"
            title={<>Four years of institutional reporting.</>}
            intro="Each year's filings are published together — performance and governance, finance and impact, in one transparent record."
          />
        </Reveal>

        <div className="mt-16 space-y-16">
          {REPORT_ARCHIVE.map((year, idx) => (
            <Reveal key={year.year} delay={idx * 0.05}>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-6xl font-light text-navy-950">{year.year}</span>
                    {idx === 0 && (
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-gold-600">
                        Latest
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-lg font-medium text-navy-900">{year.theme}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-strong/75">{year.summary}</p>
                </div>

                <div className="lg:col-span-8">
                  <div className="overflow-hidden rounded-sm border border-line">
                    {year.documents.map((doc) => (
                      <div
                        key={doc.label}
                        className="flex items-center justify-between gap-4 border-t border-line bg-paper p-5 first:border-t-0 md:px-7"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-xs text-gold-500">{doc.type}</span>
                          <span className="text-[0.95rem] font-medium text-navy-950">{doc.label}</span>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="hidden text-xs text-slate-strong/55 sm:inline">{doc.size}</span>
                          <span
                            aria-disabled="true"
                            className="cursor-not-allowed select-none rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-slate-strong/40"
                            title="Archived document — download unavailable in this preview"
                          >
                            Download
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-sm leading-relaxed text-slate-strong/65">
            Document availability is illustrative for this preview; file sizes and
            download affordances are representative only. For certified copies of any
            filing, please contact our investor relations team.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Need a certified copy or prior-year filing?</>}
        body="Our investor relations team can provide audited documents and historical reports on request."
        primary={{ href: "/contact", label: "Request a report" }}
        secondary={{ href: "/governance/transparency", label: "Our transparency" }}
      />
    </>
  );
}
