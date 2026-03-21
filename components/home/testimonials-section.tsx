"use client";

import { useRef, useCallback } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "iDesign4U transformed our online presence completely. Our leads increased by 340% in just 3 months after launching our new website.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    initials: "SJ",
    color: "var(--color-primary)",
  },
  {
    quote:
      "The team's attention to detail is incredible. They delivered a stunning e-commerce platform that our customers absolutely love.",
    author: "Michael Chen",
    role: "Founder, Artisan Goods",
    initials: "MC",
    color: "var(--color-secondary)",
  },
  {
    quote:
      "Professional, creative, and results-driven. They understood our vision and exceeded every expectation. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Marketing Director, Luxe Homes",
    initials: "ER",
    color: "var(--color-accent)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  initials,
  color,
}: {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
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
      className="glass-card p-6"
      style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 text-gold mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-muted-foreground text-sm leading-relaxed italic mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
          style={{
            background: `${color}20`,
            color,
            fontFamily: "var(--font-heading)",
          }}
        >
          {initials}
        </div>
        <div>
          <strong className="block text-sm font-semibold">{author}</strong>
          <small className="text-xs text-muted-foreground">{role}</small>
        </div>
      </div>
    </div>
  );
}
