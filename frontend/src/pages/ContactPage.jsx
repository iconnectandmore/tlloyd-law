import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { firmInfo } from "../mock";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
      });
      return;
    }
    toast({
      title: "Message sent",
      description: "Thank you. We'll be in touch shortly.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <section className="bg-gradient-to-b from-[#ebe2d4] to-[#e8dfd0] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2
              className="text-[#7a1a1a] text-[32px] md:text-[40px] mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {firmInfo.name}
            </h2>
            <p
              className="italic text-[#6b5e58] text-[17px] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              &ldquo;{firmInfo.tagline}&rdquo;
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#7a1a1a] text-white flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div
                  className="text-[#2c2422] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <p className="font-bold mb-0.5">Address</p>
                  <p>{firmInfo.address}</p>
                  <p>{firmInfo.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#7a1a1a] text-white flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div
                  className="text-[#2c2422] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <p className="font-bold mb-0.5">Phone</p>
                  <a
                    href={`tel:${firmInfo.phoneLink}`}
                    className="hover:text-[#7a1a1a] transition-colors"
                  >
                    {firmInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#7a1a1a] text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div
                  className="text-[#2c2422] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <p className="font-bold mb-0.5">Email</p>
                  <a
                    href={`mailto:${firmInfo.email}`}
                    className="hover:text-[#7a1a1a] transition-colors"
                  >
                    {firmInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#7a1a1a] text-white flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div
                  className="text-[#2c2422] text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <p className="font-bold mb-0.5">Office Hours</p>
                  <p>{firmInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={firmInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#7a1a1a] hover:bg-[#5a1414] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={firmInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#7a1a1a] hover:bg-[#5a1414] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={firmInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#7a1a1a] hover:bg-[#5a1414] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5ecdc]/80 border border-white/60 p-8 shadow-sm">
            <h3
              className="text-[#7a1a1a] text-[26px] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-[#3a2a2a] text-[13px] tracking-wide mb-1.5 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 bg-white/80 border border-[#c9a96e]/40 focus:border-[#7a1a1a] focus:outline-none text-[#2c2422] text-[15px]"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#3a2a2a] text-[13px] tracking-wide mb-1.5 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full px-4 py-2.5 bg-white/80 border border-[#c9a96e]/40 focus:border-[#7a1a1a] focus:outline-none text-[#2c2422] text-[15px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#3a2a2a] text-[13px] tracking-wide mb-1.5 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full px-4 py-2.5 bg-white/80 border border-[#c9a96e]/40 focus:border-[#7a1a1a] focus:outline-none text-[#2c2422] text-[15px]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#3a2a2a] text-[13px] tracking-wide mb-1.5 font-medium">
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white/80 border border-[#c9a96e]/40 focus:border-[#7a1a1a] focus:outline-none text-[#2c2422] text-[15px] resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#7a1a1a] hover:bg-[#5a1414] text-white px-7 py-3 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
              >
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          title="Lloyd Law Firm Location"
          src="https://www.google.com/maps?q=9951+Atlantic+Blvd+Suite+300,+Jacksonville,+FL+32225&output=embed"
          className="w-full h-[420px] border-0"
          loading="lazy"
        />
      </section>
    </>
  );
};

export default ContactPage;
