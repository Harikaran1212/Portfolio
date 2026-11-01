"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Disable custom cursor on touch/coarse devices
    const isTouchDevice =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover], .cursor-pointer'
      );
      setIsHovered(Boolean(interactive));
    };

    // Smooth animation loop for the outer trailing ring
    const render = () => {
      // Linear interpolation (lerp)
      const ease = 0.16;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      aria-hidden="true"
      className="hidden md:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Outer Smooth Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out ${
          isHovered
            ? "w-12 h-12 border-2 border-[#973af1] bg-[#973af1]/15 shadow-[0_0_20px_rgba(151,58,241,0.35)] backdrop-blur-[1px]"
            : isClicked
            ? "w-7 h-7 border border-[#4219dc] bg-[#4219dc]/20 shadow-[0_0_12px_rgba(66,25,220,0.3)]"
            : "w-9 h-9 border border-[#6928e6]/60 bg-[#6928e6]/5 shadow-[0_0_10px_rgba(105,40,230,0.2)]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Inner Pinpoint Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-100 ease-out ${
          isHovered
            ? "w-2.5 h-2.5 bg-gradient-to-r from-[#4219dc] to-[#973af1] shadow-[0_0_8px_rgba(151,58,241,0.8)] scale-125"
            : isClicked
            ? "w-2 h-2 bg-[#973af1] scale-75"
            : "w-2 h-2 bg-gradient-to-r from-[#4219dc] to-[#973af1] shadow-[0_0_6px_rgba(105,40,230,0.6)]"
        }`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default CustomCursor;
