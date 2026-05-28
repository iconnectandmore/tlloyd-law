import React from "react";
import { Link } from "react-router-dom";
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

const routeMap = {
  "estate-planning": "/practice-areas",
  mediation: "/mediation-services",
  probate: "/practice-areas",
  contact: "/contact",
};

const PracticeAreaCard = ({ area }) => {
  const Icon = iconMap[area.icon] || Landmark;
  return (
    <div className="group relative bg-[#f3f6fa]/80 backdrop-blur-[1px] border border-white/40 px-8 py-10 md:px-10 md:py-12 transition-all duration-300 hover:bg-[#f3f6fa]/95 hover:shadow-lg flex flex-col items-center text-center">
      <h3
        className="text-[#1e5fa3] text-[26px] md:text-[28px] font-normal mb-5 leading-snug"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {area.title}
      </h3>
      <p
        className="text-[#1f2937] text-[15px] leading-[1.7] mb-8 flex-grow max-w-sm"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {area.question}
      </p>
      <Link
        to={routeMap[area.id] || "/practice-areas"}
        className="inline-flex items-center gap-2.5 bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-6 py-3 text-[14px] tracking-wide font-medium transition-colors duration-200 shadow-sm"
      >
        <Icon size={18} strokeWidth={2} />
        <span>{area.cta}</span>
      </Link>
    </div>
  );
};

const PracticeAreas = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#dde4ec] via-[#e6ecf3] to-[#cbd5e1] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
