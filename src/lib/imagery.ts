/* ============================================================
   Curated royalty-free imagery (Unsplash). All URLs verified to
   resolve. To use owned brand photography later, replace the URLs
   here — nothing else needs to change.
   ============================================================ */

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Architecture & cities
  towerUp: U("1486406146926-c627a92ad1ab"),
  cityDusk: U("1496588152823-86ff7695e68f"),
  whiteArch: U("1487958449943-2429e8be8625"),
  glassFacade: U("1431576901776-e539bd916ba2"),
  skylineNight: U("1449034446853-66c86144b0ad"),
  // Technology
  circuit: U("1518770660439-4636190af475"),
  aiData: U("1620712943543-bcc4688e7485"),
  dataCenter: U("1558494949-ef010cbdcc31"),
  // Climate & energy
  windFarm: U("1466611653911-95081537e5b7"),
  solar: U("1509391366360-2e959784a276"),
  // People & boardroom
  team: U("1521737604893-d14cc237f11d"),
  boardroom: U("1497366216548-37526070297c"),
  // Global & abstract
  earthNight: U("1451187580459-43490279c0fa"),
  lab: U("1576091160550-2173dba999ef"),
  charts: U("1611974789855-9c2a0a7236a3"),
  singapore: U("1525625293386-3f8f99389edd"),
  london: U("1513635269975-59663e0ac1ad"),
  bridge: U("1545558014-8692077e9b5c"),
  mountains: U("1454165804606-c3d57bc86b40"),
  forest: U("1460925895917-afdab827c52f"),
} as const;

export type ImgKey = keyof typeof IMG;

/* Sensible default hero image per top-level section path. */
export function heroImageFor(pathname: string): string {
  const p = pathname.toLowerCase();
  if (p.startsWith("/about")) return IMG.boardroom;
  if (p.startsWith("/strategies")) return IMG.charts;
  if (p.startsWith("/industries")) return IMG.circuit;
  if (p.startsWith("/insights")) return IMG.cityDusk;
  if (p.startsWith("/investors")) return IMG.glassFacade;
  if (p.startsWith("/governance")) return IMG.whiteArch;
  if (p.startsWith("/esg")) return IMG.windFarm;
  if (p.startsWith("/global")) return IMG.earthNight;
  if (p.startsWith("/process")) return IMG.towerUp;
  if (p.startsWith("/careers")) return IMG.team;
  if (p.startsWith("/media")) return IMG.skylineNight;
  if (p.startsWith("/contact")) return IMG.london;
  if (p.startsWith("/legal")) return IMG.whiteArch;
  return IMG.towerUp;
}

/* Image per industry slug (falls back to a tech image). */
export function sectorImage(slug: string): string {
  const map: Record<string, ImgKey> = {
    "artificial-intelligence": "aiData",
    "machine-learning": "aiData",
    robotics: "circuit",
    semiconductors: "circuit",
    "quantum-computing": "circuit",
    cybersecurity: "dataCenter",
    biotechnology: "lab",
    healthcare: "lab",
    "climate-technology": "windFarm",
    "renewable-energy": "solar",
    agriculture: "forest",
    fintech: "charts",
    "space-technology": "earthNight",
    "defense-technology": "dataCenter",
    infrastructure: "bridge",
    manufacturing: "glassFacade",
    energy: "solar",
    transportation: "bridge",
    "smart-cities": "skylineNight",
    "autonomous-systems": "circuit",
    "fintech-infra": "circuit",
  };
  return IMG[map[slug] ?? "circuit"];
}

/* Image per strategy slug. */
export function strategyImage(slug: string): string {
  const map: Record<string, ImgKey> = {
    "hedge-fund": "charts",
    "private-equity": "bridge",
    "venture-capital": "aiData",
    "community-equity": "team",
  };
  return IMG[map[slug] ?? "towerUp"];
}
