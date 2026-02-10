'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { site } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger.normal,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.normal / 1000, ease: easing.out },
    },
  };

  return (
    <SectionWrapper id="about">
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={item}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About me
          </h2>
          <p className="text-lg text-muted leading-relaxed">{site.shortBio}</p>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-wrap gap-3"
        >
          {['Clean code', 'Thoughtful design', 'Performance', 'Scalability'].map(
            (label) => (
              <span
                key={label}
                className="px-4 py-2 rounded-2xl border border-foreground/10 bg-foreground/[0.02] text-sm font-medium"
              >
                {label}
              </span>
            )
          )}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
