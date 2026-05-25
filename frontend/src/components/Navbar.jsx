import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../mock";

const LaurelLogo = () => (
  <svg
    viewBox="0 0 120 120"
    className="w-[88px] h-[88px] drop-shadow-sm"
    aria-label="Lloyd Law Firm Logo"
  >
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8a1f24" />
        <stop offset="100%" stopColor="#5a1414" />
      </linearGradient>
    </defs>
    {/* Left laurel */}
    <g fill="url(#leafGrad)">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse
          key={`l${i}`}
          cx={26 - i * 1.5}
          cy={80 - i * 11}
          rx="6"
          ry="11"
          transform={`rotate(${-25 + i * 5} ${26 - i * 1.5} ${80 - i * 11})`}
        />
      ))}
    </g>
    {/* Right laurel */}
    <g fill="url(#leafGrad)">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse
          key={`r${i}`}
          cx={94 + i * 1.5}
          cy={80 - i * 11}
          rx="6"
          ry="11"
          transform={`rotate(${25 - i * 5} ${94 + i * 1.5} ${80 - i * 11})`}
        />
      ))}
    </g>
    {/* Center monogram L */}
    <text
      x="60"
      y="68"
      textAnchor="middle"
      fontFamily="Playfair Display, Georgia, serif"
      fontSize="54"
      fontStyle="italic"
      fontWeight="600"
      fill="#7a1a1a"
    >
      L
    </text>
    <text
      x="60"
      y="92"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontSize="8.5"
      letterSpacing="2.5"
      fill="#7a1a1a"
    >
      LAW FIRM
    </text>
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <nav className="w-full bg-[#ece4d6] relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between py-2">
          <ul className="flex items-center gap-7 flex-1 justify-end pr-8">
            {leftLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[#7a1a1a] text-[13px] tracking-[0.15em] font-medium hover:text-[#c9a96e] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/" className="shrink-0" aria-label="Home">
            <LaurelLogo />
          </a>

          <ul className="flex items-center gap-7 flex-1 pl-8">
            {rightLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[#7a1a1a] text-[13px] tracking-[0.15em] font-medium hover:text-[#c9a96e] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between py-2">
          <a href="/" aria-label="Home">
            <LaurelLogo />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#7a1a1a]"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <ul className="lg:hidden pb-4 flex flex-col gap-3 border-t border-[#7a1a1a]/20 pt-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block text-[#7a1a1a] text-[13px] tracking-[0.15em] font-medium hover:text-[#c9a96e]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
