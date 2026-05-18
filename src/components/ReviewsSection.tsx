interface ReviewsSectionProps {
  type?: "text" | "video";
  dark?: boolean;
}

export default function ReviewsSection({ type = "text", dark = false }: ReviewsSectionProps) {
  const textColor = dark ? "text-white" : "text-black";
  const dividerColor = dark ? "border-white/20" : "border-[#d9d9d9]";
  const bodyColor = dark ? "text-white/60" : "text-black/60";

  if (type === "video") {
    return (
      <section>
        <div className="max-w-[1196px] mx-auto py-6 lg:py-8 content-px">
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <h3 className={`f-heading-md ${textColor}`}>Video<br />reviews</h3>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button className={`w-9 h-9 rounded-full border ${dividerColor} flex items-center justify-center f-small ${textColor}`}>←</button>
              <button className={`w-9 h-9 rounded-full border ${dividerColor} flex items-center justify-center f-small ${textColor}`}>→</button>
            </div>
          </div>
          <div className="flex gap-3 lg:gap-[25px] overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-[240px] lg:w-[345px]">
                <div className={`w-full h-[140px] lg:h-[160px] ${dark ? "bg-white/10" : "bg-black"} flex items-center justify-center rounded`}>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                    <span className="text-white ml-0.5 text-sm">▶</span>
                  </div>
                </div>
                <p className={`f-video-title mt-2 ${textColor}`}>Nature, Safety & Comfort</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="max-w-[1196px] mx-auto py-6 lg:py-8 content-px">
        <div className={`border-t-[2px] ${dividerColor}`} />

        <div className="flex flex-col lg:flex-row items-start justify-between py-6 lg:py-8 gap-4 lg:gap-6">
          <div className="flex items-start gap-4 lg:gap-6 w-full lg:w-auto">
            <h3 className={`f-heading-md ${textColor} flex-shrink-0`}>Text<br />reviews</h3>
            <div className="flex gap-2 mt-1 lg:mt-2">
              <button className={`w-9 h-9 rounded-full border ${dividerColor} flex items-center justify-center f-small ${textColor}`}>←</button>
              <button className={`w-9 h-9 rounded-full border ${dividerColor} flex items-center justify-center f-small ${textColor}`}>→</button>
            </div>
          </div>

          <div className="flex gap-3 lg:gap-[25px] overflow-x-auto no-scrollbar w-full -mx-4 px-4 lg:mx-0 lg:px-0 lg:w-auto">
            {[1, 2].map((i) => (
              <div key={i} className="flex-shrink-0 w-[260px] lg:w-[345px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${dark ? "bg-white/20" : "bg-[#d9d9d9]"}`}>
                    <span className={`text-sm ${textColor}`}>J</span>
                  </div>
                  <div>
                    <p className={`f-review-name ${textColor}`}>JOhn Doe</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-[#f5c518]" style={{ fontSize: 14 }}>★</span>)}
                    </div>
                  </div>
                </div>
                <p className={`f-body ${bodyColor}`}>
                  I was choosing between several companies, but settled on Migronis.
                  For me, the competence and speed of answers played a key role.
                </p>
                <p className={`f-body mt-2 ${dark ? "text-white/40" : "text-black/40"}`}>2 month ago</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`border-b-[2px] ${dividerColor}`} />
      </div>
    </section>
  );
}
