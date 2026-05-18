import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const ecosystem = [
  {
    title: "Migronis",
    description:
      "Second citizenship and residence programs that give you freedom of movement, financial security, and a global safety net.",
    color: "text-burgundy",
    bg: "bg-burgundy/5",
    href: "/passport-visas",
  },
  {
    title: "Investment",
    description:
      "Sustainable, responsible investments for people who think long-term and care about the planet as much as profit.",
    color: "text-green",
    bg: "bg-green/5",
    href: "/investment",
  },
  {
    title: "Travel",
    description:
      "Curated journeys and educational trips for families who explore the world through geography and history.",
    color: "text-teal",
    bg: "bg-teal/5",
    href: "/travel",
  },
  {
    title: "Education",
    description:
      "Courses and guides for those who want to live borderless — from relocation to childbirth abroad.",
    color: "text-gold",
    bg: "bg-gold/5",
    href: "/education",
  },
  {
    title: "Marketing",
    description:
      "We create stories that sell. From partnerships to video production, we help brands grow through meaningful content.",
    color: "text-pink",
    bg: "bg-pink/5",
    href: "/collaboration",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-burgundy via-burgundy/95 to-green pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-6">
              freedom · sustainability · smart investments · new luxury
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 leading-[1.05]">
              BORDERLESS
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
              A platform for living, investing, and growing without borders. We
              create content and solutions for people who choose freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#ecosystem"
                className="bg-white text-dark px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-colors text-center"
              >
                Explore Ecosystem
              </Link>
              <Link
                href="#consultation"
                className="border border-white/30 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Ecosystem"
            subtitle="Five directions united by one mission — conscious global living."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group ${item.bg} rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300`}
              >
                <h3
                  className={`text-2xl font-semibold ${item.color} mb-4 group-hover:translate-x-1 transition-transform`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "10,000+", label: "Clients Worldwide" },
              { value: "25+", label: "Programs Available" },
              { value: "150+", label: "Countries Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-5xl font-semibold text-burgundy mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-dark text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start Your Journey"
        description="Take the first step towards a life without borders. Our team will help you find the perfect solution."
        buttonText="Get a Free Consultation"
      />
    </>
  );
}
