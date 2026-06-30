import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your access to and use of the ALRION Pillar Capital website. Illustrative website copy — not legal advice.",
};

const UPDATED = "1 January 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms of Use (the &ldquo;Terms&rdquo;) govern your access to and
          use of the website published by {FIRM.name} (&ldquo;
          {FIRM.short}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our
          &rdquo;), together with any content, functionality and services offered
          on or through it (collectively, the &ldquo;Site&rdquo;).
        </p>
        <p>
          By accessing or using the Site, you acknowledge that you have read,
          understood and agree to be bound by these Terms and by our Privacy
          Policy, which is incorporated by reference. If you do not agree, you
          must not access or use the Site.
        </p>
      </>
    ),
  },
  {
    id: "use-of-site",
    heading: "Use of the Site",
    body: (
      <>
        <p>
          You may use the Site only for lawful purposes and in accordance with
          these Terms. You agree not to use the Site in any manner that could
          disable, overburden, damage or impair it, or interfere with any other
          party&rsquo;s use of the Site.
        </p>
        <p>You specifically agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Attempt to gain unauthorized access to any portion of the Site, its
            servers, or any connected systems or networks;
          </li>
          <li>
            Use any robot, spider, scraper or other automated means to access
            the Site for any purpose without our express written permission;
          </li>
          <li>
            Introduce any viruses, trojans, worms or other material that is
            malicious or technologically harmful; or
          </li>
          <li>
            Reproduce, duplicate, copy, sell or resell any portion of the Site in
            contravention of these Terms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property Rights",
    body: (
      <>
        <p>
          The Site and its entire contents, features and functionality —
          including but not limited to all information, text, displays, images,
          graphics, logos and the design, selection and arrangement thereof — are
          owned by {FIRM.short}, its licensors or other providers of such
          material and are protected by international copyright, trademark and
          other intellectual-property laws.
        </p>
        <p>
          The {FIRM.name} name, logo and all related names and slogans are
          trademarks of {FIRM.short}. You must not use such marks without our
          prior written permission. No license or right is granted to you except
          the limited right to view the Site for your personal, non-commercial
          use.
        </p>
      </>
    ),
  },
  {
    id: "no-offer",
    heading: "No Offer and No Advice",
    body: (
      <>
        <p>
          The Site is provided for general informational purposes only. Nothing
          on the Site constitutes, or is intended to constitute, an offer,
          solicitation, recommendation or invitation to buy or sell any security,
          fund interest or other financial instrument, nor to provide any
          investment, legal, tax or accounting advice.
        </p>
        <p>
          Any investment products referenced are offered only by means of
          confidential offering materials to eligible investors in jurisdictions
          where such an offer is lawful. You should not rely on the Site as the
          basis for any investment decision and should seek independent
          professional advice.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    body: (
      <p>
        You represent that you are of legal age to form a binding contract and
        are not barred from receiving the Site&rsquo;s content under the laws of
        your jurisdiction. Certain areas of the Site may be restricted to
        professional, qualified or accredited investors, and access may be
        conditioned on your confirmation of such status.
      </p>
    ),
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    body: (
      <p>
        The Site may contain links to third-party websites or resources provided
        solely for your convenience. We have no control over the contents of
        those sites and accept no responsibility for them or for any loss or
        damage that may arise from your use of them. Any such links do not imply
        endorsement by {FIRM.short}.
      </p>
    ),
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    body: (
      <p>
        The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis, without any warranties of any kind, whether
        express or implied. To the fullest extent permitted by law, {FIRM.short}{" "}
        disclaims all warranties, including implied warranties of
        merchantability, fitness for a particular purpose and non-infringement,
        and does not warrant that the Site will be uninterrupted, secure or
        error-free, or that any information on it is accurate, complete or
        current.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by applicable law, in no event will{" "}
        {FIRM.short}, its affiliates or their respective directors, officers,
        employees or agents be liable for any indirect, incidental, special,
        consequential or punitive damages, or for any loss of profits, data,
        goodwill or other intangible losses, arising out of or relating to your
        access to or use of, or inability to access or use, the Site — whether
        based in contract, tort, statute or otherwise.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law and Jurisdiction",
    body: (
      <p>
        These Terms and any dispute or claim arising out of or in connection with
        them are governed by and construed in accordance with the laws of the
        State of New York, United States, without regard to its conflict-of-law
        principles. You agree to submit to the exclusive jurisdiction of the
        state and federal courts located in New York County, New York.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: (
      <p>
        We may revise and update these Terms from time to time in our sole
        discretion. All changes are effective immediately when posted and apply
        to all access to and use of the Site thereafter. Your continued use of
        the Site following the posting of revised Terms means you accept and
        agree to the changes.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        Questions or comments about the Site or these Terms may be directed to{" "}
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

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The terms that govern your access to and use of this website."
      updated={UPDATED}
      sections={sections}
    />
  );
}
