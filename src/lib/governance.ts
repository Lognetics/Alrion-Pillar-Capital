/* ============================================================
   Governance sub-page content. Copy is original and faithful
   to ALRION Pillar Capital's positioning: a 2024 New York
   platform of four independent Delaware Limited Partnerships,
   with institutional governance, transparency and independent
   oversight. Figures are limited to the firm's verifiable facts.
   ============================================================ */

/* Risk Management */

export type RiskType = {
  name: string;
  scope: string;
  body: string;
  controls: string[];
};

export const RISK_TYPES: RiskType[] = [
  {
    name: "Market Risk",
    scope: "Public Markets · Liquid Alpha",
    body: "Exposure to moves in prices, rates, spreads and volatility across the liquid strategy's cross-asset relative-value book.",
    controls: [
      "Daily 95% Value-at-Risk monitoring",
      "Maximum 300% gross exposure limit",
      "Factor and beta decomposition",
    ],
  },
  {
    name: "Credit Risk",
    scope: "Counterparty & Issuer",
    body: "The risk that a borrower, issuer or trading counterparty fails to meet its obligations across our financing relationships.",
    controls: [
      "Internal credit assessment",
      "Concentration and tenor limits",
      "Collateral and margin governance",
    ],
  },
  {
    name: "Liquidity Risk",
    scope: "Funding & Redemption",
    body: "The risk of being unable to meet obligations or unwind positions without material cost during stressed conditions.",
    controls: [
      "Liquidity coverage modelling",
      "Redemption and gating frameworks",
      "Cash and collateral laddering",
    ],
  },
  {
    name: "Operational Risk",
    scope: "Process · People · Systems",
    body: "Loss arising from failed internal processes, human error, system outages or external events across the platform.",
    controls: [
      "Segregation of duties",
      "Business continuity and recovery testing",
      "Vendor and cyber resilience review",
    ],
  },
  {
    name: "Model Risk",
    scope: "Quantitative Models",
    body: "The risk that our quantitative models are mis-specified, mis-used or degrade as market regimes shift.",
    controls: [
      "Independent model validation",
      "Out-of-sample and drift monitoring",
      "Human-in-the-loop override authority",
    ],
  },
  {
    name: "Valuation Risk",
    scope: "Private & Illiquid Positions",
    body: "The risk that illiquid holdings are mis-valued in the absence of observable market prices.",
    controls: [
      "Independent valuation committees",
      "Documented valuation methodology",
      "Third-party administration",
    ],
  },
];

export type DefenseLine = {
  no: string;
  line: string;
  owner: string;
  body: string;
};

export const DEFENSE_LINES: DefenseLine[] = [
  {
    no: "01",
    line: "First Line",
    owner: "Investment Teams",
    body: "Portfolio managers own the risks they originate. They operate within pre-committed mandates, position limits and drawdown thresholds, and are accountable for the day-to-day management of exposure.",
  },
  {
    no: "02",
    line: "Second Line",
    owner: "Independent Risk & Compliance",
    body: "A risk function structurally separate from the investment teams sets the framework, validates models, monitors limits and reports directly to governance, never to the teams it oversees.",
  },
  {
    no: "03",
    line: "Third Line",
    owner: "Independent Audit",
    body: "Independent audit provides objective assurance over the design and effectiveness of controls, escalating findings to the relevant governance committee.",
  },
];

/* Compliance & Ethics */

export type Policy = {
  code: string;
  title: string;
  body: string;
  cadence: string;
};

export const POLICIES: Policy[] = [
  {
    code: "C-01",
    title: "Code of Conduct",
    body: "The ethical foundation for every employee, partner and counterparty relationship, defining the standard of integrity we hold ourselves to without exception.",
    cadence: "Annual attestation",
  },
  {
    code: "C-02",
    title: "Regulatory Adherence",
    body: "An active program maintained against evolving rules across securities regulation, fund-marketing and reporting obligations.",
    cadence: "Continuous",
  },
  {
    code: "C-03",
    title: "Anti-Money-Laundering (AML)",
    body: "Risk-based controls to detect and prevent money laundering and terrorist financing, including transaction monitoring and sanctions screening.",
    cadence: "Ongoing surveillance",
  },
  {
    code: "C-04",
    title: "Know-Your-Customer (KYC)",
    body: "Rigorous onboarding diligence and beneficial-ownership verification for every investor, refreshed on a risk-weighted schedule.",
    cadence: "Onboarding & periodic refresh",
  },
  {
    code: "C-05",
    title: "Conflicts of Interest",
    body: "Identification, disclosure and independent resolution of actual and potential conflicts, supported by a personal-trading and gifts framework.",
    cadence: "Disclosure on arising",
  },
  {
    code: "C-06",
    title: "Whistleblower Protection",
    body: "Confidential, retaliation-free channels that empower our people and partners to raise concerns directly to the Compliance Committee.",
    cadence: "Always open",
  },
  {
    code: "C-07",
    title: "Personal Account Dealing",
    body: "Pre-clearance, restricted lists and holding periods govern employee investing to ensure firm and partner interests always come first.",
    cadence: "Pre-trade clearance",
  },
  {
    code: "C-08",
    title: "Training & Certification",
    body: "Mandatory compliance, ethics and conduct training, with role-specific certification tracked and renewed across the firm.",
    cadence: "Annual & on-hire",
  },
];

/* Transparency */

export type Disclosure = {
  title: string;
  body: string;
};

export const DISCLOSURES: Disclosure[] = [
  { title: "Exposure & Positioning", body: "Breakdowns of net and gross exposure by strategy, geography, sector and factor." },
  { title: "Performance & Attribution", body: "Returns decomposed by source, with clear separation of alpha, beta and fee impact." },
  { title: "Risk Metrics", body: "Value-at-Risk, liquidity coverage and concentration measured against pre-set limits." },
  { title: "Fees & Expenses", body: "Full, plain-language disclosure of management fees, performance fees and fund-level expenses." },
  { title: "ESG & Governance", body: "How governance and impact considerations are integrated across each strategy." },
  { title: "Valuations", body: "Independent valuation methodology and governance for private and illiquid positions." },
];

export type CadenceItem = {
  cadence: string;
  audience: string;
  reports: string[];
};

export const REPORTING_CADENCE: CadenceItem[] = [
  {
    cadence: "Monthly",
    audience: "Liquid strategies",
    reports: ["Estimated performance", "Exposure snapshot", "Liquidity summary"],
  },
  {
    cadence: "Quarterly",
    audience: "Private markets",
    reports: ["Deep-dive review", "Portfolio commentary", "Capital activity statement"],
  },
  {
    cadence: "Annual",
    audience: "All strategies",
    reports: ["Audited financial statements", "Annual report", "ESG report"],
  },
  {
    cadence: "Real-time",
    audience: "Institutional partners",
    reports: ["Portal access", "Named IR contact", "Material-event disclosure"],
  },
];

/* Report library. Report types only, no invented figures. Each
   strategy is an independent Delaware LP audited by an independent auditor
   with comprehensive third-party administration. */

export type ReportDoc = {
  label: string;
  type: string;
  description: string;
};

export const REPORT_LIBRARY: ReportDoc[] = [
  {
    label: "Annual Report",
    type: "PDF",
    description: "The firm's yearly account of governance, activity and stewardship across the four strategies.",
  },
  {
    label: "Audited Financial Statements",
    type: "PDF",
    description: "Financial statements for each Limited Partnership, audited annually by an independent auditor.",
  },
  {
    label: "ESG Report",
    type: "PDF",
    description: "How governance and impact considerations are integrated across the platform, including the Community Equity Fund.",
  },
];
