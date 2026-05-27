import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { testimonials } from "../mock";
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

      <CTASection />
    </>
  );
};

export default ReviewsPage;
