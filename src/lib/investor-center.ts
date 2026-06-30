/* ============================================================
   Investor-center content for the functional investor tools:
   portal, subscription, document center, capital requests and
   FAQs. Original, institutionally-faithful copy. Any figures
   are marked "Illustrative".
   ============================================================ */

/* — Portal — assurance + what's inside ————————————————————— */
export const PORTAL_ASSURANCES = [
  {
    title: "Bank-grade encryption",
    body: "Every session is protected with TLS 1.3 in transit and AES-256 encryption at rest, with multi-factor authentication on every account.",
  },
  {
    title: "Secure 24/7 access",
    body: "Your capital accounts, statements and documents are available on demand, from any device, wherever your mandate takes you.",
  },
  {
    title: "Controlled document vault",
    body: "Subscription agreements, audited reports and tax records are versioned, time-stamped and permissioned to your entity alone.",
  },
];

export const PORTAL_FEATURES = [
  {
    title: "Capital accounts",
    body: "Live capital-account balances, commitments, called and uncalled capital, and distribution history at a glance.",
  },
  {
    title: "Performance & exposure",
    body: "Attribution, exposure and risk reporting across each platform, refreshed to the cadence your mandate requires.",
  },
  {
    title: "Document vault",
    body: "A controlled repository of statements, K-1s, audited reports and governance policies, downloadable on demand.",
  },
  {
    title: "Notices & alerts",
    body: "Capital-call and distribution notices delivered ahead of every funding event, with full settlement detail.",
  },
];

/* — Subscription — vertical stepper ————————————————————————— */
export type SubStep = {
  no: string;
  title: string;
  duration: string;
  body: string;
  detail: string[];
};

export const SUBSCRIPTION_STEPS: SubStep[] = [
  {
    no: "01",
    title: "Eligibility & alignment",
    duration: "Week 1",
    body: "We confirm that our platforms align with your mandate and that you qualify as an eligible institutional or professional investor.",
    detail: [
      "Confidential introductory conversation on horizon and objectives",
      "Investor classification under applicable jurisdiction",
      "Mutual fit assessment against strategy and risk appetite",
    ],
  },
  {
    no: "02",
    title: "Onboarding & KYC",
    duration: "Weeks 1–2",
    body: "Identity, source-of-funds and anti-money-laundering verification are completed through our secure onboarding workflow.",
    detail: [
      "Entity and beneficial-ownership verification",
      "KYC / AML and sanctions screening",
      "Tax documentation (W-8 / W-9 / CRS) collection",
    ],
  },
  {
    no: "03",
    title: "Subscription documents",
    duration: "Weeks 2–3",
    body: "Subscription agreements, side letters where applicable and fund terms are reviewed, negotiated and executed digitally.",
    detail: [
      "Review of the private placement memorandum and LPA",
      "Completion of the subscription booklet",
      "Digital execution with white-glove legal support",
    ],
  },
  {
    no: "04",
    title: "Capital commitment",
    duration: "Weeks 3–4",
    body: "Your commitment is confirmed against agreed terms, with capital-call and settlement instructions delivered through the portal.",
    detail: [
      "Commitment confirmation and counter-signature",
      "Initial capital call and wire instructions",
      "Settlement reconciliation and confirmation",
    ],
  },
  {
    no: "05",
    title: "Confirmation",
    duration: "Week 4",
    body: "Once funded, you receive a welcome pack, portal credentials and an opening capital-account statement.",
    detail: [
      "Secure portal provisioning and single sign-on",
      "Opening capital-account statement issued",
      "Named relationship manager introduced",
    ],
  },
  {
    no: "06",
    title: "Ongoing reporting",
    duration: "Continuous",
    body: "As a partner you receive continuous, institutional-grade reporting and direct access to our investment and risk teams.",
    detail: [
      "Quarterly capital-account and performance statements",
      "Exposure, attribution and risk reporting",
      "Audited annual reports and impact metrics",
    ],
  },
];

export const ELIGIBILITY = [
  "Qualified institutional or professional investor status under applicable regulation",
  "Completed entity formation with verifiable beneficial ownership",
  "Capacity to meet the minimum commitment for the relevant platform",
  "Acceptance of the fund's lock-up, liquidity and reporting terms",
  "Satisfactory KYC, AML and sanctions screening",
];

/* — Document Center — library ——————————————————————————————— */
export type DocCategory = "Fund reports" | "Legal" | "Tax" | "Presentations";

export type DocItem = {
  title: string;
  category: DocCategory;
  type: string;
  date: string;
  size: string;
};

export const DOC_CATEGORIES: DocCategory[] = [
  "Fund reports",
  "Legal",
  "Tax",
  "Presentations",
];

export const DOCUMENTS: DocItem[] = [
  { title: "Q1 2026 Capital-Account Statement", category: "Fund reports", type: "PDF", date: "2026-04-15", size: "1.2 MB" },
  { title: "Annual Report & Audited Financials 2025", category: "Fund reports", type: "PDF", date: "2026-03-28", size: "4.8 MB" },
  { title: "Q4 2025 Performance & Attribution Review", category: "Fund reports", type: "PDF", date: "2026-01-22", size: "2.1 MB" },
  { title: "2025 Impact & ESG Report", category: "Fund reports", type: "PDF", date: "2026-02-10", size: "3.4 MB" },
  { title: "Limited Partnership Agreement", category: "Legal", type: "PDF", date: "2025-11-04", size: "2.9 MB" },
  { title: "Private Placement Memorandum", category: "Legal", type: "PDF", date: "2025-11-04", size: "3.7 MB" },
  { title: "Subscription Agreement Template", category: "Legal", type: "DOCX", date: "2025-11-04", size: "640 KB" },
  { title: "Governance & Compliance Policy", category: "Legal", type: "PDF", date: "2025-09-18", size: "1.1 MB" },
  { title: "Form K-1 (2025 Tax Year)", category: "Tax", type: "PDF", date: "2026-03-15", size: "480 KB" },
  { title: "CRS / FATCA Self-Certification", category: "Tax", type: "PDF", date: "2025-12-01", size: "320 KB" },
  { title: "Withholding Tax Statement 2025", category: "Tax", type: "PDF", date: "2026-02-28", size: "520 KB" },
  { title: "Q1 2026 Investor Update Deck", category: "Presentations", type: "PDF", date: "2026-04-18", size: "5.6 MB" },
  { title: "Annual Investor Meeting Presentation", category: "Presentations", type: "PDF", date: "2026-05-12", size: "8.2 MB" },
  { title: "Strategy Overview — Frontier Platforms", category: "Presentations", type: "PDF", date: "2026-01-30", size: "4.0 MB" },
];

/* — Capital Requests — form options ————————————————————————— */
export const INVESTOR_TYPES = [
  "Institutional investor",
  "Pension fund",
  "Sovereign wealth fund",
  "Family office",
  "Foundation or endowment",
  "Insurance company",
  "Other professional investor",
];

export const STRATEGY_OPTIONS = [
  "Hedge Fund — Liquid alpha",
  "Private Equity — Real assets",
  "Venture Capital — Frontier innovation",
  "Community Equity Fund — Impact",
  "Multi-platform allocation",
];

export const TICKET_RANGES = [
  "$1M – $5M",
  "$5M – $25M",
  "$25M – $100M",
  "$100M – $250M",
  "$250M+",
];

export const TIMEFRAMES = [
  "Immediate (0–3 months)",
  "Near term (3–6 months)",
  "This year (6–12 months)",
  "Exploratory (12 months+)",
];

export const REQUEST_PROCESS = [
  {
    title: "Submission",
    body: "Your interest is logged confidentially and routed to the investor relations desk for the relevant platform.",
  },
  {
    title: "Review",
    body: "We assess fit against mandate, capacity and eligibility, typically responding within two business days.",
  },
  {
    title: "Introduction",
    body: "Qualified requests progress to a confidential conversation and secure data-room access for diligence.",
  },
];

/* — FAQs — categorized ——————————————————————————————————————— */
export type FaqCategory = {
  category: string;
  items: { q: string; a: string }[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Who is eligible to invest with ALRION Pillar Capital?",
        a: "Our funds are available exclusively to qualified institutional and professional investors as defined by applicable regulation in their jurisdiction. Eligibility is confirmed during onboarding through investor classification and verification.",
      },
      {
        q: "How do I begin the subscription process?",
        a: "Submit a capital request or contact our investor relations desk to arrange an introductory conversation. Qualified investors are then granted secure data-room access and guided through documentation, verification and commitment with dedicated support at each step.",
      },
    ],
  },
  {
    category: "Strategies & Risk",
    items: [
      {
        q: "What strategies can I allocate to?",
        a: "We operate four platforms — a multi-strategy hedge fund, private equity in real assets, frontier venture capital and an impact-led Community Equity Fund. Allocations can be made to a single platform or blended across several to match your mandate.",
      },
      {
        q: "How is risk managed across the platforms?",
        a: "Each platform carries daily or periodic risk attribution, position limits and systematic hedging where appropriate. An independent oversight function, separate from the investing teams, validates models and enforces limits before capital is committed.",
      },
    ],
  },
  {
    category: "Reporting & Transparency",
    items: [
      {
        q: "How often will I receive reporting?",
        a: "Partners receive quarterly capital-account and performance statements alongside detailed exposure, attribution and risk reporting through the secure portal. Audited annual reports and impact metrics are published each year.",
      },
      {
        q: "Can I access my documents at any time?",
        a: "Yes. The Investor Portal provides 24/7 access to a controlled document vault containing your statements, audited reports, tax records and governance policies — versioned and permissioned to your entity alone.",
      },
    ],
  },
  {
    category: "Fees & Liquidity",
    items: [
      {
        q: "What are the fee arrangements?",
        a: "Fee structures vary by platform and vehicle and are set out in full within the private placement memorandum and limited partnership agreement. Our investor relations team will review the applicable terms with you in the context of your commitment.",
      },
      {
        q: "What liquidity should I expect?",
        a: "Liquidity differs by platform — our hedge fund offers periodic liquidity, while private equity, venture and community equity vehicles carry multi-year lock-ups consistent with their underlying assets. Terms are disclosed before any commitment.",
      },
    ],
  },
  {
    category: "Compliance",
    items: [
      {
        q: "How is my capital governed and protected?",
        a: "Robust compliance, third-party fund administration and audited reporting underpin every figure we share. An independent oversight function reports directly to governance, separate from the teams that invest your capital.",
      },
      {
        q: "How is my data kept secure?",
        a: "All portal access is protected with multi-factor authentication, TLS 1.3 in transit and AES-256 encryption at rest. Documents are permissioned to your entity, and access is logged and auditable end to end.",
      },
    ],
  },
];
