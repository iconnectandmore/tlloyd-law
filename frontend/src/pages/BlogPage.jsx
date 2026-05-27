import React from "react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { blogPosts } from "../mock";
import { Calendar, ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <PageHeader
        title="Insights &amp; Articles"
        subtitle="Guidance on estate planning, mediation, and the matters that protect your future"
      />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#f3f6fa]/85 border border-white/60 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#cbd5e1]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[12px] text-[#64748b] mb-3">
                    <span className="uppercase tracking-wider text-[#1e5fa3] font-semibold">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="text-[#1e5fa3] text-[20px] mb-3 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[#1f2937] text-[14px] leading-[1.7] flex-grow"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 mt-5 text-[#1e5fa3] hover:text-[#0e4070] text-[13px] font-semibold tracking-wide transition-colors"
                  >
                    READ ARTICLE <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default BlogPage;
