import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { whyEstatePlanning } from "../mock";
import { CheckCircle2, Sparkles, Users } from "lucide-react";

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((it, i) => (
      <li
        key={i}
        className="flex items-start gap-3 text-[#111827] text-[15px] leading-[1.7]"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <CheckCircle2
          size={18}
          className="text-[#1e5fa3] mt-0.5 shrink-0"
        />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const WhyEstatePlanningPage = () => {
  return (
    <>
      <PageHeader
        title="Why Estate Planning Matters"
        subtitle="Plan today for a more secure tomorrow"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-[#111827] text-[17px] md:text-[18px] leading-[1.9] mb-10"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {whyEstatePlanning.intro}
          </p>

          <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 md:p-10 shadow-sm">
            <h2
              className="text-[#1e5fa3] text-[26px] md:text-[30px] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {whyEstatePlanning.benefitsHeading}
            </h2>
            <BulletList items={whyEstatePlanning.benefits} />
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {whyEstatePlanning.approachHeading}
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-8"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {whyEstatePlanning.approachIntro}
          </p>
          <h3
            className="text-[#1f2937] text-[20px] font-semibold mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {whyEstatePlanning.approachListHeading}
          </h3>
          <BulletList items={whyEstatePlanning.approach} />
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <Users className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {whyEstatePlanning.whoHeading}
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-6"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {whyEstatePlanning.whoIntro}
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
            {whyEstatePlanning.who.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-[#111827] text-[15px] leading-[1.7]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <CheckCircle2
                  size={18}
                  className="text-[#1e5fa3] mt-0.5 shrink-0"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] italic"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {whyEstatePlanning.closing}
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default WhyEstatePlanningPage;
