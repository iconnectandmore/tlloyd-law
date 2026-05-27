import React from "react";
import { firmInfo } from "../mock";

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0e4070] to-[#1e5fa3] text-[#e8edf4] text-[13px] tracking-wide">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <span className="font-light">
          {firmInfo.address}, {firmInfo.city}
        </span>
        <span className="text-[#6a89b0] hidden sm:inline">|</span>
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
