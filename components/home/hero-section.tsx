"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[calc(72px+3rem)] pb-16 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(108,71,255,.28) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 8% 85%, rgba(255,77,141,.15) 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 92% 65%, rgba(0,229,160,.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary tracking-wide">
              <span
                className="w-2 h-2 rounded-full bg-accent"
                style={{
                  boxShadow: "0 0 8px var(--color-accent)",
                  animation: "badgePulse 2s ease-in-out infinite",
                }}
              />
              Available for New Projects
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Build{" "}
              <span className="gradient-text">High-Converting Websites</span>{" "}
              That Grow Your Business
            </h1>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Transform your online presence with stunning web design that captivates
              visitors and converts them into loyal customers. Get leads directly via
              WhatsApp with our optimized conversion strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27d%20like%20a%20free%20quote%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn"
              >
                Get Free Quote on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="neon-btn-outline">
                <Play className="w-4 h-4" />
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <StatCounter key={i} {...stat} />
              ))}
            </div>
          </div>

          {/* Right - 3D Floating Elements */}
          <div className="relative h-[520px] hidden lg:flex items-center justify-center">
            <FloatingElements />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true;
          let current = 0;
          const step = Math.max(1, Math.ceil(value / 55));
          const interval = setInterval(() => {
            current = Math.min(current + step, value);
            el.textContent = current + suffix;
            if (current >= value) clearInterval(interval);
          }, 22);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div>
      <span
        ref={ref}
        className="block text-3xl font-extrabold gradient-text"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        0{suffix}
      </span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

function FloatingElements() {
  return (
    <>
      {/* Platform Glow */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(108,71,255,.14) 0%, rgba(108,71,255,.04) 55%, transparent 75%)",
          border: "1px solid rgba(108,71,255,.18)",
          boxShadow:
            "0 0 80px rgba(108,71,255,.12), inset 0 0 60px rgba(108,71,255,.06)",
          animation: "platformPulse 4s ease-in-out infinite",
        }}
      />

      {/* Rotating Rings */}
      <div
        className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-primary/12"
        style={{ animation: "ringRotate 20s linear infinite" }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-secondary/8"
        style={{ animation: "ringRotate 32s linear infinite reverse" }}
      />

      {/* Browser Mockup */}
      <div
        className="absolute w-[260px] rounded-xl overflow-hidden"
        style={{
          background: "rgba(14,14,28,.92)",
          border: "1px solid rgba(108,71,255,.35)",
          boxShadow:
            "0 24px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(108,71,255,.12), inset 0 1px 0 rgba(255,255,255,.06)",
          transform: "perspective(900px) rotateY(-8deg) rotateX(4deg)",
          animation: "browserFloat 5s ease-in-out infinite alternate",
        }}
      >
        {/* Chrome */}
        <div className="h-7 bg-[#14142a] flex items-center px-2.5 gap-1.5 border-b border-primary/15">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="flex-1 h-3.5 bg-primary/15 rounded-full ml-1.5" />
        </div>
        {/* Body */}
        <div className="p-2.5">
          <div className="h-5 bg-primary/8 rounded mb-2 flex items-center px-2 gap-1.5">
            <div className="w-10 h-1 bg-primary rounded" />
            <div className="ml-auto flex gap-1">
              <div className="w-6 h-0.5 bg-white/20 rounded" />
              <div className="w-6 h-0.5 bg-white/20 rounded" />
              <div className="w-6 h-0.5 bg-white/20 rounded" />
            </div>
          </div>
          <div
            className="rounded-md p-2.5 mb-1.5"
            style={{
              background:
                "linear-gradient(135deg,rgba(108,71,255,.12),rgba(255,77,141,.08))",
            }}
          >
            <div className="h-2 bg-white/70 rounded w-3/4 mb-1" />
            <div className="h-1.5 bg-white/45 rounded w-1/2 mb-2" />
            <div className="h-0.5 bg-white/22 rounded mb-0.5" />
            <div className="h-0.5 bg-white/22 rounded w-[65%]" />
            <div className="flex gap-1 mt-1.5">
              <div className="h-3.5 rounded-full bg-primary w-14" />
              <div className="h-3.5 rounded-full border border-primary/40 w-12" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-primary/15 rounded p-1"
              >
                <div
                  className="w-3.5 h-3.5 rounded mb-1"
                  style={{
                    background:
                      i === 1
                        ? "var(--color-primary)"
                        : i === 2
                        ? "var(--color-secondary)"
                        : "var(--color-accent)",
                  }}
                />
                <div className="h-0.5 bg-white/18 rounded mb-0.5" />
                <div className="h-0.5 bg-white/18 rounded w-[65%]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Pills */}
      <div
        className="absolute top-8 -left-4 glass-card px-4 py-3 flex items-center gap-3"
        style={{
          animation: "pillFloat 4s ease-in-out infinite alternate",
          boxShadow: "0 8px 32px rgba(0,0,0,.5)",
        }}
      >
        <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">
          +
        </div>
        <div className="text-xs">
          <div className="font-semibold">+12 Leads</div>
          <div className="text-muted-foreground text-[10px]">This Week</div>
        </div>
      </div>

      {/* Code Tag */}
      <div
        className="absolute bottom-24 -left-8 px-3 py-2 rounded-lg text-[11px] font-mono font-bold text-primary"
        style={{
          background: "rgba(108,71,255,.15)",
          border: "1px solid rgba(108,71,255,.35)",
          boxShadow: "0 0 20px rgba(108,71,255,.2)",
          animation: "pillFloat 6s ease-in-out infinite",
        }}
      >
        {"</>"}
      </div>

      {/* Metric Card */}
      <div
        className="absolute bottom-16 -right-8 glass-card px-4 py-3"
        style={{
          borderColor: "rgba(0,229,160,.25)",
          animation: "pillFloat 5s ease-in-out infinite alternate",
        }}
      >
        <div
          className="text-xl font-extrabold text-accent"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          98%
        </div>
        <div className="text-[10px] text-muted-foreground">Satisfaction</div>
        <div className="flex items-end gap-0.5 mt-2 h-6">
          {[40, 60, 80, 55, 90, 75, 95].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-t bg-accent/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Phone Mockup */}
      <div
        className="absolute top-4 right-0 w-20 rounded-2xl overflow-hidden p-1.5 pb-2"
        style={{
          background: "rgba(14,14,28,.95)",
          border: "1.5px solid rgba(255,77,141,.3)",
          boxShadow: "0 16px 48px rgba(0,0,0,.6)",
          animation: "pillFloat 6s ease-in-out infinite alternate-reverse",
        }}
      >
        <div className="w-7 h-1.5 bg-black/80 rounded mx-auto mb-1.5" />
        <div
          className="h-10 rounded mb-1"
          style={{
            background:
              "linear-gradient(135deg,rgba(108,71,255,.3),rgba(255,77,141,.2))",
          }}
        />
        <div className="h-1 bg-white/12 rounded mb-1" />
        <div className="h-1 bg-white/12 rounded w-[60%] mb-1.5" />
        <div className="h-2.5 bg-primary rounded-full w-1/2 mx-auto" />
      </div>
    </>
  );
}
