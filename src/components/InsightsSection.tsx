import Link from "next/link";
import { featuredInsight, insightArticles } from "@/data/insights";

export default function InsightsSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #c87d33 0%, #e6cc53 25%, #02abe3 70%, #608b8c 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto py-10 lg:py-16 content-px">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h2 className="f-section-title text-black">Insights</h2>
          <Link
            href="/insights"
            className="f-btn bg-black text-white hidden sm:flex items-center justify-center flex-shrink-0 px-6 h-[36px]"
          >
            read all
          </Link>
        </div>

        {/* Featured article */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <a
            href={featuredInsight.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 rounded overflow-hidden min-h-[200px] lg:min-h-[424px] relative block group"
          >
            <img
              src={
                featuredInsight.type === "video" && featuredInsight.videoId
                  ? `https://i.ytimg.com/vi/${featuredInsight.videoId}/maxresdefault.jpg`
                  : featuredInsight.image || ""
              }
              alt={featuredInsight.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {featuredInsight.type === "video" && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg ml-0.5">▶</span>
                </div>
              </div>
            )}
          </a>
          <div className="lg:col-span-2 flex flex-col justify-end">
            <p className="f-nav text-black/40" style={{ fontSize: 12 }}>
              {featuredInsight.category}
            </p>
            <p className="f-body text-black/40 mt-1">{featuredInsight.date}</p>
            <h3 className="f-article-title text-black mt-2">
              {featuredInsight.title}
            </h3>
            <p className="f-body text-black/60 mt-2 lg:mt-3">
              {featuredInsight.description}
            </p>
          </div>
        </div>

        {/* Latest 3 articles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {insightArticles.slice(0, 3).map((article) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="rounded overflow-hidden min-h-[140px] lg:min-h-[200px] relative">
                <img
                  src={
                    article.videoId
                      ? `https://i.ytimg.com/vi/${article.videoId}/mqdefault.jpg`
                      : article.image || ""
                  }
                  alt={article.title}
                  className="w-full h-full object-cover min-h-[140px] lg:min-h-[200px] group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {article.type === "video" && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-sm ml-0.5">▶</span>
                    </div>
                  </div>
                )}
              </div>
              <p className="f-body text-black/40 mt-2 lg:mt-3">{article.date}</p>
              <h4 className="f-btn text-black mt-1 group-hover:text-black/60 transition-colors">
                {article.title}
              </h4>
            </a>
          ))}
        </div>

        <Link
          href="/insights"
          className="f-btn bg-black text-white flex sm:hidden items-center justify-center mt-6 w-full h-[48px]"
        >
          read all
        </Link>
      </div>
    </section>
  );
}
