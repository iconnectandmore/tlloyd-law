import React from "react";
import { firmInfo } from "../mock";

const CTASection = () => (
  <section className="w-full bg-gradient-to-b from-[#d3dde9] to-[#a8b6c8] py-16 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h3
        className="text-[#1e5fa3] text-[28px] md:text-[34px] mb-6"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Contact Us Today At {firmInfo.name}
      </h3>
      <p
        className="italic text-[#1f2937] text-[18px] md:text-[20px] mb-6 leading-relaxed"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        &ldquo;{firmInfo.tagline}&rdquo;
      </p>
      <div
        className="text-[#111827] text-[15px] leading-[1.9] space-y-1 mb-6"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <p>
          Phone:{" "}
          <a
            href={`tel:${firmInfo.phoneLink}`}
            className="hover:text-[#1e5fa3] transition-colors underline-offset-4 hover:underline"
          >
            {firmInfo.phone}
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${firmInfo.email}`}
            className="hover:text-[#1e5fa3] transition-colors underline-offset-4 hover:underline"
          >
            {firmInfo.email}
          </a>
        </p>
        <p>Location: Proudly serving Jacksonville and surrounding areas.</p>
      </div>
      <a
        href={firmInfo.scheduleUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-8 py-3.5 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
      >
        SCHEDULE A CONSULTATION
      </a>
    </div>
  </section>
);

export default CTASection;
