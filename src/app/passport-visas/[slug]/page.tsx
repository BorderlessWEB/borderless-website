import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "@/data/programs";
import { getProgramDetail } from "@/data/program-details";
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

  const detail = getProgramDetail(slug);
  const hasDetail = !!detail;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#191c1f]">
        <div className="max-w-[1196px] mx-auto content-px pt-[90px] pb-10 lg:pb-16">
          <p className="f-nav text-white/40 mb-3">
            <Link href="/passport-visas" className="hover:text-white/70 transition-colors">
              Borderless — Passport/visas
            </Link>
          </p>
          <h1 className="f-page-title text-white">{program.name}</h1>
          {hasDetail && (
            <p className="f-body-lg text-white/60 mt-4 max-w-[600px]">{detail.tagline}</p>
          )}

          {/* Key stats */}
          {hasDetail && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="border border-white/15 rounded p-4">
                <p className="f-small text-white/40 uppercase">Investment</p>
                <p className="f-desc-bold text-white mt-1">{detail.investment}</p>
              </div>
              {detail.citizenship && (
                <div className="border border-white/15 rounded p-4">
                  <p className="f-small text-white/40 uppercase">Citizenship</p>
                  <p className="f-desc-bold text-white mt-1">{detail.citizenship}</p>
                </div>
              )}
              {detail.processingTime && (
                <div className="border border-white/15 rounded p-4">
                  <p className="f-small text-white/40 uppercase">Processing</p>
                  <p className="f-desc-bold text-white mt-1">{detail.processingTime}</p>
                </div>
              )}
              {detail.visaFree && (
                <div className="border border-white/15 rounded p-4">
                  <p className="f-small text-white/40 uppercase">Visa-free</p>
                  <p className="f-desc-bold text-white mt-1">{detail.visaFree}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Featured Video ── */}
      {hasDetail && detail.videoId && (
        <section className="bg-[#191c1f] pb-10 lg:pb-16">
          <div className="max-w-[1196px] mx-auto content-px">
            <a
              href={`https://www.youtube.com/watch?v=${detail.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded overflow-hidden group"
              style={{ aspectRatio: "16/9", maxHeight: 500 }}
            >
              <img
                src={`https://i.ytimg.com/vi/${detail.videoId}/maxresdefault.jpg`}
                alt={program.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:bg-white/30 transition-colors">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* ── Overview ── */}
      {hasDetail ? (
        <section className="py-10 lg:py-16">
          <div className="max-w-[1196px] mx-auto content-px">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="f-heading-md text-black mb-6">About the program</h2>
                <p className="f-body text-black/70 leading-relaxed text-lg">{detail.overview}</p>

                {/* Benefits */}
                <div className="mt-10">
                  <h3 className="f-desc-bold text-black mb-4 text-lg">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {detail.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 py-2">
                        <span className="text-[#c87d33] mt-0.5 flex-shrink-0">✓</span>
                        <p className="f-body text-black/70">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mt-10">
                  <h3 className="f-desc-bold text-black mb-4 text-lg">Requirements</h3>
                  <div className="space-y-3">
                    {detail.requirements.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 border-l-2 border-[#c87d33] pl-4 py-1">
                        <p className="f-body text-black/70">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mt-10">
                  <h3 className="f-desc-bold text-black mb-6 text-lg">How It Works</h3>
                  <div className="space-y-0">
                    {detail.process.map((s, i) => (
                      <div key={i} className="flex gap-4 py-4 border-b border-[#d9d9d8]">
                        <div className="w-8 h-8 rounded-full bg-[#191c1f] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="f-desc-bold text-black">{s.step}</p>
                          <p className="f-body text-black/60 mt-1">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 space-y-6">
                  {/* CTA */}
                  <div className="bg-[#f5f5f5] p-6 rounded">
                    <h3 className="f-desc-bold text-black mb-2">Get a free consultation</h3>
                    <p className="f-body text-black/50 mb-4">
                      Our experts will help you with the {program.name} program.
                    </p>
                    <div className="space-y-3">
                      <input type="text" placeholder="First and Last Name" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                      <input type="email" placeholder="Email" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                      <input type="tel" placeholder="Phone Number" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                      <label className="flex items-start gap-2 cursor-pointer text-black/60">
                        <input type="checkbox" className="mt-0.5 accent-black" />
                        <span className="text-xs leading-tight">I agree to the processing of personal data</span>
                      </label>
                      <button className="f-btn bg-black text-white w-full h-[42px] flex items-center justify-center hover:opacity-90 transition-opacity">Send</button>
                    </div>
                  </div>

                  {/* Quick facts */}
                  <div className="border border-[#d9d9d8] p-5 rounded">
                    <h4 className="f-desc-bold text-black mb-3">Quick Facts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1 border-b border-[#f0f0f0]">
                        <span className="text-black/50">Investment</span>
                        <span className="text-black font-medium">{detail.investment}</span>
                      </div>
                      {detail.citizenship && (
                        <div className="flex justify-between py-1 border-b border-[#f0f0f0]">
                          <span className="text-black/50">Citizenship</span>
                          <span className="text-black font-medium">{detail.citizenship}</span>
                        </div>
                      )}
                      {detail.processingTime && (
                        <div className="flex justify-between py-1 border-b border-[#f0f0f0]">
                          <span className="text-black/50">Processing</span>
                          <span className="text-black font-medium">{detail.processingTime}</span>
                        </div>
                      )}
                      {detail.visaFree && (
                        <div className="flex justify-between py-1">
                          <span className="text-black/50">Visa-free</span>
                          <span className="text-black font-medium">{detail.visaFree}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Other programs */}
                  <div>
                    <h4 className="f-desc-bold text-black mb-3">Other programs</h4>
                    <div className="space-y-0">
                      {programs
                        .filter((p) => p.slug !== slug)
                        .slice(0, 5)
                        .map((p) => (
                          <Link
                            key={p.slug}
                            href={`/passport-visas/${p.slug}`}
                            className="flex items-center justify-between py-2 border-b border-[#f0f0f0] group"
                          >
                            <span className="f-body text-black group-hover:text-black/60 transition-colors">{p.name}</span>
                            <span className="text-xs text-black/30">{p.category === "citizenship" ? "CBI" : "RBI"}</span>
                          </Link>
                        ))}
                      <Link href="/passport-visas" className="f-body text-black/40 hover:text-black transition-colors inline-block mt-3">
                        ← All programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Fallback for pages without detail data yet */
        <section className="py-10 lg:py-16">
          <div className="max-w-[1196px] mx-auto content-px">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="f-heading-md text-black mb-6">About the program</h2>
                <p className="f-desc-bold text-black mb-6">{program.shortDescription}</p>
                <div className="bg-[#eeeeee] p-8 rounded text-center">
                  <p className="f-body text-black/50">Detailed program page coming soon. Contact us for a personal consultation.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-20 bg-[#f5f5f5] p-6 rounded">
                  <h3 className="f-desc-bold text-black mb-2">Get a free consultation</h3>
                  <p className="f-body text-black/50 mb-4">Our experts will help you with the {program.name} program.</p>
                  <div className="space-y-3">
                    <input type="text" placeholder="Name" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                    <input type="email" placeholder="Email" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                    <input type="tel" placeholder="Phone" className="f-small bg-white text-black placeholder:text-black/40 outline-none px-4 w-full h-[42px] border border-[#d9d9d8]" />
                    <button className="f-btn bg-black text-white w-full h-[42px] flex items-center justify-center hover:opacity-90 transition-opacity">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Videos ── */}
      {hasDetail && detail.relatedVideos && detail.relatedVideos.length > 0 && (
        <section className="bg-[#f5f5f5] py-8 lg:py-12">
          <div className="max-w-[1196px] mx-auto content-px">
            <h3 className="f-heading-md text-black mb-6">Related Videos</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
              {detail.relatedVideos.map((v) => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[240px] lg:w-[280px] group"
                >
                  <div className="relative rounded overflow-hidden h-[135px] lg:h-[160px]">
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-sm ml-0.5">▶</span>
                      </div>
                    </div>
                  </div>
                  <p className="f-body text-black/70 mt-2 line-clamp-2 group-hover:text-black transition-colors">{v.title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Bottom ── */}
      <section style={{ background: "linear-gradient(135deg, #e582b4 0%, #02abe3 100%)" }}>
        <div className="max-w-[1196px] mx-auto py-10 lg:py-14 content-px">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div>
              <span className="f-cta-big block text-black">Get</span>
              <span className="f-cta-sub block text-black">a free consultation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input type="text" placeholder="Name" className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[180px]" />
              <input type="tel" placeholder="Phone" className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[180px]" />
              <input type="email" placeholder="Email" className="f-input bg-white/90 text-black placeholder:text-black/40 outline-none h-[46px] px-4 w-full sm:w-[180px]" />
              <button className="f-btn bg-black text-white px-8 h-[46px] flex items-center justify-center hover:opacity-90 transition-opacity">Send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
