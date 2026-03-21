import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#web-design", label: "Web Design" },
    { href: "/services#ui-ux", label: "UI/UX Design" },
    { href: "/services#seo", label: "SEO Optimization" },
    { href: "/services#landing-pages", label: "Landing Pages" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Support" },
    { href: "/pricing", label: "Pricing Plans" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-sm">
      {/* CTA Banner */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to <span className="gradient-text">Transform</span> Your
            Digital Presence?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let&apos;s create something amazing together. Get a free consultation and
            see how we can help your business grow.
          </p>
          <Link
            href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-flex"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading font-extrabold text-2xl gradient-text tracking-tight inline-block mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              iDesign4U
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Premium web design agency crafting high-converting websites that
              grow your business. We turn visitors into leads through stunning
              design and strategic development.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} iDesign4U. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
