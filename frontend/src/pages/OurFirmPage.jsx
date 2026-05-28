import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import {
  CheckCircle2,
  Heart,
  Sparkles,
  ScrollText,
  Target,
  Users,
} from "lucide-react";

const focusAreas = [
  "Wills",
  "Powers of Attorney",
  "Advance Directives",
  "Lady Bird Deeds",
];

const approachItems = [
  "Compassionate and approachable service",
  "Clear communication without unnecessary legal jargon",
  "Personalized legal guidance",
  "Thoughtful planning designed to protect what matters most",
];

const OurFirmPage = () => {
  return (
    <>
      <PageHeader
        title="Our Firm"
        subtitle="Lloyd Law Firm, P.L.L.C."
      />

      {/* Our Mission */}
      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[34px] md:text-[42px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Mission
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] md:text-[17px] leading-[1.9] mb-5"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            At Lloyd Law Firm, our mission is to provide compassionate and
            professional legal services that bring clarity, security, and peace
            of mind to individuals and families. We are committed to building
            meaningful client relationships through personalized guidance
            tailored to each client&rsquo;s unique needs and goals.
          </p>
          <p
            className="text-[#111827] text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Rooted in a strong commitment to community involvement, we strive
            to make a lasting and positive impact by advocating for our
            clients with care, integrity, and confidence.
          </p>
        </div>
      </section>

      {/* Estate Planning Services */}
      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <ScrollText className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Estate Planning Services
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-5"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            At Lloyd Law Firm, we work closely with individuals and families to
            develop personalized estate plans designed to protect assets,
            preserve legacies, and provide peace of mind.
          </p>
          <p
            className="text-[#111827] text-[16px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Whether preparing wills, powers of attorney, advance directives, or
            assisting with long-term planning goals, Attorney Lloyd provides
            thoughtful guidance and clear communication throughout the estate
            planning process.
          </p>
        </div>
      </section>

      {/* A Personalized Approach */}
      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A Personalized Approach
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-6"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            At Lloyd Law Firm, we understand that every client and every family
            is different. We take the time to listen, explain options clearly,
            and develop estate planning solutions tailored to each
            client&rsquo;s unique goals and circumstances.
          </p>
          <h3
            className="text-[#1f2937] text-[18px] md:text-[20px] font-semibold mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our firm is committed to providing:
          </h3>
          <ul className="space-y-3">
            {approachItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#111827] text-[15px] md:text-[16px] leading-[1.75]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <CheckCircle2
                  size={18}
                  className="text-[#1e5fa3] mt-1 shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Areas of Focus */}
      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Areas of Focus
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] leading-[1.9] mb-6"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Lloyd Law Firm focuses on helping individuals and families prepare
            for the future through:
          </p>
          <div className="bg-[#f3f6fa]/80 border border-white/60 p-6 md:p-8">
            <h3
              className="text-[#1e5fa3] text-[22px] md:text-[24px] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Estate Planning
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 text-[#111827] text-[15px] md:text-[16px] leading-[1.75]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#1e5fa3] mt-1 shrink-0"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment to Community */}
      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[36px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Commitment to Community
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] md:text-[17px] leading-[1.9]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Lloyd Law Firm believes in making a positive impact both inside and
            outside the office. We are proud to serve and support our local
            community through meaningful involvement, education, and advocacy.
          </p>
        </div>
      </section>

      {/* Planning for the Future Starts Today */}
      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-[#1e5fa3]" size={28} />
            <h2
              className="text-[#1e5fa3] text-[30px] md:text-[38px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Planning for the Future Starts Today
            </h2>
          </div>
          <p
            className="text-[#111827] text-[16px] md:text-[17px] leading-[1.9] max-w-3xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Whether you are creating your first estate plan or updating
            existing documents, Lloyd Law Firm is here to help you move forward
            with confidence.
          </p>
          <p
            className="mt-8 italic text-[#1e5fa3] text-[22px] md:text-[26px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Trust. Legacy. Peace of Mind.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default OurFirmPage;
