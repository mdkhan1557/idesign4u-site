import { Metadata } from "next";
import {
  Palette,
  Layers,
  Search,
  Rocket,
  Code,
  Smartphone,
  ShoppingCart,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | iDesign4U - Web Design & Digital Marketing",
  description:
    "Explore our comprehensive web design, UI/UX, SEO optimization, and landing page services.",
};

const services = [
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design",
    description:
      "Custom-designed websites that perfectly capture your brand identity and create lasting impressions on your visitors.",
    features: [
      "Custom visual design tailored to your brand",
      "Responsive layouts for all devices",
      "User-centered design approach",
      "Cross-browser compatibility",
      "Fast loading optimized code",
      "Accessibility standards compliance",
    ],
    color: "var(--color-primary)",
    bgColor: "rgba(108,71,255,.12)",
  },
  {
    id: "ui-ux",
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Create intuitive, user-friendly interfaces that guide visitors seamlessly through your digital experience.",
    features: [
      "User research & persona development",
      "Wireframing & prototyping",
      "Interactive design systems",
      "Usability testing",
      "Information architecture",
      "Conversion rate optimization",
    ],
    color: "var(--color-secondary)",
    bgColor: "rgba(255,77,141,.12)",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
    features: [
      "Keyword research & strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content optimization",
      "Local SEO setup",
      "Performance monitoring",
    ],
    color: "var(--color-accent)",
    bgColor: "rgba(0,229,160,.12)",
  },
  {
    id: "landing-pages",
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered to capture leads and maximize your marketing ROI.",
    features: [
      "Conversion-focused design",
      "A/B testing setup",
      "Lead capture forms",
      "WhatsApp integration",
      "Analytics tracking",
      "Speed optimization",
    ],
    color: "var(--color-gold)",
    bgColor: "rgba(245,166,35,.12)",
  },
];

const additionalServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensure your site looks and performs perfectly on all mobile devices.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store setups with secure payment processing.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Comprehensive tracking setup to measure and improve performance.",
  },
];

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Comprehensive digital solutions to help your business thrive online.
            From design to development, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceBlock key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[3px] text-primary mb-4 block">
              More Services
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Additional <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <div key={i} className="glass-card p-6 text-center group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Let&apos;s discuss your project and create something amazing together. Get
              a free consultation today.
            </p>
            <Link
              href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex"
            >
              Contact on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.id}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-border"
          style={{ background: service.bgColor }}
        >
          <service.icon className="w-8 h-8" style={{ color: service.color }} />
        </div>
        <h2
          className="text-3xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: service.color }}
              />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20" + encodeURIComponent(service.title) + "%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="neon-btn inline-flex"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Visual */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div
          className="aspect-[4/3] rounded-2xl flex items-center justify-center relative overflow-hidden border border-border"
          style={{ background: service.bgColor }}
        >
          <service.icon
            className="w-32 h-32 opacity-20"
            style={{ color: service.color }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${service.color}20 0%, transparent 70%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
