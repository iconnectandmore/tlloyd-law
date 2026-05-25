import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, firmInfo } from "../mock";

const Logo = ({ size = "h-24" }) => (
  <div
    className={`${size} flex items-center justify-center rounded-md overflow-hidden bg-black shadow-md`}
    style={{ aspectRatio: "1 / 1" }}
  >
    <img
      src={firmInfo.logo}
      alt="Lloyd Law Firm, PLLC"
      className="h-full w-full object-contain p-1"
    />
  </div>
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
        <div className="hidden lg:flex items-center justify-between py-3">
          <ul className="flex items-center gap-7 flex-1 justify-end pr-8">
            {leftLinks.map((l) => (
              <li key={l.label}>
                <NavLinkItem link={l} currentPath={location.pathname} />
              </li>
            ))}
          </ul>

          <Link to="/" className="shrink-0" aria-label="Home">
            <Logo size="h-24" />
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
            <Logo size="h-14" />
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
