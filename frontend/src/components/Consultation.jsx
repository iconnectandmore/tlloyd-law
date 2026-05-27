import React from "react";
import { firmInfo } from "../mock";

const Badge = ({ letters, label, color }) => (
  <div className="flex flex-col items-center">
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center shadow-md border-4"
      style={{ backgroundColor: color, borderColor: "#fff" }}
    >
      <span
        className="text-white font-bold text-[18px] tracking-wider"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {letters}
      </span>
    </div>
    <span className="text-[10px] text-[#1f2937] mt-1 tracking-wide">{label}</span>
  </div>
);

const Consultation = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#d3dde9] via-[#bdc8d8] to-[#a8b6c8] py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="flex md:flex-col gap-6 items-center md:items-start justify-center md:justify-start">
          <Badge letters="ARAG" label="Network Attorney" color="#e8b923" />
          <Badge letters="AVVO" label="Client's Choice" color="#2a5a8a" />
        </div>

        <div>
          <h2
            className="text-[#1e5fa3] text-[40px] md:text-[48px] font-normal mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Schedule a Consultation
          </h2>
          <div
            className="text-[#111827] text-[16px] leading-[1.9] space-y-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <p className="font-bold">{firmInfo.name}</p>
            <p>{firmInfo.address}</p>
            <p>{firmInfo.city}</p>
            <p className="pt-2">
              Phone:{" "}
              <a
                href={`tel:${firmInfo.phoneLink}`}
                className="hover:text-[#1e5fa3] transition-colors"
              >
                {firmInfo.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${firmInfo.email}`}
                className="hover:text-[#1e5fa3] transition-colors"
              >
                {firmInfo.email}
              </a>
            </p>
          </div>

          <a
            href={firmInfo.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-7 py-3 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
