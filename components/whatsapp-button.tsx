"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Show after initial load
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/1234567890?text=Hi%20iDesign4U!%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-[8000] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
        "bg-[#25d366] hover:bg-[#20bd5a] shadow-lg shadow-[#25d366]/30",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
    </a>
  );
}
