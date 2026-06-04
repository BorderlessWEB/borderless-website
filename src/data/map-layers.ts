export type MapTab =
  | "passport-visas"
  | "travel"
  | "investment"
  | "education"
;

export interface MapCountry {
  slug: string;
  name: string;
  geoName?: string; // matches properties.name in topojson (for large countries)
  coordinates?: [number, number]; // [lng, lat] for marker-based (small islands)
  type: "geo" | "marker";
  color: string;
  hoverColor: string;
}

export interface MapLayer {
  tab: MapTab;
  label: string;
  countries: MapCountry[];
  linkPrefix: string; // e.g. "/passport-visas" or "/investment"
}

/* ── Colors ── */
const AMBER     = { color: "#d97706", hoverColor: "#f59e0b" };
const BLUE      = { color: "#3b82f6", hoverColor: "#60a5fa" };
const DARKGREEN = { color: "#166534", hoverColor: "#22c55e" };
const TEAL      = { color: "#0d9488", hoverColor: "#2dd4bf" };
const PURPLE    = { color: "#7c3aed", hoverColor: "#a78bfa" };

export const mapLayers: MapLayer[] = [
  /* ── PASSPORT / VISAS ── */
  {
    tab: "passport-visas",
    label: "Passport/visas",
    linkPrefix: "/passport-visas",
    countries: [
      // Citizenship (amber)
      { slug: "st-kitts-and-nevis",   name: "St Kitts & Nevis",     type: "marker", coordinates: [-62.73, 17.36], ...AMBER },
      { slug: "dominica",             name: "Dominica",              type: "marker", coordinates: [-61.37, 15.41], ...AMBER },
      { slug: "antigua-and-barbuda",  name: "Antigua & Barbuda",     type: "marker", coordinates: [-61.80, 17.06], ...AMBER },
      { slug: "grenada",              name: "Grenada",               type: "marker", coordinates: [-61.68, 12.12], ...AMBER },
      { slug: "st-lucia",             name: "St Lucia",              type: "marker", coordinates: [-60.97, 13.91], ...AMBER },
      { slug: "sao-tome-e-principe",  name: "São Tomé e Príncipe",   type: "marker", coordinates: [6.61,  0.19],  ...AMBER },
      { slug: "vanuatu",              name: "Vanuatu",               geoName: "Vanuatu", type: "geo", ...AMBER },
      // Residency (blue)
      { slug: "portugal-golden-visa", name: "Portugal",              geoName: "Portugal", type: "geo", ...BLUE },
      { slug: "portugal-hqa-visa",    name: "Portugal HQA",          type: "marker", coordinates: [-10.5, 38.5], ...BLUE },
      { slug: "spain",                name: "Spain",                 geoName: "Spain",    type: "geo", ...BLUE },
      { slug: "greece",               name: "Greece",                geoName: "Greece",   type: "geo", ...BLUE },
      { slug: "cyprus",               name: "Cyprus",                geoName: "Cyprus",   type: "geo", ...BLUE },
      { slug: "hungary",              name: "Hungary",               geoName: "Hungary",  type: "geo", ...BLUE },
      { slug: "us-eb5-visa",          name: "United States",         geoName: "United States of America", type: "geo", ...BLUE },
      { slug: "brazil",               name: "Brazil",                geoName: "Brazil",   type: "geo", ...BLUE },
    ],
  },

  /* ── INVESTMENT ── */
  {
    tab: "investment",
    label: "Investment",
    linkPrefix: "/investment",
    countries: [
      { slug: "costa-rica",  name: "Costa Rica",      geoName: "Costa Rica", type: "geo",    ...DARKGREEN },
      { slug: "brazil",      name: "Brazil",          geoName: "Brazil",     type: "geo",    ...DARKGREEN },
      { slug: "azores",      name: "Azores Islands",  type: "marker", coordinates: [-27.2, 38.7], ...DARKGREEN },
    ],
  },

  /* ── TRAVEL ── */
  {
    tab: "travel",
    label: "Travel",
    linkPrefix: "/travel",
    countries: [
      // Placeholder — add destinations later
    ],
  },

  /* ── EDUCATION ── */
  {
    tab: "education",
    label: "Education",
    linkPrefix: "/education",
    countries: [
      // Placeholder
    ],
  },


];

export function getLayer(tab: MapTab): MapLayer {
  return mapLayers.find((l) => l.tab === tab) || mapLayers[0];
}
