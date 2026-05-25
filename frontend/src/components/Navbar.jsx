import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const NavLinkItem = ({ link, currentPath }) => {
  const active = currentPath === link.href;
  return (
    <Link
      to={link.href}
      className={`text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 ${
        active
          ? "text-[#c9a96e]"
          : "text-[#7a1a1a] hover:text-[#c9a96e]"
      }`}
    >
      {link.label}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <nav className="w-full bg-[#ece4d6] relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hidden lg:flex items-center justify-between py-2">
          <ul className="flex items-center gap-7 flex-1 justify-end pr-8">
            {leftLinks.map((l) => (
              <li key={l.label}>
                <NavLinkItem link={l} currentPath={location.pathname} />
              </li>
            ))}
          </ul>

          <Link to="/" className="shrink-0" aria-label="Home">
            <LaurelLogo />
          </Link>

          <ul className="flex items-center gap-7 flex-1 pl-8">
            {rightLinks.map((l) => (
              <li key={l.label}>
                <NavLinkItem link={l} currentPath={location.pathname} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:hidden items-center justify-between py-2">
          <Link to="/" aria-label="Home">
            <LaurelLogo />
          </Link>
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
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#7a1a1a] text-[13px] tracking-[0.15em] font-medium hover:text-[#c9a96e]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
