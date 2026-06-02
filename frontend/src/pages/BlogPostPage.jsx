import React from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { blogPosts } from "../mock";
import { Calendar, ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <PageHeader title="Article Not Found" subtitle="" />
        <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="text-[#111827] text-[16px] leading-[1.9] mb-8"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              The article you&rsquo;re looking for doesn&rsquo;t exist or has
              been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#1e5fa3] hover:bg-[#0e4070] text-white px-6 py-3 text-[13px] tracking-[0.15em] font-medium transition-colors duration-200 shadow-sm"
            >
              <ArrowLeft size={16} />
              BACK TO BLOG
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={post.title} subtitle={post.category} />

      <section className="bg-gradient-to-b from-[#e6ecf3] to-[#dde4ec] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#1e5fa3] hover:text-[#0e4070] text-[13px] tracking-wide font-semibold mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            BACK TO ALL ARTICLES
          </Link>

          <div className="flex items-center gap-3 text-[13px] text-[#64748b] mb-6">
            <span className="uppercase tracking-wider text-[#1e5fa3] font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
          </div>

          <div className="rounded-sm overflow-hidden mb-8 shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <article className="bg-[#f3f6fa]/80 border border-white/60 p-8 md:p-12 shadow-sm">
            {post.intro && (
              <p
                className="text-[#111827] text-[17px] md:text-[18px] leading-[1.9] mb-8 italic"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {post.intro}
              </p>
            )}

            <div className="space-y-8">
              {post.sections?.map((s, i) => (
                <div key={i}>
                  <h2
                    className="text-[#1e5fa3] text-[22px] md:text-[26px] mb-4 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.heading}
                  </h2>
                  {s.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-[#111827] text-[16px] leading-[1.9] mb-3"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {post.closing && (
              <div className="mt-10 pt-6 border-t border-[#1e5fa3]/20">
                <p
                  className="text-[#111827] text-[16px] leading-[1.9]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {post.closing}
                </p>
              </div>
            )}
          </article>

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#1e5fa3] hover:text-[#0e4070] text-[13px] tracking-[0.15em] font-semibold transition-colors"
            >
              <ArrowLeft size={14} />
              BACK TO BLOG
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default BlogPostPage;
