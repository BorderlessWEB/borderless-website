import type { Metadata } from "next";
import ProgramCard from "@/components/ProgramCard";
import WorkflowSteps from "@/components/WorkflowSteps";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Passport & Visas — Migronis | BORDERLESS",
  description:
    "Second citizenship and residence permits through investment and legal programs. Global mobility made simple.",
};

const programs = [
  {
    country: "St Kitts & Nevis",
    description:
      "The world's first citizenship-by-investment program. Obtain citizenship in several months, gain visa-free access to 150+ countries, and enjoy a secure, low-tax jurisdiction.",
    color: "bg-burgundy",
  },
  {
    country: "Dominica",
    description:
      "One of the most affordable citizenship programs globally. Transparent due diligence, no residency requirement — a trusted route for entrepreneurs and families.",
    color: "bg-green",
  },
  {
    country: "Antigua & Barbuda",
    description:
      "Perfect for families looking for value and comfort. Visa-free travel to over 150 countries. Include dependent children and parents.",
    color: "bg-teal",
  },
  {
    country: "Grenada",
    description:
      "A Caribbean passport that opens doors to the world, including the U.S. via the E-2 investor visa. Fast processing and a growing real estate market.",
    color: "bg-gold",
  },
  {
    country: "St Lucia",
    description:
      "A transparent program offering several routes — from government bonds to sustainable real estate. No income tax on worldwide earnings.",
    color: "bg-pink",
  },
  {
    country: "São Tomé e Príncipe",
    description:
      "The newest and most accessible program with the lowest entry point worldwide through the National Transformation Fund.",
    color: "bg-blue",
  },
  {
    country: "Vanuatu",
    description:
      "One of the quickest routes to a second passport. Straightforward, confidential option with zero income tax and full dual citizenship rights.",
    color: "bg-burgundy",
  },
  {
    country: "Portugal Golden Visa",
    description:
      "One of Europe's most prestigious residence programs. EU residency through qualified investments in funds or innovation.",
    color: "bg-green",
  },
  {
    country: "Portugal HQA Visa",
    description:
      "A fast-track residence program for highly qualified professionals, entrepreneurs, and innovators with a clear path to permanent residence.",
    color: "bg-teal",
  },
  {
    country: "Spain",
    description:
      "Flexible residence options including the Digital Nomad Visa. Faster processing than Portugal, ideal for remote workers.",
    color: "bg-gold",
  },
  {
    country: "Cyprus",
    description:
      "Multiple pathways to residency — from permanent residence through investment to options for remote workers. Fast processing, low taxes.",
    color: "bg-pink",
  },
  {
    country: "Greece",
    description:
      "The most affordable Golden Visa in the EU. Simple path to European residence through real estate investment with no minimum stay requirement.",
    color: "bg-blue",
  },
  {
    country: "U.S. EB-5 Visa",
    description:
      "Permanent U.S. residency through qualifying investment. A direct path to citizenship for investors and their families.",
    color: "bg-burgundy",
  },
  {
    country: "Brazil",
    description:
      "Investor visas through local business, real estate, or innovation. Children born in Brazil automatically receive citizenship.",
    color: "bg-green",
  },
  {
    country: "Hungary",
    description:
      "Guest Investor Residence Permit — the new Golden Visa. Long-term EU residency through investment in approved national funds.",
    color: "bg-teal",
  },
];

const workflowSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "Define your goals and choose the right path.",
  },
  {
    number: 2,
    title: "Selection",
    description: "We suggest a tailored program that fits your needs.",
  },
  {
    number: 3,
    title: "Support",
    description: "Full assistance with document preparation and submission.",
  },
  {
    number: 4,
    title: "Freedom",
    description: "Obtain your residence or passport and start living without borders.",
  },
];

export default function PassportVisasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Passport & Visas
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            What do you need to get more freedom? Migronis helps people obtain
            second citizenship and residence permits through investment and legal
            programs.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Programs"
            subtitle="Choose from 15+ citizenship and residence programs worldwide."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard
                key={program.country}
                country={program.country}
                description={program.description}
                color={program.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-gray-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Four simple steps to your new passport or residence permit."
          />
          <WorkflowSteps steps={workflowSteps} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Book a free consultation and discover which program is right for you and your family."
      />
    </>
  );
}
