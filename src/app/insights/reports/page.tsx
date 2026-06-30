import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { REPORTS, type Report } from "@/lib/research";

export const metadata: Metadata = {
  title: "Quarterly & Annual Reports",
  description:
    "The ALRION Pillar Capital report archive — quarterly investor letters, annual reports and impact reports, grouped by year.",
};

const typeStyle: Record<Report["type"], string> = {
  Annual: "bg-gold-500/15 text-gold-600 border-gold-500/30",
  Quarterly: "bg-navy-900/8 text-navy-900 border-navy-900/15",
  Impact: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
};

export default function ReportsPage() {
  const years = Array.from(new Set(REPORTS.map((r) => r.year))).sort((a, b) => b - a);

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            The report
            <span className="text-gilt"> archive.</span>
          </>
        }
        intro="Our institutional-grade reporting, in one place — quarterly investor letters, annual reviews and impact reports going back to inception."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Reports" }]}
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="Archive"
          title="Reporting by year"
          intro="Download affordances are illustrative. Figures within each report are illustrative."
        />

        <div className="mt-12 space-y-16">
          {years.map((year) => {
            const rows = REPORTS.filter((r) => r.year === year);
            return (
              <Reveal key={year}>
                <div className="flex items-baseline gap-5">
                  <h3 className="font-serif text-5xl font-light text-navy-950">{year}</h3>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-sm font-semibold text-slate-strong/55">
                    {rows.length} {rows.length === 1 ? "report" : "reports"}
                  </span>
                </div>

                <div className="mt-6 overflow-hidden rounded-sm border border-line">
                  {rows.map((r, i) => (
                    <div
                      key={r.period + r.title}
                      className={cn(
                        "group grid items-center gap-4 bg-paper px-6 py-5 transition-colors hover:bg-cloud md:grid-cols-12",
                        i !== rows.length - 1 && "border-b border-line",
                      )}
                    >
                      <div className="md:col-span-2">
                        <span className="text-sm font-semibold text-navy-950">{r.period}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span
                          className={cn(
                            "inline-block rounded-full border px-3 py-1 text-[0.7rem] font-semibold tracking-wide",
                            typeStyle[r.type],
                          )}
                        >
                          {r.type}
                        </span>
                      </div>
                      <div className="md:col-span-6">
                        <p className="font-serif text-lg font-light text-navy-950">{r.title}</p>
                        <p className="mt-1 text-sm text-slate-strong/70">{r.summary}</p>
                      </div>
                      <div className="md:col-span-2 md:text-right">
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-line px-4 py-2 text-xs font-semibold text-slate-strong/55"
                          title="Download coming soon"
                        >
                          <span aria-hidden>↓</span> PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Are you a current investor?"
        body="Limited-partner reporting and capital-account statements are available through our investor portal."
        primary={{ href: "/contact", label: "Investor relations" }}
        secondary={{ href: "/insights/downloads", label: "Download center" }}
      />
    </>
  );
}
