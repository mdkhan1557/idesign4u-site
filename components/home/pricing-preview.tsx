"use client";

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { useRef, useCallback } from "react";

const plans = [
  {
    name: "Basic",
    price: 499,
    description: "Perfect for small businesses just getting started online.",
    features: [
      { text: "5-Page Responsive Website", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Contact Form", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "Social Media Integration", included: false },
      { text: "Priority Support", included: false },
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: 999,
    description: "Ideal for growing businesses that need more features.",
    features: [
      { text: "10-Page Responsive Website", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Contact Form + WhatsApp", included: true },
      { text: "Advanced SEO Setup", included: true },
      { text: "Social Media Integration", included: true },
      { text: "Priority Support", included: true },
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: 1999,
    description: "Complete solution for established businesses seeking growth.",
    features: [
      { text: "Unlimited Pages", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Advanced Forms + CRM", included: true },
      { text: "Full SEO Package", included: true },
      { text: "E-commerce Integration", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
    featured: false,
  },
];

export function PricingPreview() {
  return (
    <section className="relative z-10 py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Pricing
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the perfect plan for your business needs. All plans include
            our quality guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View Full Pricing Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  featured,
}: {
  name: string;
  price: number;
  description: string;
  features: { text: string; included: boolean }[];
  featured: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateX(${dy * -6}deg) rotateY(${
      dx * 6
    }deg) scale(1.01)`;
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
      className={`glass-card p-6 relative overflow-hidden ${
        featured
          ? "border-primary shadow-[0_0_40px_rgba(108,71,255,.22)]"
          : ""
      }`}
      style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
      data-cursor-hover
    >
      {featured && (
        <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full tracking-wide">
          POPULAR
        </span>
      )}

      {/* Plan Name */}
      <span
        className="text-xs font-bold uppercase tracking-[2.5px] text-primary block mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {name}
      </span>

      {/* Price */}
      <div
        className="text-4xl font-extrabold mb-1"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <sup className="text-lg align-top">$</sup>
        {price}
        <sub className="text-sm font-normal text-muted-foreground">/project</sub>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm ${
              feature.included
                ? "text-muted-foreground"
                : "text-muted-foreground/45 line-through"
            }`}
          >
            {feature.included ? (
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20the%20" + encodeURIComponent(name) + "%20plan."
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full block text-center py-3 rounded-full font-semibold text-sm transition-all ${
          featured
            ? "neon-btn"
            : "neon-btn-outline"
        }`}
      >
        Contact on WhatsApp
      </Link>
    </div>
  );
}
