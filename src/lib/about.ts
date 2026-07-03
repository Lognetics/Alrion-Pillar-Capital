/* ============================================================
   About-section content: founding timeline, leadership team,
   investment committee, advisory board and recognition & standards.
   All copy is faithful to ALRION Pillar Capital's stated positioning:
   a platform, not a product, established 2024 in New York as four
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

/* The platform was conceived and launched in 2024. We do not portray
   a multi-year history before that founding. */
export const MILESTONES: Milestone[] = [
  {
    year: "2024",
    title: "A platform, not a product",
    tag: "Founding",
    body: "ALRION Pillar Capital is conceived in New York around a single conviction: Independence by Design, Conviction by Discipline. The platform is designed as four autonomous strategies bound by one rigorous framework of fiduciary care.",
  },
  {
    year: "2024",
    title: "Four independent Delaware LPs",
    tag: "Structure",
    body: "The four strategies are established as separate Delaware Limited Partnerships, each with its own investment committee and risk framework: a Hedge Fund LP, a Private Equity LP, a Venture Capital LP and a Community Equity Fund LP.",
  },
  {
    year: "2024",
    title: "One standard of governance",
    tag: "Governance",
    body: "From the outset, the platform adopts institutional governance: annual Big Four audits, comprehensive third-party administration, independent valuation committees on illiquid positions and significant GP commitments across every fund.",
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
    body: "Annual Big Four audits, comprehensive third-party administration and independent valuation committees on illiquid positions hold every strategy to an institutional standard of governance.",
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
    body: "We report what we do. Monthly and quarterly reporting, annual Big Four audits and real-time access for institutional partners are foundations, not features.",
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

/* Representative leadership team, illustrative pending final disclosure. */
export const LEADERSHIP: Person[] = [
  {
    name: "Adrian Voss",
    title: "Founder & Chief Executive Officer",
    focus: "Platform strategy",
    initials: "AV",
    bio: "Founded the platform in 2024 around a single conviction: Independence by Design, Conviction by Discipline. Sets the standard of fiduciary care that unifies the four autonomous strategies.",
  },
  {
    name: "Lena Maris",
    title: "President & Chief Investment Officer",
    focus: "Cross-strategy framework",
    initials: "LM",
    bio: "Oversees the single rigorous framework that governs all four strategies, ensuring consistent research, risk and oversight discipline across very different mandates.",
  },
  {
    name: "Marcus Thorne",
    title: "Managing Partner, Hedge Fund LP",
    focus: "Global macro",
    initials: "MT",
    bio: "Leads the Global Macro Excellence strategy, pursuing alpha across macroeconomic dislocations with multi-timeframe, cross-asset relative value and daily risk monitoring.",
  },
  {
    name: "Priya Anand",
    title: "Managing Partner, Private Equity LP",
    focus: "Infrastructure growth",
    initials: "PA",
    bio: "Directs the Infrastructure Growth strategy, deploying growth capital into nuclear lifecycle, grid modernization and operational-technology cybersecurity.",
  },
  {
    name: "Sofia Reyes",
    title: "Managing Partner, Venture Capital LP",
    focus: "Frontier technology",
    initials: "SR",
    bio: "Backs founders at the inflection point between scientific validation and market deployment across artificial intelligence, biotechnology, and defense and space.",
  },
  {
    name: "Daniela Okafor",
    title: "Head, Community Equity Fund LP",
    focus: "Impact through investment",
    initials: "DO",
    bio: "Leads the strategy proving that underserved markets represent some of the most compelling risk-adjusted opportunities in New York, under a 51%+ MWBE mandate.",
  },
  {
    name: "Idris Calloway",
    title: "Chief Risk Officer",
    focus: "Risk framework",
    initials: "IC",
    bio: "Maintains the risk framework across all four Limited Partnerships, including daily Value-at-Risk on liquid strategies and independent valuation on illiquid positions.",
  },
  {
    name: "Jonathan Pierce",
    title: "Chief Compliance Officer",
    focus: "Governance & oversight",
    initials: "JP",
    bio: "Oversees Big Four audits, third-party administration and the independent governance that gives the platform's partners institutional assurance.",
  },
];

/* Representative investment committee, illustrative pending final disclosure. */
export const COMMITTEE: Person[] = [
  {
    name: "Lena Maris",
    title: "Chair · Chief Investment Officer",
    focus: "Cross-strategy conviction",
    initials: "LM",
    bio: "Chairs the committee and applies the platform's one rigorous framework to conviction, structure and risk before any capital is committed.",
  },
  {
    name: "Marcus Thorne",
    title: "Managing Partner, Hedge Fund LP",
    focus: "Macro & liquid risk",
    initials: "MT",
    bio: "Brings quantitative and fundamental evidence, sizing and daily Value-at-Risk discipline to the committee's deliberations on liquid strategies.",
  },
  {
    name: "Priya Anand",
    title: "Managing Partner, Private Equity LP",
    focus: "Infrastructure structuring",
    initials: "PA",
    bio: "Evaluates growth-capital opportunities in mission-critical infrastructure through an operational value-creation and governance lens.",
  },
  {
    name: "Sofia Reyes",
    title: "Managing Partner, Venture Capital LP",
    focus: "Frontier conviction",
    initials: "SR",
    bio: "Champions founders at the inflection point between scientific validation and market deployment while holding venture theses to the platform's standard of evidence.",
  },
  {
    name: "Idris Calloway",
    title: "Chief Risk Officer",
    focus: "Independent risk",
    initials: "IC",
    bio: "Holds an independent voice on risk across every strategy, with authority to challenge any commitment on risk, valuation or exposure grounds.",
  },
  {
    name: "Jonathan Pierce",
    title: "Chief Compliance Officer",
    focus: "Governance & oversight",
    initials: "JP",
    bio: "Provides an independent view on compliance and governance, safeguarding the integrity of every decision the committee reaches.",
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

/* Representative advisory board, illustrative pending final disclosure. */
export const ADVISORS: Person[] = [
  {
    name: "Helena Brandt",
    title: "Artificial Intelligence Advisor",
    focus: "Artificial intelligence",
    initials: "HB",
    bio: "Advises the Venture Capital LP on the trajectory of foundation models and applied AI, grounding the platform's intelligence theses in frontier science.",
  },
  {
    name: "Naledi Khoza",
    title: "Biotechnology Advisor",
    focus: "Biotechnology",
    initials: "NK",
    bio: "Brings scientific rigor to the platform's biotechnology theses, from diagnostics to therapeutic platforms, at the point of scientific validation.",
  },
  {
    name: "Victor Lindqvist",
    title: "Infrastructure & Energy Advisor",
    focus: "Infrastructure growth",
    initials: "VL",
    bio: "Counsels the Private Equity LP on nuclear lifecycle, grid modernization and the operational resilience underpinning the modern economy.",
  },
  {
    name: "Stefan Albright",
    title: "Markets & Risk Advisor",
    focus: "Macro & risk",
    initials: "SA",
    bio: "Advises on liquidity, market structure and the systematic risk frameworks behind the Hedge Fund LP's global macro mandate.",
  },
  {
    name: "Imani Carter",
    title: "Community Impact Advisor",
    focus: "Community equity",
    initials: "IC",
    bio: "Advises the Community Equity Fund LP on inclusive enterprise, local development and credible measurement of wealth equity and capital multiplication.",
  },
];

/* Venture Capital LP Technical Advisory Board of former government and
   military leaders. Names are representative and illustrative pending
   final disclosure. */
export const TECHNICAL_ADVISORY_BOARD: Person[] = [
  {
    name: "Gen. (Ret.) Marcus Hale",
    title: "Former Senior Military Commander",
    focus: "Defense & space",
    initials: "MH",
    bio: "Advises the Venture Capital LP on dual-use frontier technology across defense and space, drawing on senior command experience.",
  },
  {
    name: "Dr. Evelyn Stark",
    title: "Former Senior Government Technologist",
    focus: "Government & policy",
    initials: "ES",
    bio: "Advises on the government and regulatory context for defense, space and critical-technology investment across the Northeast Corridor.",
  },
  {
    name: "Adm. (Ret.) Theodore Nash",
    title: "Former Senior Military Leader",
    focus: "National security",
    initials: "TN",
    bio: "Counsels on national-security applications of frontier technology and the diligence required for dual-use founders.",
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
    title: "Big Four annual audits",
    body: "Every strategy is audited annually by a Big Four firm, an independent external check on the platform's financial statements and controls.",
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
