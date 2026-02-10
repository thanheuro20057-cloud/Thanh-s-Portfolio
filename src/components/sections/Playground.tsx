'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useScroll } from '@/context/ScrollContext';

/**
 * Motion Playground — scroll-driven animation driven by Lenis scroll progress.
 * Uses MotionValue (no setState) for 60fps performance.
 */
export function Playground() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollProgress } = useScroll();

  // Map scroll progress to local section visibility (playground is near end)
  const opacity = useTransform(scrollProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [0.75, 0.85, 0.92, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollProgress, [0.75, 0.85], ['10%', '0%']);

  if (prefersReducedMotion) return null;

  return (
    <section
      id="playground"
      data-section="playground"
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="w-64 h-64 rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent flex items-center justify-center will-change-transform"
      >
        <span className="text-sm font-medium text-muted">
          Scroll-driven motion
        </span>
      </motion.div>
    </section>
  );
}
