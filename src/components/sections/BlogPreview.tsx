"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="From the Journal"
          headline="Stories & Insights"
          subhead="Real perspectives on transformation, healing, and the retreat experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-pure-white/90 text-deep-forest border-0 backdrop-blur-sm text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-3.5 h-3.5 text-muted-text" />
                  <span className="text-xs font-sans text-muted-text">{post.readTime}</span>
                  <span className="text-xs text-muted-text">&#183;</span>
                  <span className="text-xs font-sans text-muted-text">{post.date}</span>
                </div>
                <h3 className="font-serif text-xl text-deep-forest mb-2 group-hover:text-terracotta transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-secondary-text leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-terracotta mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium bg-deep-forest text-pure-white hover:bg-deep-forest/90 transition-colors"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
