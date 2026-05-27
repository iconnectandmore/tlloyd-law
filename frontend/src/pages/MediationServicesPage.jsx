import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { mediationContent } from "../mock";
import { CheckCircle2, Users, Building2, Scale } from "lucide-react";

const whenIcons = [Users, Building2, Scale];

const MediationServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Mediation Services"
        subtitle="Resolve disputes with dignity and efficiency"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-[#111827] text-[17px] md:text-[18px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {mediationContent.intro}
          </p>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {mediationContent.whatHeading}
          </h2>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-10"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {mediationContent.whatText}
          </p>

          <h3
            className="text-[#1f2937] text-[20px] md:text-[22px] font-semibold mb-5"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {mediationContent.whenHeading}
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {mediationContent.whenItems.map((item, i) => {
              const Icon = whenIcons[i % whenIcons.length];
              return (
                <div
                  key={item.title}
                  className="bg-[#f3f6fa]/80 border border-white/60 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h4
                    className="text-[#1e5fa3] text-[20px] mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {mediationContent.benefitsHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {mediationContent.benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 bg-[#f3f6fa]/80 border border-white/60 p-6"
              >
                <CheckCircle2
                  size={22}
                  className="text-[#1e5fa3] mt-1 shrink-0"
                />
                <div>
                  <h4
                    className="text-[#1e5fa3] text-[18px] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {b.title}
                  </h4>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {mediationContent.whyHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {mediationContent.why.map((w) => (
              <div
                key={w.title}
                className="bg-[#f3f6fa]/80 border border-white/60 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4
                  className="text-[#1e5fa3] text-[20px] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {w.title}
                </h4>
                <p
                  className="text-[#1f2937] text-[14px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-[#1e5fa3] text-[28px] md:text-[32px] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {mediationContent.rightHeading}
            </h2>
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {mediationContent.rightText}
            </p>
          </div>
          <div>
            <h2
              className="text-[#1e5fa3] text-[28px] md:text-[32px] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {mediationContent.scheduleHeading}
            </h2>
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {mediationContent.scheduleText}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default MediationServicesPage;
