/* ============================================================
   Investor-audience content for the five client-type pages.
   These describe the investor TYPES Alrion Pillar Capital is
   built to serve, tied to the four independent Delaware LP
   strategies, the real fund terms, governance standards and
   alignment. No AUM, track record, scale or global claims:
   Alrion is a platform operating from a single New York
   office. Only verifiable facts appear here.
   ============================================================ */

export type NeedSolution = { need: string; solution: string };

/* — Institutional Investors ————————————————————————————————— */
export const INSTITUTIONAL_NEEDS: NeedSolution[] = [
  {
    need: "A single relationship spanning liquid and private markets, without a single point of failure.",
    solution:
      "Four autonomous strategies under one rigorous framework: Hedge Fund LP, Private Equity LP, Venture Capital LP and Community Equity Fund LP. Each is a separate Delaware Limited Partnership with its own investment committee.",
  },
  {
    need: "Institutional-grade reporting that satisfies trustees, consultants and internal investment committees.",
    solution:
      "Monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets, and comprehensive third-party administration, delivered through a secure investor portal.",
  },
  {
    need: "Independent governance and risk oversight that operates separately from the people deploying capital.",
    solution:
      "Each strategy carries its own risk framework. The Hedge Fund LP runs to a daily 95% Value-at-Risk and a maximum 300% gross exposure, with independent valuation committees on illiquid positions.",
  },
  {
    need: "Genuine alignment, not a manager paid to gather assets.",
    solution:
      "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
  },
];

/* — Pension Funds —————————————————————————————————————————— */
export const LIABILITY_FRAMEWORK = [
  {
    no: "01",
    title: "Liability-aware construction",
    body: "Portfolios are framed against the shape of your liabilities, duration, indexation and pacing, rather than a generic benchmark. Allocation begins with the obligations you must fund.",
  },
  {
    no: "02",
    title: "Capital preservation first",
    body: "The Hedge Fund LP runs to a daily 95% Value-at-Risk and a maximum 300% gross exposure, a disciplined risk envelope oriented to protecting funded status through the cycle.",
  },
  {
    no: "03",
    title: "Inflation-aware real assets",
    body: "The Private Equity LP deploys growth capital into mission-critical infrastructure, energy, grid and operational resilience, targeting investment-grade counterparties and contractual cash flows.",
  },
  {
    no: "04",
    title: "Steady compounding",
    body: "Private-market holds are structured on an 8% preferred return with 20% carried interest, compounding value deliberately rather than chasing episodic, timing-dependent returns.",
  },
];

export const PENSION_POSITIONING = [
  {
    band: "Liquid · capital-preservation core",
    platform: "Hedge Fund LP",
    risk: "Risk-controlled",
    role: "Global Macro Excellence, run to a daily 95% VaR and a 300% gross exposure cap.",
  },
  {
    band: "Real assets · inflation defense",
    platform: "Private Equity LP",
    risk: "Moderate",
    role: "Infrastructure Growth into energy, grid and operational resilience with investment-grade counterparties.",
  },
  {
    band: "Growth · measured frontier sleeve",
    platform: "Venture Capital LP",
    risk: "Higher, sized small",
    role: "Frontier Technology at Seed to Series A, a right-sized allocation for long-horizon real return.",
  },
];

/* — Sovereign Wealth Funds —————————————————————————————————— */
export const COINVEST_MODEL = [
  {
    no: "01",
    title: "Anchor commitment",
    body: "A cornerstone allocation across one or more of the four Delaware LP strategies establishes the partnership and aligns long-term incentives at fund level.",
  },
  {
    no: "02",
    title: "Alignment at the same terms",
    body: "We commit significant GP capital across every fund and invest where we ask our partners to invest, at the same terms, so conviction is shared rather than sold.",
  },
  {
    no: "03",
    title: "Strategic theme mandates",
    body: "The strategies map to durable national priorities: energy and grid modernization in Infrastructure Growth, and AI, biotech, defense and space in Frontier Technology.",
  },
  {
    no: "04",
    title: "Independent governance",
    body: "Each strategy is a separate Delaware Limited Partnership with its own investment committee, risk framework and independent valuation committees on illiquid positions.",
  },
];

/* — Family Offices ——————————————————————————————————————————— */
export const TAILORED_ACCESS = [
  {
    title: "Four strategies, one framework",
    body: "Access Global Macro Excellence, Infrastructure Growth, Frontier Technology and Impact Through Investment, each an independent Delaware LP under a single rigorous standard.",
  },
  {
    title: "Frontier Technology exposure",
    body: "The Venture Capital LP partners with founders at the inflection between scientific validation and market deployment, at Seed to Series A, primarily across the Northeast Corridor.",
  },
  {
    title: "Multi-generational horizon",
    body: "Private-market strategies are built for patient capital, structured on an 8% preferred return with 20% carried interest, matched to horizons measured in generations.",
  },
  {
    title: "Aligned interests",
    body: "Significant GP commitments across every fund mean we invest where we ask you to invest, and at the same terms. Alignment is designed in, not asserted.",
  },
];

/* — Foundations & Endowments ——————————————————————————————— */
export const IMPACT_RETURNS = [
  {
    title: "Impact through investment",
    body: "The Community Equity Fund LP is a model proving that underserved markets represent some of the most compelling risk-adjusted opportunities in New York.",
  },
  {
    title: "Measured, not asserted",
    body: "Impact is framed around three indicators, Wealth Equity, Employment Quality and the Capital Multiplier, so outcomes are measured qualitatively rather than reduced to headline figures.",
  },
  {
    title: "Seeded by alignment",
    body: "The fund is seeded by carried interest from the institutional strategies, funding impact from the platform's own economics rather than from a separate marketing budget.",
  },
  {
    title: "Independent governance",
    body: "Like every strategy, it is a separate Delaware Limited Partnership with its own investment committee and risk framework, audited annually by an independent auditor.",
  },
];

export const ENDOWMENT_MODEL = [
  {
    no: "01",
    title: "A platform, not a product",
    body: "Four autonomous strategies span liquid macro, private infrastructure, frontier venture and community impact, diversifying the engines of return under one framework.",
  },
  {
    no: "02",
    title: "Aligned interests",
    body: "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms, aligning the platform with the institutions it serves.",
  },
  {
    no: "03",
    title: "Absolute transparency",
    body: "Monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets, and real-time access for institutional partners.",
  },
  {
    no: "04",
    title: "Rigorous oversight",
    body: "Annual independent audits, comprehensive third-party administration and independent valuation committees on illiquid positions give boards the assurance their fiduciary duty demands.",
  },
];
