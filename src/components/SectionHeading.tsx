interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : ""}`}>
      <h2
        className={`text-3xl lg:text-5xl font-semibold mb-4 ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg lg:text-xl max-w-3xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gray-dark"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
