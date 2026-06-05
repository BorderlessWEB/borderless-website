import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function TravelPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
          <h1 className="f-page-title text-black">Travel</h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-[1400px] mx-auto content-px">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="f-heading-md text-black mb-4">Discover our experience</h2>
              <p className="f-desc-bold text-black mb-4">
                A map of the New World and the thinking of free people. We explore cities and how they develop to find special places on the planet for borderless living.
              </p>
              <p className="f-body text-black/60">
                We discover and show opportunities for impact investment, fulfilling lifestyle, education for children, and enjoyable remote work. We are embracing the prospects of the new world, sustainable growth, and an economy aligned with the approaching third industrial revolution. Based on these findings and experience, we develop a methodology that lets you adapt smoothly to the future and take full advantage of the New World.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#eeeeee] flex items-center justify-center min-h-[250px] lg:min-h-[400px] rounded">
                <div className="w-[55px] h-[55px] rounded-full border-2 border-black/30 flex items-center justify-center cursor-pointer">
                  <span className="text-black ml-1 text-lg">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Quote ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto content-px flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img src="/images/travel-anatoliy.jpg" alt="Anatoliy Letaev" className="w-full h-full object-cover rounded min-h-[250px] lg:min-h-[400px]" />
          </div>
          <div className="lg:w-1/2">
            <span className="f-quote-mark text-black block">"</span>
            <blockquote className="f-desc-bold text-black -mt-4">
              Every trip should be about something bigger than sightseeing. It's about understanding how the world works — through geography, culture, and the people who shape each place.
            </blockquote>
            <p className="f-body text-black mt-6">
              We orient ourselves not on popular destinations, but on locations where we can tell the most interesting, unusual, and inspiring story. There is no shortage of place reviews — but there is a deficit of content that amazes, inspires, and expands your worldview.
            </p>
            <p className="f-body text-black mt-4">
              Our journeys are both exploration and education — a way to grow together and to live without borders.
            </p>
            <span className="f-quote-mark text-black block text-right">"</span>
            <p className="f-body text-black">Anatoliy Letaev</p>
          </div>
        </div>
      </section>

      {/* ── Location Evaluation Criteria ── */}
      <section className="bg-[#f5f5f7] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto content-px">
          <h2 className="f-section-title text-black text-center mb-3">How We Evaluate Locations</h2>
          <p className="f-body text-black/50 text-center mb-12 lg:mb-20 max-w-[600px] mx-auto">
            Every location is assessed through a unique methodology, built on experience across dozens of countries and refined with each new discovery.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              "Natural wealth & eco-friendliness",
              "Safety & crime rate",
              "Immigration & bureaucracy",
              "Cost of living",
              "Education & infrastructure for children",
              "Healthcare",
              "Real estate",
              "Taxes",
              "Investment opportunities",
              "Community & integration",
              "Transportation infrastructure",
              "Electricity & communications",
              "Leisure opportunities",
              "Feel — the authentic spirit of the place",
              "Scalable success stories",
              "Climate resilience & future outlook",
            ].map((criterion) => (
              <div key={criterion} className="bg-white p-4 lg:p-5 flex items-center">
                <p className="f-body text-black/60 text-[13px] sm:text-sm leading-snug">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto py-12 lg:py-16 content-px">
          <h2 className="f-heading-md text-black mb-4">Destinations we explore</h2>
          <p className="f-body text-black/60 mb-8 lg:mb-12" style={{ maxWidth: "800px" }}>
            We choose locations not by popularity, but by the ability to show something unique, inspiring, and special. Each destination reveals a different facet of the borderless future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
            {[
              {
                name: "Bali",
                desc: "Where sustainable living meets ancient wisdom. Eco-communities, wellness, and a hub for global nomads building the future.",
              },
              {
                name: "Singapore",
                desc: "The world's most efficient city-state. Innovation, infrastructure, and a model for what urban life can become.",
              },
              {
                name: "Tulum",
                desc: "Where Mexican Caribbean beauty meets a new generation of conscious travelers and entrepreneurs.",
              },
              {
                name: "Buenos Aires",
                desc: "The cultural capital of South America. Rich history, European architecture, and a vibrant creative scene.",
              },
              {
                name: "Brazil",
                desc: "A continent of opportunity — from Río to the new economy. A strategic location for borderless living and investment.",
              },
              {
                name: "Argentina",
                desc: "Untamed landscapes and a culture of resilience. A place to understand where the new world is heading.",
              },
            ].map((dest) => (
              <div key={dest.name} className="bg-white p-6">
                <h3 className="f-desc-bold text-black mb-3">{dest.name}</h3>
                <p className="f-body text-black/60">{dest.desc}</p>
                <button className="f-learn-more text-black mt-4 inline-block">learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases: Where We've Been ── */}
      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto py-12 lg:py-16 content-px">
          <div className="flex gap-4 lg:gap-6 mb-4 overflow-x-auto no-scrollbar">
            <button className="f-nav whitespace-nowrap text-white/30">Passport/visas</button>
            <button className="f-nav whitespace-nowrap f-nav-active text-white">Travel</button>
            <button className="f-nav whitespace-nowrap text-white/30">Investment</button>
            <button className="f-nav whitespace-nowrap text-white/30">Education</button>
          </div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="f-section-title text-white">Our Formats</h2>
            <div className="flex gap-2">
              <button className="w-[36px] h-[36px] rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-white text-sm">←</span>
              </button>
              <button className="w-[36px] h-[36px] rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {[
              { place: "Locations", desc: "In-depth 50–55 min explorations. We evaluate each place across the BORDERLESS criteria — from nature, safety, and taxes to what the city will become in 10–15 years." },
              { place: "Dives", desc: "Shorter 15–25 min deep dives into a single idea, story, or contradiction. Closer, more personal — about meaning, philosophy, and the spirit of a place." },
            ].map((item) => (
              <div key={item.place} className="bg-white/5 rounded p-6" style={{ minHeight: "200px" }}>
                <p className="f-case-title text-white" style={{ fontSize: "28px", lineHeight: "34px" }}>{item.place}</p>
                <p className="f-body text-white/50 mt-4">{item.desc}</p>
                <button className="f-btn text-white border border-white/20 px-4 py-2 mt-4 hover:bg-white/10 transition-colors">
                  learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <InsightsSection />

      {/* ── Reviews ── */}
      <ReviewsSection />

      {/* ── Partnership / CTA ── */}
      <section style={{ backgroundColor: "#1f4a2e" }}>
        <div className="max-w-[1400px] mx-auto py-10 lg:py-16 content-px">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
            <div>
              <span className="f-cta-big block text-white">Discover</span>
              <span className="f-cta-sub block mt-1 text-white">the map of the New World with us</span>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[343px]">
              <input type="text" placeholder="First and Last Name" className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <input type="email" placeholder="Email" className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <input type="tel" placeholder="Phone Number" className="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <label className="flex items-start gap-2 cursor-pointer text-white/60">
                <input type="checkbox" className="mt-1 accent-black" />
                <span className="text-xs leading-tight">I agree to the processing of personal data</span>
              </label>
              <button className="f-btn-lg bg-white text-black hover:opacity-90 transition-opacity w-full h-[54px] flex items-center justify-center gap-2 disabled:opacity-60">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
