import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { attorney } from "../mock";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Meet the Attorney behind Lloyd Law Firm"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[320px_1fr] gap-12 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-[300px] rounded-sm overflow-hidden shadow-xl border-4 border-white">
              <img
                src={attorney.headshot}
                alt={attorney.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <h2
              className="mt-6 text-[28px] text-[#1e5fa3] text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {attorney.name}
            </h2>
            <p
              className="text-[#64748b] text-[15px] tracking-wide text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {attorney.title}
            </p>
          </div>

          <div className="space-y-5">
            {attorney.bio.map((p, i) => (
              <p
                key={i}
                className="text-[#111827] text-[16px] leading-[1.85]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-[#1e5fa3] text-[36px] md:text-[44px] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Mission
          </h2>
          <p
            className="text-[#111827] text-[17px] md:text-[18px] leading-[1.9] max-w-4xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {attorney.mission}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[34px] md:text-[42px] mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Practice Area
          </h2>
          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6">
            {attorney.expertise.map((e) => (
              <div
                key={e.title}
                className="bg-[#f3f6fa]/80 border border-white/50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3
                  className="text-[#1e5fa3] text-[22px] mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {e.title}
                </h3>
                <p
                  className="text-[#1f2937] text-[15px] leading-[1.8]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-[#1e5fa3]" size={32} />
              <h2
                className="text-[#1e5fa3] text-[28px] md:text-[32px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Education &amp; Credentials
              </h2>
            </div>
            <ul className="space-y-3">
              {attorney.education.map((e, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#111827] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Award
                    size={16}
                    className="text-[#6a89b0] mt-1.5 shrink-0"
                  />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[#1e5fa3]" size={32} />
              <h2
                className="text-[#1e5fa3] text-[28px] md:text-[32px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Professional Memberships
              </h2>
            </div>
            <ul className="space-y-3">
              {attorney.memberships.map((m, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#111827] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Award
                    size={16}
                    className="text-[#6a89b0] mt-1.5 shrink-0"
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
