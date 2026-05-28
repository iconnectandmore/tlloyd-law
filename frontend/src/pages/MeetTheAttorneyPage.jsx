import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { attorney } from "../mock";
import { GraduationCap, Award, Briefcase, MessageCircle } from "lucide-react";

const MeetTheAttorneyPage = () => {
  return (
    <>
      <PageHeader
        title="Meet the Attorney"
        subtitle="Get to know Attorney Tamla N. Lloyd"
      />

      {/* Bio + headshot */}
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
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Tamla, founder and owner of Lloyd Law Firm in Jacksonville,
              Florida, is a compassionate and dedicated attorney committed to
              guiding individuals, families, and businesses through important
              legal matters with professionalism, integrity, and care.
            </p>
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              With a focus on estate planning, Attorney Lloyd provides
              personalized legal solutions tailored to each client&rsquo;s
              unique needs and goals. She works closely with clients to help
              them plan for the future, protect what matters most, and move
              forward with confidence and peace of mind.
            </p>
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Passionate about serving her community, Attorney Lloyd actively
              participates in educational workshops, volunteer initiatives,
              and community outreach efforts aimed at expanding access to
              legal information and services. Her commitment reflects a belief
              in empowering others through thoughtful legal guidance and
              meaningful community involvement.
            </p>
            <p
              className="text-[#111827] text-[16px] leading-[1.9]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Whether preparing comprehensive estate plans or assisting clients
              through significant life decisions, Attorney Lloyd prioritizes
              clear communication, personalized service, and practical
              solutions designed to support long-term client goals.
            </p>
          </div>
        </div>
      </section>

      {/* Approach to Client Service */}
      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Approach to Client Service
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Attorney Lloyd believes estate planning should be clear,
            approachable, and tailored to each client&rsquo;s life
            circumstances. She takes time to explain options in plain language
            and works closely with clients to ensure they feel informed and
            confident throughout the process.
          </p>
        </div>
      </section>

      {/* Education + Memberships */}
      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
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

export default MeetTheAttorneyPage;
