import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";
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
    title: `${post.title} — NutriCove Retreats`,
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
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-light bg-gold/15 px-2.5 py-1 rounded">
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
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none font-sans text-body-text font-light leading-relaxed
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-deep-forest [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-normal
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-deep-forest [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-normal
            [&_strong]:font-medium [&_strong]:text-deep-forest
            [&_p]:mb-5 [&_p]:text-base
            [&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
            [&_li]:text-base [&_li]:text-body-text
            [&_blockquote]:border-l-4 [&_blockquote]:border-terracotta [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-secondary-text
          ">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i}>{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={i}>{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i}>
                    {block.split("\n").map((li, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: formatLine(li.replace(/^- /, "")) }} />
                    ))}
                  </ul>
                );
              }
              return <p key={i} dangerouslySetInnerHTML={{ __html: formatLine(block) }} />;
            })}
          </article>

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-brand-border">
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

function formatLine(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}
