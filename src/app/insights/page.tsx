import Link from "next/link";
import VlogSection from "@/components/VlogSection";

/* ── Content data ── */

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
  type: "article" | "video";
  videoId?: string;
  image?: string;
  layout?: "horizontal" | "vertical" | "square";
}

const featuredVideo = {
  id: "8ALLswaCB04",
  title: "The India Retreat That Changed My Life. EKAM",
  description:
    "A deeply personal journey through India's spiritual heartland — exploring EKAM, meditation, and the retreat that reshaped Anatoliy's perspective on life and business.",
  date: "20.05.2026",
  category: "Vlog",
};

const articles: Article[] = [
  // Row 1: 3 articles (text + image)
  {
    title: "Costa Rica: Relocation in 2025 — A Complete Guide",
    description:
      "Everything you need to know about moving to Costa Rica — residency programs, cost of living, and why expats love it.",
    date: "16.07.2025",
    category: "Immigration",
    link: "https://migronis.com/blog/costa-rica-relocation-in2025",
    type: "article",
    image: `https://i.ytimg.com/vi/DcnY2h1vIos/maxresdefault.jpg`,
    layout: "horizontal",
  },
  {
    title: "Sargassum on the Mexican Riviera: 2025–2026 Outlook for Expats",
    description:
      "How the sargassum invasion is reshaping Mexico's Caribbean coast for developers and expats.",
    date: "28.06.2025",
    category: "Immigration",
    link: "https://migronis.com/blog/sarhassumovoe-nashestvye-na-meksykanskoy-ryvere-prohnoz-20252026-dlya-ekspatov-y-developerov",
    type: "article",
    image: `https://i.ytimg.com/vi/Gpn9RLJiaMo/maxresdefault.jpg`,
    layout: "horizontal",
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
    layout: "horizontal",
  },

  // Row 2: wide article + tall article
  {
    title: "Chile 2026: Why Expats Are Moving Here Now",
    description:
      "Stories from expats who chose Chile — cost of living, visa options, and why it's trending in 2026.",
    date: "01.04.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=nsFkDr_yeIs",
    type: "video",
    videoId: "nsFkDr_yeIs",
    layout: "horizontal",
  },
  {
    title: "Citizenship for Cryptocurrency: Top 8 Countries for Investors",
    description:
      "Where to obtain residency and citizenship using crypto assets around the world.",
    date: "29.09.2024",
    category: "Investment",
    link: "https://migronis.com/blog/top-countries-that-give-second-citizenship-or-residence-permit-to-crypto-investors",
    type: "article",
    image: `https://i.ytimg.com/vi/KTXur3_-yvg/maxresdefault.jpg`,
    layout: "vertical",
  },

  // Row 3: 3 columns
  {
    title: "Easter Island: A Father-Son Journey to the Heart of the Pacific",
    description:
      "How my son and I discovered an ancient world on the most remote inhabited island on Earth.",
    date: "01.04.2026",
    category: "Vlog",
    link: "https://www.youtube.com/watch?v=82oOUUkUblU",
    type: "video",
    videoId: "82oOUUkUblU",
    layout: "square",
  },
  {
    title: "Golden Visa: Portugal or Spain? Comparison of Programs",
    description:
      "A detailed comparison of two of Europe's most popular residency-by-investment paths.",
    date: "23.09.2024",
    category: "Visas",
    link: "https://migronis.com/blog/golden-visa-portugal-vs-spain-comparative-analysis-of-investment-programs",
    type: "article",
    image: `https://i.ytimg.com/vi/WIv59BX3Bxs/maxresdefault.jpg`,
    layout: "square",
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
    layout: "square",
  },

  // Row 4: 2 columns (text left + video right, then inverted)
  {
    title: "Where to Live in Portugal: 10 Best Cities to Move To",
    description:
      "A comprehensive guide to relocation in one of the most beautiful countries in Western Europe.",
    date: "03.10.2024",
    category: "Guides",
    link: "https://migronis.com/blog/where-to-live-in-portugal-10-best-cities-to-move-to-in-2024",
    type: "article",
    image: `https://i.ytimg.com/vi/fCD5giZAQ6Y/maxresdefault.jpg`,
    layout: "horizontal",
  },
  {
    title: "Expat Children: Navigating Between Identities and Cultures",
    description:
      "Psychologist's recommendations for raising children in multilingual and cross-cultural environments.",
    date: "24.09.2024",
    category: "Education",
    link: "https://migronis.com/blog/expat-children-navigating-between-identities-and-cultures",
    type: "article",
    image: `https://i.ytimg.com/vi/13AnT8w8oZQ/maxresdefault.jpg`,
    layout: "horizontal",
  },

  // Row 5: bottom featured
  {
    title: "Best Citizenship Programs in the Caribbean",
    description:
      "Want more freedom to travel and do business? Caribbean citizenship gives you financial flexibility and freedom of movement.",
    date: "16.09.2024",
    category: "Immigration",
    link: "https://migronis.com/blog/comparison-of-caribbean-citizenship-by-investment-programs",
    type: "article",
    image: `https://i.ytimg.com/vi/dvCQeUu1rsQ/maxresdefault.jpg`,
    layout: "horizontal",
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
    layout: "vertical",
  },
];

/* ── Components ── */

function VideoThumb({ videoId, className = "" }: { videoId: string; className?: string }) {
  return (
    <div className={`relative rounded overflow-hidden ${className}`}>
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white ml-0.5">▶</span>
        </div>
      </div>
    </div>
  );
}

function ArticleThumb({ image, className = "" }: { image: string; className?: string }) {
  return (
    <div className={`relative rounded overflow-hidden ${className}`}>
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="f-nav text-black/30" style={{ fontSize: 12 }}>
      {category}
    </span>
  );
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-[1196px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
          <h1 className="f-page-title text-black">Insights</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-[1196px] mx-auto pt-6 lg:pt-8 content-px">
          <p className="f-body text-black/60 max-w-[700px]">
            A curated selection of places for a happy life and business — a unique
            channel you&apos;ll want to follow. We are happy to share these discoveries
            with our community.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-white">
        <div className="max-w-[1196px] mx-auto py-8 lg:py-12 content-px">

          {/* Featured video — full width */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 mb-8 lg:mb-12">
            <a
              href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-3 group"
            >
              <VideoThumb
                videoId={featuredVideo.id}
                className="min-h-[220px] lg:min-h-[424px]"
              />
            </a>
            <div className="lg:col-span-2 flex flex-col justify-end">
              <CategoryBadge category={featuredVideo.category} />
              <p className="f-body text-black/40 mt-1">{featuredVideo.date}</p>
              <h3 className="f-article-title text-black mt-2">
                {featuredVideo.title}
              </h3>
              <p className="f-body text-black/60 mt-3">
                {featuredVideo.description}
              </p>
            </div>
          </div>

          {/* Row 1: 3 equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
            {articles.slice(0, 3).map((a, i) => (
              <a
                key={i}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="mb-3">
                  <CategoryBadge category={a.category} />
                  <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                    {a.date}
                  </span>
                </div>
                <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                  {a.title}
                </h4>
                <p className="f-body text-black/50 mt-2">{a.description}</p>
                {a.type === "video" && a.videoId ? (
                  <VideoThumb videoId={a.videoId} className="mt-4 min-h-[160px] lg:min-h-[200px]" />
                ) : a.image ? (
                  <ArticleThumb image={a.image} className="mt-4 min-h-[160px] lg:min-h-[200px]" />
                ) : null}
              </a>
            ))}
          </div>

          {/* Row 2: wide left + tall right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
            <a
              href={articles[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 group"
            >
              <div className="mb-3">
                <CategoryBadge category={articles[3].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                  {articles[3].date}
                </span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors text-lg">
                {articles[3].title}
              </h4>
              <p className="f-body text-black/50 mt-2">{articles[3].description}</p>
              {articles[3].videoId && (
                <VideoThumb videoId={articles[3].videoId} className="mt-4 min-h-[200px] lg:min-h-[300px]" />
              )}
            </a>
            <a
              href={articles[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="mb-3">
                <CategoryBadge category={articles[4].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                  {articles[4].date}
                </span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                {articles[4].title}
              </h4>
              <p className="f-body text-black/50 mt-2">{articles[4].description}</p>
              {articles[4].image && (
                <ArticleThumb image={articles[4].image} className="mt-4 min-h-[200px] lg:min-h-[340px]" />
              )}
            </a>
          </div>

          {/* Row 3: 3 square video/article cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
            {articles.slice(5, 8).map((a, i) => (
              <a
                key={i}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {a.type === "video" && a.videoId ? (
                  <VideoThumb videoId={a.videoId} className="mb-4 aspect-square min-h-[200px]" />
                ) : a.image ? (
                  <ArticleThumb image={a.image} className="mb-4 aspect-square min-h-[200px]" />
                ) : null}
                <div className="mb-1">
                  <CategoryBadge category={a.category} />
                  <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                    {a.date}
                  </span>
                </div>
                <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                  {a.title}
                </h4>
                <p className="f-body text-black/50 mt-2">{a.description}</p>
              </a>
            ))}
          </div>

          {/* Row 4: 2 columns — article with image on right, then inverted */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 lg:mb-12">
            {articles.slice(8, 10).map((a, i) => (
              <a
                key={i}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "sm:order-2" : ""}`}>
                  <div className="mb-2">
                    <CategoryBadge category={a.category} />
                    <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                      {a.date}
                    </span>
                  </div>
                  <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                    {a.title}
                  </h4>
                  <p className="f-body text-black/50 mt-2">{a.description}</p>
                </div>
                <div className={i % 2 === 1 ? "sm:order-1" : ""}>
                  {a.image && (
                    <ArticleThumb image={a.image} className="min-h-[160px] lg:min-h-[200px]" />
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Row 5: bottom feature — wide image left + text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <a
              href={articles[10].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {articles[10].image && (
                <ArticleThumb image={articles[10].image} className="min-h-[200px] lg:min-h-[280px] mb-4" />
              )}
              <div className="mb-2">
                <CategoryBadge category={articles[10].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                  {articles[10].date}
                </span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                {articles[10].title}
              </h4>
              <p className="f-body text-black/50 mt-2">{articles[10].description}</p>
            </a>
            <a
              href={articles[11].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {articles[11].videoId && (
                <VideoThumb videoId={articles[11].videoId} className="min-h-[200px] lg:min-h-[280px] mb-4" />
              )}
              <div className="mb-2">
                <CategoryBadge category={articles[11].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>
                  {articles[11].date}
                </span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">
                {articles[11].title}
              </h4>
              <p className="f-body text-black/50 mt-2">{articles[11].description}</p>
            </a>
          </div>

          {/* Load more */}
          <div className="flex justify-center mt-8">
            <button className="f-btn bg-black text-white flex items-center justify-center w-full sm:w-[224px] h-[54px] hover:opacity-90 transition-opacity">
              Show more
            </button>
          </div>
        </div>
      </section>

      {/* Vlog carousel */}
      <VlogSection />
    </>
  );
}
