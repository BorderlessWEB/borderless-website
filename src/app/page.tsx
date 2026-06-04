import Link from "next/link";
import MapSection from "@/components/MapSection";
import VlogSection from "@/components/VlogSection";
import ReviewsSection from "@/components/ReviewsSection";
import { featuredInsight, insightArticles } from "@/data/insights";

export default function HomePage() {
  return (
    <>
      {/* Section 0: Hero */}
      <section className="relative bg-black">
        <div className="min-h-[100svh] lg:h-[810px] relative flex flex-col">
          {/* BG image */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "url('/images/hero-sunset.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/60 to-transparent" />



          {/* Hero content */}
          <div className="relative flex-1 flex items-start pt-[25vh] lg:pt-[180px]">
            <div className="max-w-[1196px] mx-auto w-full px-4 lg:px-0">
              <div className="max-w-full lg:max-w-[500px]">
                <h1 className="f-hero-text text-white">
                  A platform for living, investing, and growing without borders
                </h1>
                <p className="f-hero-adv text-white/80 mt-6 lg:mt-8">
                  freedom · sustainability · smart investments · new luxury
                </p>
              </div>
            </div>
          </div>



          {/* Mobile scroll indicator */}
          <div className="lg:hidden relative py-6 flex justify-center">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Vision */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-[1196px] mx-auto py-12 lg:py-16 content-px">
          <h2 className="f-section-title text-black text-center mb-8 lg:mb-16">
            Borderless Vision
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <img
                src="/images/vision-anatoliy.jpg"
                alt="Anatoliy Lyetayev"
                className="w-full h-full object-cover rounded min-h-[200px] lg:min-h-[400px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="f-quote-mark text-black block">&ldquo;</span>
              <blockquote className="f-desc-bold text-black -mt-2 lg:-mt-4">
                The world doesn&apos;t limit you.
              </blockquote>
              <p className="f-body text-black mt-4 lg:mt-6">
                Freedom is not a destination — it&apos;s a system you build, one decision at a time. Over the last ten years, I&apos;ve moved across countries, always choosing the best place for my family, my capital, and my future.
              </p>
              <p className="f-body text-black mt-3 lg:mt-4">
                Here, my guests and I share what actually works: how to choose where to live, where to invest, and how to travel with purpose.
              </p>
              <span className="f-quote-mark text-black block text-right">&rdquo;</span>
              <p className="f-body text-black">Anatoliy Letaev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Products intro */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1196px] mx-auto content-px">
          <h2 className="f-section-title text-black mb-4 lg:mb-6">
            Borderless products
          </h2>
          <p className="f-desc-bold text-black">
            BORDERLESS is an ecosystem that unites projects about conscious global
            living. We create content and solutions for people who choose freedom —
            where to live, invest, learn, give birth, and grow.
          </p>
        </div>
      </section>

      {/* Section 3: Map with tabs */}
      <MapSection />

      {/* Section 4: Product cards grid */}
      <section className="pb-6 lg:pb-12">
        <div className="max-w-[1196px] mx-auto content-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <Link href="/passport-visas" className="group flex flex-col py-6 lg:py-12 border-b border-[#d9d9d9] lg:border-r lg:pr-12">
              <h3
                className="f-section-title text-black group-hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
              >
                Passport/visas
              </h3>
              <p className="f-body text-black/60 mt-3 lg:mt-4">
                Second citizenship and residence programs that give you freedom of
                movement, financial security, and a global safety net.
              </p>
              <span className="f-learn-more text-black mt-4 lg:mt-6 inline-block group-hover:translate-x-1 transition-transform">
                learn more →
              </span>
            </Link>
            <Link href="/investment" className="group flex flex-col py-6 lg:py-12 border-b border-[#d9d9d9] lg:pl-12">
              <h3
                className="f-section-title text-black group-hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
              >
                Investment
              </h3>
              <p className="f-body text-black/60 mt-3 lg:mt-4">
                Sustainable, responsible investments for people who think
                long-term and care about the planet as much as profit.
              </p>
              <span className="f-learn-more text-black mt-4 lg:mt-6 inline-block group-hover:translate-x-1 transition-transform">
                learn more →
              </span>
            </Link>
            <Link href="/education" className="group flex flex-col py-6 lg:py-12 border-b border-[#d9d9d9] lg:border-r lg:pr-12">
              <h3
                className="f-section-title text-black group-hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
              >
                Education
              </h3>
              <p className="f-body text-black/60 mt-3 lg:mt-4">
                Courses and guides for those who want to live borderless — from
                relocation to childbirth abroad. Practical, structured, empowering.
              </p>
              <span className="f-learn-more text-black mt-4 lg:mt-6 inline-block group-hover:translate-x-1 transition-transform">
                learn more →
              </span>
            </Link>
            <Link href="/travel" className="group flex flex-col py-6 lg:py-12 border-b border-[#d9d9d9] lg:pl-12">
              <h3
                className="f-section-title text-black group-hover:text-black/60 transition-colors"
                style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
              >
                Travel
              </h3>
              <p className="f-body text-black/60 mt-3 lg:mt-4">
                Curated journeys and educational trips for families who explore the
                world through geography and history — inspiring destinations and
                immersive experiences with meaning.
              </p>
              <span className="f-learn-more text-black mt-4 lg:mt-6 inline-block group-hover:translate-x-1 transition-transform">
                learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Insights */}
      <section style={{ background: 'linear-gradient(135deg, #c87d33 0%, #e6cc53 25%, #02abe3 70%, #608b8c 100%)' }}>
        <div className="max-w-[1196px] mx-auto py-10 lg:py-16 content-px">
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
                src={`https://i.ytimg.com/vi/${featuredInsight.videoId}/maxresdefault.jpg`}
                alt={featuredInsight.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg ml-0.5">▶</span>
                </div>
              </div>
            </a>
            <div className="lg:col-span-2 flex flex-col justify-end">
              <p className="f-nav text-black/40" style={{ fontSize: 12 }}>{featuredInsight.category}</p>
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
                    src={article.videoId ? `https://i.ytimg.com/vi/${article.videoId}/mqdefault.jpg` : (article.image || '')}
                    alt={article.title}
                    className="w-full h-full object-cover min-h-[140px] lg:min-h-[200px] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {article.type === 'video' && (
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

      {/* Section 6: Vlog */}
      <VlogSection />

      {/* Section 7: Reviews */}
      <ReviewsSection />

      {/* Section 8: CTA */}
      <CTASection />
    </>
  );
}

function CTASection() {
  return (
    <section style={{ backgroundColor: "#02abe3" }}>
      <div className="max-w-[1196px] mx-auto py-10 lg:py-16 content-px">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
          <div className="mb-2 lg:mb-0">
            <span className="f-cta-big block text-black">Join</span>
            <span className="f-cta-sub block mt-1 text-black">
              Borderless Community
            </span>
            <p className="f-body text-black/60 mt-4 max-w-[400px]">
              Subscribe to stay connected — get insights, travel stories, and investment opportunities delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-[343px]">
            <input
              type="text"
              placeholder="First and Last Name"
              className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4"
            />
            <label className="flex items-start gap-2 cursor-pointer text-black/60">
              <input type="checkbox" className="mt-1 accent-black" />
              <span className="text-xs leading-tight">
                I agree to the processing of personal data
              </span>
            </label>
            <button className="f-btn-lg bg-black text-white hover:opacity-90 transition-opacity w-full h-[54px] flex items-center justify-center gap-2 disabled:opacity-60">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
