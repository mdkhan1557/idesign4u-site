"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@idesign4u.com",
    href: "mailto:hello@idesign4u.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+1 (555) 123-4567",
    href: "https://wa.me/1234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "New York, NY, USA",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });

    setTimeout(() => setStatus("idle"), 5000);
  };

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
            Contact Us
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch and let&apos;s create something
            amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2
                className="text-2xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get in Touch
              </h2>

              {contactInfo.map((info, i) => (
                <Link
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-4 flex items-center gap-4 group hover:border-primary/50 transition-colors"
                  data-cursor-hover
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </Link>
              ))}

              {/* WhatsApp CTA */}
              <div className="glass-card p-6 border-accent/30 bg-accent/5">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Prefer WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get an instant response by reaching out via WhatsApp. We typically
                  respond within minutes!
                </p>
                <Link
                  href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                <h2
                  className="text-2xl font-extrabold mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Status Message */}
                  {status === "success" && (
                    <div className="px-4 py-3 rounded-xl bg-accent/10 border border-accent/30 text-accent text-sm">
                      Message sent successfully! We&apos;ll get back to you within 24
                      hours.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="neon-btn w-full justify-center"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative z-10 py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="glass-card h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map would be displayed here
              </p>
              <p className="text-xs text-muted-foreground/50 mt-2">
                New York, NY, USA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Don&apos;t wait! Transform your digital presence today and start
              converting visitors into loyal customers.
            </p>
            <Link
              href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20ready%20to%20start%20my%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
