import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ALRION Pillar Capital collects, uses, shares and protects your personal data, and the rights available to you. Illustrative website copy — not legal advice.",
};

const UPDATED = "1 January 2026";

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: (
      <>
        <p>
          {FIRM.name} (&ldquo;{FIRM.short}&rdquo;) collects personal data that
          you provide directly, that we obtain automatically when you interact
          with our website, and that we receive from third parties such as
          service providers and regulatory references.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-medium text-navy-950">
              Information you provide
            </span>{" "}
            — name, email, telephone number, organization, investor category and
            any content you submit through contact or subscription forms.
          </li>
          <li>
            <span className="font-medium text-navy-950">
              Information collected automatically
            </span>{" "}
            — IP address, device and browser type, pages viewed, referring URLs
            and other usage data gathered through cookies and similar
            technologies.
          </li>
          <li>
            <span className="font-medium text-navy-950">
              Information from third parties
            </span>{" "}
            — verification, due-diligence and analytics data supplied by trusted
            partners.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How We Use Your Information",
    body: (
      <>
        <p>We use personal data for the following purposes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>To operate, maintain and improve the website and our services;</li>
          <li>
            To respond to enquiries and to communicate with you about our firm,
            strategies and insights where permitted;
          </li>
          <li>
            To verify investor eligibility and to meet our legal, regulatory and
            compliance obligations, including anti-money-laundering checks;
          </li>
          <li>
            To analyze usage trends and measure the effectiveness of our content;
            and
          </li>
          <li>
            To detect, prevent and address fraud, security and technical issues.
          </li>
        </ul>
        <p>
          We rely on one or more lawful bases for processing, including your
          consent, the performance of a contract, compliance with legal
          obligations and our legitimate interests in operating our business.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking Technologies",
    body: (
      <p>
        We use cookies, web beacons and similar technologies to recognize you,
        remember your preferences, understand how the website is used and improve
        your experience. You can manage your preferences at any time through our{" "}
        <a
          href="/legal/cookies"
          className="text-gold-600 underline-offset-4 hover:underline"
        >
          Cookie Preferences
        </a>{" "}
        page or through your browser settings. Disabling certain cookies may
        affect the functionality of the website.
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing and Disclosure",
    body: (
      <>
        <p>
          We do not sell your personal data. We may share it with the following
          categories of recipients, subject to appropriate safeguards:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Affiliates and members of the {FIRM.short} group acting on our
            behalf;
          </li>
          <li>
            Service providers performing functions such as hosting, analytics,
            communications and compliance screening;
          </li>
          <li>
            Professional advisers, auditors, regulators and law-enforcement
            authorities where required by law; and
          </li>
          <li>
            Successors in the context of a merger, acquisition or reorganization.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: (
      <p>
        We maintain administrative, technical and physical safeguards designed to
        protect personal data against unauthorized access, loss, misuse or
        alteration. No method of transmission over the internet or method of
        electronic storage is fully secure, however, and we cannot guarantee
        absolute security. You are responsible for keeping any access credentials
        confidential.
      </p>
    ),
  },
  {
    id: "international-transfers",
    heading: "International Transfers",
    body: (
      <p>
        As a global firm, we may transfer personal data to, and store it in,
        countries other than the one in which it was collected, including the
        United States. Where we transfer data internationally, we implement
        appropriate safeguards — such as standard contractual clauses — to ensure
        an adequate level of protection consistent with applicable law.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: (
      <>
        <p>
          Depending on your location, you may have rights regarding your personal
          data, including the rights to access, correct, delete, restrict or
          object to processing, and to data portability.
        </p>
        <p>
          <span className="font-medium text-navy-950">EU/UK (GDPR).</span> If you
          are in the European Economic Area or the United Kingdom, you may
          exercise the rights above and lodge a complaint with your local data
          protection authority. Where processing is based on consent, you may
          withdraw it at any time.
        </p>
        <p>
          <span className="font-medium text-navy-950">California (CCPA/CPRA).</span>{" "}
          California residents may request disclosure of the categories and
          specific pieces of personal information we collect, request deletion,
          and opt out of any &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of
          personal information. We will not discriminate against you for
          exercising these rights.
        </p>
        <p>
          To exercise any right, contact us using the details in the{" "}
          <a
            href="#contact"
            className="text-gold-600 underline-offset-4 hover:underline"
          >
            Contact
          </a>{" "}
          section. We may need to verify your identity before responding.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Data Retention",
    body: (
      <p>
        We retain personal data only for as long as necessary to fulfill the
        purposes for which it was collected, including to satisfy legal,
        accounting, regulatory or reporting requirements. When data is no longer
        required, we securely delete or anonymize it.
      </p>
    ),
  },
  {
    id: "children",
    heading: "Children’s Privacy",
    body: (
      <p>
        The website is intended for a professional and institutional audience and
        is not directed to children. We do not knowingly collect personal data
        from individuals under the age of 18. If you believe a child has provided
        us with personal data, please contact us so that we can take appropriate
        action.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our practices, technologies, legal requirements or other factors. When we
        do, we will revise the &ldquo;Last updated&rdquo; date above and, where
        appropriate, provide additional notice.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        For privacy enquiries or to exercise your rights, contact our privacy team
        at{" "}
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use, share and protect your personal data."
      updated={UPDATED}
      sections={sections}
    />
  );
}
