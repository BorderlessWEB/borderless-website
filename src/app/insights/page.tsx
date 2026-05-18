import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Insights — BORDERLESS",
  description:
    "Articles, guides, and analysis about global citizenship, investment, education, and travel.",
};

const articles = [
  {
    title: "The Future of Citizenship by Investment in 2026",
    category: "Citizenship",
    date: "March 2026",
    excerpt:
      "A comprehensive overview of how CBI programs are evolving, new entrants, and what investors should expect in the coming years.",
  },
  {
    title: "Why Sustainable Investing Is No Longer Optional",
    category: "Investment",
    date: "February 2026",
    excerpt:
      "ESG criteria are becoming mainstream. Here's how responsible investing is reshaping portfolios and delivering returns.",
  },
  {
    title: "Top 5 Countries for Digital Nomad Visas",
    category: "Relocation",
    date: "February 2026",
    excerpt:
      "From Portugal to Thailand — the best digital nomad visa programs compared by cost, speed, and quality of life.",
  },
  {
    title: "Giving Birth Abroad: A Complete Guide",
    category: "Education",
    date: "January 2026",
    excerpt:
      "Healthcare, citizenship rights, costs, and logistics — everything you need to know about international childbirth.",
  },
  {
    title: "How to Build a Global Real Estate Portfolio",
    category: "Investment",
    date: "January 2026",
    excerpt:
      "Diversifying across markets, managing currency risk, and finding undervalued opportunities in emerging destinations.",
  },
  {
    title: "Family Travel That Educates: Our Top Picks",
    category: "Travel",
    date: "December 2025",
    excerpt:
      "Trips designed to inspire curiosity in children — from historical sites to science destinations around the world.",
  },
];

const categories = [
  "All",
  "Citizenship",
  "Investment",
  "Relocation",
  "Education",
  "Travel",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Insights
          </h1>
          <p className="text-xl lg:text-2xl text-white/60 max-w-3xl leading-relaxed">
            Articles, guides, and analysis to help you make informed decisions
            about your global life.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  cat === "All"
                    ? "border-burgundy text-burgundy"
                    : "border-transparent text-gray-dark hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.title}
                href="#"
                className="group block"
              >
                <div className="bg-gray-light/50 h-48 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-5xl opacity-30">📄</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-dark">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-burgundy transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-dark text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
