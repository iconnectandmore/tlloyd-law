import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { testimonials, starRatings } from "../mock";
import { Star } from "lucide-react";

const StarRow = () => (
  <div className="flex gap-1 my-3">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        size={18}
        className="text-[#e8b923] fill-[#e8b923]"
        strokeWidth={1}
      />
    ))}
  </div>
);

const ReviewsPage = () => {
  return (
    <>
      <PageHeader
        title="Client Reviews"
        subtitle="Hear what our clients have to say"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#cbd5e1] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#f3f6fa]/85 border border-white/60 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <StarRow />
                <p
                  className="text-[#111827] text-[15px] leading-[1.8] mb-4"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <span className="font-bold">&ldquo;{t.highlight}&rdquo;</span>{" "}
                  {t.text}
                </p>
                <p
                  className="italic text-[#64748b] text-[13px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  This review is from a person who hired this attorney.
                </p>
                <p className="text-[#1f2937] text-[13px] mt-1 font-medium">
                  Hired attorney
                </p>
                <div className="h-px bg-[#1e5fa3]/20 my-4" />
                <p className="text-[#1f2937] text-[15px]">
                  <span className="font-bold">{t.name}</span>, {t.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-[#1e5fa3] text-[24px] md:text-[28px] mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Additional 5-Star Ratings
          </h2>
          <p
            className="text-[#64748b] text-[14px] mb-8 italic"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Clients who left a rating without a written review
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {starRatings.map((r) => (
              <div
                key={r.id}
                className="bg-[#f3f6fa]/85 border border-white/60 px-6 py-5 min-w-[220px]"
              >
                <div className="flex justify-center gap-1 mb-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#e8b923] fill-[#e8b923]"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <p className="text-[#1f2937] text-[15px] font-bold">
                  {r.name}
                </p>
                <p className="text-[#64748b] text-[13px]">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ReviewsPage;
