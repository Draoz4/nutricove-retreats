import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Journal — NutriCove Retreats",
  description:
    "Perspectives on healing, transformation, and the science behind the retreat experience. Articles on burnout recovery, grief processing, plant medicine safety, and choosing the right retreat.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      {/* Hero */}
      <section className="bg-deep-forest py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase mb-3 text-gold-light">
            Insights
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-pure-white mb-6 leading-tight">
            From the Journal
          </h1>
          <p className="font-sans text-lg text-pure-white/55 font-light leading-relaxed max-w-xl mx-auto">
            Perspectives on healing, transformation, and the science behind the retreat experience.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-warm-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-pure-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-light bg-gold/15 backdrop-blur-sm px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl text-deep-forest leading-snug group-hover:text-terracotta transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-secondary-text font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-text">{post.readTime}</span>
                    <span className="inline-flex items-center text-sm font-medium text-terracotta group-hover:text-terracotta-hover transition-colors">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
