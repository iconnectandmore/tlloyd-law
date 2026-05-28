import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, firmInfo } from "../mock";

const Logo = ({ size = "h-40" }) => (
  <div
    className={`${size} flex items-center justify-center overflow-hidden`}
    style={{ aspectRatio: "1 / 1" }}
  >
    <img
      src={firmInfo.logo}
      alt="Lloyd Law Firm, PLLC"
      className="h-full w-full object-contain"
    />
  </div>
);

const NavItem = ({ link, currentPath }) => {
  const [open, setOpen] = useState(false);
  const active =
    currentPath === link.href ||
    (link.children && link.children.some((c) => c.href === currentPath));

  if (link.children) {
    const ParentEl = link.href ? Link : "div";
    const parentProps = link.href
      ? { to: link.href }
      : { role: "button", tabIndex: 0 };
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ParentEl
          {...parentProps}
          className={`inline-flex items-center gap-1 cursor-pointer text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 ${
            active ? "text-[#6a89b0]" : "text-[#1e5fa3] hover:text-[#6a89b0]"
          }`}
        >
          {link.label}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </ParentEl>

        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
            <div className="w-72 bg-[#eaf0f7] border border-[#1e5fa3]/15 shadow-xl py-2">
              {link.children.map((c) => {
                const sub = currentPath === c.href;
                return (
                  <Link
                    key={c.label}
                    to={c.href}
                    className={`block px-5 py-2.5 text-[13px] leading-tight transition-colors duration-150 ${
                      sub
                        ? "bg-[#1e5fa3]/10 text-[#0e4070]"
                        : "text-[#1e5fa3] hover:bg-[#1e5fa3]/8 hover:text-[#0e4070]"
                    }`}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {c.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={link.href}
      className={`text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 ${
        active ? "text-[#6a89b0]" : "text-[#1e5fa3] hover:text-[#6a89b0]"
      }`}
    >
      {link.label}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <nav className="w-full bg-[#eef3f8] relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hidden lg:flex items-center justify-between py-3">
          <ul className="flex items-center gap-7 flex-1 justify-end pr-8">
            {leftLinks.map((l) => (
              <li key={l.label}>
                <NavItem link={l} currentPath={location.pathname} />
              </li>
            ))}
          </ul>

          <Link to="/" className="shrink-0" aria-label="Home">
            <Logo size="h-40" />
          </Link>

          <ul className="flex items-center gap-7 flex-1 pl-8">
            {rightLinks.map((l) => (
              <li key={l.label}>
                <NavItem link={l} currentPath={location.pathname} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:hidden items-center justify-between py-2">
          <Link to="/" aria-label="Home">
            <Logo size="h-20" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#1e5fa3]"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <ul className="lg:hidden pb-4 flex flex-col gap-1 border-t border-[#1e5fa3]/20 pt-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenSub(openSub === l.label ? null : l.label)
                      }
                      className="w-full flex items-center justify-between py-2 text-[#1e5fa3] text-[13px] tracking-[0.15em] font-medium"
                    >
                      {l.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openSub === l.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSub === l.label && (
                      <div className="pl-4 pb-2 flex flex-col gap-2">
                        {l.children.map((c) => (
                          <Link
                            key={c.label}
                            to={c.href}
                            onClick={() => {
                              setOpen(false);
                              setOpenSub(null);
                            }}
                            className="text-[#1e5fa3] text-[13px] hover:text-[#6a89b0]"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[#1e5fa3] text-[13px] tracking-[0.15em] font-medium hover:text-[#6a89b0]"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
