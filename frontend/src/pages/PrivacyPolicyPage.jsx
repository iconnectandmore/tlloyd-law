import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { privacyPolicy, firmInfo } from "../mock";
import { CheckCircle2 } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 md:p-12 shadow-sm">
            <p
              className="text-[#111827] text-[15px] leading-[1.9] mb-8"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {privacyPolicy.intro}
            </p>

            <div className="bg-[#e6ecf3]/60 border border-[#1e5fa3]/15 p-5 mb-10">
              <p
                className="text-[#1f2937] text-[13px] tracking-wide uppercase font-semibold mb-3"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                This Privacy Policy covers:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {privacyPolicy.topics.map((t) => (
                  <li
                    key={t}
                    className="text-[#1e5fa3] text-[13px] leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-[#6a89b0] mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              {privacyPolicy.sections.map((s) => (
                <div
                  key={s.title}
                  className="border-l-4 border-[#1e5fa3]/50 pl-5"
                >
                  <h2
                    className="text-[#1e5fa3] text-[22px] md:text-[26px] mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.title}
                  </h2>

                  {s.text && (
                    <p
                      className="text-[#111827] text-[15px] leading-[1.9] mb-3"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {s.text}
                    </p>
                  )}

                  {s.blocks &&
                    s.blocks.map((b) => (
                      <div key={b.subtitle} className="mb-4">
                        <h3
                          className="text-[#1f2937] text-[16px] font-semibold mb-1"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {b.subtitle}
                        </h3>
                        <p
                          className="text-[#111827] text-[15px] leading-[1.9]"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {b.text}
                        </p>
                      </div>
                    ))}

                  {s.list && (
                    <ul className="space-y-2 mt-3">
                      {s.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#111827] text-[15px] leading-[1.75]"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#1e5fa3] mt-1 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.contact && (
                    <div
                      className="mt-3 text-[#111827] text-[15px] leading-[1.95] space-y-1"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <p>
                        <span className="font-semibold">Email: </span>
                        <a
                          href={`mailto:${firmInfo.email}`}
                          className="text-[#1e5fa3] hover:underline"
                        >
                          {firmInfo.email}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Phone: </span>
                        <a
                          href={`tel:${firmInfo.phoneLink}`}
                          className="text-[#1e5fa3] hover:underline"
                        >
                          {firmInfo.phone}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Mail: </span>
                        {firmInfo.name}, ATTN: Privacy Policy,{" "}
                        {firmInfo.address}, {firmInfo.city}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-[#1e5fa3]/15">
              <p
                className="text-[#64748b] text-[14px] italic"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span className="font-semibold not-italic text-[#1f2937]">
                  Last Updated:
                </span>{" "}
                {privacyPolicy.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PrivacyPolicyPage;
