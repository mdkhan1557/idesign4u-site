"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRef, useCallback } from "react";

const projects = [
  {
    title: "TechFlow Dashboard",
    category: "Web App",
    bg: "linear-gradient(135deg, rgba(108,71,255,.3), rgba(255,77,141,.2))",
    icon: "T",
    span: false,
  },
  {
    title: "Luxe Real Estate",
    category: "Website",
    bg: "linear-gradient(135deg, rgba(0,229,160,.3), rgba(108,71,255,.2))",
    icon: "L",
    span: true,
  },
  {
    title: "FitPro Fitness",
    category: "Landing Page",
    bg: "linear-gradient(135deg, rgba(255,77,141,.3), rgba(245,166,35,.2))",
    icon: "F",
    span: false,
  },
  {
    title: "CloudSync SaaS",
    category: "Web App",
    bg: "linear-gradient(135deg, rgba(108,71,255,.25), rgba(0,229,160,.15))",
    icon: "C",
    span: false,
  },
  {
    title: "Artisan Coffee",
    category: "E-commerce",
    bg: "linear-gradient(135deg, rgba(245,166,35,.3), rgba(255,77,141,.2))",
    icon: "A",
    span: false,
  },
];

export function PortfolioPreview() {
  return (
    <section className="relative z-10 py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse through our latest projects and see how we help businesses
            achieve their digital goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <PortfolioCard key={i} {...project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  title,
  category,
  bg,
  icon,
  span,
  index,
}: {
  title: string;
  category: string;
  bg: string;
  icon: string;
  span: boolean;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateX(${dy * -8}deg) rotateY(${
      dx * 8
    }deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden border border-border bg-card group cursor-pointer ${
        span ? "lg:col-span-2" : ""
      }`}
      style={{
        aspectRatio: span ? "16/7" : "4/3",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
      }}
      data-cursor-hover
    >
      {/* Background */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[4rem] font-extrabold opacity-60 group-hover:scale-110 transition-transform duration-500"
        style={{ background: bg, fontFamily: "var(--font-heading)" }}
      >
        {icon}
      </div>

      {/* Tag */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/75 backdrop-blur-sm border border-border text-[10px] text-muted-foreground">
        {category}
      </span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h4
          className="font-bold text-lg mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h4>
        <span className="text-xs text-muted-foreground mb-3">{category}</span>
        <span className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full">
          View Project
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>

      <Link
        href="/portfolio"
        className="absolute inset-0 z-10"
        aria-label={title}
      />
    </div>
  );
}
