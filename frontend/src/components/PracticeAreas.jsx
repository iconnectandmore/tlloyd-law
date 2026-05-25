import React from "react";
import {
  Landmark,
  Users,
  Scale,
  Handshake,
  Heart,
  Contact as ContactIcon,
} from "lucide-react";
import { practiceAreas } from "../mock";

const iconMap = {
  Landmark,
  Users,
  Scale,
  Handshake,
  Heart,
  Contact: ContactIcon,
};

const PracticeAreaCard = ({ area }) => {
  const Icon = iconMap[area.icon] || Landmark;
  return (
    <div className="group relative bg-[#f5ecdc]/70 backdrop-blur-[1px] border border-white/40 px-8 py-10 md:px-10 md:py-12 transition-all duration-300 hover:bg-[#f5ecdc]/95 hover:shadow-lg flex flex-col">
      <h3
        className="text-[#7a1a1a] text-[26px] md:text-[28px] font-normal mb-5 leading-snug"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {area.title}
      </h3>
      <p
        className="text-[#3a2a2a] text-[15px] leading-[1.7] mb-8 flex-grow"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {area.question}
      </p>
      <a
        href={`#${area.id}`}
        className="inline-flex items-center gap-2.5 self-start bg-[#7a1a1a] hover:bg-[#5a1414] text-white px-6 py-3 text-[14px] tracking-wide font-medium transition-colors duration-200 shadow-sm"
      >
        <Icon size={18} strokeWidth={2} />
        <span>{area.cta}</span>
      </a>
    </div>
  );
};

const PracticeAreas = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e8dfd0] via-[#ebe2d4] to-[#e0d4c2] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
