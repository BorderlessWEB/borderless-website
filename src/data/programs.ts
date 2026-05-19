export interface Program {
  slug: string;
  name: string;
  country: string;
  category: "citizenship" | "residency";
  shortDescription: string;
}

export const programs: Program[] = [
  // Citizenship
  {
    slug: "st-kitts-and-nevis",
    name: "St Kitts & Nevis",
    country: "St Kitts & Nevis",
    category: "citizenship",
    shortDescription:
      "The world's first citizenship-by-investment program, and still one of the fastest. Obtain citizenship in several months, gain visa-free access to 150+ countries.",
  },
  {
    slug: "dominica",
    name: "Dominica",
    country: "Dominica",
    category: "citizenship",
    shortDescription:
      "Known for its integrity and efficiency, Dominica offers one of the most affordable citizenship programs globally.",
  },
  {
    slug: "antigua-and-barbuda",
    name: "Antigua & Barbuda",
    country: "Antigua & Barbuda",
    category: "citizenship",
    shortDescription:
      "Perfect for families looking for value and comfort. Citizenship can be obtained through a contribution, real estate, or business investment.",
  },
  {
    slug: "grenada",
    name: "Grenada",
    country: "Grenada",
    category: "citizenship",
    shortDescription:
      "A Caribbean passport that opens doors to the world, including the U.S. via the E-2 investor visa.",
  },
  {
    slug: "st-lucia",
    name: "St Lucia",
    country: "St Lucia",
    category: "citizenship",
    shortDescription:
      "A transparent citizenship-by-investment program offering several routes — from government bonds to sustainable real estate projects.",
  },
  {
    slug: "sao-tome-e-principe",
    name: "São Tomé e Príncipe",
    country: "São Tomé e Príncipe",
    category: "citizenship",
    shortDescription:
      "The newest and most accessible program, offering the lowest entry point worldwide through the National Transformation Fund.",
  },
  {
    slug: "vanuatu",
    name: "Vanuatu",
    country: "Vanuatu",
    category: "citizenship",
    shortDescription:
      "A fast-track citizenship program offering one of the quickest routes to a second passport with zero income tax.",
  },
  // Residency
  {
    slug: "portugal-golden-visa",
    name: "Portugal Golden Visa",
    country: "Portugal",
    category: "residency",
    shortDescription:
      "One of Europe's most prestigious residence programs. Obtain EU residency through qualified investments in funds or innovation.",
  },
  {
    slug: "portugal-hqa-visa",
    name: "Portugal HQA Visa",
    country: "Portugal",
    category: "residency",
    shortDescription:
      "A fast-track residence program for highly qualified professionals, entrepreneurs, and innovators.",
  },
  {
    slug: "spain",
    name: "Spain",
    country: "Spain",
    category: "residency",
    shortDescription:
      "Spain offers flexible residence options for remote workers, entrepreneurs, and financially independent individuals.",
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    country: "Cyprus",
    category: "residency",
    shortDescription:
      "Cyprus offers multiple pathways to residency — from permanent residence through investment to more flexible options.",
  },
  {
    slug: "greece",
    name: "Greece",
    country: "Greece",
    category: "residency",
    shortDescription:
      "The most affordable Golden Visa in the EU, offering a simple and efficient path to European residence through real estate investment.",
  },
  {
    slug: "us-eb5-visa",
    name: "U.S. EB-5 Visa",
    country: "United States",
    category: "residency",
    shortDescription:
      "An investor visa that grants permanent U.S. residency to those who invest in a qualifying American business.",
  },
  {
    slug: "brazil",
    name: "Brazil",
    country: "Brazil",
    category: "residency",
    shortDescription:
      "Brazil offers investor visas for those who contribute to local business, real estate, or innovation projects.",
  },
  {
    slug: "hungary",
    name: "Hungary",
    country: "Hungary",
    category: "residency",
    shortDescription:
      "Hungary's Guest Investor Residence Permit grants long-term EU residency through investment in approved national funds.",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
