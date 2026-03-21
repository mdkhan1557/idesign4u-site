"use client";

import Link from "next/link";
import { ArrowRight, Palette, Layers, Search, Rocket } from "lucide-react";
import { useRef, useCallback } from "react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Stunning, custom-designed websites that reflect your brand and captivate visitors from the first click.",
    color: "var(--color-primary)",
    bgColor: "rgba(108,71,255,.12)",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered interfaces that deliver seamless experiences and keep customers coming back for more.",
    color: "var(--color-secondary)",
    bgColor: "rgba(255,77,141,.12)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven strategies to boost your search rankings and drive organic traffic to your website.",
    color: "var(--color-accent)",
    bgColor: "rgba(0,229,160,.12)",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered to turn visitors into leads and maximize your ROI.",
    color: "var(--color-gold)",
    bgColor: "rgba(245,166,35,.12)",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Our Services
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive
            online.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  index,
}: {
  icon: typeof Palette;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
    card.style.transform = `perspective(900px) rotateX(${dy * -10}deg) rotateY(${
      dx * 10
    }deg) scale(1.025)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-6 group"
      style={{
        animationDelay: `${index * 100}ms`,
        transition:
          "transform 0.05s linear, box-shadow 0.3s, border-color 0.3s",
      }}
      data-cursor-hover
    >
      {/* Glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-border"
        style={{ background: bgColor }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      {/* Content */}
      <h3
        className="font-bold text-lg mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Arrow */}
      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground text-xs group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-45 transition-all">
        <ArrowRight className="w-3 h-3" />
      </div>

      <Link href="/services" className="absolute inset-0 z-10" aria-label={title} />
    </div>
  );
}
