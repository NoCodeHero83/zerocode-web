'use client';
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type MouseSpotlightProps = {
  className?: string;
  /** Grid spacing in CSS pixels. */
  gap?: number;
  /** Radius of mouse influence in CSS pixels. */
  radius?: number;
  /** Grid line color as "r, g, b". */
  color?: string;
  /** How strongly points are pulled toward the cursor (0–1). */
  maxPull?: number;
};

/**
 * Full-page interactive grid that warps toward the cursor like a magnetic,
 * 3D lens. Rendered on a fixed canvas behind the page content; it follows
 * the mouse across the entire /about page, not just the hero.
 */
export function MouseSpotlight({
  className,
  gap = 44,
  radius = 220,
  color = '0, 220, 252',
  maxPull = 0.5,
}: MouseSpotlightProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Accessibility / device guards: no mouse-driven motion for users who
    // prefer reduced motion or on touch devices (no cursor to follow).
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => {
      mouse.current.active = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseleave', onLeave);

    type Pt = { x: number; y: number; cx: number; cy: number };
    let cols = 0;
    let rows = 0;
    let pts: Pt[][] = [];

    const build = () => {
      cols = Math.ceil(width / gap) + 2;
      rows = Math.ceil(height / gap) + 2;
      pts = [];
      for (let j = 0; j <= rows; j++) {
        const row: Pt[] = [];
        for (let i = 0; i <= cols; i++) {
          const x = i * gap;
          const y = j * gap;
          row.push({ x, y, cx: x, cy: y });
        }
        pts.push(row);
      }
    };
    build();

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const m = mouse.current;

      if (pts.length !== rows + 1 || pts[0]?.length !== cols + 1) build();

      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          const p = pts[j][i];
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.hypot(dx, dy);
          const inf = Math.max(0, 1 - dist / radius);
          const t = inf * inf * maxPull;
          const tx = p.x + (m.x - p.x) * t;
          const ty = p.y + (m.y - p.y) * t;
          p.cx += (tx - p.cx) * 0.18;
          p.cy += (ty - p.cy) * 0.18;
        }
      }

      ctx.lineWidth = 1;
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          const p = pts[j][i];
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.hypot(dx, dy);
          const inf = Math.max(0, 1 - dist / radius);
          // Grid only shows inside the cursor's influence, fading out to nothing.
          const a = inf * inf * 0.82;
          if (a < 0.02) continue;
          ctx.strokeStyle = `rgba(${color}, ${a})`;

          if (i < cols) {
            const q = pts[j][i + 1];
            ctx.beginPath();
            ctx.moveTo(p.cx, p.cy);
            ctx.lineTo(q.cx, q.cy);
            ctx.stroke();
          }
          if (j < rows) {
            const q = pts[j + 1][i];
            ctx.beginPath();
            ctx.moveTo(p.cx, p.cy);
            ctx.lineTo(q.cx, q.cy);
            ctx.stroke();
          }
        }
      }

      if (m.active) {
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, radius);
        g.addColorStop(0, `rgba(${color}, 0.22)`);
        g.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(m.x, m.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [gap, radius, color, maxPull]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none fixed inset-0 z-0', className)}
    />
  );
}
