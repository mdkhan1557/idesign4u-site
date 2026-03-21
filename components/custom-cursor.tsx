"use client";

import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastSparkTime = useRef(0);

  const spawnSpark = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastSparkTime.current < 45) return;
    lastSparkTime.current = now;

    const spark = document.createElement("div");
    spark.className = "spark";
    const size = 3 + Math.random() * 5;
    const colors = ["#6c47ff", "#ff4d8d", "#00e5a0", "#f5a623", "#fff"];
    const ox = (Math.random() - 0.5) * 18;
    const oy = (Math.random() - 0.5) * 18;
    spark.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x + ox}px;
      top: ${y + oy}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
    `;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 650);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Hide default cursor on desktop only
    const isMobile = window.matchMedia("(hover: none)").matches;
    if (isMobile) {
      cursor.style.display = "none";
      ring.style.display = "none";
      return;
    }

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      spawnSpark(e.clientX, e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-cursor-hover]")) {
        document.body.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-cursor-hover]")) {
        document.body.classList.remove("cursor-hover");
      }
    };

    // Ring animation
    let animationFrame: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.13;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      animationFrame = requestAnimationFrame(animateRing);
    };
    animateRing();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, [spawnSpark]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
