'use client';

import { useEffect } from 'react';
import { motion, useTransform, useMotionValueEvent } from 'framer-motion';
import { useScroll } from '@/context/ScrollContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Fixed full-viewport background: black → dark grey → silver → white.
 * Uses Lenis scroll progress — no React state updates, GPU-friendly.
 * Switches text to dark when background is light for readability.
 */
export function ShadeSweep() {
  const { scrollProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const backgroundColor = useTransform(
    scrollProgress,
    [0, 0.2, 0.45, 0.7, 0.85, 1],
    [
      'rgb(64, 64, 64)',        // black — intro
      'rgb(78, 78, 78)',     // dark grey — about
      'rgb(100, 100, 100)',     // charcoal — projects
      'rgb(163, 163, 163)',  // silver — skills/contact
      'rgb(212, 212, 212)',  // light grey — end
      'rgb(250, 250, 250)',  // near-white — playground
    ]
  );

  // Switch text color when background is light — only toggle when crossing threshold
  useMotionValueEvent(scrollProgress, 'change', (v) => {
    const root = document.documentElement;
    const isLight = v > 0.65;
    if (isLight && !root.classList.contains('shade-light')) {
      root.classList.add('shade-light');
    } else if (!isLight && root.classList.contains('shade-light')) {
      root.classList.remove('shade-light');
    }
  });

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('shade-light');
    };
  }, []);

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" aria-hidden />;
  }

  return (
    <motion.div
      className="fixed inset-0 -z-10 will-change-[background-color]"
      style={{ backgroundColor }}
      aria-hidden
    />
  );
}
