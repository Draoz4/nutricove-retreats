import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
import BlogArticleView from "@/components/sections/BlogArticleView";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} \u2014 NutriCove Retreats`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <div className="pt-20" />

      {/* Hero */}
      <section className="relative bg-deep-forest py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/80 to-deep-forest" />
        </div>
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(184,148,62,0.1)_0%,transparent_70%)]"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-light bg-gold/15 backdrop-blur-sm px-2.5 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-pure-white/40">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-pure-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="font-sans text-base text-pure-white/50 font-light leading-relaxed max-w-xl mx-auto">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <BlogArticleView content={post.content} />

      {/* Back link */}
      <section className="bg-warm-white pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="pt-8 border-t border-brand-border">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors">
              &larr; Back to Journal
            </Link>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Experience This Yourself?"
        body="Book your retreat and begin your transformation. Our team will guide you through the process."
        primaryCta={{ label: "Book Your Retreat", href: "/book" }}
        secondaryCta={{ label: "Explore Destinations", href: "/#destinations" }}
      />

      <Footer />
    </>
  );
}
