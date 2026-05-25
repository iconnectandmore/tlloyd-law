import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { faqs } from "../mock";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-[#7a1a1a]/20">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-6 py-5 text-left group"
    >
      <span
        className="text-[#7a1a1a] text-[18px] md:text-[20px] group-hover:text-[#5a1414] transition-colors"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {q}
      </span>
      <span className="shrink-0 w-8 h-8 rounded-full bg-[#7a1a1a] text-white flex items-center justify-center">
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 pb-5" : "max-h-0"
      }`}
    >
      <p
        className="text-[#3a2a2a] text-[15px] leading-[1.85]"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {a}
      </p>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about estate planning and our services"
      />

      <section className="bg-gradient-to-b from-[#ebe2d4] to-[#e8dfd0] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
          <p
            className="mt-12 text-center text-[#2c2422] text-[16px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Contact us today to schedule a consultation with our estate
            planning attorney. Together, we&rsquo;ll design a plan that
            provides peace of mind for you and your loved ones.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQPage;
