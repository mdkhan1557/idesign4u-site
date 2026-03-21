"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9000] h-[72px] flex items-center justify-between px-8 md:px-16 transition-colors duration-300",
        "backdrop-blur-[22px] border-b border-border",
        scrolled ? "bg-background/97" : "bg-background/82"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-heading font-extrabold text-xl md:text-2xl gradient-text tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        iDesign4U
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300",
              "hover:after:w-full",
              pathname === link.href && "text-foreground after:w-full"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="neon-btn text-xs px-5 py-2"
        >
          Get Quote
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col items-center justify-center w-10 h-10"
        aria-label="Toggle mobile menu"
      >
        {mobileOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden fixed top-[72px] left-0 right-0 bg-background/98 backdrop-blur-3xl border-b border-border flex flex-col gap-4 p-6 shadow-2xl transition-all duration-300",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base font-medium text-muted-foreground py-2 border-b border-border transition-colors hover:text-foreground",
              pathname === link.href && "text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="neon-btn text-center mt-2"
          onClick={() => setMobileOpen(false)}
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
}
