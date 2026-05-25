import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../mock";

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
      className="text-[#2c2422] text-[15px] md:text-[16px] leading-[1.8]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <span className="font-bold">&ldquo;{t.highlight}&rdquo;</span>{" "}
      {t.text}
    </p>
    <StarRow />
    <p
      className="italic text-[#6b5e58] text-[14px] mt-2"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      This review is from a person who hired this attorney.
    </p>
    <p className="text-[#3a2a2a] text-[14px] mt-1 font-medium">Hired attorney</p>
    <div className="text-[#6b5e58] text-[14px] mt-3">---</div>
    <p className="mt-2 text-[#3a2a2a] text-[15px]">
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
    <section className="w-full bg-gradient-to-b from-[#f0e8db] to-[#e0d8cb] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-[#6b8a6b] text-[42px] md:text-[52px] font-normal"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-[#3a2a2a] hover:bg-[#7a1a1a] text-white flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-[#3a2a2a] hover:bg-[#7a1a1a] text-white flex items-center justify-center transition-colors duration-200"
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

        <div className="flex justify-center mt-12">
          <a
            href="#practice-areas"
            className="bg-[#7a1a1a] hover:bg-[#5a1414] text-white px-8 py-3.5 text-[14px] tracking-wide font-medium transition-colors duration-200 shadow-sm"
          >
            learn more about our practice areas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
