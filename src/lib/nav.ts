/* ============================================================
   Global information architecture for ALRION Pillar Capital.
   Mirrors the firm's real navigation:
   About · Strategies · Impact · Insights · Leadership
   (Contact and Investor Portal live in the header utility bar).
   ============================================================ */

export type NavLink = {
  label: string;
  href: string;
  desc?: string;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavFeature = {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  cta: string;
};

export type NavSection = {
  label: string;
  href: string;
  columns: NavColumn[];
  feature?: NavFeature;
};

export const NAV: NavSection[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        heading: "The Firm",
        links: [
          { href: "/about", label: "Who We Are", desc: "A platform, not a product" },
          { href: "/about/story", label: "Our Story" },
          { href: "/about/mission", label: "Mission & Vision" },
          { href: "/about/principles", label: "Founding Principles" },
          { href: "/about/values", label: "Core Values" },
        ],
      },
      {
        heading: "Governance & Standards",
        links: [
          { href: "/governance", label: "Corporate Governance" },
          { href: "/governance/risk", label: "Risk Management" },
          { href: "/governance/compliance", label: "Compliance & Ethics" },
          { href: "/governance/transparency", label: "Transparency" },
          { href: "/governance/reports", label: "Reports & Disclosures" },
        ],
      },
      {
        heading: "Engage",
        links: [
          { href: "/careers", label: "Careers" },
          { href: "/media", label: "Newsroom" },
          { href: "/contact", label: "Contact" },
          { href: "/investors/portal", label: "Investor Portal" },
        ],
      },
    ],
    feature: {
      eyebrow: "Headquartered in New York",
      title: "Independence by design",
      blurb:
        "Four independent Delaware Limited Partnerships, unified by a single standard of institutional discipline.",
      href: "/about",
      cta: "About the platform",
    },
  },
  {
    label: "Strategies",
    href: "/strategies",
    columns: [
      {
        heading: "The Four Strategies",
        links: [
          { href: "/strategies/hedge-fund", label: "Hedge Fund LP", desc: "Global Macro Excellence" },
          { href: "/strategies/private-equity", label: "Private Equity LP", desc: "Infrastructure Growth" },
          { href: "/strategies/venture-capital", label: "Venture Capital LP", desc: "Frontier Technology" },
          { href: "/strategies/community-equity", label: "Community Equity Fund LP", desc: "Impact Through Investment" },
        ],
      },
      {
        heading: "How We Invest",
        links: [
          { href: "/strategies", label: "Strategy Overview" },
          { href: "/process", label: "Investment Process" },
          { href: "/strategies#philosophy", label: "Investment Philosophy" },
          { href: "/strategies#risk", label: "Risk Framework" },
          { href: "/strategies#reporting", label: "Institutional Reporting" },
        ],
      },
      {
        heading: "Focus Areas",
        links: [
          { href: "/industries/artificial-intelligence", label: "Artificial Intelligence & ML" },
          { href: "/industries/biotechnology", label: "Biotechnology" },
          { href: "/industries/defense-space", label: "Defense & Space" },
          { href: "/industries/nuclear-lifecycle", label: "Nuclear Lifecycle" },
          { href: "/industries", label: "All focus areas →" },
        ],
      },
    ],
    feature: {
      eyebrow: "A platform, not a product",
      title: "Four strategies. One framework.",
      blurb:
        "Global macro, infrastructure, frontier technology and community impact, aligned, never entangled.",
      href: "/strategies",
      cta: "Explore the strategies",
    },
  },
  {
    label: "Impact",
    href: "/impact",
    columns: [
      {
        heading: "The Model",
        links: [
          { href: "/impact", label: "Impact Through Investment", desc: "The Community Equity thesis" },
          { href: "/strategies/community-equity", label: "Community Equity Fund LP" },
          { href: "/esg", label: "ESG & Responsibility" },
        ],
      },
      {
        heading: "How We Measure",
        links: [
          { href: "/impact#wealth-equity", label: "Wealth Equity" },
          { href: "/impact#employment-quality", label: "Employment Quality" },
          { href: "/impact#capital-multiplier", label: "Capital Multiplier" },
        ],
      },
    ],
    feature: {
      eyebrow: "Community Equity Fund LP",
      title: "Catalysis, not just contribution",
      blurb:
        "A model proving that underserved markets can be some of the most compelling risk-adjusted opportunities in New York.",
      href: "/impact",
      cta: "See the impact model",
    },
  },
  {
    label: "Insights",
    href: "/insights",
    columns: [
      {
        heading: "Research",
        links: [
          { href: "/insights/market-intelligence", label: "Market Intelligence" },
          { href: "/insights/economic-outlook", label: "Economic Outlook" },
          { href: "/insights/themes", label: "Investment Themes" },
          { href: "/insights/white-papers", label: "White Papers" },
          { href: "/insights/reports", label: "Reports" },
        ],
      },
      {
        heading: "Perspectives",
        links: [
          { href: "/insights/thought-leadership", label: "Thought Leadership" },
          { href: "/insights/articles", label: "Articles & Commentary" },
          { href: "/insights/podcasts", label: "Podcasts" },
          { href: "/insights/webinars", label: "Webinars & Events" },
          { href: "/insights/newsletter", label: "Newsletter" },
        ],
      },
      {
        heading: "Newsroom",
        links: [
          { href: "/media", label: "Press Center" },
          { href: "/media/news", label: "Latest News" },
          { href: "/media/interviews", label: "Interviews" },
          { href: "/insights/downloads", label: "Download Center" },
        ],
      },
    ],
    feature: {
      eyebrow: "From the desk",
      title: "Considered, not constant",
      blurb:
        "Research and commentary in the firm's voice, precise, restrained and free of noise.",
      href: "/insights",
      cta: "Read the latest",
    },
  },
  {
    label: "Leadership",
    href: "/about/leadership",
    columns: [
      {
        heading: "The People",
        links: [
          { href: "/about/leadership", label: "Management Team" },
          { href: "/about/investment-committee", label: "Investment Committee" },
          { href: "/about/advisors", label: "Advisors" },
          { href: "/about/advisors", label: "Technical Advisory Board", desc: "Former government & military leaders" },
        ],
      },
      {
        heading: "Working at Alrion",
        links: [
          { href: "/careers", label: "Careers" },
          { href: "/about/values", label: "Culture & Values" },
          { href: "/about/awards", label: "Recognition" },
        ],
      },
    ],
    feature: {
      eyebrow: "Aligned interests",
      title: "Skin in every game",
      blurb:
        "Significant GP commitments across every fund. We invest where we ask our partners to invest.",
      href: "/about/leadership",
      cta: "Meet the team",
    },
  },
];

export const UTILITY_LINKS: NavLink[] = [
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
