'use client';

import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Intro() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger.slow,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.normal / 1000, ease: easing.out },
    },
  };

  return (
    <section
      id="intro"
      data-section="intro"
      className="min-h-screen w-full flex items-center justify-center px-6 py-24 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-foreground/[0.02] pointer-events-none" />
      <motion.div
        className="relative w-full max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium tracking-[0.2em] uppercase text-muted mb-6"
        >
          {site.title}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          {site.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto"
        >
          {site.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
}
