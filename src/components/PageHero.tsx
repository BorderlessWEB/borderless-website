interface PageHeroProps {
  title: string;
  light?: boolean;
  dark?: boolean;
}

export default function PageHero({ title, light = false, dark = false }: PageHeroProps) {
  const bg = dark ? "bg-black" : "bg-white";
  const textColor = dark ? "text-white" : "text-black";

  return (
    <section className={bg}>
      <div className="max-w-[1196px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8 pt-[72px]">
        <p className={`f-nav ${dark ? "text-white/50" : "text-black/50"} mb-2 lg:mb-3`}>
          Borderless
        </p>
        <h1 className={`${light ? "f-page-title-light" : "f-page-title"} ${textColor}`}>
          {title}
        </h1>
      </div>
    </section>
  );
}
