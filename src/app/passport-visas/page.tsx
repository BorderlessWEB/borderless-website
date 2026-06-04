import Link from "next/link";
import ReviewsSection from "@/components/ReviewsSection";
import VlogSection from "@/components/VlogSection";

/* ── Data ── */

const citizenshipPrograms = [
  { name: "São Tomé e Príncipe", slug: "sao-tome-e-principe", desc: "The newest and most accessible program, offering the lowest entry point worldwide through the National Transformation Fund — a sustainable, government-backed investment." },
  { name: "Vanuatu", slug: "vanuatu", desc: "A fast-track citizenship program offering one of the quickest routes to a second passport. A straightforward, confidential option with zero income tax." },
  { name: "Grenada", slug: "grenada", desc: "A Caribbean passport that opens doors to the world, including the U.S. via the E-2 investor visa. Fast processing and a growing real estate market." },
  { name: "Antigua & Barbuda", slug: "antigua-and-barbuda", desc: "Perfect for families. Citizenship through contribution, real estate, or business investment, with visa-free travel to over 150 countries." },
  { name: "St Kitts & Nevis", slug: "st-kitts-and-nevis", desc: "The world's first citizenship-by-investment program. Obtain citizenship in months, gain visa-free access to 150+ countries." },
  { name: "St Lucia", slug: "st-lucia", desc: "A transparent program offering several routes — from government bonds to sustainable real estate projects." },
  { name: "Dominica", slug: "dominica", desc: "One of the most affordable programs globally. Transparent due diligence and no residency requirement." },
];

const residencyPrograms = [
  { name: "Portugal — Golden Visa", slug: "portugal-golden-visa", desc: "One of Europe's most prestigious residence programs. Obtain EU residency through qualified investments in funds or innovation." },
  { name: "Portugal — HQA Visa", slug: "portugal-hqa-visa", desc: "A fast-track residence for highly qualified professionals, entrepreneurs, and innovators." },
  { name: "Spain", slug: "spain", desc: "Flexible residence options for remote workers, entrepreneurs, and financially independent individuals." },
  { name: "Cyprus", slug: "cyprus", desc: "Multiple pathways to residency — from permanent residence through investment to flexible self-sufficient options." },
  { name: "Greece", slug: "greece", desc: "The most affordable Golden Visa in the EU through real estate investment." },
  { name: "USA — EB-5", slug: "us-eb5-visa", desc: "An investor visa granting permanent U.S. residency through qualifying business investment and job creation." },
  { name: "Brazil", slug: "brazil", desc: "Investor visas for local business, real estate, or innovation. Children born in Brazil get automatic citizenship." },
  { name: "Hungary", slug: "hungary", desc: "Guest Investor Residence Permit grants long-term EU residency through approved national funds." },
];

const videoReviews = [
  { id: "dvCQeUu1rsQ", title: "A Caribbean passport and the philosophy of freedom" },
  { id: "WIv59BX3Bxs", title: "Cascais: Life on the Portuguese Riviera" },
  { id: "DcnY2h1vIos", title: "Costa Rica: one of the best countries for life" },
  { id: "xUoq7mGeUJA", title: "Flag Theory: how to live without borders" },
];

const mediaMentions = [
  { source: "Forbes", quote: "Migronis is one of the leading companies helping HNWI obtain second citizenship." },
  { source: "Bloomberg", quote: "Investment migration is booming, and Migronis is at the forefront of this global trend." },
];

export default function PassportVisasPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-[1196px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
          <h1 className="f-page-title text-black">Passport/visas</h1>
        </div>
      </section>

      {/* ── Steps: What is required? ── */}
      <section className="py-6 lg:py-10">
        <div className="max-w-[1196px] mx-auto content-px">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="f-heading-md text-black">
              What is required to obtain a passport?
            </h2>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center text-black hover:bg-black/5 transition-colors">←</button>
              <button className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center text-black hover:bg-black/5 transition-colors">→</button>
            </div>
          </div>

          {/* Horizontal step tabs */}
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

          {/* Step content row */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-[380px] flex-shrink-0">
              <h3 className="f-desc-bold text-black text-lg lg:text-xl">
                Learn to transform chaos into new opportunities.
              </h3>
            </div>
            <div className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar flex-1">
              {[
                { name: "Vanuatu Relocation", slug: "vanuatu" },
                { name: "Costa Rica Relocation", slug: "costa-rica" },
                { name: "Grenada Relocation", slug: "grenada" },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/passport-visas/${item.slug}`}
                  className="flex-shrink-0 border border-[#d9d9d8] px-6 py-8 flex items-center justify-center min-w-[180px] lg:min-w-[200px] hover:bg-black/5 transition-colors"
                >
                  <span className="f-nav text-black text-center uppercase">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Migronis Section (dark) ── */}
      <section className="bg-[#191c1f]">
        <div className="max-w-[1196px] mx-auto py-10 lg:py-16 content-px">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <p className="f-nav text-white/40 mb-2">Borderless</p>
              <h2 className="f-heading-md text-white mb-6">Migronis</h2>
              <h3 className="f-desc-bold text-white mb-4">General Offer</h3>
              <p className="f-body text-white/60">
                Migronis helps people obtain second citizenship and residence permits through
                investment and legal programs. We make global mobility simple for your life,
                business, and family. Over 1,000 families have already trusted us with their
                journey to freedom.
              </p>
              <p className="f-body text-white/60 mt-4">
                For me, the competence and speed of answers to my questions played a key role,
                and not only during working hours. It feels like the company is working for the result.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded overflow-hidden min-h-[250px] lg:min-h-[350px]">
                <img
                  src="https://i.ytimg.com/vi/dvCQeUu1rsQ/maxresdefault.jpg"
                  alt="Migronis"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=dvCQeUu1rsQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[60px] h-[60px] rounded-full border-2 border-white/60 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="text-white text-xl ml-1">▶</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get a Free Consultation (gradient) ── */}
      <section style={{ background: "linear-gradient(135deg, #e582b4 0%, #02abe3 100%)" }}>
        <div className="max-w-[1196px] mx-auto py-10 lg:py-14 content-px">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div>
              <span className="f-cta-big block text-black">Get</span>
              <span className="f-cta-sub block text-black">a free consultation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="First and Last Name"
                className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[200px]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[200px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[200px]"
              />
              <button className="f-btn bg-black text-white px-8 h-[46px] flex items-center justify-center hover:opacity-90 transition-opacity">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Products ── */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1196px] mx-auto content-px">
          <h2 className="f-section-title text-black mb-8 lg:mb-12">Main Products</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Citizenship */}
            <div className="lg:w-1/2">
              <h3 className="f-desc-bold text-black mb-4 pb-4 border-b-2 border-black">Citizenship</h3>
              <div className="space-y-0">
                {citizenshipPrograms.map((p) => (
                  <details key={p.slug} className="border-b border-[#d9d9d8] group">
                    <summary className="py-3 f-body text-black cursor-pointer hover:text-black/60 transition-colors list-none flex items-center justify-between">
                      {p.name}
                      <span className="text-black/30 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="f-body text-black/60 pb-4 pr-4">
                      {p.desc}{" "}
                      <Link href={`/passport-visas/${p.slug}`} className="text-black underline hover:no-underline ml-1">
                        learn more →
                      </Link>
                    </p>
                  </details>
                ))}
              </div>
            </div>
            {/* Residency */}
            <div className="lg:w-1/2">
              <h3 className="f-desc-bold text-black mb-4 pb-4 border-b-2 border-black">Residency</h3>
              <div className="space-y-0">
                {residencyPrograms.map((p) => (
                  <details key={p.slug} className="border-b border-[#d9d9d8] group">
                    <summary className="py-3 f-body text-black cursor-pointer hover:text-black/60 transition-colors list-none flex items-center justify-between">
                      {p.name}
                      <span className="text-black/30 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="f-body text-black/60 pb-4 pr-4">
                      {p.desc}{" "}
                      <Link href={`/passport-visas/${p.slug}`} className="text-black underline hover:no-underline ml-1">
                        learn more →
                      </Link>
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-[1196px] mx-auto content-px">
          <h2 className="f-section-title text-black mb-4">Passport/visas Workflow</h2>
          <p className="f-body text-black/60 mb-8 lg:mb-12 max-w-[700px]">
            Learn to transform chaos into new opportunities. Build a structure around working projects to fruition.
            This passport visa and achieve your goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {[
              { title: "Consultation", desc: "Define your goals, choose the right program and jurisdiction.", img: "/images/workflow/consultation.png" },
              { title: "Documents", desc: "We prepare and verify all necessary documentation.", img: "/images/workflow/documents.png" },
              { title: "Processing", desc: "Full submission and government liaison on your behalf.", img: "/images/workflow/processing.png" },
              { title: "Freedom", desc: "Receive your residence permit or passport and start living without borders.", img: "/images/workflow/freedom.png" },
            ].map((step, i) => (
              <div key={step.title}>
                <div className="bg-[#f5f5f5] flex items-center justify-center h-[140px] lg:h-[160px] rounded overflow-hidden p-4">
                  <img src={step.img} alt={step.title} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <h3 className="f-desc-bold text-black mt-4">{step.title}</h3>
                <p className="f-body text-black/60 mt-2">{step.desc}</p>
              </div>
            ))}
            {/* Connecting arrows (desktop) */}
            <div className="hidden lg:block absolute top-[80px] left-[24%] w-[3%] h-[1px] bg-black/30" />
            <div className="hidden lg:block absolute top-[80px] left-[49%] w-[3%] h-[1px] bg-black/30" />
            <div className="hidden lg:block absolute top-[80px] left-[74%] w-[3%] h-[1px] bg-black/30" />
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="bg-[#191c1f]">
        <div className="max-w-[1196px] mx-auto py-12 lg:py-16 content-px">
          <div className="flex items-center justify-between mb-8">
            <h2 className="f-section-title text-white">Cases</h2>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">←</button>
              <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">→</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video */}
            <a
              href="https://www.youtube.com/watch?v=DcnY2h1vIos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded overflow-hidden min-h-[250px] lg:min-h-[350px] group"
            >
              <img
                src="https://i.ytimg.com/vi/DcnY2h1vIos/maxresdefault.jpg"
                alt="Costa Rica case"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg ml-0.5">▶</span>
                </div>
              </div>
            </a>
            {/* Case text */}
            <div className="flex flex-col justify-center">
              <h3 className="f-case-title text-white mb-4">
                Why Costa Rica? Nature, Safety & Comfort
              </h3>
              <p className="f-body text-white/50 mb-6">
                Learn to transform chaos into new opportunities. Build a structure around
                working projects to fruition. This passport visa case study shows the real
                process of relocation to Costa Rica.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Why Costa Rica?", "Why Costa Rica?", "Why Costa Rica?"].map((t, i) => (
                  <button
                    key={i}
                    className="f-nav text-white/60 border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors rounded"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Reviews ── */}
      <section className="py-8 lg:py-10">
        <div className="max-w-[1196px] mx-auto content-px">
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <h3 className="f-heading-md text-black">Video<br />reviews</h3>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center text-black hover:bg-black/5 transition-colors">←</button>
              <button className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center text-black hover:bg-black/5 transition-colors">→</button>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
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
                <p className="f-body text-black mt-2 group-hover:text-black/60 transition-colors">{v.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Text Reviews (shared component) ── */}
      <ReviewsSection />

      {/* ── Awards ── */}
      <section className="bg-[#eeeeee] py-8 lg:py-10">
        <div className="max-w-[1196px] mx-auto content-px">
          <h3 className="f-section-title text-black mb-6 lg:mb-8 text-center">Awards</h3>
          <div className="flex gap-4 lg:gap-6 justify-center flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-white px-8 py-4 flex items-center justify-center h-[60px] rounded"
              >
                <span className="f-btn text-black">MIGRONIS</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media About Us ── */}
      <section>
        <div className="max-w-[1196px] mx-auto py-8 content-px">
          <div className="border-t-2 border-[#d9d9d8]" />
          <div className="flex flex-col lg:flex-row items-start justify-between py-8 gap-6">
            <div className="flex items-start gap-6">
              <h3 className="f-heading-md text-black">Media<br />about us</h3>
              <div className="flex gap-2 mt-2">
                <button className="w-9 h-9 rounded-full bg-[#d9d9d8] flex items-center justify-center text-black hover:bg-[#c0c0c0] transition-colors">←</button>
                <button className="w-9 h-9 rounded-full bg-[#d9d9d8] flex items-center justify-center text-black hover:bg-[#c0c0c0] transition-colors">→</button>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar w-full lg:w-auto">
              {mediaMentions.map((m, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] lg:w-[345px] h-[205px] border border-[#d9d9d8] rounded flex flex-col items-center justify-center p-6"
                >
                  <span className="f-quote-mark text-black/20 block text-center">&ldquo;</span>
                  <p className="f-body text-black text-center mt-2">{m.quote}</p>
                  <p className="f-body text-black/40 mt-4">{m.source}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b-2 border-[#d9d9d8]" />
        </div>
      </section>

      {/* ── Let's Discuss Your Case ── */}
      <section style={{ backgroundColor: "#4b213c" }}>
        <div className="max-w-[1196px] mx-auto py-10 lg:py-16 content-px">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
            <div>
              <span className="f-cta-big block text-white">Let&apos;s</span>
              <span className="f-cta-sub block mt-1 text-white">discuss your case</span>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[343px]">
              <input type="text" placeholder="First and Last Name" className="f-input bg-[#d9d9d8] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <input type="email" placeholder="Email" className="f-input bg-[#d9d9d8] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <input type="tel" placeholder="Phone Number" className="f-input bg-[#d9d9d8] text-black placeholder:text-black/40 outline-none w-full h-[50px] px-4" />
              <label className="flex items-start gap-2 cursor-pointer text-white/60">
                <input type="checkbox" className="mt-1 accent-black" />
                <span className="text-xs leading-tight">I agree to the processing of personal data</span>
              </label>
              <button className="f-btn-lg bg-white text-black hover:opacity-90 transition-opacity w-full h-[54px] flex items-center justify-center">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vlog ── */}
      <VlogSection />
    </>
  );
}
