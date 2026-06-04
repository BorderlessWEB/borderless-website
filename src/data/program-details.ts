export interface InvestmentRoute {
  name: string;
  amount: string;
  description: string;
  returnable: boolean;
  highlight?: boolean;
  badge?: string;
}

export interface FeeItem {
  label: string;
  amount: string;
}

export interface ProgramDetail {
  slug: string;
  heroImage?: string;
  videoId?: string;
  investment: string;
  permanentResidency?: string;
  citizenship?: string;
  processingTime?: string;
  visaFree?: string;
  minStay?: string;
  tagline: string;
  overview: string;
  highlights: string[];
  benefits: string[];
  investmentRoutes?: InvestmentRoute[];
  fees?: FeeItem[];
  familyNote?: string;
  requirements: string[];
  process: { step: string; desc: string }[];
  legalBasis?: string;
  relatedVideos?: { id: string; title: string }[];
}

export const programDetails: Record<string, ProgramDetail> = {
  "portugal-golden-visa": {
    slug: "portugal-golden-visa",
    videoId: "2UPGZjq5MsU",
    investment: "from €200,000",
    permanentResidency: "after 5 years",
    citizenship: "after 10 years*",
    processingTime: "12–24 months",
    visaFree: "29 Schengen countries",
    minStay: "7 days / year",
    tagline:
      "Live without borders. Just 7 days a year in Portugal — and all of Europe is open to you.",
    overview:
      "The Portugal Golden Visa (Autorização de Residência para Atividade de Investimento — ARI) is one of Europe's most flexible residence-by-investment programs. It allows global entrepreneurs and investors to obtain EU residency through qualifying investments — with a minimal physical presence requirement of just 7 days per year (14 days every 2 years). After 5 years you receive permanent residency (and can exit your fund investment), and after 10 years you can apply for Portuguese — and therefore EU — citizenship under Lei Orgânica n.º 1/2026.",
    highlights: [
      "Only 7 days per year in Portugal to maintain your residence status",
      "Permanent residency (ПМЖ) after 5 years — recover your fund capital and keep your EU status",
      "Right to citizenship petition after 10 years (7 years for EU/CPLP nationals)",
      "Visa-free access to all 29 Schengen countries — live, work, open a business, educate children at resident rates",
    ],
    benefits: [
      "EU residency for you and your family",
      "Visa-free travel and residence across all 29 Schengen countries",
      "Minimal physical presence: just 7 days per year",
      "Permanent residency after 5 years + full return of fund capital",
      "Right to petition for EU citizenship and passport after 10 years",
      "Right to live, work, and open business anywhere in Portugal",
      "Children can attend Portuguese schools and universities at resident tuition rates",
      "Access to European public healthcare system",
    ],
    investmentRoutes: [
      {
        name: "PE/VC Investment Funds",
        amount: "€500,000",
        description:
          "Investment in CMVM-regulated Portuguese venture capital or private equity funds. Funds must comply with the 60% rule — at least 60% of assets invested in commercial Portuguese companies. Funds must have no direct or indirect exposure to the real estate market. Your capital is returned after the fund's maturity period (typically 5–7 years), aligned with your permanent residency timeline.",
        returnable: true,
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Cultural Patronage",
        amount: "€200,000 – €250,000",
        description:
          "Support for Portuguese arts, culture, and heritage preservation. This is a non-refundable donation (not an investment) — an elite form of European patronage. The lowest entry threshold for EU residency, ideal for those who value cultural prestige and are willing to contribute permanently to European heritage in exchange for residence status.",
        returnable: false,
        badge: "Lowest threshold",
      },
      {
        name: "Research & Scientific Contribution",
        amount: "€500,000",
        description:
          "Contribution to research activities conducted by qualified public or private scientific institutions in Portugal's national scientific and technological system.",
        returnable: false,
      },
      {
        name: "Company Formation & Job Creation",
        amount: "€500,000 + 5 jobs",
        description:
          "Incorporation of a commercial company in Portugal with creation of at least 5 permanent full-time jobs, or capital increase of at least €500,000 in an existing Portuguese company combined with creation of 5 jobs.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Initial application fee (per person)", amount: "€6,312" },
      { label: "Residence permit issuance", amount: "€338" },
      { label: "Each renewal (every 2 years)", amount: "~€3,350" },
    ],
    familyNote:
      "Under Law n.º 61/2025, family members (spouse, children, dependents) can join the main applicant after they have maintained residence status for at least 2 years. The investment amount does not increase for additional family members — only government processing fees apply (~€6,650 per person).",
    requirements: [
      "Qualifying investment through one of the approved routes",
      "Clean criminal record (from country of origin and Portugal)",
      "Valid health insurance covering Portugal",
      "Proof of funds from legitimate, documented sources",
      "NIF (Portuguese tax identification number)",
      "Minimum stay: 7 days in the first year, 14 days in each subsequent 2-year period",
    ],
    process: [
      {
        step: "Consultation & Strategy",
        desc: "We analyze your goals, family situation, and investment preferences. Together we choose the optimal route — CMVM-regulated fund or cultural patronage.",
      },
      {
        step: "Documents & NIF",
        desc: "We prepare all documentation: NIF (tax number), criminal record certificates, fund subscription agreements, and proof of funds. Full document management with Portuguese authorities.",
      },
      {
        step: "Investment Execution",
        desc: "Transfer funds to the selected CMVM-regulated venture fund or approved cultural institution. We verify all regulatory compliance before your transfer.",
      },
      {
        step: "Application via Portal ARI (AIMA)",
        desc: "Submit your Golden Visa application through the digital Portal ARI managed by AIMA (Agência para a Integração, Migrações e Asilo). Current processing times: 12–24 months due to agency restructuring.",
      },
      {
        step: "Residence Permit & Renewals",
        desc: "Receive your residence permit valid for 2 years. Renew every 2 years maintaining minimal stay. After 5 years — permanent residency and fund exit. After 10 years — right to petition for EU citizenship.",
      },
    ],
    legalBasis:
      "Program regulated by Lei n.º 23/2007, amended by Decreto-Lei n.º 14/2021, Lei n.º 56/2023 (Mais Habitação — real estate route abolished), Law n.º 61/2025 (family reunification rules), and Lei Orgânica n.º 1/2026 (citizenship timeline). Administered by AIMA through Portal ARI.",
    relatedVideos: [
      { id: "2UPGZjq5MsU", title: "What is it like to be a citizen of Portugal?" },
      { id: "WcrITfyvEQA", title: "Moving to Portugal: best destinations for retirement" },
      { id: "57TMY6iQ_9w", title: "How to move to Portugal — step by step" },
      { id: "6GE_ljHAmNY", title: "Portugal vs Spain Golden Visa: pros and cons" },
      { id: "i7Gqt6Pa0B0", title: "Why Portugal NHR is a top choice for investors" },
      { id: "4JKimjQL0UI", title: "Portugal vs Greece Golden Visa: which to choose?" },
    ],
  },
};

export function getProgramDetail(slug: string): ProgramDetail | undefined {
  return programDetails[slug];
}
