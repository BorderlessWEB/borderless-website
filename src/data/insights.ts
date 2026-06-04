export interface InsightArticle {
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
  type: "article" | "video";
  videoId?: string;
  image?: string;
  source?: string;
}

export const featuredInsight: InsightArticle = {
  title: "Policy Risk Has Overtaken Asset Risk in Golden Visa Real Estate",
  description:
    "Anatoliy Letaev argues the European property-visa bundle is dead, and most golden visa investors haven't updated their models.",
  date: "16.05.2026",
  category: "Opinion · IMI Daily",
  link: "https://www.imidaily.com/opinion/policy-risk-has-overtaken-asset-risk-in-golden-visa-real-estate/",
  type: "article",
  image: "https://www.imidaily.com/wp-content/uploads/2026/05/Background-2026-05-16T112122.658.webp",
  source: "IMI Daily",
};

export const insightArticles: InsightArticle[] = [
  // IMI Daily — newest
  {
    title: "The India Retreat That Changed My Life. EKAM",
    description:
      "A deeply personal journey through India's spiritual heartland — exploring EKAM, meditation, and the retreat that reshaped Anatoliy's perspective.",
    date: "20.05.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=8ALLswaCB04",
    type: "video",
    videoId: "8ALLswaCB04",
  },
  {
    title: "Life in Argentina 2026: Prices, Neighborhoods, and Citizenship",
    description:
      "Is it worth moving to Buenos Aires? A look at real costs, best neighborhoods, and the path to citizenship.",
    date: "01.05.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=l4xuFc0oNqg",
    type: "video",
    videoId: "l4xuFc0oNqg",
  },
  {
    title: "How Portugal Can Use Foreign Investors to Solve the Housing Crisis",
    description:
      "Instead of closing the golden visa program, Portugal should reform it and use it to solve the housing crisis, argues Anatoliy Letayev.",
    date: "22.04.2023",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/how-portugal-can-use-foreign-investors-to-solve-the-housing-crisis-instead-of-scrapping-the-golden-visa/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2023/04/Christian_Nesheim_A_beautiful_view_of_Lisbons_Alfama_district.__52b9dc42-d335-4a3a-8124-2d388d9f5985.png",
    source: "IMI Daily",
  },
  {
    title: "Chile 2026: Why Expats Are Moving Here Now",
    description:
      "Stories from expats who chose Chile — cost of living, visa options, and why it's trending in 2026.",
    date: "01.04.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=nsFkDr_yeIs",
    type: "video",
    videoId: "nsFkDr_yeIs",
  },
  {
    title: "An Interview With Roger 'Bitcoin Jesus' Ver on RCBI, Crypto, and Flag Theory",
    description:
      "Roger Ver says the US government is lying about how many Americans are renouncing their citizenship. An exclusive interview by Anatoliy Lyetayev.",
    date: "22.03.2021",
    category: "Interview · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/an-interview-with-roger-bitcoin-jesus-ver-on-rcbi-crypto-and-flag-theory/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2021/03/1-3-copy.jpg",
    source: "IMI Daily",
  },
  {
    title: "Easter Island: A Father-Son Journey to the Heart of the Pacific",
    description:
      "How my son and I discovered an ancient world on the most remote inhabited island on Earth.",
    date: "01.04.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=82oOUUkUblU",
    type: "video",
    videoId: "82oOUUkUblU",
  },
  {
    title: "Tax Migration: The Megatrend of 2021",
    description:
      "Governments are spending trillions responding to 2020. HNWIs hope to be somewhere else when the bill comes.",
    date: "18.12.2020",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/tax-migration-the-megatrend-of-2021/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/12/pressure-businessman_24381-392.png",
    source: "IMI Daily",
  },
  {
    title: "I Walked 900 KM: The Santiago Path from France to Spain",
    description:
      "A life-changing journey on foot — discovering my formula for freedom on the Camino de Santiago.",
    date: "01.11.2025",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=-TvL7iMzk4c",
    type: "video",
    videoId: "-TvL7iMzk4c",
  },
  {
    title: "The Golden Visa of Your Dreams: Synthesizing an Optimal RBI Program",
    description:
      "Anatoliy Lyetayev shops around for the best parts of each golden visa program and dreams up one that would be a big hit.",
    date: "10.12.2020",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/the-golden-visa-of-your-dreams-synthesizing-an-optimal-rbi-program-from-existing-practices/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/12/ali-abdul-rahman-JOgQUlO6JXU-unsplash.jpg",
    source: "IMI Daily",
  },
  {
    title: "Costa Rica: Relocation in 2025 — A Complete Guide",
    description:
      "Everything you need to know about moving to Costa Rica — residency programs, cost of living, and why expats love it.",
    date: "16.07.2025",
    category: "Immigration",
    link: "https://migronis.com/blog/costa-rica-relocation-in2025",
    type: "article",
    image: "https://i.ytimg.com/vi/DcnY2h1vIos/maxresdefault.jpg",
  },
  {
    title: "From Flag Theory to Flag Practice: Time to Execute That Plan B",
    description:
      "Now is the time to talk about a Flag Theory-based Plan B and how to find freedom in an unfree world.",
    date: "04.11.2020",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/from-flag-theory-to-flag-practice-time-to-execute-that-plan-b/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/11/andrey-kremkov-UtWG73BiwE8-unsplash.jpg",
    source: "IMI Daily",
  },
  {
    title: "How to Live Without Being Tied to One Country: Flag Theory",
    description:
      "A practical guide to distributing your life across countries for maximum freedom and efficiency.",
    date: "01.05.2025",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=xUoq7mGeUJA",
    type: "video",
    videoId: "xUoq7mGeUJA",
  },
  {
    title: "US Embassy in Moscow Suspends Visa Services: CBI Lifting the Iron Curtain",
    description:
      "In a startling turn of events, the US Embassy in Moscow announced it will limit its services to emergencies only.",
    date: "06.05.2021",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/us-embassy-in-moscow-suspends-visa-services-cbi-lifting-the-iron-curtain/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/11/andrey-kremkov-UtWG73BiwE8-unsplash.jpg",
    source: "IMI Daily",
  },
  {
    title: "What The Ideal Citizenship by Investment Program Might Look Like",
    description:
      "Anatoliy Lyetayev construes his idea of the ideal CIP by 'shopping around' for the most successful elements of existing ones.",
    date: "25.11.2020",
    category: "Analysis · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/what-the-ideal-citizenship-by-investment-program-might-look-like/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/11/rrtJy-cbi-applicant-contribution-type-preferences-2019.png",
    source: "IMI Daily",
  },
  {
    title: "Golden Visa: Portugal or Spain? Comparison of Programs",
    description:
      "A detailed comparison of two of Europe's most popular residency-by-investment paths.",
    date: "23.09.2024",
    category: "Visas",
    link: "https://migronis.com/blog/golden-visa-portugal-vs-spain-comparative-analysis-of-investment-programs",
    type: "article",
    image: "https://i.ytimg.com/vi/WIv59BX3Bxs/maxresdefault.jpg",
  },
  {
    title: "3 Reasons You Should Make The Nigerian Investment Migration Market a Priority",
    description:
      "Three reasons you might think twice before sending the next email from a Nigerian prince to your spam folder.",
    date: "16.02.2021",
    category: "Opinion · IMI Daily",
    link: "https://www.imidaily.com/editors-picks/3-reasons-you-should-make-the-nigerian-investment-migration-market-a-priority/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/10/5744774.png",
    source: "IMI Daily",
  },
  {
    title: "7 Ways to Super-Charge Your RCBI Content Marketing After COVID",
    description:
      "For those RCBI firms that have digitized their services, now is the time to reap the rewards.",
    date: "20.10.2020",
    category: "Marketing · IMI Daily",
    link: "https://www.imidaily.com/anatoliys-analysis/7-ways-to-super-charge-your-rcbi-content-marketing-after-covid/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/10/5744774.png",
    source: "IMI Daily",
  },
  {
    title: "The 4 Things RCBI Firms Must Do to Keep Their Agents Happy",
    description:
      "Four strategies for making sure your RCBI company's agents are always content to keep sending you their clients.",
    date: "07.10.2020",
    category: "Opinion · IMI Daily",
    link: "https://www.imidaily.com/opinion/the-4-things-rcbi-firms-must-do-to-keep-their-agents-happy/",
    type: "article",
    image: "https://www.imidaily.com/wp-content/uploads/2020/12/ali-abdul-rahman-JOgQUlO6JXU-unsplash.jpg",
    source: "IMI Daily",
  },
  {
    title: "Best Citizenship Programs in the Caribbean",
    description:
      "Caribbean citizenship gives you financial flexibility and freedom of movement worldwide.",
    date: "16.09.2024",
    category: "Immigration",
    link: "https://migronis.com/blog/comparison-of-caribbean-citizenship-by-investment-programs",
    type: "article",
    image: "https://i.ytimg.com/vi/dvCQeUu1rsQ/maxresdefault.jpg",
  },
  {
    title: "Where to Live in Portugal: 10 Best Cities to Move To",
    description:
      "A comprehensive guide to relocation in one of the most beautiful countries in Western Europe.",
    date: "03.10.2024",
    category: "Guides",
    link: "https://migronis.com/blog/where-to-live-in-portugal-10-best-cities-to-move-to-in-2024",
    type: "article",
    image: "https://i.ytimg.com/vi/fCD5giZAQ6Y/maxresdefault.jpg",
  },
];
