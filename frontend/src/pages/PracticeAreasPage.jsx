import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { estatePlanningServices } from "../mock";
import {
  ScrollText,
  Shield,
  Heart,
  FileText,
  Home as HomeIcon,
  Handshake,
  Landmark,
} from "lucide-react";

const serviceIcons = [ScrollText, Shield, Heart, FileText, HomeIcon];

const PracticeAreasPage = () => {
  return (
    <>
      <PageHeader
        title="Practice Areas"
        subtitle="Personalized legal services tailored to your needs"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-[#1e5fa3] text-[36px] md:text-[46px] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Protect Your Family. Preserve Your Legacy.
          </h2>
          <p
            className="text-[#64748b] text-[18px] italic mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Florida Estate Planning Services
          </p>
          <div
            className="text-[#111827] text-[16px] leading-[1.9] space-y-4 max-w-3xl mx-auto text-left"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <p>
              At Lloyd Law Firm, P.L.L.C., we understand that estate planning
              is about more than documents — it is about protecting the people
              you love and preparing for the future with confidence. We work
              with individuals and families throughout Florida to create
              personalized estate plans that reflect their wishes, safeguard
              their assets, and provide peace of mind.
            </p>
            <p>
              Whether you are creating your first will, planning for
              retirement, caring for aging parents, or protecting young
              children, our firm provides compassionate and professional
              guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0f7] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Comprehensive Estate Planning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {estatePlanningServices.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div
                  key={s.title}
                  className="bg-[#f3f6fa]/80 border border-white/60 p-8 hover:shadow-lg transition-shadow duration-300 flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      className="text-[#1e5fa3] text-[22px] mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[#1f2937] text-[15px] leading-[1.8]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {s.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#dde4ec] to-[#e6ecf3] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-[#1e5fa3] text-[32px] md:text-[40px] mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center">
                <Handshake size={22} strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="text-[#1e5fa3] text-[22px] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Mediation
                </h3>
                <p
                  className="text-[#1f2937] text-[15px] leading-[1.8]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Through mediation, we provide a safe space for parties to
                  discuss their differences openly. Our trained mediators guide
                  conversations towards resolution, transforming conflict into
                  collaboration for a constructive future.
                </p>
              </div>
            </div>
            <div className="bg-[#f3f6fa]/80 border border-white/60 p-8 flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e5fa3] text-white flex items-center justify-center">
                <Landmark size={22} strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="text-[#1e5fa3] text-[22px] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Probate
                </h3>
                <p
                  className="text-[#1f2937] text-[15px] leading-[1.8]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  We guide families through the probate process with care,
                  helping you administer estates, navigate court requirements,
                  and resolve issues so loved ones can move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PracticeAreasPage;
