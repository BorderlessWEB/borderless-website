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

  /* ═══════════════════════════════════════════════════
     RESIDENCY PROGRAMS
     ═══════════════════════════════════════════════════ */

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
      { step: "Consultation & Strategy", desc: "We analyze your goals, family situation, and investment preferences. Together we choose the optimal route — CMVM-regulated fund or cultural patronage." },
      { step: "Documents & NIF", desc: "We prepare all documentation: NIF (tax number), criminal record certificates, fund subscription agreements, and proof of funds." },
      { step: "Investment Execution", desc: "Transfer funds to the selected CMVM-regulated venture fund or approved cultural institution. We verify all regulatory compliance before your transfer." },
      { step: "Application via Portal ARI (AIMA)", desc: "Submit your Golden Visa application through the digital Portal ARI managed by AIMA. Current processing times: 12–24 months due to agency restructuring." },
      { step: "Residence Permit & Renewals", desc: "Receive your residence permit valid for 2 years. Renew every 2 years maintaining minimal stay. After 5 years — permanent residency and fund exit. After 10 years — right to petition for EU citizenship." },
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

  "portugal-hqa-visa": {
    slug: "portugal-hqa-visa",
    videoId: "57TMY6iQ_9w",
    investment: "No investment required",
    permanentResidency: "after 5 years",
    citizenship: "after 10 years",
    processingTime: "2–4 months",
    visaFree: "29 Schengen countries",
    minStay: "Standard residency",
    tagline:
      "A fast-track visa for professionals, entrepreneurs, and digital nomads who want to call Portugal home.",
    overview:
      "The Portugal HQA (Highly Qualified Activity) Visa is a residence permit for professionals with specialized skills, entrepreneurs, researchers, and remote workers. Unlike the Golden Visa, it does not require a financial investment — instead, it's based on your professional qualifications, employment contract, or entrepreneurial activity in Portugal. It offers a faster processing time and a direct path to permanent residency and citizenship.",
    highlights: [
      "No financial investment required — based on your skills and qualifications",
      "Fast processing: 2–4 months from application",
      "Full right to live and work in Portugal from day one",
      "Same path to PR (5 years) and citizenship (10 years) as Golden Visa holders",
    ],
    benefits: [
      "EU residency without investment requirement",
      "Visa-free travel across all 29 Schengen countries",
      "Full right to work, study, and open a business in Portugal",
      "Access to Portuguese public healthcare and education",
      "Path to permanent residency after 5 years",
      "Path to EU citizenship after 10 years",
      "Family reunification available",
      "Tax optimization through NHR regime (if eligible)",
    ],
    requirements: [
      "Recognized higher education degree or equivalent professional experience",
      "Employment contract with a Portuguese entity, or proof of entrepreneurial activity",
      "Clean criminal record",
      "Valid health insurance",
      "Proof of sufficient financial means for living in Portugal",
      "NIF (Portuguese tax identification number)",
    ],
    process: [
      { step: "Eligibility Assessment", desc: "We evaluate your professional background, qualifications, and determine the best visa category for your profile." },
      { step: "Document Preparation", desc: "Gather and apostille all required documents: degree certificates, employment contracts, criminal records, and financial statements." },
      { step: "Application Submission", desc: "Submit your application to AIMA through the appropriate portal. We handle all communication with Portuguese authorities." },
      { step: "Approval & Residence Permit", desc: "Receive your residence permit and relocate to Portugal. Begin building your new life in the EU." },
    ],
    relatedVideos: [
      { id: "57TMY6iQ_9w", title: "How to move to Portugal — step by step" },
      { id: "2UPGZjq5MsU", title: "What is it like to be a citizen of Portugal?" },
      { id: "WcrITfyvEQA", title: "Moving to Portugal: best destinations for retirement" },
      { id: "i7Gqt6Pa0B0", title: "Why Portugal NHR is a top choice for investors" },
    ],
  },

  "greece": {
    slug: "greece",
    videoId: "yZJKpAp_jTQ",
    investment: "from €250,000",
    permanentResidency: "immediate",
    citizenship: "after 7 years",
    processingTime: "2–3 months",
    visaFree: "29 Schengen countries",
    minStay: "No minimum stay",
    tagline:
      "Europe's most affordable Golden Visa. Buy property, get EU residency — no minimum stay required.",
    overview:
      "The Greece Golden Visa is the most cost-effective path to EU residency through real estate investment. Starting from €250,000 (in select regions), you receive a 5-year renewable residence permit for yourself and your family with no physical presence requirement. Greece offers a Mediterranean lifestyle, affordable cost of living, and a straightforward path to EU citizenship after 7 years of tax residency.",
    highlights: [
      "Lowest real estate investment threshold in the EU (from €250,000 in eligible regions)",
      "No minimum stay requirement — maintain your permit without living in Greece",
      "Immediate residency for the whole family upon approval",
      "Real estate investment — a tangible asset you can use or rent out",
    ],
    benefits: [
      "EU residency for you, spouse, children under 21, and parents",
      "Visa-free travel across all 29 Schengen countries",
      "No minimum physical presence requirement",
      "5-year residence permit, renewable indefinitely while holding investment",
      "Right to rent out your property for income",
      "Path to Greek (EU) citizenship after 7 years of tax residency",
      "Affordable Mediterranean lifestyle — among the lowest cost of living in the EU",
      "Access to Greek public education and healthcare",
    ],
    investmentRoutes: [
      {
        name: "Real Estate — Standard Regions",
        amount: "€250,000",
        description:
          "Purchase of residential or commercial real estate in eligible regions of Greece (islands, northern Greece, and other designated areas). Properties can be rented out for income. Must be held for the duration of the residence permit.",
        returnable: true,
        highlight: true,
        badge: "Best value",
      },
      {
        name: "Real Estate — Premium Regions",
        amount: "€500,000",
        description:
          "Purchase of real estate in Athens (Attica region), Thessaloniki, Mykonos, Santorini, and other high-demand zones. Higher threshold due to 2024 regulatory changes for popular areas.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Property transfer tax", amount: "3.09% of property value" },
      { label: "Residence permit application", amount: "~€2,000 per person" },
      { label: "Legal & notary fees", amount: "~€3,000–5,000" },
    ],
    familyNote:
      "The Greece Golden Visa covers the main applicant, spouse, children under 21, and both sets of parents (applicant's and spouse's). No additional investment required for family members — only government application fees apply.",
    requirements: [
      "Real estate purchase above the minimum threshold in an eligible region",
      "Clean criminal record",
      "Valid health insurance covering Greece",
      "Proof of funds for the property purchase",
      "Biometric data submission at a Greek consulate or in Greece",
    ],
    process: [
      { step: "Consultation & Property Selection", desc: "We analyze your goals and help you select the right property — for personal use, rental income, or both. Virtual property tours available." },
      { step: "Legal Due Diligence", desc: "Our Greek legal partners verify property title, zoning, and encumbrances. We obtain your Greek tax number (AFM) and open a bank account." },
      { step: "Property Purchase", desc: "Sign the purchase agreement, pay the transfer tax, and complete the notarial deed. We manage the entire transaction remotely if needed." },
      { step: "Residence Permit Application", desc: "Submit biometric data and application to the Greek Decentralized Administration. Processing time: 2–3 months." },
      { step: "Approval & Residence Card", desc: "Receive your 5-year Golden Visa residence permit. Renew every 5 years while maintaining ownership. After 7 years of tax residency — apply for citizenship." },
    ],
    relatedVideos: [
      { id: "yZJKpAp_jTQ", title: "Investing in real estate in Greece: residence permit & rental income" },
      { id: "4JKimjQL0UI", title: "Portugal vs Greece Golden Visa: which to choose?" },
      { id: "rS0HqJV7XCw", title: "Greece residence — how to obtain Golden Visa" },
    ],
  },

  "hungary": {
    slug: "hungary",
    videoId: "G8Z1bvxKrrQ",
    investment: "from €250,000",
    permanentResidency: "after 3 years",
    citizenship: "after 8 years",
    processingTime: "2–3 months",
    visaFree: "29 Schengen countries",
    minStay: "No minimum stay",
    tagline:
      "Hungary's Guest Investor Program — EU residency through regulated fund investment at a competitive price point.",
    overview:
      "Hungary's Guest Investor Residence Permit (Vendégbefektetői Tartózkodási Engedély) launched in 2024 as a new path to EU residency. Invest €250,000 in a Hungarian government-approved real estate fund and receive a 10-year renewable residence permit for yourself and your family. With no minimum stay requirement and a straightforward path to permanent residency after 3 years, it's one of Europe's newest and most competitive options.",
    highlights: [
      "€250,000 fund investment — one of the most affordable EU residence programs",
      "10-year residence permit (vs 2 years in Portugal or 5 years in Greece)",
      "No minimum physical presence requirement",
      "Permanent residency possible after just 3 years",
    ],
    benefits: [
      "EU residency for you and your family",
      "Visa-free travel across all 29 Schengen countries",
      "No minimum stay requirement",
      "10-year residence permit, among the longest in Europe",
      "Path to permanent residency after 3 years",
      "Path to Hungarian (EU) citizenship after 8 years",
      "Fund investment — capital returned at maturity",
      "Access to European education and healthcare",
    ],
    investmentRoutes: [
      {
        name: "Government-Approved Real Estate Fund",
        amount: "€250,000",
        description:
          "Investment in a regulated Hungarian real estate investment fund approved by the government. Funds are managed by licensed Hungarian asset managers. Capital is returned at fund maturity (typically 5–7 years).",
        returnable: true,
        highlight: true,
        badge: "Only route",
      },
    ],
    fees: [
      { label: "Government application fee", amount: "€4,000" },
      { label: "Residence permit card issuance", amount: "€60" },
      { label: "Due diligence fee", amount: "included" },
    ],
    familyNote:
      "The program covers the main applicant, spouse, and minor children. The investment amount does not increase for family members — only government processing fees apply per person.",
    requirements: [
      "€250,000 investment in a government-approved real estate fund",
      "Clean criminal record",
      "Valid health insurance",
      "Proof of legitimate source of funds",
      "No prior immigration violations in Hungary or the EU",
    ],
    process: [
      { step: "Consultation & Fund Selection", desc: "We assess your goals and help you select from government-approved Hungarian real estate funds. All funds are regulated by the Hungarian National Bank." },
      { step: "Document Preparation", desc: "Compile criminal records, proof of funds, insurance documentation, and personal identification. We handle apostille and translation." },
      { step: "Investment & Application", desc: "Transfer €250,000 to the selected fund and submit your residence permit application. Processing: 2–3 months." },
      { step: "Residence Permit", desc: "Receive your 10-year Guest Investor Residence Permit. After 3 years — eligible for permanent residency. After 8 years — eligible for citizenship." },
    ],
    relatedVideos: [
      { id: "G8Z1bvxKrrQ", title: "Hungary Guest Investor Residence Permit" },
      { id: "6GE_ljHAmNY", title: "Portugal vs Spain Golden Visa comparison" },
    ],
  },

  "cyprus": {
    slug: "cyprus",
    videoId: "S-iP__YPgXA",
    investment: "from €300,000",
    permanentResidency: "immediate",
    citizenship: "after 7 years",
    processingTime: "2–3 months",
    visaFree: "EU (not yet Schengen)",
    minStay: "1 visit every 2 years",
    tagline:
      "EU permanent residency through real estate — an island lifestyle with a fast-track permit and path to citizenship.",
    overview:
      "Cyprus offers a fast-track permanent residence permit through real estate investment starting from €300,000. As an EU member state (though not yet in the Schengen Zone), Cyprus provides European residency rights, a favorable tax environment, and a high quality of life. The program grants immediate permanent residency — not a temporary permit — making it one of the most straightforward EU residence-by-investment options. After 7 years of legal residence, you can apply for Cypriot (EU) citizenship.",
    highlights: [
      "Immediate permanent residency — not a temporary permit that needs frequent renewal",
      "Real estate investment — tangible asset in a growing Mediterranean market",
      "One of the most favorable corporate tax regimes in the EU (12.5%)",
      "English widely spoken — easy transition for international families",
    ],
    benefits: [
      "EU permanent residency for you and your family",
      "Real estate investment — can be rented for income",
      "Favorable tax environment: 12.5% corporate tax, no inheritance tax",
      "English widely spoken across the island",
      "High-quality international schools and universities",
      "Path to EU citizenship after 7 years",
      "Minimal physical presence: one visit every 2 years",
      "Safe, family-friendly island with year-round sunshine",
    ],
    investmentRoutes: [
      {
        name: "New Residential Property",
        amount: "€300,000 + VAT",
        description:
          "Purchase of one or two new residential properties with a combined market value of at least €300,000 (plus VAT). Properties must be purchased from a developer and must be new (first sale). Can be used for personal residence or rented out.",
        returnable: true,
        highlight: true,
        badge: "Main route",
      },
    ],
    fees: [
      { label: "Application review fee", amount: "€500" },
      { label: "VAT on new property", amount: "5% (reduced) or 19%" },
      { label: "Property transfer fees", amount: "3–8% (sliding scale)" },
      { label: "Stamp duty", amount: "€1.50–2.00 per €1,000" },
    ],
    familyNote:
      "The program includes the main applicant, spouse, and children up to age 25 (if financially dependent and studying). Parents of the applicant and spouse are also eligible for a separate immigration permit.",
    requirements: [
      "Purchase of new residential property worth at least €300,000 + VAT",
      "Annual income of at least €50,000 from outside Cyprus (main applicant)",
      "Additional €15,000 for spouse, €10,000 per child per year from abroad",
      "Clean criminal record",
      "Funds must be sourced from outside Cyprus",
      "Visit Cyprus at least once every 2 years",
    ],
    process: [
      { step: "Consultation & Property Selection", desc: "We analyze your goals and connect you with vetted developers across Cyprus — Limassol, Paphos, Larnaca, and Nicosia." },
      { step: "Property Purchase", desc: "Sign the sale agreement, pay the deposit, and register the contract at the Land Registry. We coordinate the full legal process." },
      { step: "Application to Civil Registry", desc: "Submit your permanent residence application to the Civil Registry and Migration Department. Processing: 2–3 months." },
      { step: "Permanent Residence Permit", desc: "Receive your permanent residence permit valid for life (as long as you maintain the property). After 7 years — eligible for EU citizenship." },
    ],
    relatedVideos: [
      { id: "S-iP__YPgXA", title: "Cyprus permanent residence by investment" },
      { id: "4JKimjQL0UI", title: "Portugal vs Greece Golden Visa comparison" },
    ],
  },

  "spain": {
    slug: "spain",
    videoId: "6GE_ljHAmNY",
    investment: "Varies by visa type",
    permanentResidency: "after 5 years",
    citizenship: "after 10 years",
    processingTime: "1–3 months",
    visaFree: "29 Schengen countries",
    minStay: "183 days for tax residency",
    tagline:
      "From digital nomad visa to entrepreneur residency — Spain offers flexible paths for modern global citizens.",
    overview:
      "Spain provides several residence pathways for international professionals, entrepreneurs, and financially independent individuals. Note: Spain's traditional Golden Visa (real estate investment route) was officially abolished in April 2025. However, Spain remains highly attractive through its Digital Nomad Visa, Entrepreneur Visa, and Non-Lucrative Visa — each offering a legitimate path to EU residency, permanent residence after 5 years, and Spanish citizenship after 10 years.",
    highlights: [
      "Digital Nomad Visa — work remotely for non-Spanish companies while living in Spain",
      "No investment-based Golden Visa since April 2025 — but multiple alternative pathways",
      "One of Europe's best quality of life — healthcare, education, climate, culture",
      "Spanish citizenship after 10 years (2 years for citizens of Latin American countries)",
    ],
    benefits: [
      "EU residency with access to all 29 Schengen countries",
      "World-class healthcare system (ranked among top 10 globally)",
      "Digital Nomad Visa with favorable tax regime (Beckham Law)",
      "Path to permanent residency after 5 years",
      "Path to citizenship after 10 years (2 years for LATAM nationals)",
      "Excellent international schools and universities",
      "Mediterranean lifestyle — over 300 days of sunshine",
      "Strong expat communities in Barcelona, Madrid, Valencia, Málaga",
    ],
    investmentRoutes: [
      {
        name: "Digital Nomad Visa",
        amount: "No investment",
        description:
          "For remote workers employed by or contracting with companies outside Spain. Must demonstrate a minimum income (approx. €2,520/month). Allows you to live and work legally in Spain while being employed abroad. Special tax regime may apply (Beckham Law — flat 24% on Spanish income).",
        returnable: true,
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Entrepreneur / Startup Visa",
        amount: "Business plan",
        description:
          "For founders launching innovative businesses in Spain. Requires a viable business plan approved by ENISA (Spanish national innovation agency). No minimum capital requirement, but the project must demonstrate innovation and economic impact.",
        returnable: true,
      },
      {
        name: "Non-Lucrative Visa",
        amount: "Proof of means",
        description:
          "For financially independent individuals who want to live in Spain without working. Must demonstrate sufficient funds (approx. €30,000/year + €7,500 per dependent). Does not permit employment in Spain.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Visa application fee", amount: "€80–200" },
      { label: "NIE (foreigner ID number)", amount: "€12" },
      { label: "Residence card (TIE)", amount: "~€16–20" },
    ],
    familyNote:
      "All Spanish visa types allow family reunification. Spouse and minor children can apply together with the main applicant or join later. Each family member must meet income/funds thresholds.",
    requirements: [
      "Valid passport with at least 1 year remaining",
      "Clean criminal record (apostilled and translated)",
      "Health insurance with full coverage in Spain",
      "Proof of financial means (varies by visa type)",
      "For Digital Nomad: employment contract or client contracts outside Spain",
      "For Entrepreneur: ENISA-approved business plan",
    ],
    process: [
      { step: "Visa Selection & Assessment", desc: "We evaluate your professional profile and choose the optimal visa type — Digital Nomad, Entrepreneur, or Non-Lucrative." },
      { step: "Document Preparation", desc: "Compile and legalize all required documents: criminal records, financial statements, contracts, and business plans. Translation and apostille as needed." },
      { step: "Application Submission", desc: "Submit your visa application at the Spanish consulate in your country of residence. Processing: 1–3 months." },
      { step: "Arrival & Residency", desc: "Move to Spain, obtain your NIE and TIE (residence card). After 5 years — permanent residency. After 10 years — Spanish (EU) citizenship." },
    ],
    relatedVideos: [
      { id: "6GE_ljHAmNY", title: "Portugal vs Spain Golden Visa: pros and cons" },
      { id: "4JKimjQL0UI", title: "Comparison of European Golden Visa programs" },
    ],
  },

  "us-eb5-visa": {
    slug: "us-eb5-visa",
    videoId: "fFDA03rnAhY",
    investment: "from $800,000",
    permanentResidency: "with Green Card",
    citizenship: "after 5 years",
    processingTime: "18–36 months",
    visaFree: "180+ countries (with US passport)",
    minStay: "US tax residency",
    tagline:
      "The direct path to the American Dream — invest, create jobs, receive your Green Card.",
    overview:
      "The EB-5 Immigrant Investor Program is the only U.S. visa category that grants permanent residency (Green Card) through investment. Created by Congress in 1990, the program requires investors to create at least 10 full-time jobs for U.S. workers through a qualifying investment. After receiving a conditional Green Card and maintaining the investment for 2 years, you can apply for permanent Green Card removal of conditions, and after 5 years of residence — for U.S. citizenship.",
    highlights: [
      "Direct path to U.S. permanent residency (Green Card) for investor and family",
      "No employer sponsorship needed — you invest, you immigrate",
      "After 5 years of residency — eligible for the world's most powerful passport",
      "TEA (Targeted Employment Area) projects: reduced threshold of $800,000",
    ],
    benefits: [
      "U.S. Green Card for you, spouse, and unmarried children under 21",
      "Right to live, work, and study anywhere in the United States",
      "Path to U.S. citizenship and passport after 5 years",
      "No language, education, or business experience requirements",
      "Access to U.S. schools, universities, and healthcare",
      "Freedom to start or invest in any U.S. business",
      "No requirement to manage the EB-5 investment directly",
      "Visa-free access to 180+ countries with U.S. passport",
    ],
    investmentRoutes: [
      {
        name: "TEA Regional Center Project",
        amount: "$800,000",
        description:
          "Investment through a USCIS-approved Regional Center in a Targeted Employment Area (TEA — rural or high-unemployment zones). The Regional Center manages the project and job creation compliance. This is the most popular route — approximately 90% of EB-5 applications use Regional Centers.",
        returnable: true,
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Direct Investment",
        amount: "$1,050,000",
        description:
          "Direct investment in a new commercial enterprise anywhere in the U.S. You must directly create 10 full-time jobs and be actively involved in management. Higher threshold but more control over your business.",
        returnable: true,
      },
    ],
    fees: [
      { label: "USCIS I-526E petition fee", amount: "$11,160" },
      { label: "USCIS I-829 (removal of conditions)", amount: "$9,525" },
      { label: "Biometrics fee", amount: "$85 per person" },
      { label: "Regional Center administrative fee", amount: "$50,000–75,000 (typical)" },
    ],
    familyNote:
      "The EB-5 visa covers the main investor, spouse, and unmarried children under 21. All family members receive conditional Green Cards simultaneously. One investment covers the entire family.",
    requirements: [
      "Investment of $800,000 (TEA) or $1,050,000 (standard) in a qualifying enterprise",
      "Lawful source of investment funds (documented)",
      "Creation of 10 full-time jobs for U.S. workers (direct or indirect through Regional Center)",
      "Clean criminal record and admissibility to the U.S.",
      "Valid medical examination",
    ],
    process: [
      { step: "Project Selection", desc: "We help you select a USCIS-approved Regional Center project with strong job-creation metrics and experienced management. Due diligence on every project." },
      { step: "Investment & I-526E Petition", desc: "Transfer funds to the project's escrow account and file Form I-526E with USCIS. Current processing: 18–36 months (priority processing available for some categories)." },
      { step: "Conditional Green Card", desc: "Upon I-526E approval, apply for immigrant visa (consular processing) or adjust status (if in the US). Receive 2-year conditional Green Card." },
      { step: "I-829 & Permanent Green Card", desc: "After 2 years, file I-829 to remove conditions. Demonstrate that investment was sustained and jobs were created. Receive permanent Green Card." },
      { step: "U.S. Citizenship", desc: "After 5 years of permanent residency, apply for U.S. citizenship through naturalization. Pass civics test and English language exam." },
    ],
    legalBasis: "Immigration and Nationality Act §203(b)(5), EB-5 Reform and Integrity Act of 2022 (RIA). Administered by USCIS.",
    relatedVideos: [
      { id: "fFDA03rnAhY", title: "US EB-5 investor visa — how to get a Green Card" },
    ],
  },

  "brazil": {
    slug: "brazil",
    videoId: "3DdCBuhPjkA",
    investment: "from R$500,000 (~$90,000)",
    permanentResidency: "immediate",
    citizenship: "after 4 years",
    processingTime: "1–3 months",
    visaFree: "Mercosur + 170+ countries (with passport)",
    minStay: "No minimum (but maintain ties)",
    tagline:
      "South America's largest economy — low investment threshold, fast citizenship, and a warm tropical lifestyle.",
    overview:
      "Brazil offers one of the world's most accessible investor visa programs. With a minimum investment of R$500,000 (approximately $90,000 USD) in a Brazilian business, you receive permanent residency for yourself and your family. Brazil's investor visa has no minimum stay requirement (though you should maintain ties to Brazil), and remarkably, you can apply for Brazilian citizenship after just 4 years of residency — one of the shortest timelines globally. Real estate investment is also a qualifying route starting from R$700,000.",
    highlights: [
      "Low investment threshold: from ~$90,000 USD (business) or ~$130,000 USD (real estate)",
      "Permanent residency granted immediately — not a temporary permit",
      "Citizenship after just 4 years — one of the fastest in the world",
      "Brazilian passport: visa-free to 170+ countries including all of South America, EU, UK, Japan",
    ],
    benefits: [
      "Immediate permanent residency for you and your family",
      "Brazilian citizenship after just 4 years",
      "Brazilian passport — visa-free to 170+ countries",
      "Freedom of movement across Mercosur (Argentina, Uruguay, Paraguay, etc.)",
      "No minimum stay requirement (maintain economic ties)",
      "Access to universal public healthcare (SUS)",
      "Affordable cost of living with high quality of life",
      "Strategic business hub for Latin American markets",
    ],
    investmentRoutes: [
      {
        name: "Business Investment",
        amount: "R$500,000 (~$90,000)",
        description:
          "Investment in a new or existing Brazilian company. Must create jobs or demonstrate economic benefit to the country. The most common route for entrepreneur-minded investors.",
        returnable: true,
        highlight: true,
        badge: "Lowest entry",
      },
      {
        name: "Real Estate Investment",
        amount: "R$700,000 (~$130,000)",
        description:
          "Purchase of urban real estate in Brazil. Properties can be residential or commercial. Must be held for the duration of the visa.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Visa application fee", amount: "~$200" },
      { label: "Federal police registration (CRNM)", amount: "~R$200" },
      { label: "Naturalization application", amount: "~R$500" },
    ],
    familyNote:
      "The investor visa covers the main applicant, spouse/partner, and dependent children. All receive permanent residency simultaneously. No additional investment required for family members.",
    requirements: [
      "Investment in a Brazilian business (R$500,000+) or real estate (R$700,000+)",
      "Clean criminal record",
      "Business plan demonstrating job creation or economic contribution",
      "Proof of legitimate source of funds",
      "Valid passport",
    ],
    process: [
      { step: "Investment Planning", desc: "We help you identify the right investment vehicle — company formation, existing business acquisition, or real estate purchase in Brazil." },
      { step: "Investment Execution", desc: "Transfer funds through official banking channels. Register the investment with the Central Bank of Brazil. Complete the business or property purchase." },
      { step: "Visa Application", desc: "Apply for the VIPER (Permanent Investor Visa) at the Brazilian consulate or through the Ministry of Justice. Processing: 1–3 months." },
      { step: "Permanent Residency & Path to Citizenship", desc: "Receive your permanent residence card (CRNM). After 4 years of residency — apply for Brazilian citizenship and one of the world's most versatile passports." },
    ],
    relatedVideos: [
      { id: "3DdCBuhPjkA", title: "Brazil investor visa — residency and citizenship" },
    ],
  },

  /* ═══════════════════════════════════════════════════
     CITIZENSHIP PROGRAMS
     ═══════════════════════════════════════════════════ */

  "st-kitts-and-nevis": {
    slug: "st-kitts-and-nevis",
    videoId: "G0VNW90YG8w",
    investment: "from $250,000",
    citizenship: "3–6 months",
    processingTime: "3–6 months",
    visaFree: "156+ countries",
    tagline:
      "The world's first and most trusted citizenship-by-investment program. Second passport in as little as 3 months.",
    overview:
      "St Kitts & Nevis pioneered citizenship-by-investment in 1984 and remains the gold standard of CBI programs globally. It offers the fastest processing (as little as 45 days with Accelerated Application Process), no residency or visit requirements, and visa-free access to 156+ countries including the EU/Schengen, UK, Singapore, and Hong Kong. Choose between a contribution to the Sustainable Island State Contribution (SISC) fund or an investment in pre-approved real estate.",
    highlights: [
      "Oldest CBI program in the world — 40+ years of track record and stability",
      "Fast-track processing available: citizenship in as little as 45 days (AAP)",
      "No residency, visit, or interview requirements — fully remote process",
      "Visa-free access to 156+ countries including EU, UK, Singapore, Hong Kong",
    ],
    benefits: [
      "Citizenship for you and your family — no visit required",
      "Visa-free or visa-on-arrival access to 156+ countries",
      "No personal income tax, capital gains tax, or inheritance tax",
      "No residency requirement — live wherever you choose",
      "Second passport for global mobility and asset protection",
      "Dual citizenship allowed — no need to renounce existing nationality",
      "Right to live and work in any CARICOM member state",
      "Excellent plan B for political or economic instability",
    ],
    investmentRoutes: [
      {
        name: "Sustainable Island State Contribution (SISC)",
        amount: "$250,000",
        description:
          "Non-refundable contribution to the SISC fund, which supports national sustainability and resilience. This is the fastest and most straightforward route to citizenship. Additional fees apply for family members: $50,000 for spouse, $50,000 per sibling, and $35,000 per dependent under 18.",
        returnable: false,
        highlight: true,
        badge: "Fastest route",
      },
      {
        name: "Approved Real Estate",
        amount: "$400,000",
        description:
          "Purchase of pre-approved real estate (resorts, hotels, luxury villas) designated by the CIU. Property must be held for a minimum of 7 years before resale. Government fees apply in addition to the property price.",
        returnable: true,
        badge: "Asset-backed",
      },
    ],
    fees: [
      { label: "Government due diligence fee (main applicant)", amount: "$7,500" },
      { label: "Due diligence per dependent (16+)", amount: "$4,000" },
      { label: "Passport fee", amount: "$500 per person" },
      { label: "Accelerated (AAP) surcharge", amount: "$25,000" },
    ],
    familyNote:
      "The application covers the main applicant, spouse, children under 30 (if financially dependent), parents over 55, and unmarried siblings of the applicant under 30. Family members receive citizenship simultaneously.",
    requirements: [
      "Contribution of $250,000 (SISC) or real estate purchase of $400,000+",
      "Clean criminal record — background check through international databases",
      "No visa denials to countries with which St Kitts has visa-free agreements",
      "Source of funds documentation",
      "Health certificate",
    ],
    process: [
      { step: "Consultation & Route Selection", desc: "We assess your family composition, timeline, and goals to recommend the optimal route — SISC contribution or real estate." },
      { step: "Document Preparation", desc: "Compile certified copies, police clearances, bank references, and source of funds documentation. We manage the entire package." },
      { step: "Application to CIU", desc: "Submit your application to the Citizenship by Investment Unit (CIU). Standard processing: 3–6 months. Accelerated (AAP): 45–60 days." },
      { step: "Approval & Citizenship", desc: "Upon approval, make the investment/contribution and receive your Certificate of Citizenship and passport." },
    ],
    relatedVideos: [
      { id: "G0VNW90YG8w", title: "How to get a Caribbean passport — Real Estate or Donation?" },
      { id: "I2ejNaJ6ghU", title: "Caribbean real estate and second citizenship" },
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better? Comparison" },
      { id: "DXUU85Ox4Ys", title: "How to decide which Caribbean CBI program" },
    ],
  },

  "dominica": {
    slug: "dominica",
    videoId: "G0VNW90YG8w",
    investment: "from $100,000",
    citizenship: "3–4 months",
    processingTime: "3–4 months",
    visaFree: "145+ countries",
    tagline:
      "The most affordable citizenship in the world. Known for efficiency, integrity, and value.",
    overview:
      "Dominica's Citizenship by Investment Program, established in 1993, is consistently ranked as the world's best CBI program by the CBI Index. It offers the lowest entry price among all citizenship programs globally — starting at just $100,000 for a single applicant. With a strong due diligence process, visa-free access to 145+ countries, and no physical visit requirement, Dominica is the smart choice for budget-conscious investors who refuse to compromise on quality.",
    highlights: [
      "Lowest-cost citizenship program in the world — from $100,000",
      "Consistently #1 in the CBI Index for best overall program",
      "No visit, residency, or interview requirements",
      "Visa-free access to 145+ countries including EU, UK, China, Singapore",
    ],
    benefits: [
      "Citizenship for you and your family — entirely remote process",
      "Visa-free access to 145+ countries including EU, UK, and China",
      "No income tax, capital gains tax, wealth tax, or inheritance tax",
      "No residency or physical presence requirements",
      "Dual citizenship allowed",
      "Right to live and work in CARICOM member states",
      "Robust due diligence — program integrity maintained",
      "Affordable price point — best value in global CBI market",
    ],
    investmentRoutes: [
      {
        name: "Economic Diversification Fund (EDF)",
        amount: "$100,000",
        description:
          "Non-refundable contribution to the EDF. The most affordable and fastest route. Fees for family: $150,000 for applicant + spouse, $175,000 for family of 4, plus government processing fees.",
        returnable: false,
        highlight: true,
        badge: "Best price",
      },
      {
        name: "Approved Real Estate",
        amount: "$200,000",
        description:
          "Purchase of government-approved real estate (minimum $200,000). Property must be held for at least 3 years (5 years for resale to another CBI applicant). Government fees apply separately.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Government processing fee (main)", amount: "$1,000" },
      { label: "Due diligence fee (main)", amount: "$7,500" },
      { label: "Due diligence per dependent (16+)", amount: "$4,000" },
      { label: "Passport fee", amount: "$250 per person" },
    ],
    familyNote:
      "The application covers the main applicant, spouse, children under 30 (if dependent), parents and grandparents over 55, and unmarried siblings under 25.",
    requirements: [
      "EDF contribution ($100,000+) or real estate purchase ($200,000+)",
      "Clean criminal record with international background check",
      "Good health (medical certificate)",
      "Source of funds documentation",
      "No prior visa refusals to countries with which Dominica has visa-free access",
    ],
    process: [
      { step: "Consultation", desc: "Assess your family composition and goals. Choose between EDF contribution (fastest, lowest cost) or real estate (asset-backed)." },
      { step: "Document Preparation", desc: "We compile all documents: police certificates, birth/marriage certificates, bank statements, and source of funds. Full document management." },
      { step: "Application to CBIU", desc: "Submit your application to the Citizenship by Investment Unit of Dominica. Processing: 3–4 months standard." },
      { step: "Approval & Citizenship", desc: "Upon approval, make your investment/contribution. Receive your Dominican passport and Certificate of Naturalization." },
    ],
    relatedVideos: [
      { id: "G0VNW90YG8w", title: "How to get a Caribbean passport — Real Estate or Donation?" },
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better? Comparison" },
      { id: "DXUU85Ox4Ys", title: "How to decide which Caribbean CBI program" },
    ],
  },

  "antigua-and-barbuda": {
    slug: "antigua-and-barbuda",
    videoId: "I2ejNaJ6ghU",
    investment: "from $230,000",
    citizenship: "3–6 months",
    processingTime: "3–6 months",
    visaFree: "150+ countries",
    minStay: "5 days in 5 years",
    tagline:
      "Caribbean citizenship with a family-friendly price — the only CBI program that requires you to visit paradise.",
    overview:
      "Antigua and Barbuda's CBI program, established in 2013, stands out for its excellent family pricing and the unique (and pleasant) requirement of spending at least 5 days in the country within the first 5 years of citizenship. With visa-free access to 150+ countries, a National Development Fund contribution starting at $230,000 for a family of four, and no income or capital gains tax, Antigua offers one of the best deals for families seeking a Caribbean second passport.",
    highlights: [
      "Best family pricing — $230,000 covers a family of up to 4 people",
      "Visit requirement: just 5 days in the first 5 years (enjoy the beaches!)",
      "Visa-free access to 150+ countries including EU, UK, Hong Kong",
      "University of the West Indies scholarship option available",
    ],
    benefits: [
      "Citizenship for your entire family at a competitive price",
      "Visa-free access to 150+ countries",
      "No income tax, capital gains tax, or wealth tax",
      "Right to live and work in CARICOM member states",
      "Dual citizenship allowed",
      "Free semester at University of the West Indies (for one family member)",
      "Family-friendly: covers children up to 30, parents, grandparents, and siblings",
      "Beautiful island lifestyle if you choose to visit or relocate",
    ],
    investmentRoutes: [
      {
        name: "National Development Fund (NDF)",
        amount: "$230,000 (family of 4)",
        description:
          "Non-refundable contribution to the NDF. Special family pricing: $230,000 for a family of up to 4. Single applicant: $230,000. Additional dependents: $15,000 each. This is the most popular route.",
        returnable: false,
        highlight: true,
        badge: "Family deal",
      },
      {
        name: "Approved Real Estate",
        amount: "$300,000",
        description:
          "Purchase of government-approved real estate with a minimum value of $300,000. Must be held for at least 5 years. Joint investments by two applicants ($400,000 min total) are allowed.",
        returnable: true,
      },
      {
        name: "Business Investment",
        amount: "$400,000+",
        description:
          "Investment in an approved business enterprise, either alone ($400,000) or jointly with another applicant ($800,000 minimum, at least $400,000 each).",
        returnable: true,
      },
    ],
    fees: [
      { label: "Government processing fee (main)", amount: "$30,000" },
      { label: "Due diligence (main applicant)", amount: "$7,500" },
      { label: "Due diligence per dependent (12+)", amount: "$4,000" },
      { label: "Passport fee", amount: "$300 per person" },
    ],
    familyNote:
      "Covers main applicant, spouse, children under 30, parents over 55, grandparents over 55, and siblings under 30. The NDF family pricing ($230,000 for up to 4) makes it one of the most affordable family CBI options.",
    requirements: [
      "NDF contribution, real estate purchase, or business investment",
      "Clean criminal record (international background check)",
      "Good health (medical certificate)",
      "Source of funds documentation",
      "Must visit Antigua for at least 5 days within first 5 years of citizenship",
    ],
    process: [
      { step: "Consultation & Route Selection", desc: "We analyze your family size and goals to select the best investment route. NDF is optimal for most families." },
      { step: "Document Preparation", desc: "Compile and certify all documents: police clearances, financial records, birth/marriage certificates, and medical reports." },
      { step: "Application to CIU", desc: "Submit your application to the Citizenship by Investment Unit. Processing: 3–6 months." },
      { step: "Approval & Citizenship", desc: "Upon approval, make your investment/contribution. Receive citizenship and passports. Plan your 5-day visit to paradise!" },
    ],
    relatedVideos: [
      { id: "I2ejNaJ6ghU", title: "Caribbean real estate and second citizenship" },
      { id: "G0VNW90YG8w", title: "How to get a Caribbean passport?" },
      { id: "DXUU85Ox4Ys", title: "How to decide which Caribbean CBI program" },
    ],
  },

  "grenada": {
    slug: "grenada",
    videoId: "DXUU85Ox4Ys",
    investment: "from $235,000",
    citizenship: "3–6 months",
    processingTime: "3–6 months",
    visaFree: "148+ countries",
    tagline:
      "The only Caribbean passport with U.S. E-2 Treaty access. Your bridge between the Caribbean and America.",
    overview:
      "Grenada's CBI program is unique among Caribbean programs because Grenada is the only country in the region with an E-2 Treaty with the United States. This means a Grenadian passport allows you to apply for the U.S. E-2 Investor Visa — a renewable visa that lets you live, work, and run a business in the USA. Combined with visa-free access to 148+ countries (including China and the EU), Grenada is the strategic choice for investors who want both Caribbean freedom and American opportunity.",
    highlights: [
      "Only Caribbean CBI with U.S. E-2 Treaty access — live and work in the USA",
      "Visa-free access to China — unique among Caribbean CBI programs",
      "Visa-free to 148+ countries including EU, UK, Singapore, China",
      "No residency, visit, or interview requirements",
    ],
    benefits: [
      "Citizenship and passport for you and your family",
      "U.S. E-2 Treaty Investor Visa eligibility — live and work in the USA",
      "Visa-free access to China (unique among CBI nations)",
      "Visa-free access to 148+ countries",
      "No income tax, capital gains tax, or wealth tax",
      "No residency or physical presence requirements",
      "Dual citizenship allowed",
      "Right to live and work in CARICOM member states",
    ],
    investmentRoutes: [
      {
        name: "National Transformation Fund (NTF)",
        amount: "$235,000",
        description:
          "Non-refundable contribution to the NTF. Single applicant: $235,000. Family of 4: $235,000. Additional dependents: fees apply separately. This is the most straightforward route.",
        returnable: false,
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Approved Real Estate",
        amount: "$270,000",
        description:
          "Purchase of government-approved real estate, primarily hotel and resort shares. Minimum $270,000 for CBI qualification (shared ownership) or $350,000 for sole title. Property must be held for a minimum of 5 years.",
        returnable: true,
        badge: "US E-2 optimal",
      },
    ],
    fees: [
      { label: "Government application fee (main)", amount: "$1,500" },
      { label: "Due diligence (main applicant)", amount: "$5,000" },
      { label: "Due diligence per dependent (16+)", amount: "$5,000" },
      { label: "Passport fee", amount: "$250 per person" },
      { label: "Processing fee per spouse", amount: "$50,000" },
    ],
    familyNote:
      "Covers main applicant, spouse, children under 30, parents over 55, and unmarried siblings. All receive Grenadian citizenship and can independently apply for U.S. E-2 visas.",
    requirements: [
      "NTF contribution or approved real estate purchase",
      "Clean criminal record with comprehensive background check",
      "Good health (medical certificate)",
      "Source of funds documentation",
      "No prior visa refusals to key countries",
    ],
    process: [
      { step: "Consultation & E-2 Strategy", desc: "We assess your goals — especially if the U.S. E-2 Treaty visa is part of your plan. Choose between NTF contribution and real estate." },
      { step: "Document Preparation", desc: "Compile all required documents: police records, financial documentation, health certificates, and family documentation." },
      { step: "Application to CBI Committee", desc: "Submit your application to the Grenada Citizenship by Investment Committee. Processing: 3–6 months." },
      { step: "Approval & Citizenship", desc: "Upon approval, make your investment/contribution. Receive Grenadian citizenship, passport, and if desired — begin U.S. E-2 visa application." },
    ],
    relatedVideos: [
      { id: "DXUU85Ox4Ys", title: "How to decide which Caribbean CBI program" },
      { id: "G0VNW90YG8w", title: "How to get a Caribbean passport?" },
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better?" },
    ],
  },

  "st-lucia": {
    slug: "st-lucia",
    videoId: "m1NThT2GAjA",
    investment: "from $240,000",
    citizenship: "3–4 months",
    processingTime: "3–4 months",
    visaFree: "146+ countries",
    tagline:
      "A transparent, efficient CBI program with government bonds, donation, and real estate routes.",
    overview:
      "St Lucia's Citizenship by Investment Program, established in 2015, is the newest among Caribbean CBI nations and benefits from learning from its predecessors. It offers multiple investment routes — including a unique government bond option — with strong transparency and due diligence standards. Visa-free access to 146+ countries, no residency requirements, and competitive pricing make St Lucia an excellent choice for investors seeking a reliable second passport.",
    highlights: [
      "Multiple routes: donation, real estate, government bonds, and enterprise",
      "Newest Caribbean CBI — built on best practices of all prior programs",
      "Visa-free access to 146+ countries including EU, UK, Hong Kong",
      "No residency, visit, or interview requirements",
    ],
    benefits: [
      "Citizenship and passport for you and your family",
      "Visa-free access to 146+ countries",
      "No income tax, capital gains tax, or inheritance tax",
      "No residency or physical presence requirements",
      "Dual citizenship allowed — fully confidential",
      "Government bond option — capital returned after 5 years",
      "Right to live and work in CARICOM member states",
      "Beautiful island with growing tourism and real estate markets",
    ],
    investmentRoutes: [
      {
        name: "National Economic Fund (NEF)",
        amount: "$240,000",
        description:
          "Non-refundable contribution to the NEF. Single applicant: $240,000. Family of up to 4: $290,000. Additional dependents: $25,000 each.",
        returnable: false,
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Government Bonds",
        amount: "$300,000",
        description:
          "Investment in non-interest-bearing government bonds. Capital returned in full after 5 years. Government registration fee of $50,000 applies. Good for those who want eventual capital return.",
        returnable: true,
        badge: "Capital back in 5yr",
      },
      {
        name: "Approved Real Estate",
        amount: "$300,000",
        description:
          "Purchase of government-approved real estate. Must be held for at least 5 years. Hotels, resorts, and tourism-related developments available.",
        returnable: true,
      },
      {
        name: "Enterprise Project",
        amount: "$3,500,000",
        description:
          "Investment in an approved enterprise project. For solo investors: $3.5M minimum. Joint ventures: minimum $1M per applicant (total project $6M+). Creates jobs and economic impact.",
        returnable: true,
      },
    ],
    fees: [
      { label: "Government processing fee (main)", amount: "$2,000" },
      { label: "Due diligence (main applicant)", amount: "$7,500" },
      { label: "Due diligence per dependent (16+)", amount: "$5,000" },
      { label: "Passport fee", amount: "$250 per person" },
    ],
    familyNote:
      "Covers main applicant, spouse, children under 30 (if dependent), parents over 55, and unmarried siblings under 18. NEF family pricing is particularly competitive at $290,000 for up to 4 people.",
    requirements: [
      "NEF contribution, government bonds, real estate, or enterprise investment",
      "Clean criminal record with international background check",
      "Good health (medical certificate)",
      "Source of funds documentation",
      "Due diligence clearance",
    ],
    process: [
      { step: "Route Selection", desc: "Choose from 4 investment routes based on your goals: NEF (fastest), bonds (capital return), real estate (asset), or enterprise (business)." },
      { step: "Document Preparation", desc: "Compile certified documents: police records, bank references, birth/marriage certificates, and medical reports." },
      { step: "Application to CIU", desc: "Submit your application to St Lucia's Citizenship by Investment Unit. Processing: 3–4 months." },
      { step: "Approval & Citizenship", desc: "Upon approval, complete your investment and receive your St Lucian citizenship certificate and passport." },
    ],
    relatedVideos: [
      { id: "m1NThT2GAjA", title: "Interview with the Head of St Lucia CIP" },
      { id: "G0VNW90YG8w", title: "How to get a Caribbean passport?" },
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better?" },
    ],
  },

  "sao-tome-e-principe": {
    slug: "sao-tome-e-principe",
    videoId: "L73Uk_Wq-Jo",
    investment: "from $75,000",
    citizenship: "2–3 months",
    processingTime: "2–3 months",
    visaFree: "75+ countries",
    tagline:
      "The world's lowest-cost citizenship program. An emerging island nation with a growing passport.",
    overview:
      "São Tomé e Príncipe (STP) offers the most accessible citizenship-by-investment program in the world, with contributions starting at just $75,000 through the National Transformation Fund. Located in the Gulf of Guinea off the coast of Central Africa, this small island nation is building its CBI program with international oversight. While the passport's visa-free access is more limited than Caribbean options, STP citizenship is an excellent entry point for investors seeking a second nationality at the lowest possible cost, with the passport's travel power growing as the country expands its diplomatic relationships.",
    highlights: [
      "Lowest-cost CBI in the world — from $75,000",
      "Fastest processing: citizenship in 2–3 months",
      "Portuguese-speaking nation — cultural and linguistic ties to Portugal and Brazil",
      "Growing visa-free access as the country expands diplomatic relations",
    ],
    benefits: [
      "Most affordable citizenship-by-investment globally",
      "Fast processing: 2–3 months",
      "Portuguese-speaking — bridge to Lusophone world (Portugal, Brazil, Mozambique)",
      "No residency or visit requirements",
      "Dual citizenship allowed",
      "Growing international recognition and passport power",
      "Tropical island lifestyle if you choose to visit or relocate",
      "Emerging real estate and tourism market with growth potential",
    ],
    investmentRoutes: [
      {
        name: "National Transformation Fund",
        amount: "$75,000",
        description:
          "Non-refundable contribution to the National Transformation Fund. Single applicant: $75,000. Family pricing available for additional dependents.",
        returnable: false,
        highlight: true,
        badge: "World's lowest",
      },
    ],
    fees: [
      { label: "Government processing fee", amount: "$10,000" },
      { label: "Due diligence (main applicant)", amount: "$5,000" },
      { label: "Due diligence per dependent", amount: "$3,000" },
      { label: "Passport issuance", amount: "$500" },
    ],
    familyNote:
      "The program covers the main applicant, spouse, and dependent children. Additional dependents can be included for extra contribution and processing fees.",
    requirements: [
      "Contribution to the National Transformation Fund ($75,000+)",
      "Clean criminal record",
      "Good health (medical certificate)",
      "Source of funds documentation",
      "Due diligence clearance",
    ],
    process: [
      { step: "Consultation", desc: "We evaluate your profile and confirm eligibility for the STP CBI program." },
      { step: "Documents", desc: "Compile all required documents: criminal records, identity documents, and financial proof." },
      { step: "Application", desc: "Submit to the STP Citizenship by Investment Unit. Processing: 2–3 months." },
      { step: "Citizenship", desc: "Upon approval, make your contribution and receive citizenship certificate and passport." },
    ],
    relatedVideos: [
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better? Comparison" },
    ],
  },

  "vanuatu": {
    slug: "vanuatu",
    videoId: "L73Uk_Wq-Jo",
    investment: "from $130,000",
    citizenship: "1–3 months",
    processingTime: "1–3 months",
    visaFree: "100+ countries",
    tagline:
      "The fastest citizenship in the world. Zero income tax. A Pacific island passport in 30 days.",
    overview:
      "Vanuatu's Development Support Program (DSP) is the fastest citizenship-by-investment program globally — with approvals possible in as little as 30 days. Located in the South Pacific, Vanuatu offers a zero-tax environment (no income tax, no corporate tax, no capital gains tax) and a passport with growing visa-free access to 100+ countries including the EU/Schengen, UK, and Russia. For investors who prioritize speed and tax efficiency above all else, Vanuatu is unmatched.",
    highlights: [
      "Fastest CBI in the world — citizenship in as little as 30 days",
      "Zero income tax, corporate tax, capital gains tax, and inheritance tax",
      "Visa-free access to 100+ countries including EU and UK",
      "No residency, visit, or language requirements",
    ],
    benefits: [
      "World's fastest citizenship processing — 30 days possible",
      "Complete tax-free jurisdiction: 0% income, corporate, capital gains, inheritance",
      "Visa-free access to 100+ countries including EU, UK, Russia",
      "No residency or physical presence requirements",
      "Dual citizenship allowed",
      "English-speaking nation",
      "No interview, exam, or language requirements",
      "Strategic Pacific location between Australia and Asia",
    ],
    investmentRoutes: [
      {
        name: "Development Support Program (DSP)",
        amount: "$130,000",
        description:
          "Non-refundable contribution to the Vanuatu government's Development Support Program. Single applicant: $130,000. Couple: $150,000. Family of 4: $180,000. This is the sole investment route.",
        returnable: false,
        highlight: true,
        badge: "Only route",
      },
    ],
    fees: [
      { label: "Government due diligence", amount: "$5,000" },
      { label: "Processing fee per dependent", amount: "$25,000" },
      { label: "Passport fee", amount: "$250 per person" },
    ],
    familyNote:
      "Covers main applicant, spouse, and children up to 25 (if dependent). Parents can be included in some cases for additional fees.",
    requirements: [
      "DSP contribution ($130,000+)",
      "Clean criminal record",
      "No citizenship of a sanctioned country",
      "Source of funds documentation",
      "Valid passport",
    ],
    process: [
      { step: "Application & Documents", desc: "We compile your documentation and submit your application to the Vanuatu Citizenship Commission." },
      { step: "Due Diligence", desc: "Background check and verification of identity, criminal record, and source of funds." },
      { step: "Approval", desc: "Commissioner reviews the application. Approvals can be granted in as little as 30 days." },
      { step: "Citizenship & Passport", desc: "Take the oath of allegiance (can be done at a Vanuatu embassy) and receive your citizenship and passport." },
    ],
    relatedVideos: [
      { id: "L73Uk_Wq-Jo", title: "Which CBI passport is better? Comparison" },
    ],
  },
};

export function getProgramDetail(slug: string): ProgramDetail | undefined {
  return programDetails[slug];
}
