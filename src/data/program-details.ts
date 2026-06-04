export interface ProgramDetail {
  slug: string;
  heroImage?: string;
  videoId?: string;
  investment: string;
  citizenship?: string;
  processingTime?: string;
  visaFree?: string;
  tagline: string;
  overview: string;
  benefits: string[];
  requirements: string[];
  process: { step: string; desc: string }[];
  relatedVideos?: { id: string; title: string }[];
}

export const programDetails: Record<string, ProgramDetail> = {
  "portugal-golden-visa": {
    slug: "portugal-golden-visa",
    videoId: "2UPGZjq5MsU", // What is it like to be a citizen of Portugal (151K)
    investment: "from €500,000",
    citizenship: "after 10 years",
    processingTime: "4–6 months",
    visaFree: "Schengen Area + 180+ countries",
    tagline: "The gateway to Europe. Live, work, and travel freely across the EU.",
    overview:
      "The Portugal Golden Visa is one of Europe's most prestigious residence-by-investment programs. It grants you and your family EU residency through a qualifying investment in Portuguese funds — with minimal stay requirements (just 7 days per year). After 5 years, you can apply for permanent residency, and after 10 years — for Portuguese citizenship.",
    benefits: [
      "EU residency for you and your family",
      "Visa-free travel across the Schengen Area (27 countries)",
      "Minimal physical presence: just 7 days per year",
      "Path to permanent residency in 5 years",
      "Path to citizenship and EU passport in 10 years",
      "Access to European healthcare and education",
      "Family investment — no increase for additional family members",
      "Tax benefits through NHR (Non-Habitual Resident) regime",
    ],
    requirements: [
      "Investment in qualified funds: from €500,000",
      "Clean criminal record",
      "Valid health insurance",
      "Proof of funds from legitimate sources",
      "No additional fees per family member for investment (only government processing fees change)",
    ],
    process: [
      { step: "Consultation", desc: "Define your goals and choose the right fund. We analyze your situation and recommend the optimal investment strategy." },
      { step: "Documents", desc: "We prepare and verify all documentation — from NIF (tax number) to fund subscription agreements." },
      { step: "Investment", desc: "Transfer funds to the approved Portuguese investment fund. We guide you through every step." },
      { step: "Application", desc: "Submit the Golden Visa application through SEF. We handle all government liaison." },
      { step: "Approval", desc: "Receive your residence permit and start living without borders. Renew every 2 years with minimal stay." },
    ],
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
