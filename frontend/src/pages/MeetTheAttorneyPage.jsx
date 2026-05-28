import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const MeetTheAttorneyPage = () => {
  return (
    <>
      <PageHeader
        title="Meet the Attorney"
        subtitle="Get to know Attorney Tamla N. Lloyd"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 md:p-12 shadow-sm">
            <p
              className="text-[#111827] text-[17px] leading-[1.9] text-center italic"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Content coming soon — add Attorney Lloyd's biography, photo,
              education, credentials, and professional memberships.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default MeetTheAttorneyPage;
