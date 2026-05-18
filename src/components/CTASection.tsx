import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "burgundy" | "green" | "teal";
}

export default function CTASection({
  title = "Get a Free Consultation",
  description = "Define your goals and choose the right path to freedom. Our experts will help you find the perfect program.",
  buttonText = "Book a Consultation",
  buttonHref = "#consultation",
  variant = "burgundy",
}: CTASectionProps) {
  const bgMap = {
    burgundy: "bg-burgundy",
    green: "bg-green",
    teal: "bg-teal",
  };

  return (
    <section className={`${bgMap[variant]} text-white py-20 lg:py-28`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-6">{title}</h2>
        <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-white text-dark px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
