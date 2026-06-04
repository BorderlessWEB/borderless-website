import Link from "next/link";
import MapSection from "@/components/MapSection";

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
              <p className="f-nav text-black/30 mb-2 lg:mb-3">Borderless</p>
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
              <p className="f-nav text-black/30 mb-2 lg:mb-3">Borderless</p>
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
              <p className="f-nav text-black/30 mb-2 lg:mb-3">Borderless</p>
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
              <p className="f-nav text-black/30 mb-2 lg:mb-3">Borderless</p>
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
            <div className="flex gap-3 lg:gap-6 overflow-x-auto no-scrollbar">
              <button className="f-nav whitespace-nowrap f-nav-active text-black">
                Insights
              </button>
              <button className="f-nav whitespace-nowrap text-black/30">
                Vlog
              </button>
              <button className="f-nav whitespace-nowrap text-black/30">
                Podcast
              </button>
            </div>
            <Link
              href="/insights"
              className="f-btn bg-black text-white hidden sm:flex items-center justify-center flex-shrink-0 px-6 h-[36px]"
            >
              read all
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="lg:col-span-3 bg-black/20 rounded flex items-center justify-center min-h-[200px] lg:min-h-[424px]">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full border-2 border-white/50 flex items-center justify-center cursor-pointer">
                <span className="text-white text-lg lg:text-xl ml-1">▶</span>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-end">
              <p className="f-body text-black/40 mb-1 lg:mb-2">12.03.2026</p>
              <h3 className="f-article-title text-black">
                A warmer world will hurt this group more than any other
              </h3>
              <p className="f-body text-black/60 mt-2 lg:mt-3">
                We need to help the world&apos;s poorest people adapt to climate
                change.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <Link href="/insights" className="group">
              <div className="bg-black/20 rounded flex items-center justify-center min-h-[140px] lg:min-h-[200px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <span className="text-white ml-0.5 text-sm">▶</span>
                </div>
              </div>
              <p className="f-body text-black/40 mt-2 lg:mt-3">28.02.2026</p>
              <h4 className="f-btn text-black mt-1 group-hover:text-black/60 transition-colors">
                The future of citizenship by investment in 2026
              </h4>
            </Link>
            <Link href="/insights" className="group">
              <div className="bg-black/20 rounded flex items-center justify-center min-h-[140px] lg:min-h-[200px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <span className="text-white ml-0.5 text-sm">▶</span>
                </div>
              </div>
              <p className="f-body text-black/40 mt-2 lg:mt-3">15.02.2026</p>
              <h4 className="f-btn text-black mt-1 group-hover:text-black/60 transition-colors">
                Why sustainable investing is no longer optional
              </h4>
            </Link>
            <Link href="/insights" className="group">
              <div className="bg-black/20 rounded flex items-center justify-center min-h-[140px] lg:min-h-[200px]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <span className="text-white ml-0.5 text-sm">▶</span>
                </div>
              </div>
              <p className="f-body text-black/40 mt-2 lg:mt-3">01.02.2026</p>
              <h4 className="f-btn text-black mt-1 group-hover:text-black/60 transition-colors">
                Top 5 countries for digital nomad visas
              </h4>
            </Link>
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
      <section className="py-8 lg:py-12">
        <div className="max-w-[1196px] mx-auto content-px">
          <div className="flex items-center justify-between mb-4 lg:mb-8">
            <h2 className="f-desc-bold text-black">
              Featured Experiences / Vlog
            </h2>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black">
                ←
              </button>
              <button className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black">
                →
              </button>
            </div>
          </div>
          <div className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-[160px] lg:w-[220px]">
                <div className="bg-black rounded flex items-center justify-center cursor-pointer h-[110px] lg:h-[140px]">
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                    <span className="text-white text-sm ml-0.5">▶</span>
                  </div>
                </div>
                <p className="f-body text-black/60 mt-2 line-clamp-2">
                  Мексика 2025: жизнь, цены, ВНЖ
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Reviews */}
      <section>
        <div className="max-w-[1196px] mx-auto py-6 lg:py-8 content-px">
          <div className="border-t-[2px] border-[#d9d9d9]" />
          <div className="flex flex-col lg:flex-row items-start justify-between py-6 lg:py-8 gap-4 lg:gap-6">
            <div className="flex items-start gap-4 lg:gap-6 w-full lg:w-auto">
              <h3 className="f-heading-md text-black flex-shrink-0">
                Text<br />reviews
              </h3>
              <div className="flex gap-2 mt-1 lg:mt-2">
                <button className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black">
                  ←
                </button>
                <button className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black">
                  →
                </button>
              </div>
            </div>
            <div className="flex gap-3 lg:gap-[25px] overflow-x-auto no-scrollbar w-full -mx-4 px-4 lg:mx-0 lg:px-0 lg:w-auto">
              {[1, 2].map((i) => (
                <div key={i} className="flex-shrink-0 w-[260px] lg:w-[345px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-[#d9d9d9]">
                      <span className="text-sm text-black">J</span>
                    </div>
                    <div>
                      <p className="f-review-name text-black">JOhn Doe</p>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s} className="text-[#f5c518]" style={{ fontSize: 14 }}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="f-body text-black/60">
                    I was choosing between several companies, but settled on
                    Migronis. For me, the competence and speed of answers played a
                    key role.
                  </p>
                  <p className="f-body mt-2 text-black/40">2 month ago</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b-[2px] border-[#d9d9d9]" />
        </div>
      </section>

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
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
