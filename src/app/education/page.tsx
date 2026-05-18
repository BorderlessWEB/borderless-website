import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Education — BORDERLESS",
  description:
    "Courses and guides for those who want to live borderless — from relocation to childbirth abroad.",
};

const courses = [
  {
    title: "Relocation Guide",
    description:
      "Step-by-step guide to moving abroad — from choosing a country to settling in. Legal, financial, and practical aspects covered.",
    tag: "Popular",
    color: "border-burgundy",
  },
  {
    title: "Childbirth Abroad",
    description:
      "Everything you need to know about giving birth in another country — from healthcare systems to citizenship rights for your child.",
    tag: "New",
    color: "border-pink",
  },
  {
    title: "Tax Optimization",
    description:
      "Understanding international tax structures, residency-based taxation, and legal strategies for global entrepreneurs.",
    tag: "Advanced",
    color: "border-green",
  },
  {
    title: "Digital Nomad Essentials",
    description:
      "From visa requirements to co-living spaces — the practical guide to working remotely from anywhere in the world.",
    tag: "Starter",
    color: "border-blue",
  },
  {
    title: "Investment for Beginners",
    description:
      "Learn the fundamentals of sustainable investing, portfolio diversification, and responsible wealth-building.",
    tag: "Starter",
    color: "border-gold",
  },
  {
    title: "Second Citizenship Masterclass",
    description:
      "Deep dive into citizenship-by-investment programs — comparing countries, costs, timelines, and benefits.",
    tag: "Masterclass",
    color: "border-teal",
  },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gold text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Education
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            Courses and guides for those who want to live borderless — practical,
            structured, empowering.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Courses"
            subtitle="Practical knowledge to help you make informed decisions about your global life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`bg-white border-l-4 ${course.color} rounded-xl p-8 hover:shadow-lg transition-shadow`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-dark bg-gray-light px-2 py-1 rounded">
                  {course.tag}
                </span>
                <h3 className="text-xl font-semibold text-dark mt-4 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-dark text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Learn More?"
        description="Join our community of global citizens and get access to exclusive educational content."
        buttonText="Explore Courses"
        variant="burgundy"
      />
    </>
  );
}
