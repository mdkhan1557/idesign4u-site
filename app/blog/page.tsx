import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | iDesign4U - Web Design Tips & Insights",
  description:
    "Stay updated with the latest web design trends, tips, and insights from our expert team.",
};

const posts = [
  {
    slug: "top-web-design-trends-2024",
    title: "Top Web Design Trends to Watch in 2024",
    excerpt:
      "Discover the cutting-edge design trends that are shaping the future of web design. From glassmorphism to dark mode, learn what's hot.",
    category: "Design Trends",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    author: "Sarah Design",
    bg: "linear-gradient(135deg, rgba(108,71,255,.3), rgba(255,77,141,.2))",
  },
  {
    slug: "improve-website-conversion-rate",
    title: "10 Ways to Improve Your Website Conversion Rate",
    excerpt:
      "Learn proven strategies to turn more visitors into customers. From CTA optimization to trust signals, boost your conversions today.",
    category: "Conversion",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    author: "Mike Growth",
    bg: "linear-gradient(135deg, rgba(0,229,160,.3), rgba(108,71,255,.2))",
  },
  {
    slug: "seo-basics-beginners",
    title: "SEO Basics: A Complete Guide for Beginners",
    excerpt:
      "Everything you need to know about SEO to get your website ranking higher on Google. Perfect for beginners starting their journey.",
    category: "SEO",
    date: "Jan 5, 2024",
    readTime: "12 min read",
    author: "Alex SEO",
    bg: "linear-gradient(135deg, rgba(255,77,141,.3), rgba(245,166,35,.2))",
  },
  {
    slug: "mobile-first-design-guide",
    title: "Why Mobile-First Design is Essential in 2024",
    excerpt:
      "With mobile traffic dominating the web, learn why designing for mobile first is crucial and how to implement it effectively.",
    category: "Mobile",
    date: "Dec 28, 2023",
    readTime: "6 min read",
    author: "Emma Mobile",
    bg: "linear-gradient(135deg, rgba(108,71,255,.25), rgba(0,229,160,.15))",
  },
  {
    slug: "choosing-right-color-palette",
    title: "How to Choose the Right Color Palette for Your Brand",
    excerpt:
      "Color psychology plays a huge role in branding. Learn how to select colors that resonate with your audience and strengthen your identity.",
    category: "Branding",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    author: "Chris Colors",
    bg: "linear-gradient(135deg, rgba(245,166,35,.3), rgba(255,77,141,.2))",
  },
  {
    slug: "website-speed-optimization",
    title: "Speed Up Your Website: Performance Optimization Tips",
    excerpt:
      "A slow website kills conversions. Discover practical tips to dramatically improve your site's loading speed and user experience.",
    category: "Performance",
    date: "Dec 15, 2023",
    readTime: "9 min read",
    author: "Ryan Speed",
    bg: "linear-gradient(135deg, rgba(108,71,255,.35), rgba(255,77,141,.15))",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-[calc(72px+5rem)] pb-20 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(108,71,255,.22) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,71,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,71,255,.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 90% at 50% 0%, black 30%, transparent 90%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Our Blog
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Stay updated with the latest web design trends, tips, and insights from
            our expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="glass-card p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className="h-64 lg:h-auto flex items-center justify-center text-6xl font-extrabold"
                style={{
                  background: posts[0].bg,
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span className="opacity-30">{posts[0].title.charAt(0)}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
                  Featured Post
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {posts[0].author}
                  </span>
                </div>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="neon-btn w-fit inline-flex"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <h2
            className="text-2xl font-extrabold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <article
                key={i}
                className="glass-card overflow-hidden group"
                data-cursor-hover
              >
                {/* Image */}
                <div
                  className="h-48 flex items-center justify-center text-5xl font-extrabold group-hover:scale-105 transition-transform duration-500"
                  style={{
                    background: post.bg,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <span className="opacity-30">{post.title.charAt(0)}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3
                    className="text-lg font-bold mt-2 mb-2 line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={post.title}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative z-10 py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 text-center max-w-2xl mx-auto">
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, tips, and
              exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="neon-btn whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
