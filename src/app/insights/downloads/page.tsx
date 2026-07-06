import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { DownloadFilter } from "@/components/research/DownloadFilter";
import { DOWNLOADS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "ALRION Pillar Capital white papers, available to the public. Reports, investor letters and fund materials are available to verified investors through the Investor Portal.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource Hub"
        title={
          <>
            The download
            <span className="text-gilt"> center.</span>
          </>
        }
        intro="Our white papers, available to the public. Reports, investor letters and fund materials are reserved for verified investors through the Investor Portal."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Download Center" }]}
      />

      {/* Filterable library */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="White Papers"
          title="Browse our white papers"
          intro="Search our published white papers by title."
        />
        <div className="mt-12">
          <DownloadFilter items={DOWNLOADS} />
        </div>
      </Section>

      <CtaBand
        title="Looking for reports, letters or fund materials?"
        body="Reports, investor letters and fund materials are available to verified investors through the Investor Portal, hosted by Juniper Square."
        primary={{ href: "/investors/capital-requests", label: "Request access" }}
        secondary={{ href: "/contact", label: "Investor relations" }}
      />
    </>
  );
}
