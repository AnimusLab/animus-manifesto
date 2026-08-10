'use client';

import React, { useEffect, useRef } from 'react';

interface SecurityEvent {
  id: number;
  text: string;
  x: number;
  y: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const EVENT_TEMPLATES = [
  { text: "[KERNEL] @anchor.guard Intercept <0.8ms", color: "#818cf8" },
  { text: "[EU-AI-ACT] Art 12 Log Hash Sealed", color: "#34d399" },
  { text: "[SEC-15C3-5] Lock-Free CAS Gate PASS", color: "#6366f1" },
  { text: "[WASM-RING] Diamond Cage Isolation Active", color: "#38bdf8" },
  { text: "[HUB-TELEMETRY] WSS Event Stream Broadcast", color: "#a7f3d0" },
  { text: "[OVERSIGHT] ZK-SNARK Replay Proof Verified", color: "#c084fc" },
  { text: "[PROHIBITED-AI] Art 5(1)(a) Manipulative Loop BLOCKED", color: "#fb7185" },
  { text: "[ED25519] Node Whitelist Signature Validated", color: "#fde047" },
];

export default function SpatialBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // Floating events
    let events: SecurityEvent[] = [];
    let nextEventId = 1;
    let lastSpawnTime = 0;

    const spawnEvent = (now: number) => {
      if (now - lastSpawnTime > 2200 + Math.random() * 1800) {
        lastSpawnTime = now;
        const template = EVENT_TEMPLATES[Math.floor(Math.random() * EVENT_TEMPLATES.length)];
        events.push({
          id: nextEventId++,
          text: template.text,
          x: Math.random() * (width - 250) + 40,
          y: Math.random() * (height - 150) + 80,
          opacity: 0,
          color: template.color,
          life: 0,
          maxLife: 220,
        });
        if (events.length > 6) {
          events.shift();
        }
      }
    };

    // Render loop
    const render = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / 140) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Spawn and animate dynamic security events
      spawnEvent(now);

      events.forEach((ev) => {
        ev.life++;

        // Fade in first 30 frames, fade out last 40 frames
        if (ev.life < 30) {
          ev.opacity = ev.life / 30;
        } else if (ev.life > ev.maxLife - 40) {
          ev.opacity = Math.max(0, (ev.maxLife - ev.life) / 40);
        } else {
          ev.opacity = 1;
        }

        ev.y -= 0.15; // Slow drift upward

        ctx.save();
        ctx.font = '10px monospace';
        ctx.fillStyle = ev.color;
        ctx.globalAlpha = ev.opacity * 0.75;

        // Draw glass badge pill behind event text
        const metrics = ctx.measureText(ev.text);
        const padX = 8;
        const padY = 4;
        ctx.fillStyle = 'rgba(8, 10, 18, 0.75)';
        ctx.strokeStyle = ev.color;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.roundRect(
          ev.x - padX,
          ev.y - 10 - padY,
          metrics.width + padX * 2,
          16 + padY * 2,
          4
        );
        ctx.fill();
        ctx.stroke();

        // Draw event text
        ctx.fillStyle = ev.color;
        ctx.fillText(ev.text, ev.x, ev.y);
        ctx.restore();
      });

      events = events.filter((ev) => ev.life < ev.maxLife);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-80"
    />
  );
}
