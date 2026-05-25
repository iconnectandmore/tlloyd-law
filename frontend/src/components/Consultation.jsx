import React from "react";
import { Link } from "react-router-dom";
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
    <span className="text-[10px] text-[#3a2a2a] mt-1 tracking-wide">{label}</span>
  </div>
);

const Consultation = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e8dccb] via-[#d9c8b3] to-[#cbb89e] py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="flex md:flex-col gap-6 items-center md:items-start justify-center md:justify-start">
          <Badge letters="ARAG" label="Network Attorney" color="#e8b923" />
          <Badge letters="AVVO" label="Client's Choice" color="#2a5a8a" />
        </div>

        <div>
          <h2
            className="text-[#7a1a1a] text-[40px] md:text-[48px] font-normal mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Schedule a Consultation
          </h2>
          <div
            className="text-[#2c2422] text-[16px] leading-[1.9] space-y-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <p className="font-bold">{firmInfo.name}</p>
            <p>{firmInfo.address}</p>
            <p>{firmInfo.city}</p>
            <p className="pt-2">
              Phone:{" "}
              <a
                href={`tel:${firmInfo.phoneLink}`}
                className="hover:text-[#7a1a1a] transition-colors"
              >
                {firmInfo.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${firmInfo.email}`}
                className="hover:text-[#7a1a1a] transition-colors"
              >
                {firmInfo.email}
              </a>
            </p>
          </div>

          <Link
            to="/schedule"
            className="inline-block mt-8 bg-[#7a1a1a] hover:bg-[#5a1414] text-white px-7 py-3 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
          >
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
