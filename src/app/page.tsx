import Link from "next/link";
import MapSection from "@/components/MapSection";
import VlogSection from "@/components/VlogSection";
import ReviewsSection from "@/components/ReviewsSection";
import InsightsSection from "@/components/InsightsSection";

export default function HomePage() {
  return (
    <>
      {/* Section 0: Hero */}
      <section className="relative bg-black">
        <div className="min-h-[100svh] lg:h-[900px] relative flex flex-col">
          {/* BG image — positioned lower so face isn't cut by header */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "url('/images/hero-sunset.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Hero content */}
          <div className="relative flex-1 flex items-end pb-[15vh] lg:pb-[120px]">
            <div className="max-w-[1400px] mx-auto w-full content-px">
              <div className="max-w-full lg:max-w-[650px]">
                <h1 className="f-hero-text text-white">
                  A platform for living, investing, and growing without borders
                </h1>
                <p className="f-hero-adv text-white/70 mt-5 lg:mt-6">
                  freedom · sustainability · smart investments · new luxury
                </p>
                {/* Watch Video button */}
                <a
                  href="https://www.youtube.com/watch?v=xUoq7mGeUJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 lg:mt-10 group"
                >
                  <span className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                    <span className="text-white text-sm ml-0.5">▶</span>
                  </span>
                  <span className="f-nav text-white/70 group-hover:text-white transition-colors uppercase tracking-wider">Watch Video</span>
                </a>
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

      {/* Section 1: Vision — full bleed image */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto pt-12 lg:pt-16 content-px">
          <h2 className="f-section-title text-black text-center mb-8 lg:mb-12">
            Borderless Vision
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[600px]">
          <div className="relative min-h-[300px] lg:min-h-[600px]">
            <img
              src="/images/vision-anatoliy.jpg"
              alt="Anatoliy Lyetayev"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 lg:px-16 xl:px-24 py-10 lg:py-16">
            <div>
              <span className="f-quote-mark text-black block text-5xl lg:text-7xl leading-none">&ldquo;</span>
              <blockquote className="f-desc-bold text-black text-xl lg:text-2xl -mt-2 lg:-mt-4">
                The world doesn&apos;t limit you.
              </blockquote>
              <p className="f-body text-black/70 mt-6 lg:mt-8 text-base lg:text-lg leading-relaxed">
                Freedom is not a destination — it&apos;s a system you build, one decision at a time. Over the last ten years, I&apos;ve moved across countries, always choosing the best place for my family, my capital, and my future.
              </p>
              <p className="f-body text-black/70 mt-4 text-base lg:text-lg leading-relaxed">
                Here, my guests and I share what actually works: how to choose where to live, where to invest, and how to travel with purpose.
              </p>
              <span className="f-quote-mark text-black block text-right text-5xl lg:text-7xl leading-none">&rdquo;</span>
              <p className="f-body text-black font-bold mt-2">Anatoliy Letaev</p>
              <p className="f-small text-black/40">Founder, Borderless</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Products intro */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1400px] mx-auto content-px">
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
        <div className="max-w-[1400px] mx-auto content-px">
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
      <InsightsSection />

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
      <div className="max-w-[1400px] mx-auto py-10 lg:py-16 content-px">
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
