import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Collaboration & Marketing — BORDERLESS",
  description:
    "We create stories that sell. Partnerships, video production, and meaningful content for brands.",
};

const services = [
  {
    title: "Brand Partnerships",
    description:
      "We connect brands with our audience of globally-minded individuals. Authentic collaborations that resonate with high-value consumers.",
    icon: "🤝",
  },
  {
    title: "Video Production",
    description:
      "From concept to final cut — professional video content that tells your brand story in a compelling, cinematic way.",
    icon: "🎬",
  },
  {
    title: "Content Strategy",
    description:
      "Data-driven content planning that builds audience, drives engagement, and converts viewers into loyal customers.",
    icon: "📊",
  },
  {
    title: "Social Media Management",
    description:
      "Full-service social presence across platforms. We grow communities, not just follower counts.",
    icon: "📱",
  },
  {
    title: "Podcast & Audio",
    description:
      "Podcast production, audio content, and voice strategy for brands that want to be heard.",
    icon: "🎙️",
  },
  {
    title: "Event Marketing",
    description:
      "From intimate dinners to international summits — we create events that build relationships and drive business.",
    icon: "🎪",
  },
];

export default function CollaborationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pink text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Collaboration
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            We create stories that sell. From partnerships to video production,
            we help brands grow through meaningful, sustainable content.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Full-service marketing and content solutions for ambitious brands."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-dark text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Collaborate?"
        description="Tell us about your brand and goals — we'll craft a strategy that drives results."
        buttonText="Start a Conversation"
        variant="burgundy"
      />
    </>
  );
}
