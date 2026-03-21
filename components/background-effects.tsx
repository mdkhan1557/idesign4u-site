"use client";

import { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const mouseLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = mouseLightRef.current;
    if (!light) return;

    const handleMouseMove = (e: MouseEvent) => {
      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Wave Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[220%] h-[220%] left-[-60%] top-[-60%] rounded-[45%] opacity-[0.28]"
          style={{
            background:
              "radial-gradient(ellipse 52% 48% at 50% 50%, rgba(108,71,255,.65) 0%, rgba(108,71,255,.22) 38%, transparent 68%)",
            animation: "waveSpin 24s linear infinite",
          }}
        />
        <div
          className="absolute w-[220%] h-[220%] left-[-60%] top-[-60%] rounded-[45%] opacity-[0.20]"
          style={{
            background:
              "radial-gradient(ellipse 48% 52% at 50% 50%, rgba(255,77,141,.60) 0%, rgba(255,77,141,.18) 40%, transparent 68%)",
            animation: "waveSpin 36s linear infinite reverse",
          }}
        />
        <div
          className="absolute w-[220%] h-[220%] left-[-60%] top-[-60%] rounded-[45%] opacity-[0.16]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0,229,160,.50) 0%, rgba(0,229,160,.14) 42%, transparent 72%)",
            animation: "waveSpin 48s linear infinite",
          }}
        />
      </div>

      {/* Grid */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,71,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(108,71,255,.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          animation: "gridDrift 24s linear infinite, gridPulse 6s ease-in-out infinite alternate",
        }}
      />

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        <Orb
          size={160}
          color="rgba(108,71,255,0.3)"
          top="15%"
          left="8%"
          ox={40}
          oy={60}
          duration={12}
        />
        <Orb
          size={100}
          color="rgba(255,77,141,0.25)"
          top="65%"
          right="12%"
          ox={-30}
          oy={45}
          duration={16}
        />
        <Orb
          size={80}
          color="rgba(0,229,160,0.2)"
          bottom="20%"
          left="15%"
          ox={25}
          oy={-35}
          duration={14}
        />
        <Orb
          size={120}
          color="rgba(108,71,255,0.2)"
          top="40%"
          right="5%"
          ox={-45}
          oy={30}
          duration={18}
        />
      </div>

      {/* Rising Particles */}
      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Mouse Light */}
      <div
        ref={mouseLightRef}
        className="fixed z-[4] pointer-events-none w-[600px] h-[600px] rounded-full"
        style={{
          marginLeft: "-300px",
          marginTop: "-300px",
          background:
            "radial-gradient(circle, rgba(108,71,255,0.08) 0%, rgba(108,71,255,0.04) 40%, transparent 70%)",
          mixBlendMode: "screen",
          transition: "left 0.05s, top 0.05s",
        }}
      />
    </>
  );
}

function Orb({
  size,
  color,
  top,
  left,
  right,
  bottom,
  ox,
  oy,
  duration,
}: {
  size: number;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  ox: number;
  oy: number;
  duration: number;
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        border: "1.5px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 0 60px rgba(255,255,255,0.04), 0 0 80px ${color}`,
        backdropFilter: "blur(2px)",
        animation: `orbDrift ${duration}s ease-in-out infinite alternate`,
        ["--ox" as string]: `${ox}px`,
        ["--oy" as string]: `${oy}px`,
      }}
    />
  );
}

function Particle({ index }: { index: number }) {
  const size = 2 + Math.random() * 4;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 12;
  const delay = index * 0.5;
  const drift = (Math.random() - 0.5) * 100;
  const colors = ["#6c47ff", "#ff4d8d", "#00e5a0", "#f5a623"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: 0,
        background: color,
        boxShadow: `0 0 8px 3px ${color}`,
        animation: `rise ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        ["--drift" as string]: `${drift}px`,
      }}
    />
  );
}
