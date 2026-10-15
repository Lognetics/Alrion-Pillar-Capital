/* ============================================================
   About-section content: founding timeline, leadership team,
   investment committee, advisory board and recognition & standards.
   All copy is faithful to ALRION Pillar Capital's stated positioning:
   a platform, not a product, headquartered in New York as four
   independent Delaware Limited Partnerships. Team members shown are
   representative and illustrative pending final disclosure. No AUM,
   track record, scale or global footprint is claimed.
   ============================================================ */

export type Milestone = {
  year: string;
  title: string;
  body: string;
  tag?: string;
};

/* The founding sequence of the platform. */
export const MILESTONES: Milestone[] = [
  {
    year: "01",
    title: "A platform, not a product",
    tag: "Founding",
    body: "ALRION Pillar Capital is conceived in New York around a single conviction: Independence by Design, Conviction by Discipline. The platform is designed as four autonomous strategies bound by one rigorous framework of fiduciary care.",
  },
  {
    year: "02",
    title: "Four independent Delaware LPs",
    tag: "Structure",
    body: "The four strategies are established as separate Delaware Limited Partnerships, each with its own investment committee and risk framework: a Hedge Fund LP, a Private Equity LP, a Venture Capital LP and a Community Equity Fund LP.",
  },
  {
    year: "03",
    title: "One standard of governance",
    tag: "Governance",
    body: "From the outset, the platform adopts institutional governance: annual independent audits, comprehensive third-party administration, independent valuation committees on illiquid positions and significant GP commitments across every fund.",
  },
];

export type Objective = {
  no: string;
  title: string;
  body: string;
};

export const OBJECTIVES: Objective[] = [
  {
    no: "01",
    title: "Preserve independence",
    body: "Operate each strategy as an autonomous Delaware Limited Partnership with its own investment committee and risk framework, so that conviction is never diluted by cross-strategy compromise.",
  },
  {
    no: "02",
    title: "Apply one framework",
    body: "Hold four autonomous strategies to a single rigorous standard of research, risk monitoring and independent oversight, ensuring consistency of discipline across very different mandates.",
  },
  {
    no: "03",
    title: "Align every interest",
    body: "Commit significant GP capital across every fund. We invest where we ask our partners to invest, and at the same terms, so that alignment is structural rather than stated.",
  },
  {
    no: "04",
    title: "Report without exception",
    body: "Sustain absolute transparency through monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets and real-time access for institutional partners.",
  },
];

export type Principle = {
  no: string;
  title: string;
  body: string;
};

export const PRINCIPLES: Principle[] = [
  {
    no: "01",
    title: "A platform, not a product",
    body: "We are a platform of four autonomous strategies, not a single product. Each is a separate Delaware Limited Partnership with its own investment committee and risk framework, so conviction is preserved strategy by strategy.",
  },
  {
    no: "02",
    title: "Independence by design",
    body: "Independence is engineered into the structure, not asserted in a memo. Our research, risk and governance functions operate with genuine autonomy so that no allocation rests on an unexamined assumption.",
  },
  {
    no: "03",
    title: "Conviction by discipline",
    body: "We size conviction to the strength of the evidence. Quantitative modelling is integrated with fundamental analysis, and every commitment is stress-tested before capital follows it.",
  },
  {
    no: "04",
    title: "Aligned interests",
    body: "We make significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms, so that our incentives and theirs point in the same direction.",
  },
  {
    no: "05",
    title: "Rigorous oversight",
    body: "Annual independent audits, comprehensive third-party administration and independent valuation committees on illiquid positions hold every strategy to an institutional standard of governance.",
  },
  {
    no: "06",
    title: "Absolute transparency",
    body: "We report without exception: monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets and real-time access for institutional partners.",
  },
];

export type Value = {
  glyph: string;
  title: string;
  body: string;
};

export const VALUES: Value[] = [
  {
    glyph: "I",
    title: "Independence",
    body: "Each strategy stands on its own, with its own committee and risk framework. Independence by design means conviction is never compromised to serve another mandate.",
  },
  {
    glyph: "D",
    title: "Discipline",
    body: "Conviction by discipline. We hold every idea to a standard of evidence, integrating quantitative modelling with fundamental analysis before a dollar follows.",
  },
  {
    glyph: "F",
    title: "Fiduciary care",
    body: "A singular standard of fiduciary care for the allocators who ask the harder questions. Their capital is a responsibility we treat as our own.",
  },
  {
    glyph: "A",
    title: "Alignment",
    body: "We make significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
  },
  {
    glyph: "T",
    title: "Transparency",
    body: "We report what we do. Monthly and quarterly reporting, annual independent audits and real-time access for institutional partners are foundations, not features.",
  },
  {
    glyph: "R",
    title: "Rigor",
    body: "One rigorous framework governs four autonomous strategies. Daily risk monitoring, independent valuation and adversarial review keep our convictions honest.",
  },
];

export type Person = {
  name: string;
  title: string;
  focus: string;
  bio: string;
  initials: string;
};

/* No individuals are named on the public site. Senior leadership is shown
   as role slots in an "Announcing" state until each seat is filled and the
   individual has consented in writing to public listing. Full team profiles
   and biographies are reserved for verified investors via the Investor Portal. */
export type LeadershipRole = {
  role: string;
  reporting: string;
  status?: "Announcing" | "Filled";
};

export const SENIOR_LEADERSHIP: LeadershipRole[] = [
  { role: "Chief Investment Officer, Private Equity", reporting: "Chairs the APEI Fund I Investment Committee" },
  { role: "Chief Investment Officer, Global Macro", reporting: "Chairs the Macro strategy Investment Committee" },
  { role: "Head of Venture Capital", reporting: "Chairs the VC strategy Investment Committee" },
  { role: "Head of the Community Equity Fund", reporting: "Community mandate stewardship" },
  { role: "Chief Operating Officer", reporting: "Operations, HR and vendor management" },
  { role: "Chief Compliance Officer", reporting: "Regulatory oversight, AML/KYC, compliance policies" },
  { role: "Chief Financial Officer / Controller", reporting: "Finance and audit liaison" },
  { role: "Head of Investor Relations", reporting: "LP communications, Juniper Square" },
];

/* Investment committees, one per strategy. Composition is described by
   principle, not by person. */
export type CommitteeRow = {
  strategy: string;
  committee: string;
  composition: string;
};

export const INVESTMENT_COMMITTEES: CommitteeRow[] = [
  {
    strategy: "APEI Fund I (Private Equity, Energy & Infrastructure)",
    committee: "Alrion Pillar PE Investment Committee",
    composition: "Managing Partner, plus two internal principals and one independent industry expert (nuclear supply-chain or OT cybersecurity).",
  },
  {
    strategy: "Global Macro LP",
    committee: "Macro Investment Committee",
    composition: "Managing Partner, plus the CIO, Global Macro and one independent quantitative risk expert. Daily Value-at-Risk oversight.",
  },
  {
    strategy: "Venture Capital LP",
    committee: "Frontier Technology Investment Committee",
    composition: "Managing Partner, plus the Head of Venture Capital and two independent sector operators (AI / deep-tech and defense-tech).",
  },
  {
    strategy: "Community Equity Fund LP",
    committee: "Community Investment Committee",
    composition: "Head of the Community Equity Fund, plus an independent community-development expert and an independent community-finance practitioner.",
  },
];

export type DecisionStep = {
  no: string;
  title: string;
  body: string;
};

export const DECISION_STEPS: DecisionStep[] = [
  {
    no: "01",
    title: "Thesis presentation",
    body: "The sponsoring strategy presents the opportunity, the evidence and the investment thesis, alongside the diligence conducted by specialists across disciplines.",
  },
  {
    no: "02",
    title: "Adversarial review",
    body: "An assigned challenger argues the bear case. The committee interrogates every assumption until the thesis either strengthens or fails.",
  },
  {
    no: "03",
    title: "Structure & risk",
    body: "The committee debates sizing, structure and downside protection, with the Chief Risk Officer holding an independent voice on every dimension.",
  },
  {
    no: "04",
    title: "Decision & mandate",
    body: "A documented decision records the conviction, conditions and monitoring plan. Only commitments that survive this scrutiny earn the strategy's capital.",
  },
];

/* The Advisory Board is described by focus and discipline, not by person.
   No placeholder names are published; role titles stand until each advisor
   has signed a formal advisory letter and consented in writing to listing.
   Advisory Board members do not vote on investments. */
export type AdvisoryFocus = {
  focus: string;
  discipline: string;
};

export const ADVISORY_BOARD: AdvisoryFocus[] = [
  {
    focus: "Nuclear Engineering & Regulatory Affairs",
    discipline: "Former NRC / DOE or ASME Section III certified engineer",
  },
  {
    focus: "OT Cybersecurity & NERC-CIP Compliance",
    discipline: "Former utility CISO or federal cyber leadership",
  },
  {
    focus: "Institutional Allocator Perspective",
    discipline: "Former CIO or head of alternatives at a public pension or endowment",
  },
  {
    focus: "ESG & Sustainable Finance",
    discipline: "Sustainability practitioner with a private-markets track record",
  },
  {
    focus: "Community Development Finance",
    discipline: "CDFI leader in the New York market",
  },
  {
    focus: "Legal & Regulatory Counsel",
    discipline: "Delaware LP and 1940-Act specialist (not fund counsel of record)",
  },
];

/* Retained for the (now unused) AwardsList component's type import.
   The platform makes no award claims; there is no awards data. */
export type Award = {
  year: string;
  title: string;
  body: string;
  category: string;
};

export type Standard = {
  title: string;
  body: string;
};

/* Recognition & Standards: qualitative. No awards, counts or bodies are
   invented. Emphasis on audits, administration and governance. */
export const RECOGNITION_STANDARDS: Standard[] = [
  {
    title: "Independent annual audits",
    body: "Every strategy is audited annually by an independent auditor, an independent external check on the platform's financial statements and controls.",
  },
  {
    title: "Independent administration",
    body: "Comprehensive third-party administration and independent valuation committees on illiquid positions keep valuation and record-keeping at arm's length.",
  },
  {
    title: "Independent governance",
    body: "Each strategy operates as a separate Delaware Limited Partnership with its own investment committee and risk framework.",
  },
  {
    title: "Aligned interests",
    body: "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
  },
];
