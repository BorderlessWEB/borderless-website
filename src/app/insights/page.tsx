import VlogSection from "@/components/VlogSection";
import { featuredInsight, insightArticles } from "@/data/insights";

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
      <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

function Badge({ category, source }: { category: string; source?: string }) {
  return (
    <span className="f-nav text-black/30" style={{ fontSize: 12 }}>
      {category}
      {source && <span className="ml-2 text-[#c87d33]">· {source}</span>}
    </span>
  );
}

export default function InsightsPage() {
  const articles = insightArticles;

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
          <h1 className="f-page-title text-black">Insights</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto pt-6 lg:pt-8 content-px">
          <p className="f-body text-black/60 max-w-[700px]">
            A curated selection of places for a happy life and business — a unique
            channel you&apos;ll want to follow. We are happy to share these discoveries
            with our community.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto py-8 lg:py-12 content-px">

          {/* Featured */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 mb-8 lg:mb-12">
            <a
              href={featuredInsight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-3 group"
            >
              {featuredInsight.type === "video" && featuredInsight.videoId ? (
                <VideoThumb
                  videoId={featuredInsight.videoId}
                  className="min-h-[220px] lg:min-h-[424px]"
                />
              ) : featuredInsight.image ? (
                <ArticleThumb
                  image={featuredInsight.image}
                  className="min-h-[220px] lg:min-h-[424px]"
                />
              ) : null}
            </a>
            <div className="lg:col-span-2 flex flex-col justify-end">
              <Badge category={featuredInsight.category} />
              <p className="f-body text-black/40 mt-1">{featuredInsight.date}</p>
              <h3 className="f-article-title text-black mt-2">{featuredInsight.title}</h3>
              <p className="f-body text-black/60 mt-3">{featuredInsight.description}</p>
            </div>
          </div>

          {/* Row 1: 3 equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
            {articles.slice(0, 3).map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="group">
                <div className="mb-3">
                  <Badge category={a.category} />
                  <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{a.date}</span>
                </div>
                <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">{a.title}</h4>
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
            <a href={articles[3].link} target="_blank" rel="noopener noreferrer" className="lg:col-span-2 group">
              <div className="mb-3">
                <Badge category={articles[3].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{articles[3].date}</span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors text-lg">{articles[3].title}</h4>
              <p className="f-body text-black/50 mt-2">{articles[3].description}</p>
              {articles[3].videoId && (
                <VideoThumb videoId={articles[3].videoId} className="mt-4 min-h-[200px] lg:min-h-[300px]" />
              )}
            </a>
            <a href={articles[4].link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="mb-3">
                <Badge category={articles[4].category} />
                <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{articles[4].date}</span>
              </div>
              <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">{articles[4].title}</h4>
              <p className="f-body text-black/50 mt-2">{articles[4].description}</p>
              {articles[4].image && (
                <ArticleThumb image={articles[4].image} className="mt-4 min-h-[200px] lg:min-h-[340px]" />
              )}
            </a>
          </div>

          {/* Row 3: 3 square cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
            {articles.slice(5, 8).map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="group">
                {a.type === "video" && a.videoId ? (
                  <VideoThumb videoId={a.videoId} className="mb-4 aspect-square min-h-[200px]" />
                ) : a.image ? (
                  <ArticleThumb image={a.image} className="mb-4 aspect-square min-h-[200px]" />
                ) : null}
                <div className="mb-1">
                  <Badge category={a.category} />
                  <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{a.date}</span>
                </div>
                <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">{a.title}</h4>
                <p className="f-body text-black/50 mt-2">{a.description}</p>
              </a>
            ))}
          </div>

          {/* Row 4: 2 columns side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 lg:mb-12">
            {articles.slice(8, 10).map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "sm:order-2" : ""}`}>
                  <div className="mb-2">
                    <Badge category={a.category} />
                    <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{a.date}</span>
                  </div>
                  <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">{a.title}</h4>
                  <p className="f-body text-black/50 mt-2">{a.description}</p>
                </div>
                <div className={i % 2 === 1 ? "sm:order-1" : ""}>
                  {a.image && <ArticleThumb image={a.image} className="min-h-[160px] lg:min-h-[200px]" />}
                </div>
              </a>
            ))}
          </div>

          {/* Row 5: bottom 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {articles.slice(10, 12).map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="group">
                {a.type === "video" && a.videoId ? (
                  <VideoThumb videoId={a.videoId} className="min-h-[200px] lg:min-h-[280px] mb-4" />
                ) : a.image ? (
                  <ArticleThumb image={a.image} className="min-h-[200px] lg:min-h-[280px] mb-4" />
                ) : null}
                <div className="mb-2">
                  <Badge category={a.category} />
                  <span className="f-body text-black/30 ml-2" style={{ fontSize: 12 }}>{a.date}</span>
                </div>
                <h4 className="f-desc-bold text-black group-hover:text-black/60 transition-colors">{a.title}</h4>
                <p className="f-body text-black/50 mt-2">{a.description}</p>
              </a>
            ))}
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
