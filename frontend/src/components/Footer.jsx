import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { firmInfo } from "../mock";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Schedule", href: "/schedule" },
  { label: "Blog", href: "/blog" },
  { label: "Legal Disclaimer", href: "/legal-disclaimer" },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#5a1414] text-[#f3e8d3]">
        <div className="max-w-7xl mx-auto px-6 py-7">
          <div className="flex justify-center mb-5">
            <div className="h-20 w-20 rounded-md overflow-hidden bg-black shadow-md">
              <img
                src={firmInfo.logo}
                alt="Lloyd Law Firm, PLLC"
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-[14px] tracking-wide hover:text-white transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-5 mt-5">
            <a
              href={firmInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={firmInfo.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={firmInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#ece4d6] text-center py-6 px-6">
        <p
          className="text-[#3a2a2a] text-[13px] max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          The information on this website is for general information purposes
          only. Nothing on this site should be taken as legal advice for any
          individual case or situation.
        </p>
        <p
          className="text-[#3a2a2a] text-[13px] mt-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          This information is not intended to create an attorney-client
          relationship.
        </p>
        <a
          href="/privacy"
          className="text-[#7a1a1a] text-[13px] mt-2 inline-block hover:underline"
        >
          Privacy Policy
        </a>
        <p
          className="text-[#6b5e58] text-[12px] mt-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved {firmInfo.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
