"use client";

import { useRef } from "react";
import { vlogVideos } from "@/data/vlog-videos";

export default function VlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-[1196px] mx-auto content-px">
        <div className="flex items-center justify-between mb-4 lg:mb-8">
          <h2 className="f-desc-bold text-black">
            Featured Experiences / Vlog
          </h2>
          <div className="flex gap-2 flex-shrink-0 ml-4">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {vlogVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[220px] lg:w-[260px] group"
            >
              <div className="relative rounded overflow-hidden h-[130px] lg:h-[150px]">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/70 transition-colors">
                    <span className="text-white text-sm ml-0.5">▶</span>
                  </div>
                </div>
              </div>
              <p className="f-body text-black/80 mt-2 line-clamp-2 group-hover:text-black transition-colors">
                {video.title}
              </p>
              <p className="f-small text-black/40 mt-1">
                {video.views} views · {video.ago}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
