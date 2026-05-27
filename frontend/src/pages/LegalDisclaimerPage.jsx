import React from "react";
import PageHeader from "../components/PageHeader";
import { legalDisclaimer } from "../mock";

const LegalDisclaimerPage = () => {
  return (
    <>
      <PageHeader
        title="Legal Disclaimer"
        subtitle="Important information about this website and our services"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 md:p-12 shadow-sm">
            <h2
              className="text-[#1e5fa3] text-[28px] md:text-[32px] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Legal Disclaimer
            </h2>
            <p
              className="text-[#111827] text-[15px] leading-[1.9] mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {legalDisclaimer.intro}
            </p>
            <p
              className="text-[#111827] text-[15px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {legalDisclaimer.intro2}
            </p>

            <div className="mt-10 space-y-8">
              {legalDisclaimer.sections.map((s) => (
                <div
                  key={s.title}
                  className="border-l-4 border-[#1e5fa3]/50 pl-5"
                >
                  <h3
                    className="text-[#1e5fa3] text-[20px] md:text-[22px] mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[#111827] text-[15px] leading-[1.9]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalDisclaimerPage;
