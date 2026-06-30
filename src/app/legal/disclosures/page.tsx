import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Important regulatory and investment disclosures regarding ALRION Pillar Capital, including risk, forward-looking statements and jurisdictional notices. Illustrative website copy — not legal advice.",
};

const UPDATED = "1 January 2026";

const sections: LegalSection[] = [
  {
    id: "important-information",
    heading: "Important Information",
    body: (
      <p>
        The information on this website is published by {FIRM.name} (&ldquo;
        {FIRM.short}&rdquo;) for general informational purposes only and is
        directed at persons who are permitted to receive it under the laws of
        their jurisdiction. It does not take account of the particular investment
        objectives, financial situation or needs of any specific person. You
        should read these disclosures in conjunction with our Terms of Use and
        Privacy Policy.
      </p>
    ),
  },
  {
    id: "no-offer",
    heading: "No Offer or Solicitation",
    body: (
      <p>
        Nothing on this website constitutes an offer to sell, or a solicitation
        of an offer to buy, any security, fund interest, advisory service or
        other financial instrument, nor shall there be any sale in any
        jurisdiction in which such an offer, solicitation or sale would be
        unlawful. Any offering of interests in a fund managed by {FIRM.short} is
        made solely through confidential offering documents, which contain
        important information about risks, fees and conflicts and which prevail
        over any information on this website.
      </p>
    ),
  },
  {
    id: "forward-looking",
    heading: "Forward-Looking Statements",
    body: (
      <p>
        This website may contain forward-looking statements that reflect our
        current views with respect to, among other things, markets, strategy and
        performance. Words such as &ldquo;believe&rdquo;, &ldquo;expect&rdquo;,
        &ldquo;anticipate&rdquo;, &ldquo;target&rdquo; and similar expressions
        identify forward-looking statements. These statements are subject to
        known and unknown risks, uncertainties and assumptions, and actual
        results may differ materially. We undertake no obligation to update any
        forward-looking statement, whether as a result of new information, future
        events or otherwise.
      </p>
    ),
  },
  {
    id: "past-performance",
    heading: "Past Performance",
    body: (
      <p>
        Past performance is not indicative of, and is no guarantee of, future
        results. Any performance information presented may be unaudited, may
        reflect the reinvestment of income, and may not account for all fees,
        expenses or taxes that an investor would bear. Hypothetical, simulated or
        target returns have inherent limitations and do not represent actual
        trading. No representation is made that any investor will, or is likely
        to, achieve results comparable to those shown.
      </p>
    ),
  },
  {
    id: "risk-of-loss",
    heading: "Risk of Loss",
    body: (
      <>
        <p>
          All investments involve risk, including the possible loss of the entire
          amount invested. The strategies referenced on this website may employ
          leverage, derivatives, concentration and exposure to illiquid or
          early-stage assets, each of which can magnify losses.
        </p>
        <p>
          Investments in frontier-technology, venture and private-market
          opportunities are speculative, may be highly illiquid and may not be
          suitable for all investors. You should be able to bear the financial
          risk of your investment for an indefinite period and to withstand a
          total loss.
        </p>
      </>
    ),
  },
  {
    id: "eligible-investors",
    heading: "Eligible and Qualified Investors",
    body: (
      <p>
        Investment products referenced on this website are generally available
        only to investors who qualify as professional, accredited, qualified or
        otherwise eligible under the applicable laws of their jurisdiction (for
        example, &ldquo;accredited investors&rdquo; and &ldquo;qualified
        purchasers&rdquo; in the United States, or &ldquo;professional
        clients&rdquo; in the European Union and United Kingdom). By accessing
        restricted areas of the website, you may be required to represent that you
        meet such criteria.
      </p>
    ),
  },
  {
    id: "conflicts-of-interest",
    heading: "Conflicts of Interest",
    body: (
      <p>
        {FIRM.short} and its affiliates manage multiple strategies and may have
        interests that conflict with those of any particular investor. We may, for
        example, invest across capital structures, allocate opportunities among
        funds, and receive fees that create incentives. We maintain policies and
        governance arrangements designed to identify, manage and, where
        appropriate, disclose material conflicts in the interests of our
        investors. Further detail is provided in the relevant offering documents.
      </p>
    ),
  },
  {
    id: "regulatory-status",
    heading: "Regulatory Status",
    body: (
      <p>
        Entities within the {FIRM.short} group may be authorized or registered
        with, and supervised by, financial-services regulators in the
        jurisdictions in which they operate. The availability of products and
        services, and the regulatory protections that apply, vary by jurisdiction
        and by investor classification. Reference to any regulatory status does
        not imply endorsement of, or any guarantee regarding, our products or
        performance.
      </p>
    ),
  },
  {
    id: "jurisdictional-notices",
    heading: "Jurisdictional Notices",
    body: (
      <p>
        The distribution of the information on this website may be restricted in
        certain jurisdictions. Persons who access this website are responsible for
        observing all applicable laws and regulations. This website is not
        directed at, and the information herein is not intended for, any person in
        any jurisdiction where (by reason of nationality, residence or otherwise)
        publication or availability of the website is prohibited. By proceeding,
        you confirm that you are permitted to receive its content.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        For questions regarding these disclosures, please contact{" "}
        {FIRM.name} at{" "}
        <a
          href={`mailto:${FIRM.email}`}
          className="text-gold-600 underline-offset-4 hover:underline"
        >
          {FIRM.email}
        </a>{" "}
        or {FIRM.phone}.
      </p>
    ),
  },
];

export default function DisclosuresPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclosures"
      intro="Important regulatory and investment disclosures regarding our firm and its strategies."
      updated={UPDATED}
      sections={sections}
    />
  );
}
