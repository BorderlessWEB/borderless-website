import Link from "next/link";
import InsightsSection from "@/components/InsightsSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">Borderless</p>
          <h1 className="f-page-title-light text-black">About us</h1>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-[1400px] mx-auto content-px">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="f-heading-md text-black mb-6">Embrace Your Freedom</h2>
              <p className="f-desc-bold text-black mb-4">
                Borderless is a worldwide media platform for sustainable living, business, and investments.
              </p>
              <p className="f-body text-black/60 mb-4">
                We combine location switching expertise with powerful tools to achieve a fulfilling lifestyle, unlock business potential, and make investments without government constraints.
              </p>
              <p className="f-body text-black/60">
                We smoothly guide individuals towards the cosmopolis future — where people integrate culture and aesthetics of new places. You embrace freedom — we create the ideal conditions for it.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="/images/team-anatoliy.jpg" alt="Anatoliy Letaev" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy: 3 Guides ── */}
      <section className="bg-[#f5f5f7] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto content-px">
          <h2 className="f-section-title text-black text-center mb-3">Our Philosophy</h2>
          <p className="f-body text-black/50 text-center mb-12 lg:mb-20 max-w-[600px] mx-auto">
            Mindful consumption — with care for yourself and for the next generation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
            {[
              {
                num: "01",
                title: "Guide of Freedom",
                msg: "Embrace your freedom",
                desc: "Our DNA — the principles, worldview, and aesthetics that shape every message. Freedom is not a dream, it's a strategy you build yourself.",
              },
              {
                num: "02",
                title: "Guide of Experience",
                msg: "Discover our experience",
                desc: "We become guides who, through expertise and subjective experience, help you understand objective reality for making your own decisions.",
              },
              {
                num: "03",
                title: "Guide of Possibilities",
                msg: "Manage your possibilities",
                desc: "Mindful consumption — our services, products, and integrations that transform insights into concrete opportunities for living, business, and investments.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <span className="text-[#c87d33] text-4xl lg:text-5xl font-bold">{step.num}</span>
                <h3 className="f-desc-bold text-black mt-4 text-lg">{step.title}</h3>
                <p className="f-nav text-black/40 mt-2 italic">{step.msg}</p>
                <p className="f-body text-black/50 mt-3 text-sm leading-relaxed max-w-[300px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Quote ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto content-px flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2 bg-[#eeeeee] rounded flex items-center justify-center min-h-[250px] lg:min-h-[375px]">
            <span className="text-8xl text-black/5">▲</span>
          </div>
          <div className="lg:w-1/2">
            <span className="f-quote-mark text-black block">"</span>
            <blockquote className="f-desc-bold text-black -mt-4">
              This is Worldwide — a media service that gently adapts people to the future that is already arriving. We embrace the beauty of each new place — its culture and history. And we build a cosmopolis as the next evolutionary step for this location, in harmony with nature and locals.
            </blockquote>
            <p className="f-body text-black mt-6">
              We go beyond the paradigm of belonging to one country, thanks to open legal opportunities for changing location, new taxation conditions, and investment possibilities.
            </p>
            <p className="f-body text-black mt-4">
              Borderless is a backstage office that takes care of bureaucratic aspects of preparing the infrastructure for life, leaving you to enjoy your freedom. Everything you wish to delegate while moving your family or business to more comfortable places — we take care of it.
            </p>
            <span className="f-quote-mark text-black block text-right">"</span>
            <p className="f-body text-black mt-2">Anatoliy Letaev, Founder</p>
          </div>
        </div>
      </section>

      {/* ── My Story Timeline ── */}
      <section className="py-12 lg:py-16 bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto content-px">
          <h2 className="f-section-title text-black mb-8 lg:mb-12">My Story</h2>
          <p className="f-desc-bold text-black mb-8">A Timeline of a Borderless Life</p>
          <div className="space-y-0">
            {[
              { year: "2012", title: "Founded Migronis", desc: "A company that helped thousands of people gain freedom of movement through citizenship and residency programs." },
              { year: "2018", title: "First child born in the United States", desc: "Choosing a birthplace as an investment in a child's future." },
              { year: "2019", title: "Relocated to Portugal", desc: "A country aligned with the values of freedom, safety, and quality of life." },
              { year: "2020", title: "Received Vanuatu citizenship", desc: "Expanding personal freedom through additional global mobility. Owner of 10 passports." },
              { year: "2022", title: "Second child born in Brazil", desc: "Another strategic birthplace — another set of future opportunities." },
              { year: "2023", title: "Launched BORDERLESS", desc: "A worldwide media platform for seamless location switching, sustainable consumption, and growing opportunities for living, business, and investments." },
              { year: "2025", title: "Relocated to Brazil", desc: "Continuing the journey of choosing countries by values, lifestyle, and long-term vision." },
            ].map((item) => (
              <div key={item.year} className="flex flex-col sm:flex-row gap-4 lg:gap-8 py-6 border-t border-black/10">
                <div className="sm:w-[120px] flex-shrink-0">
                  <span className="f-section-title text-black/20" style={{ fontSize: "48px" }}>{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="f-desc-bold text-black">{item.title}</h3>
                  <p className="f-body text-black/60 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do (Ecosystem) ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto content-px">
          <h2 className="f-section-title text-black mb-8 lg:mb-12">Borderless Ecosystem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { name: "Migronis", desc: "Citizenship and residency by investment programs" },
              { name: "Investment", desc: "Impact investments in sustainable real estate and eco-projects" },
              { name: "Travel", desc: "Educational expeditions and discovery of special places on the planet" },
              { name: "Education", desc: "Learning programs for children and families in borderless living" },
              { name: "Media", desc: "YouTube, Instagram, content exploring the map of the New World" },
            ].map((item) => (
              <div key={item.name} className="bg-[#f5f5f7] p-6">
                <h3 className="f-desc-bold text-black mb-2">{item.name}</h3>
                <p className="f-body text-black/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto py-12 lg:py-16 content-px">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-white/5 rounded overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-[600px]">
              <img src="/images/screenshot-map.png" alt="Our offices" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h3 className="f-heading-md text-white mb-8">Our Offices</h3>
              <div className="space-y-6">
                <div>
                  <p className="f-desc-bold text-white">Lisbon</p>
                  <p className="f-body text-white/40">Portugal</p>
                  <p className="f-body text-white/40">Av. da República, N° 6, 1° Esq., 1050-191</p>
                </div>
                <div>
                  <p className="f-desc-bold text-white">Budapest</p>
                  <p className="f-body text-white/40">Hungary</p>
                  <p className="f-body text-white/40">Andrássy út 66, 1062</p>
                </div>
                <div>
                  <p className="f-desc-bold text-white">Dubai</p>
                  <p className="f-body text-white/40">UAE</p>
                  <p className="f-body text-white/40">DIFC, Gate Village 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <InsightsSection />

      {/* ── Reviews ── */}
      <ReviewsSection />

      {/* ── Contacts ── */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto py-12 lg:py-16 content-px">
          <h2 className="f-section-title text-black mb-8 lg:mb-12">Contacts</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="First and Last Name" className="f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full" />
                <input type="email" placeholder="Email" className="f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full" />
                <input type="tel" placeholder="Phone Number" className="f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full" />
                <textarea placeholder="Message" className="f-input bg-white text-black placeholder:text-black/40 outline-none p-4 resize-none w-full" style={{ height: "120px" }} />
                <label className="flex items-start gap-2 cursor-pointer text-black/60">
                  <input type="checkbox" className="mt-1 accent-black" />
                  <span className="text-xs leading-tight">I agree to the processing of personal data</span>
                </label>
                <button className="f-btn bg-black text-white w-full lg:w-[224px] h-[54px] flex items-center justify-center gap-2 disabled:opacity-60">
                  Send
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#d9d9d9] p-6 lg:p-8" style={{ minHeight: "400px" }}>
              <h3 className="f-footer-talk text-black mb-8">let's<br />Talk</h3>
              <div className="space-y-2 mb-8">
                <p className="f-footer-phone text-black">+1 888 463 5101</p>
              </div>
              <h3 className="f-footer-talk text-black mb-8">let's<br />Meet</h3>
              <div className="space-y-4">
                <div>
                  <p className="f-footer-addr text-black">Lisbon, Portugal</p>
                  <p className="f-footer-addr text-black/60">Av. da República, N° 6, 1° Esq., 1050-191</p>
                </div>
                <div>
                  <p className="f-footer-addr text-black">Budapest, Hungary</p>
                  <p className="f-footer-addr text-black/60">Andrássy út 66, 1062</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="f-footer-addr text-black">@borderless</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
