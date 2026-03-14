import Navbar from "@/components/Navbar";
import PageHero from "@/components/sections/PageHero";
import BlogGrid from "@/components/sections/BlogGrid";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Journal \u2014 NutriCove Retreats",
  description:
    "Perspectives on healing, transformation, and the science behind the retreat experience. Articles on burnout recovery, grief processing, plant medicine safety, and choosing the right retreat.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />

      <PageHero
        label="Insights"
        headline="From the Journal"
        subtext="Perspectives on healing, transformation, and the science behind the retreat experience."
      />

      <BlogGrid posts={blogPosts} />

      <Footer />
    </>
  );
}
