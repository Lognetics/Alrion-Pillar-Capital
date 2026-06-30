import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Preferences",
  description:
    "Learn about the cookies ALRION Pillar Capital uses, why we use them, and how to manage your preferences. Illustrative website copy — not legal advice.",
};

const UPDATED = "1 January 2026";

const COOKIE_TYPES: {
  name: string;
  purpose: string;
  example: string;
  required: boolean;
}[] = [
  {
    name: "Essential",
    purpose:
      "Enable core functionality such as security, network management and accessibility. The site cannot function properly without them.",
    example: "Session, load-balancing, consent state",
    required: true,
  },
  {
    name: "Performance",
    purpose:
      "Collect anonymized, aggregated information about how visitors use the site so we can measure and improve performance.",
    example: "Page-view analytics, error reporting",
    required: false,
  },
  {
    name: "Functional",
    purpose:
      "Remember choices you make — such as language or region — to provide a more personalized experience.",
    example: "Language preference, saved settings",
    required: false,
  },
  {
    name: "Targeting",
    purpose:
      "Used to build a profile of your interests and show relevant content. We use these sparingly and only with consent.",
    example: "Campaign attribution, content relevance",
    required: false,
  },
];

const sections: LegalSection[] = [
  {
    id: "what-cookies-are",
    heading: "What Cookies Are",
    body: (
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They are widely used to make websites work, or work more
        efficiently, and to provide information to the site&rsquo;s owners.
        Similar technologies — such as web beacons, pixels and local storage —
        perform comparable functions and are covered by this policy. {FIRM.name}{" "}
        uses these technologies for the purposes described below.
      </p>
    ),
  },
  {
    id: "types-we-use",
    heading: "Types of Cookies We Use",
    body: (
      <div className="not-prose space-y-6">
        <p>
          We group the cookies we use into four categories. Essential cookies are
          always active; the remaining categories operate only where you have
          given consent.
        </p>
        <div className="overflow-hidden rounded-sm border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-cloud">
              <tr className="text-navy-950">
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COOKIE_TYPES.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="px-4 py-4 font-medium text-navy-950">
                    {c.name}
                  </td>
                  <td className="px-4 py-4 text-slate-strong/80">{c.purpose}</td>
                  <td className="px-4 py-4 text-slate-strong/70">{c.example}</td>
                  <td className="px-4 py-4">
                    <span
                      className={
                        c.required
                          ? "inline-flex rounded-full bg-navy-950 px-2.5 py-0.5 text-xs font-medium text-paper"
                          : "inline-flex rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-slate-strong/70"
                      }
                    >
                      {c.required ? "Always on" : "Optional"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "manage-preferences",
    heading: "Manage Your Preferences",
    body: (
      <div className="not-prose space-y-4">
        <p className="text-pretty leading-relaxed text-slate-strong/85">
          You can review and adjust your consent for each optional category below.
          This panel is illustrative and does not currently store any preference.
        </p>
        <div className="divide-y divide-line rounded-sm border border-line">
          {COOKIE_TYPES.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between gap-6 px-5 py-4"
            >
              <div className="min-w-0">
                <p className="font-medium text-navy-950">{c.name}</p>
                <p className="mt-1 text-sm text-slate-strong/70">
                  {c.required
                    ? "Required for the site to function."
                    : "Off by default until you opt in."}
                </p>
              </div>
              <span
                aria-hidden
                className={
                  c.required
                    ? "relative h-6 w-11 shrink-0 rounded-full bg-gold-500"
                    : "relative h-6 w-11 shrink-0 rounded-full bg-line"
                }
              >
                <span
                  className={
                    c.required
                      ? "absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-paper shadow-sm"
                      : "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-paper shadow-sm"
                  }
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "managing-cookies",
    heading: "Managing Cookies in Your Browser",
    body: (
      <p>
        In addition to the controls above, most browsers allow you to refuse or
        delete cookies through their settings. Each browser is different, so
        consult its help menu to learn how to modify your cookie preferences.
        Please note that if you disable or delete certain cookies, some parts of
        the site may not function as intended and your saved preferences may be
        lost.
      </p>
    ),
  },
  {
    id: "third-party-cookies",
    heading: "Third-Party Cookies",
    body: (
      <p>
        Some cookies on this site are set by third parties that provide services
        to us, such as analytics and content-delivery providers. These parties may
        process your data in accordance with their own privacy and cookie
        policies, over which we have limited control. We encourage you to review
        the policies of any third-party services you encounter.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Cookie Preferences page from time to time to reflect
        changes in the technologies we use or for other operational, legal or
        regulatory reasons. We will revise the &ldquo;Last updated&rdquo; date
        above whenever we make material changes.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        If you have questions about our use of cookies, contact {FIRM.name} at{" "}
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

export default function CookiePreferencesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Preferences"
      intro="Learn about the cookies we use and manage your preferences."
      updated={UPDATED}
      sections={sections}
    />
  );
}
