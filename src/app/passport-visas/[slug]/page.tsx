import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "@/data/programs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.name} — BORDERLESS Passport/Visas`,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const categoryLabel =
    program.category === "citizenship" ? "Citizenship" : "Residency";
  const accentColor =
    program.category === "citizenship" ? "#d97706" : "#3b82f6";

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-[1196px] mx-auto flex flex-col justify-end min-h-[140px] lg:min-h-[254px] content-px pb-4 lg:pb-8">
          <p className="f-nav text-black/50 mb-2 lg:mb-3">
            <Link
              href="/passport-visas"
              className="hover:text-black transition-colors"
            >
              Borderless — Passport/visas
            </Link>
          </p>
          <h1 className="f-page-title text-black">{program.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <span
              className="inline-block px-3 py-1 text-white text-xs font-semibold tracking-wide uppercase"
              style={{ backgroundColor: accentColor }}
            >
              {categoryLabel}
            </span>
            <span className="f-body text-black/50">{program.country}</span>
          </div>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1196px] mx-auto content-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="f-heading-md text-black mb-6">
                About the program
              </h2>
              <p className="f-desc-bold text-black mb-6">
                {program.shortDescription}
              </p>

              <div className="bg-[#eeeeee] p-6 lg:p-10 rounded mb-8">
                <p className="f-body text-black/60 text-center italic">
                  Detailed program description coming soon.
                  <br />
                  Contact us for a personal consultation.
                </p>
              </div>

              {/* Placeholder sections */}
              <div className="space-y-8">
                <div>
                  <h3 className="f-desc-bold text-black mb-3">
                    Key Benefits
                  </h3>
                  <div className="border-l-2 border-black/10 pl-4">
                    <p className="f-body text-black/50">
                      Benefits details will be added here.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="f-desc-bold text-black mb-3">
                    Requirements
                  </h3>
                  <div className="border-l-2 border-black/10 pl-4">
                    <p className="f-body text-black/50">
                      Requirements details will be added here.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="f-desc-bold text-black mb-3">
                    Timeline & Process
                  </h3>
                  <div className="border-l-2 border-black/10 pl-4">
                    <p className="f-body text-black/50">
                      Timeline details will be added here.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="f-desc-bold text-black mb-3">
                    Investment Options
                  </h3>
                  <div className="border-l-2 border-black/10 pl-4">
                    <p className="f-body text-black/50">
                      Investment details will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-8 p-6 rounded"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <h3 className="f-desc-bold text-black mb-4">
                  Get a free consultation
                </h3>
                <p className="f-body text-black/60 mb-6">
                  Our experts will help you choose the right{" "}
                  {program.category === "citizenship"
                    ? "citizenship"
                    : "residency"}{" "}
                  program for your goals.
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="First and Last Name"
                    className="f-small bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none px-4 w-full h-[40px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="f-small bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none px-4 w-full h-[40px]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="f-small bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none px-4 w-full h-[40px]"
                  />
                  <label className="flex items-start gap-2 cursor-pointer text-black/60">
                    <input type="checkbox" className="mt-0.5 accent-black" />
                    <span className="text-xs leading-tight">
                      I agree to the processing of personal data
                    </span>
                  </label>
                  <button className="f-btn bg-black text-white w-full h-[40px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    Send
                  </button>
                </div>
              </div>

              {/* Other programs */}
              <div className="mt-8">
                <h4 className="f-desc-bold text-black mb-3">
                  Other programs
                </h4>
                <div className="space-y-2">
                  {programs
                    .filter((p) => p.slug !== slug)
                    .slice(0, 5)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={`/passport-visas/${p.slug}`}
                        className="flex items-center justify-between py-2 border-b border-[#d9d9d9] group"
                      >
                        <span className="f-body text-black group-hover:text-black/60 transition-colors">
                          {p.name}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 text-white"
                          style={{
                            backgroundColor:
                              p.category === "citizenship"
                                ? "#d97706"
                                : "#3b82f6",
                          }}
                        >
                          {p.category}
                        </span>
                      </Link>
                    ))}
                  <Link
                    href="/passport-visas"
                    className="f-body text-black/50 hover:text-black transition-colors inline-block mt-2"
                  >
                    ← All programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
