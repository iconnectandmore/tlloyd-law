import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { firmInfo } from "../mock";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const SchedulePage = () => {
  return (
    <>
      <PageHeader
        title="Schedule a Consultation"
        subtitle="Take the first step toward peace of mind"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let&rsquo;s Discuss Your Needs
            </h2>
            <p
              className="text-[#111827] text-[16px] leading-[1.9] mb-6"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Whether you&rsquo;re planning ahead, navigating a transition, or
              resolving a dispute, Attorney Lloyd is here to listen. Book a
              confidential consultation today.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Personalized legal guidance",
                "Compassionate, judgment-free conversation",
                "Clear next steps tailored to your goals",
                "In-person, by phone, or virtual",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#1f2937] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#1e5fa3] mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={firmInfo.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-7 py-3.5 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
            >
              <Calendar size={16} />
              BOOK YOUR CONSULTATION
            </a>
          </div>

          <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 shadow-sm">
            <h3
              className="text-[#1e5fa3] text-[24px] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What to Expect
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-[#1f2937] font-bold text-[15px]">
                    Book online
                  </h4>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7] mt-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Choose a time that works for you with our online scheduler.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-[#1f2937] font-bold text-[15px]">
                    Share your goals
                  </h4>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7] mt-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Tell us about your situation so we can prepare meaningful
                    guidance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-[#1f2937] font-bold text-[15px]">
                    Private Meeting with Attorney
                  </h4>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7] mt-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Receive a clear, actionable plan tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#1e5fa3]/15 flex items-center gap-3 text-[#1f2937] text-[14px]">
              <Clock size={16} className="text-[#1e5fa3]" />
              <span>Office Hours: {firmInfo.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default SchedulePage;
