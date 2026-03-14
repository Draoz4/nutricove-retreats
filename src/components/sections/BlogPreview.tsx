"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  const blogPreviewSlice = blogPosts.slice(0, 6);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Insights"
          headline="From the Journal"
          subhead="Perspectives on healing, transformation, and the science behind the retreat experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {blogPreviewSlice.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group bg-pure-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 block"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-light bg-gold/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-deep-forest leading-snug group-hover:text-terracotta transition-colors duration-300">
                    {post.title}
                  </h4>
                  <span className="inline-flex items-center text-xs font-medium text-terracotta mt-3">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors">
            View All Articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
