import React from "react";
import { firmInfo, welcomeCopy, heroImage, skylineImage } from "../mock";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Skyline background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${skylineImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#dde4ec]/85 via-[#e6ecf3]/75 to-[#cbd5e1]/85" />
      <div className="absolute inset-0 bg-[#1e5fa3]/10" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-end md:items-center min-h-[520px] md:min-h-[620px]">
        {/* Attorney portrait */}
        <div className="relative flex justify-center md:justify-end pt-10">
          <img
            src={heroImage}
            alt="Attorney Tamla Lloyd"
            className="max-h-[560px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 88%, transparent 100%)",
            }}
          />
        </div>

        {/* Welcome text */}
        <div className="text-white pb-14 md:pb-0 md:pl-6 max-w-xl">
          <h1
            className="text-[34px] md:text-[42px] leading-[1.15] font-normal mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Welcome to
          </h1>
          <h2
            className="text-[28px] md:text-[36px] leading-[1.15] font-normal mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {firmInfo.name}
          </h2>
          <p
            className="text-[15px] md:text-[16px] leading-[1.85] text-white/95"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {welcomeCopy}
          </p>
          <p
            className="mt-6 italic text-[#e8edf4] text-[18px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            &ldquo;{firmInfo.tagline}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
