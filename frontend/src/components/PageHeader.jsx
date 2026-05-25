import React from "react";
import { skylineImage } from "../mock";

const PageHeader = ({ title, subtitle }) => (
  <section className="relative w-full overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${skylineImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#5a1414]/85 via-[#7a1a1a]/75 to-[#5a1414]/85" />
    <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
      <h1
        className="text-[40px] md:text-[56px] text-[#f3e8d3] leading-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="mt-4 text-[#f0e4ca] text-[16px] md:text-[18px] italic max-w-2xl mx-auto"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
