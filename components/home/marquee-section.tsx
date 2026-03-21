"use client";

const items = [
  "Web Design",
  "UI/UX",
  "Branding",
  "SEO",
  "E-commerce",
  "Landing Pages",
  "WordPress",
  "Shopify",
  "React",
  "Next.js",
];

export function MarqueeSection() {
  return (
    <div className="relative z-10 border-t border-b border-border bg-primary/5 py-5 overflow-hidden">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 24s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-muted-foreground text-xs font-bold uppercase tracking-[2px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-primary text-base">+</span>
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
