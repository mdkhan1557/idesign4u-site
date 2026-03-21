"use client";

import { useState, useRef, useCallback } from "react";
import { ExternalLink, X } from "lucide-react";

const categories = ["All", "Website", "Web App", "Landing Page", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Web App",
    client: "TechFlow Inc.",
    year: "2024",
    tech: "React, Next.js, Tailwind",
    description:
      "A comprehensive SaaS dashboard for managing team workflows and project timelines. Features real-time collaboration, analytics, and integrations with popular tools.",
    bg: "linear-gradient(135deg, rgba(108,71,255,.3), rgba(255,77,141,.2))",
    tags: ["Dashboard", "SaaS", "Analytics"],
    icon: "T",
    span: false,
  },
  {
    id: 2,
    title: "Luxe Real Estate",
    category: "Website",
    client: "Luxe Homes",
    year: "2024",
    tech: "Next.js, Framer Motion",
    description:
      "Premium real estate website showcasing luxury properties with immersive galleries, virtual tours, and integrated booking system.",
    bg: "linear-gradient(135deg, rgba(0,229,160,.3), rgba(108,71,255,.2))",
    tags: ["Real Estate", "Premium", "Virtual Tours"],
    icon: "L",
    span: true,
  },
  {
    id: 3,
    title: "FitPro Fitness",
    category: "Landing Page",
    client: "FitPro Studios",
    year: "2023",
    tech: "React, GSAP",
    description:
      "High-converting landing page for a fitness studio with membership sign-ups, class schedules, and trainer profiles.",
    bg: "linear-gradient(135deg, rgba(255,77,141,.3), rgba(245,166,35,.2))",
    tags: ["Fitness", "Landing Page", "Conversion"],
    icon: "F",
    span: false,
  },
  {
    id: 4,
    title: "CloudSync SaaS",
    category: "Web App",
    client: "CloudSync Ltd.",
    year: "2024",
    tech: "Next.js, PostgreSQL",
    description:
      "Cloud storage and file synchronization platform with team collaboration features, file versioning, and enterprise security.",
    bg: "linear-gradient(135deg, rgba(108,71,255,.25), rgba(0,229,160,.15))",
    tags: ["Cloud", "SaaS", "Enterprise"],
    icon: "C",
    span: false,
  },
  {
    id: 5,
    title: "Artisan Coffee",
    category: "E-commerce",
    client: "Artisan Goods Co.",
    year: "2023",
    tech: "Shopify, Liquid",
    description:
      "Premium e-commerce store for artisan coffee products with subscription services, product customization, and loyalty rewards.",
    bg: "linear-gradient(135deg, rgba(245,166,35,.3), rgba(255,77,141,.2))",
    tags: ["E-commerce", "Subscription", "Shopify"],
    icon: "A",
    span: false,
  },
  {
    id: 6,
    title: "Startup Launch",
    category: "Landing Page",
    client: "InnoTech Ventures",
    year: "2024",
    tech: "Next.js, Tailwind",
    description:
      "Product launch landing page with waitlist functionality, animated features showcase, and investor pitch deck integration.",
    bg: "linear-gradient(135deg, rgba(108,71,255,.35), rgba(255,77,141,.15))",
    tags: ["Startup", "Launch", "Waitlist"],
    icon: "S",
    span: true,
  },
  {
    id: 7,
    title: "HealthCare Portal",
    category: "Web App",
    client: "MediCare Plus",
    year: "2023",
    tech: "React, Node.js, MongoDB",
    description:
      "Patient management portal with appointment scheduling, medical records, and telemedicine video consultations.",
    bg: "linear-gradient(135deg, rgba(0,229,160,.35), rgba(108,71,255,.15))",
    tags: ["Healthcare", "Portal", "HIPAA"],
    icon: "H",
    span: false,
  },
  {
    id: 8,
    title: "Fashion Boutique",
    category: "E-commerce",
    client: "Style Avenue",
    year: "2024",
    tech: "WooCommerce, PHP",
    description:
      "Elegant fashion e-commerce with virtual try-on, size recommendations, and influencer collaboration features.",
    bg: "linear-gradient(135deg, rgba(255,77,141,.35), rgba(245,166,35,.15))",
    tags: ["Fashion", "E-commerce", "AI"],
    icon: "F",
    span: false,
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            Our Portfolio
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Recent <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Browse through our collection of projects and see how we help businesses
            achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="relative z-10 py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function PortfolioCard({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
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
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden border border-border bg-card group cursor-pointer ${
        project.span ? "lg:col-span-2" : ""
      }`}
      style={{
        aspectRatio: project.span ? "16/7" : "4/3",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
      }}
      data-cursor-hover
    >
      {/* Background */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[5rem] font-extrabold opacity-60 group-hover:scale-110 transition-transform duration-500"
        style={{ background: project.bg, fontFamily: "var(--font-heading)" }}
      >
        {project.icon}
      </div>

      {/* Tag */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/75 backdrop-blur-sm border border-border text-[10px] text-muted-foreground">
        {project.category}
      </span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h4
          className="font-bold text-xl mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h4>
        <span className="text-xs text-muted-foreground mb-3">
          {project.category}
        </span>
        <span className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full">
          View Project
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[88000] flex items-center justify-center p-4 bg-background/92 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted/10 border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div
          className="w-full h-56 rounded-xl flex items-center justify-center mb-6 text-[4rem] font-extrabold"
          style={{ background: project.bg, fontFamily: "var(--font-heading)" }}
        >
          {project.icon}
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-extrabold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h2>
        <span className="text-sm text-muted-foreground">{project.category}</span>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-xs text-primary font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Client
            </label>
            <span className="font-semibold text-sm">{project.client}</span>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Year
            </label>
            <span className="font-semibold text-sm">{project.year}</span>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Tech
            </label>
            <span className="font-semibold text-sm">{project.tech}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
