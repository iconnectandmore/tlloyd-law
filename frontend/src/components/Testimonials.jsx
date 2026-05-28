import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials, starRatings } from "../mock";

const StarRow = () => (
  <div className="flex gap-1 my-3">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        size={20}
        className="text-[#e8b923] fill-[#e8b923]"
        strokeWidth={1}
      />
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <div className="px-6 md:px-10">
    <p
      className="text-[#111827] text-[15px] md:text-[16px] leading-[1.8]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <span className="font-bold">&ldquo;{t.highlight}&rdquo;</span>{" "}
      {t.text}
    </p>
    <StarRow />
    <p
      className="italic text-[#64748b] text-[14px] mt-2"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      This review is from a person who hired this attorney.
    </p>
    <p className="text-[#1f2937] text-[14px] mt-1 font-medium">Hired attorney</p>
    <div className="text-[#64748b] text-[14px] mt-3">---</div>
    <p className="mt-2 text-[#1f2937] text-[15px]">
      <span className="font-bold">{t.name}</span>, {t.date}
    </p>
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = useCallback(
    () => setIndex((i) => (i + 2) % total),
    [total]
  );
  const prev = () => setIndex((i) => (i - 2 + total) % total);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const visible = [
    testimonials[index % total],
    testimonials[(index + 1) % total],
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#dde4ec] via-[#e6ecf3] to-[#cbd5e1] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-[#3a4a5f] text-[42px] md:text-[52px] font-normal"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-[#1e5fa3] hover:bg-[#0e4070] text-white flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-[#1e5fa3] hover:bg-[#0e4070] text-white flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 min-h-[280px]">
          {visible.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>

        {starRatings && starRatings.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {starRatings.map((r) => (
              <div
                key={r.id}
                className="bg-[#f3f6fa]/85 border border-white/60 px-5 py-3 text-center min-w-[200px]"
              >
                <div className="flex justify-center gap-0.5 mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#e8b923] fill-[#e8b923]"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <p className="text-[#1f2937] text-[14px] font-bold">{r.name}</p>
                <p className="text-[#64748b] text-[12px]">{r.date}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Link
            to="/practice-areas"
            className="bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-8 py-3.5 text-[14px] tracking-wide font-medium transition-colors duration-200 shadow-sm"
          >
            learn more about our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
