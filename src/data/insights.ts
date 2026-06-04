export interface InsightArticle {
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
  type: "article" | "video";
  videoId?: string;
  image?: string;
}

export const featuredInsight: InsightArticle = {
  title: "The India Retreat That Changed My Life. EKAM",
  description:
    "A deeply personal journey through India's spiritual heartland — exploring EKAM, meditation, and the retreat that reshaped Anatoliy's perspective on life and business.",
  date: "20.05.2026",
  category: "Vlog",
  link: "https://www.youtube.com/watch?v=8ALLswaCB04",
  type: "video",
  videoId: "8ALLswaCB04",
};

export const insightArticles: InsightArticle[] = [
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
    title: "Where to Live in Portugal: 10 Best Cities to Move To",
    description:
      "A comprehensive guide to relocation in one of the most beautiful countries in Western Europe.",
    date: "03.10.2024",
    category: "Guides",
    link: "https://migronis.com/blog/where-to-live-in-portugal-10-best-cities-to-move-to-in-2024",
    type: "article",
    image: "https://i.ytimg.com/vi/fCD5giZAQ6Y/maxresdefault.jpg",
  },
  {
    title: "Expat Children: Navigating Between Identities and Cultures",
    description:
      "Psychologist's recommendations for raising children in multilingual and cross-cultural environments.",
    date: "24.09.2024",
    category: "Education",
    link: "https://migronis.com/blog/expat-children-navigating-between-identities-and-cultures",
    type: "article",
    image: "https://i.ytimg.com/vi/13AnT8w8oZQ/maxresdefault.jpg",
  },
  {
    title: "Best Citizenship Programs in the Caribbean",
    description:
      "Want more freedom to travel and do business? Caribbean citizenship gives you financial flexibility and freedom of movement.",
    date: "16.09.2024",
    category: "Immigration",
    link: "https://migronis.com/blog/comparison-of-caribbean-citizenship-by-investment-programs",
    type: "article",
    image: "https://i.ytimg.com/vi/dvCQeUu1rsQ/maxresdefault.jpg",
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
    title: "Sargassum on the Mexican Riviera: 2025–2026 Outlook for Expats",
    description:
      "How the sargassum invasion is reshaping Mexico's Caribbean coast for developers and expats.",
    date: "28.06.2025",
    category: "Immigration",
    link: "https://migronis.com/blog/sarhassumovoe-nashestvye-na-meksykanskoy-ryvere-prohnoz-20252026-dlya-ekspatov-y-developerov",
    type: "article",
    image: "https://i.ytimg.com/vi/Gpn9RLJiaMo/maxresdefault.jpg",
  },
  {
    title: "Citizenship for Cryptocurrency: Top 8 Countries for Investors",
    description:
      "Where to obtain residency and citizenship using crypto assets around the world.",
    date: "29.09.2024",
    category: "Investment",
    link: "https://migronis.com/blog/top-countries-that-give-second-citizenship-or-residence-permit-to-crypto-investors",
    type: "article",
    image: "https://i.ytimg.com/vi/KTXur3_-yvg/maxresdefault.jpg",
  },
];
