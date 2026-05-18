import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — BORDERLESS",
  description:
    "BORDERLESS is an ecosystem for conscious global living. Founded by Anatoly Letaev.",
};

const values = [
  {
    title: "Freedom",
    description:
      "We believe everyone deserves the freedom to choose where to live, work, and grow. Borders should be doors, not walls.",
  },
  {
    title: "Sustainability",
    description:
      "Every decision we make considers its long-term impact on people and the planet. Responsible growth is the only growth worth pursuing.",
  },
  {
    title: "Transparency",
    description:
      "We communicate openly, price honestly, and share knowledge freely. Trust is built through clarity.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything — from legal compliance to client communication to content quality.",
  },
];

const team = [
  {
    name: "Anatoly Letaev",
    role: "Founder & CEO",
    description:
      "Entrepreneur, investor, and global citizen. Anatoly founded Borderless to help people live, invest, and grow without borders.",
  },
  {
    name: "Legal Team",
    role: "Immigration Experts",
    description:
      "Certified immigration lawyers and consultants with deep expertise in citizenship and residency programs worldwide.",
  },
  {
    name: "Investment Team",
    role: "Financial Advisors",
    description:
      "Experienced investment professionals focused on sustainable, ESG-aligned opportunities across global markets.",
  },
  {
    name: "Content Team",
    role: "Storytellers",
    description:
      "Writers, filmmakers, and strategists who create meaningful content that educates and inspires.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            About Us
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            BORDERLESS is an ecosystem that unites projects about conscious
            global living. We create content and solutions for people who choose
            freedom.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold text-dark mb-8">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-gray-dark leading-relaxed">
              We help people make informed decisions about where and how they
              live. Through citizenship programs, sustainable investments,
              education, and meaningful travel, we empower individuals and
              families to build lives without boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Experts across disciplines, united by a shared vision of a borderless world."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div
                key={t.name}
                className="text-center"
              >
                <div className="w-24 h-24 bg-burgundy/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-burgundy font-semibold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark">{t.name}</h3>
                <p className="text-sm text-burgundy mb-2">{t.role}</p>
                <p className="text-gray-dark text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join the Borderless Community"
        description="Whether you're looking for a second passport, an investment opportunity, or just inspiration — we're here for you."
        buttonText="Get in Touch"
      />
    </>
  );
}
