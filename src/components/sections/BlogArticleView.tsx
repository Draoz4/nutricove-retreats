"use client";

import { motion } from "framer-motion";

function formatLine(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}

interface BlogArticleViewProps {
  content: string;
}

export default function BlogArticleView({ content }: BlogArticleViewProps) {
  return (
    <section className="bg-warm-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <article className="prose prose-lg max-w-none font-sans text-body-text font-light leading-relaxed
          [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-deep-forest [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-normal
          [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-deep-forest [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-normal
          [&_strong]:font-medium [&_strong]:text-deep-forest
          [&_p]:mb-5 [&_p]:text-base
          [&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
          [&_li]:text-base [&_li]:text-body-text
          [&_blockquote]:border-l-4 [&_blockquote]:border-terracotta [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-secondary-text
        ">
          {content.split("\n\n").map((block, i) => {
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
      </motion.div>
    </section>
  );
}
