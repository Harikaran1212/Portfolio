"use client";

import React, { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none z-0",
  particleCount = 60,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth || canvas.clientWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || canvas.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(canvas);
    }

    const colors = ["#4219dc", "#6928e6", "#973af1", "#b06cf5", "#c99af8"];

    interface Particle {
      x: number;
      y: number;
      r: number;
      color: string;
      alpha: number;
      speedY: number;
      speedX: number;
      alphaDir: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (canvas.width || window.innerWidth),
      y: Math.random() * (canvas.height || window.innerHeight),
      r: Math.random() * 2.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.1,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(0.65, p.alpha));
        ctx.fill();
        ctx.globalAlpha = 1;

        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaDir;

        if (p.alpha >= 0.65 || p.alpha <= 0.05) p.alphaDir *= -1;
        if (p.y < -p.r) {
          p.y = canvas.height + p.r;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -p.r) p.x = canvas.width + p.r;
        if (p.x > canvas.width + p.r) p.x = -p.r;
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
};

export default ParticleBackground;
