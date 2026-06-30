/* ============================================================
   Investor-audience content for the five client-type pages.
   Original copy faithful to ALRION Pillar Capital's positioning:
   impact-driven investing, AI-driven quantitative models, four
   divisions and a frontier-technology focus. Invented figures are
   marked "Illustrative" at the point of use.
   ============================================================ */

export type NeedSolution = { need: string; solution: string };

/* — Institutional Investors ————————————————————————————————— */
export const INSTITUTIONAL_NEEDS: NeedSolution[] = [
  {
    need: "A single research partner for differentiated, frontier-technology exposure across public and private markets.",
    solution:
      "One relationship spanning four investment platforms — hedge fund, private equity, venture and community equity — underwritten by a shared research desk and a unified investment committee.",
  },
  {
    need: "Institutional-grade reporting that satisfies trustees, consultants and internal investment committees.",
    solution:
      "Granular exposure, attribution and risk reporting on a fixed cadence, reconciled to a third-party administrator and delivered through a secure investor portal.",
  },
  {
    need: "Independent governance and risk oversight that operates separately from the people deploying capital.",
    solution:
      "A dedicated oversight function enforces position limits, validates quantitative models and reports directly to governance — never to the investing desks it monitors.",
  },
  {
    need: "Mandate flexibility — from commingled funds to segregated, custom-constrained accounts.",
    solution:
      "Segregated managed accounts with bespoke guidelines, exclusion lists and liquidity terms, alongside our flagship commingled vehicles.",
  },
];

export const ASSURANCE_STATS = [
  { value: "92%", label: "Institutional capital", sub: "Sourced from long-term partners" },
  { value: "Daily", label: "Risk attribution", sub: "Independent of the investing desks" },
  { value: "Third-party", label: "Fund administration", sub: "Reconciled, audited, independent" },
  { value: "22", label: "Countries of activity", sub: "An integrated global footprint" },
];

/* — Pension Funds —————————————————————————————————————————— */
export const LIABILITY_FRAMEWORK = [
  {
    no: "01",
    title: "Liability-aware construction",
    body: "Portfolios are designed against the shape of your liabilities — duration, indexation and pacing — not against a generic benchmark. Allocation begins with the obligations you must fund.",
  },
  {
    no: "02",
    title: "Capital preservation first",
    body: "Systematic hedging, volatility control and drawdown management in our hedge-fund platform are oriented to protect funded status through the cycle, not to chase peak returns.",
  },
  {
    no: "03",
    title: "Inflation-aware real assets",
    body: "Infrastructure, energy and utilities exposure in our private-equity platform provides contractual, often inflation-linked cash flows that help defend real liabilities over decades.",
  },
  {
    no: "04",
    title: "Steady compounding",
    body: "Patient capital and multi-year holds compound value deliberately, smoothing the contribution path and reducing reliance on episodic, timing-dependent returns.",
  },
];

export const PENSION_POSITIONING = [
  {
    band: "Liquid · capital-preservation core",
    platform: "Hedge Fund",
    risk: "Lower volatility",
    role: "Drawdown-managed liquid return with daily risk attribution to defend funded status.",
  },
  {
    band: "Real assets · inflation defense",
    platform: "Private Equity",
    risk: "Moderate",
    role: "Infrastructure and energy cash flows that track long-dated, inflation-sensitive liabilities.",
  },
  {
    band: "Growth · measured frontier sleeve",
    platform: "Venture Capital",
    risk: "Higher, sized small",
    role: "A right-sized allocation to frontier innovation for long-horizon real return.",
  },
];

/* — Sovereign Wealth Funds —————————————————————————————————— */
export const COINVEST_MODEL = [
  {
    no: "01",
    title: "Anchor commitment",
    body: "A cornerstone allocation across one or more of our platforms establishes the partnership and aligns long-term incentives at fund level.",
  },
  {
    no: "02",
    title: "Co-investment rights",
    body: "Preferential, fee-advantaged co-investment rights on direct deals let you scale conviction into specific frontier-technology opportunities alongside us.",
  },
  {
    no: "03",
    title: "Strategic theme mandates",
    body: "Custom mandates target national priorities — semiconductors, energy, AI infrastructure, defense-relevant dual-use technology — within agreed risk and governance bounds.",
  },
  {
    no: "04",
    title: "Knowledge transfer",
    body: "Secondments, joint diligence and access to our research desk build internal capability and a durable on-the-ground innovation footprint at home.",
  },
];

export const SOVEREIGN_REGIONS = [
  { region: "Middle East", hub: "Abu Dhabi", focus: "Sovereign capital, energy transition and AI infrastructure." },
  { region: "Asia-Pacific", hub: "Singapore", focus: "Deep-tech manufacturing, semiconductors and the orbital economy." },
  { region: "EMEA", hub: "London · Zurich", focus: "Climate technology, industrial scale-up and private wealth." },
  { region: "Americas", hub: "New York · San Francisco", focus: "Frontier venture, AI compute and advanced manufacturing." },
];

/* — Family Offices ——————————————————————————————————————————— */
export const TAILORED_ACCESS = [
  {
    title: "Direct & private deals",
    body: "Co-invest directly into individual frontier-technology companies sourced by our venture and private-equity desks — beyond what any commingled fund can offer.",
  },
  {
    title: "Bespoke mandates",
    body: "Segregated accounts shaped to your family's values, exclusions, liquidity needs and concentration preferences, reviewed with a named principal.",
  },
  {
    title: "Multi-generational structuring",
    body: "Allocation designed for horizons measured in generations, with succession, governance and education built into the relationship rather than bolted on.",
  },
  {
    title: "Curated co-investment flow",
    body: "A measured stream of vetted opportunities — not a firehose — matched to your stated themes, with full diligence packs and direct line to the deal team.",
  },
];

/* — Foundations & Endowments ——————————————————————————————— */
export const IMPACT_RETURNS = [
  {
    title: "No false trade-off",
    body: "We reject the premise that mission and return are opposed. Our Community Equity Fund and climate platform are built to compound capital and outcomes together.",
  },
  {
    title: "Measured impact",
    body: "Social and environmental outcomes are reported with the same rigor as performance — audited annually and aligned to the UN Sustainable Development Goals.",
  },
  {
    title: "Mission-aligned screens",
    body: "Exclusion lists, thematic tilts and values-based constraints are encoded into segregated mandates so your portfolio reflects your charter.",
  },
  {
    title: "Perpetual-horizon design",
    body: "Portfolios are constructed for institutions that intend to exist forever, balancing real growth against today's spending obligations.",
  },
];

export const ENDOWMENT_MODEL = [
  {
    no: "01",
    title: "Real growth above spending",
    body: "Target returns are framed to exceed your spending rate plus inflation across a full cycle, preserving real purchasing power for future beneficiaries.",
  },
  {
    no: "02",
    title: "Diversified frontier exposure",
    body: "Allocation spans liquid public markets, real assets and private innovation, diversifying the engines of return across our four platforms.",
  },
  {
    no: "03",
    title: "Liquidity for spending policy",
    body: "A liquid, drawdown-managed sleeve and predictable distribution planning support a steady annual draw without forcing untimely sales.",
  },
  {
    no: "04",
    title: "Stewardship & transparency",
    body: "Independent governance, audited reporting and direct access to the investment team give boards the assurance their fiduciary duty demands.",
  },
];
