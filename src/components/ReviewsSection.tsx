"use client";

import { useRef, useState } from "react";
import { reviews, type Review } from "@/data/reviews";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#c87d33]" style={{ fontSize: 14 }}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex-shrink-0 w-[280px] lg:w-[345px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden bg-[#d9d9d8]">
          <img
            src={review.photo}
            alt={review.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="f-nav-active text-black" style={{ fontSize: 13 }}>
            {review.name}
          </p>
          <StarRating count={review.stars} />
        </div>
      </div>
      <p className="f-body text-black/60 leading-relaxed">
        {expanded ? review.fullText : review.shortText}
      </p>
      {review.fullText !== review.shortText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="f-small text-black/40 hover:text-black/70 transition-colors mt-2 underline underline-offset-2"
        >
          {expanded ? "show less" : "read more"}
        </button>
      )}
      <p className="f-body mt-2 text-black/30" style={{ fontSize: 12 }}>
        {review.role}
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section>
      <div className="max-w-[1196px] mx-auto py-6 lg:py-8 content-px">
        <div className="border-t-[2px] border-[#d9d9d8]" />
        <div className="flex flex-col lg:flex-row items-start justify-between py-6 lg:py-8 gap-4 lg:gap-6">
          <div className="flex items-start gap-4 lg:gap-6 w-full lg:w-auto">
            <h3 className="f-heading-md text-black flex-shrink-0">
              Text
              <br />
              reviews
            </h3>
            <div className="flex gap-2 mt-1 lg:mt-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-[#d9d9d8] flex items-center justify-center f-small text-black hover:bg-black/5 transition-colors"
              >
                →
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-[25px] overflow-x-auto no-scrollbar w-full -mx-4 px-4 lg:mx-0 lg:px-0 lg:w-auto"
          >
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
        <div className="border-b-[2px] border-[#d9d9d8]" />
      </div>
    </section>
  );
}
