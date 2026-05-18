import Link from "next/link";

interface ProgramCardProps {
  country: string;
  description: string;
  color?: string;
  href?: string;
}

export default function ProgramCard({
  country,
  description,
  color = "bg-burgundy",
  href = "#",
}: ProgramCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white border border-gray-light rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        {/* Color bar */}
        <div className={`${color} h-2`} />
        <div className="p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-burgundy transition-colors">
            {country}
          </h3>
          <p className="text-gray-dark text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
