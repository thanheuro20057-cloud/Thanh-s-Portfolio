'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { skills } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger.fast,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration.fast / 1000, ease: easing.out },
    },
  };

  return (
    <SectionWrapper id="skills">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={item}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Skills & Tech
        </motion.h2>
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={item}
              className="px-5 py-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] text-sm font-medium hover:border-foreground/20 hover:bg-foreground/[0.04] transition-colors cursor-default"
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              transition={{ duration: duration.instant / 1000 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
