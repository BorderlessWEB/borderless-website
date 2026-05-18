import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Investment — BORDERLESS",
  description:
    "Sustainable, responsible investments for people who think long-term and care about the planet.",
};

const principles = [
  {
    icon: "🌱",
    title: "Sustainability First",
    description:
      "Every project we support meets strict environmental and social criteria. We invest in the future, not just returns.",
  },
  {
    icon: "🔍",
    title: "Full Transparency",
    description:
      "Clear reporting, open communication, and honest risk assessment. You always know where your money is.",
  },
  {
    icon: "🌍",
    title: "Global Diversification",
    description:
      "Spread your portfolio across geographies and sectors to reduce risk and capture global opportunities.",
  },
  {
    icon: "🤝",
    title: "Impact That Matters",
    description:
      "Your investments create real change — from renewable energy to sustainable agriculture and community development.",
  },
];

const sectors = [
  { name: "Real Estate", color: "bg-burgundy" },
  { name: "Renewable Energy", color: "bg-green" },
  { name: "Agriculture", color: "bg-teal" },
  { name: "Technology", color: "bg-gold" },
  { name: "Healthcare", color: "bg-pink" },
  { name: "Infrastructure", color: "bg-blue" },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Investment
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            Invest responsibly. Grow consciously. Sustainable investments for
            people who think long-term and care about the planet.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Principles"
            subtitle="We believe smart investing and positive impact go hand in hand."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-gray-light rounded-2xl p-8 lg:p-10"
              >
                <span className="text-4xl mb-4 block">{p.icon}</span>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-gray-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Investment Sectors"
            subtitle="Diversified opportunities across high-impact industries."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-3 h-3 ${s.color} rounded-full mx-auto mb-3`}
                />
                <span className="font-semibold text-dark">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="green"
        title="Start Investing Consciously"
        description="Let us help you build a portfolio that grows your wealth and makes a positive impact."
      />
    </>
  );
}
