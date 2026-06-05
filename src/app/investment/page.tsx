"use client";

import { useRef } from "react";
import Link from "next/link";
import ReviewsSection from "@/components/ReviewsSection";
import VlogSection from "@/components/VlogSection";
import InsightsSection from "@/components/InsightsSection";
import InlineForm from "@/components/InlineForm";

/* ── Investment Directions (aligned with BORDERLESS strategy) ── */
const investmentProjects = [
  {
    tag: "Sustainable real estate",
    title: "Real Estate of the Future",
    subtitle: "Eco-communities in special places",
    desc: "Impact investment in eco-architecture and real estate of the future — communities built in special places on the planet for borderless living. Where environmental friendliness, community integration, and long-term value come together.",
    bg: "#e6cc53",
  },
  {
    tag: "Location switching",
    title: "Investments Without Borders",
    subtitle: "New locations, new conditions",
    desc: "We open access to investment possibilities in new locations — with new taxation conditions and legal opportunities for changing location, free from the paradigm of belonging to one country.",
    bg: "#7ec8e3",
  },
  {
    tag: "Nomad economy",
    title: "The New World Economy",
    subtitle: "Aligned with the third industrial revolution",
    desc: "We support the development of the nomad economy and build an ecosystem for a fulfilling lifestyle — sustainable growth and an economy aligned with the approaching third industrial revolution.",
    bg: "#e6cc53",
  },
];

/* ── Video Reviews (investment-related) ── */
const videoReviews = [
  { id: "DcnY2h1vIos", title: "Why Costa Rica? Nature, Safety & Comfort" },
  { id: "Z1sXoccTEJI", title: "How investors earn on shopping centers" },
  { id: "KTXur3_-yvg", title: "Portugal — ideal choice for crypto investor" },
];

/* ── Cases ── */
const investmentCases = [
  {
    id: "DcnY2h1vIos",
    title: "Why Costa Rica?\nNature, Safety & Comfort",
    desc: "Learn why investors choose Costa Rica for sustainable real estate projects. Eco-communities in one of the most biodiverse regions on Earth.",
  },
];

export default function InvestmentPage() {
  const videoScrollRef = useRef<HTMLDivElement>(null);

  function scrollVideos(dir: "left" | "right") {
    if (!videoScrollRef.current) return;
    videoScrollRef.current.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto content-px pt-[72px] pb-8 lg:pb-12">
          {/* Title block */}
          <div className="flex flex-col justify-end min-h-[100px] lg:min-h-[200px] pb-4 lg:pb-8">
            <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
            <h1 className="f-page-title text-black">Investment</h1>
          </div>

          {/* Circles + Text row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-8 lg:py-16">
            {/* Venn Diagram Circles */}
            <div className="lg:w-[45%] flex items-center justify-center">
              <div
                className="relative w-[280px] h-[280px] lg:w-[440px] lg:h-[400px] group"
              >
                {/* Circle 1 — Sustainability (light blue, top) */}
                <div
                  className="absolute rounded-full transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:-translate-x-1"
                  style={{
                    width: "65%", height: "65%",
                    top: "0", left: "18%",
                    background: "rgba(126, 200, 227, 0.55)",
                  }}
                >
                  <span className="absolute top-[20%] left-1/2 -translate-x-1/2 f-nav text-black/50 text-[10px] lg:text-[12px] tracking-wider text-center">Sustainability</span>
                </div>
                {/* Circle 2 — Return (peach/salmon, bottom-left) */}
                <div
                  className="absolute rounded-full transition-transform duration-700 ease-out group-hover:translate-y-3 group-hover:-translate-x-3"
                  style={{
                    width: "65%", height: "65%",
                    bottom: "0", left: "0",
                    background: "rgba(240, 180, 140, 0.55)",
                  }}
                >
                  <span className="absolute bottom-[20%] left-[30%] -translate-x-1/2 f-nav text-black/50 text-[10px] lg:text-[12px] tracking-wider">Return</span>
                </div>
                {/* Circle 3 — For expats (pink/rose, bottom-right) */}
                <div
                  className="absolute rounded-full transition-transform duration-700 ease-out group-hover:translate-y-2 group-hover:translate-x-3"
                  style={{
                    width: "65%", height: "65%",
                    bottom: "0", right: "0",
                    background: "rgba(229, 150, 180, 0.55)",
                  }}
                >
                  <span className="absolute bottom-[20%] right-[20%] f-nav text-black/50 text-[10px] lg:text-[12px] tracking-wider">For expats</span>
                </div>
                {/* Center intersection label */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="f-nav-active text-black/60 text-center text-[11px] lg:text-[13px] tracking-wider">BORDERLESS<br/>INVESTMENT</span>
                </div>
              </div>
            </div>

            {/* Right side — text */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <h2 className="f-heading-md text-black mb-4">Manage your possibilities</h2>
              <p className="f-body-lg text-black/60">
                Borderless Investment is where sustainability, growing opportunities, and freedom meet. We make investments possible without government constraints — in new places, with new taxation conditions and the power of the nomad economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps Section ── */}
      <section className="bg-white pb-8 lg:pb-12">
        <div className="max-w-[1400px] mx-auto content-px">

          {/* ── Steps: Learn Investment Opportunities ── */}
          <div>
            <h3 className="f-heading-md text-black mb-6 lg:mb-8">
              Embrace · Discover · Manage
            </h3>
            {/* Step tabs */}
            <div className="flex gap-0 border-t border-black mb-8">
              {["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"].map((step, i) => (
                <div
                  key={step}
                  className={`flex-1 pt-3 pr-4 ${i === 0 ? "border-t-2 border-black -mt-[1px]" : ""}`}
                >
                  <p className={`f-nav ${i === 0 ? "text-black font-bold" : "text-black/30"}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
            {/* Step content */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-[380px] flex-shrink-0">
                <h4 className="f-desc-bold text-black text-lg lg:text-xl">
                  Investments in real estate of the future — eco-communities in special places on the planet.
                </h4>
              </div>
              <div className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar flex-1">
                {[
                  { name: "Sustainable Real Estate", slug: "#" },
                  { name: "New Taxation Conditions", slug: "#" },
                  { name: "Nomad Economy", slug: "#" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.slug}
                    className="flex-shrink-0 border border-[#d9d9d8] px-6 py-8 flex items-center justify-center min-w-[180px] lg:min-w-[200px] hover:bg-black/5 transition-colors"
                  >
                    <span className="f-nav text-black text-center uppercase">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Projects for Investment ── */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto py-12 lg:py-20 content-px">
          <h2 className="f-section-title text-black mb-10 lg:mb-16">
            Directions for<br />investment
          </h2>

          <div className="flex flex-col gap-8 lg:gap-12">
            {investmentProjects.map((project, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <div
                  key={project.title}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-8`}
                >
                  {/* Colored visual */}
                  <div
                    className="lg:w-1/2 min-h-[200px] lg:min-h-[350px] flex items-end p-6 lg:p-10"
                    style={{ backgroundColor: project.bg }}
                  >
                    <div>
                      <p className="f-nav text-black/50 mb-1">{project.tag}</p>
                      <h3 className="f-heading-md text-black">{project.title}</h3>
                      <p className="f-desc-bold text-black mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <p className="f-body text-black/60 mb-4 lg:mb-6">{project.desc}</p>
                    <button className="f-learn-more text-black underline underline-offset-2 self-start hover:text-black/60 transition-colors">
                      learn more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Investment Workflow ── */}
      <section className="bg-[#f5f5f7] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto content-px">
          <h2 className="f-section-title text-black text-center mb-3">Investment Workflow</h2>
          <p className="f-body text-black/50 text-center mb-12 lg:mb-20 max-w-[500px] mx-auto">
            From understanding your values to growing opportunities — we guide sustainable investments in new locations, step by step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { num: "01", title: "Consultation", desc: "Understand your goals and values." },
              { num: "02", title: "Selection", desc: "We suggest sustainable projects in special places on the planet, tailored to your values." },
              { num: "03", title: "Investment", desc: "We handle the bureaucratic aspects, leaving you to invest safely and meaningfully." },
              { num: "04", title: "Growth", desc: "Gain growing opportunities and the satisfaction of making a positive impact." },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <span className="text-[#c87d33] text-4xl lg:text-5xl font-bold">{step.num}</span>
                <h3 className="f-desc-bold text-black mt-4 text-lg">{step.title}</h3>
                <p className="f-body text-black/50 mt-3 text-sm leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section style={{ background: "linear-gradient(135deg, #f5a0b8 0%, #f0c27f 100%)" }}>
        <div className="max-w-[1400px] mx-auto py-12 lg:py-16 content-px">
          {/* Category tabs */}
          <div className="flex gap-4 lg:gap-6 mb-4 overflow-x-auto no-scrollbar">
            <button className="f-nav whitespace-nowrap text-black/30">Passport/visas</button>
            <button className="f-nav whitespace-nowrap text-black/30">Travel</button>
            <button className="f-nav whitespace-nowrap f-nav-active text-black">Investment</button>
            <button className="f-nav whitespace-nowrap text-black/30">Education</button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="f-section-title text-black">Cases</h2>
            <div className="flex gap-2">
              <button className="w-[36px] h-[36px] rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors">
                <span className="text-black text-sm">←</span>
              </button>
              <button className="w-[36px] h-[36px] rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors">
                <span className="text-black text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Featured case */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <a
              href={`https://www.youtube.com/watch?v=${investmentCases[0].id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded overflow-hidden min-h-[250px] lg:min-h-[400px] group"
            >
              <img
                src={`https://i.ytimg.com/vi/${investmentCases[0].id}/maxresdefault.jpg`}
                alt={investmentCases[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg ml-0.5">▶</span>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-center">
              <h3 className="f-case-title text-black whitespace-pre-line mb-4">
                {investmentCases[0].title}
              </h3>
              <p className="f-body text-black/60 mb-6">{investmentCases[0].desc}</p>
              <button className="f-btn text-black border border-black/20 px-6 py-3 self-start hover:bg-black/10 transition-colors">
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Reviews ── */}
      <section className="py-8 lg:py-10">
        <div className="max-w-[1400px] mx-auto content-px">
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <h3 className="f-heading-md text-black">
              Video<br />reviews
            </h3>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button
                onClick={() => scrollVideos("left")}
                className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollVideos("right")}
                className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
              >
                →
              </button>
            </div>
          </div>
          <div
            ref={videoScrollRef}
            className="flex gap-3 lg:gap-[25px] overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {videoReviews.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[240px] lg:w-[345px] group"
              >
                <div className="relative w-full h-[140px] lg:h-[200px] rounded overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-sm ml-0.5">▶</span>
                    </div>
                  </div>
                </div>
                <p className="f-video-title mt-2 text-black group-hover:text-black/60 transition-colors">
                  {v.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Text Reviews (shared component) ── */}
      <ReviewsSection />

      {/* ── Get a Free Consultation ── */}
      <section style={{ backgroundColor: "#1f4a2e" }}>
        <div className="max-w-[1400px] mx-auto py-10 lg:py-16 content-px">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
            <div>
              <span className="f-cta-big block text-white">Embrace</span>
              <span className="f-cta-sub block mt-1 text-white">your freedom to invest without borders</span>
            </div>
            <InlineForm
              formKey="InvestmentConsultation"
              pageSource="/investment"
              inputClassName="f-input bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none px-4"
              buttonClassName="f-btn-lg bg-white text-black hover:opacity-90 transition-opacity"
              inputWidth="w-full lg:w-[343px]"
            />
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <InsightsSection />

      {/* ── Featured Experiences / Vlog ── */}
      <VlogSection />
    </>
  );
}
