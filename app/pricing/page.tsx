"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Metadata } from "next";

const plans = [
  {
    name: "Basic",
    price: 499,
    description: "Perfect for small businesses just getting started online.",
    features: [
      { text: "5-Page Responsive Website", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Contact Form Integration", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "2 Revision Rounds", included: true },
      { text: "Social Media Integration", included: false },
      { text: "WhatsApp Button", included: false },
      { text: "Analytics Setup", included: false },
      { text: "Priority Support", included: false },
      { text: "Monthly Maintenance", included: false },
    ],
    featured: false,
    color: "var(--color-muted-foreground)",
  },
  {
    name: "Standard",
    price: 999,
    description: "Ideal for growing businesses that need more features and support.",
    features: [
      { text: "10-Page Responsive Website", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Contact Form + WhatsApp", included: true },
      { text: "Advanced SEO Setup", included: true },
      { text: "5 Revision Rounds", included: true },
      { text: "Social Media Integration", included: true },
      { text: "WhatsApp Button", included: true },
      { text: "Analytics Setup", included: true },
      { text: "Priority Support", included: true },
      { text: "Monthly Maintenance", included: false },
    ],
    featured: true,
    color: "var(--color-primary)",
  },
  {
    name: "Premium",
    price: 1999,
    description: "Complete solution for established businesses seeking maximum growth.",
    features: [
      { text: "Unlimited Pages", included: true },
      { text: "Mobile Optimization", included: true },
      { text: "Advanced Forms + CRM", included: true },
      { text: "Full SEO Package", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Social Media Integration", included: true },
      { text: "WhatsApp + Live Chat", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Monthly Maintenance", included: true },
    ],
    featured: false,
    color: "var(--color-accent)",
  },
];

const faqs = [
  {
    q: "What's included in the project price?",
    a: "All our packages include design, development, basic content setup, and deployment. We provide everything you need for a fully functional website.",
  },
  {
    q: "How long does a typical project take?",
    a: "Basic projects typically take 1-2 weeks, Standard projects 2-3 weeks, and Premium projects 3-4 weeks. Timelines may vary based on complexity and feedback.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes! We offer flexible payment options. Typically 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    q: "What if I need changes after the project is done?",
    a: "Each package includes a specific number of revision rounds. After launch, you can purchase additional changes or subscribe to our maintenance plan.",
  },
  {
    q: "Do you provide hosting?",
    a: "We can deploy your site on your preferred hosting provider or recommend the best options. Hosting costs are separate from the project fee.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can always upgrade to add more features. We'll provide a custom quote based on your specific needs.",
  },
];

export default function PricingPage() {
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
            Pricing
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All packages include our
            quality guarantee and dedicated support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <PricingCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Compare <span className="gradient-text">Plans</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="p-4 text-center text-sm font-bold"
                      style={{ color: plan.color }}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-4 text-sm text-muted-foreground">
                      {feature.text}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-4 text-center">
                        {plan.features[i].included ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-secondary/50 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
              FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Need a Custom <span className="gradient-text">Solution?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Every business is unique. Contact us for a personalized quote tailored
              to your specific requirements.
            </p>
            <Link
              href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27d%20like%20a%20custom%20quote%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PricingCard({ plan }: { plan: (typeof plans)[0] }) {
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
      className={`glass-card p-8 relative overflow-hidden ${
        plan.featured
          ? "border-primary shadow-[0_0_50px_rgba(108,71,255,.25)] scale-105"
          : ""
      }`}
      style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
      data-cursor-hover
    >
      {plan.featured && (
        <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full tracking-wide">
          MOST POPULAR
        </span>
      )}

      {/* Plan Name */}
      <span
        className="text-xs font-bold uppercase tracking-[2.5px] block mb-3"
        style={{ color: plan.color, fontFamily: "var(--font-heading)" }}
      >
        {plan.name}
      </span>

      {/* Price */}
      <div
        className="text-5xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <sup className="text-xl align-top">$</sup>
        {plan.price}
      </div>
      <span className="text-sm text-muted-foreground block mb-4">
        per project
      </span>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[48px]">
        {plan.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm ${
              feature.included
                ? "text-muted-foreground"
                : "text-muted-foreground/40 line-through"
            }`}
          >
            {feature.included ? (
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-4 h-4 text-secondary/50 flex-shrink-0 mt-0.5" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20the%20${encodeURIComponent(
          plan.name
        )}%20plan.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
          plan.featured ? "neon-btn" : "neon-btn-outline"
        }`}
      >
        Contact on WhatsApp
      </Link>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card overflow-hidden transition-all ${
        open ? "border-primary/50" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        data-cursor-hover
      >
        <span
          className="font-semibold text-sm pr-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground text-sm leading-relaxed px-5">
          {answer}
        </p>
      </div>
    </div>
  );
}
