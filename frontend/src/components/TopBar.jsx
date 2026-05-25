import React from "react";
import { firmInfo } from "../mock";

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#5a1414] to-[#7a1a1a] text-[#f3e8d3] text-[13px] tracking-wide">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <span className="font-light">
          {firmInfo.address}, {firmInfo.city}
        </span>
        <span className="text-[#c9a96e] hidden sm:inline">|</span>
        <a
          href={`tel:${firmInfo.phoneLink}`}
          className="font-medium hover:text-white transition-colors duration-200"
        >
          {firmInfo.phone}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
