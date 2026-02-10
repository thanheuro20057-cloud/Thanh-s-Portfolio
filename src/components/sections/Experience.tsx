'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { experience, education } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Experience() {
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
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration.normal / 1000, ease: easing.out },
    },
  };

  return (
    <SectionWrapper id="experience">
      <motion.div
        className="grid md:grid-cols-2 gap-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div>
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={item}
                className="border-l-2 border-foreground/10 pl-8"
              >
                <p className="text-sm font-medium text-muted">{exp.period}</p>
                <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                <p className="text-muted mt-1">{exp.company}</p>
                <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-12"
          >
            Education
          </motion.h2>
          <div className="space-y-10">
            {education.map((edu) => (
              <motion.div
                key={`${edu.school}-${edu.degree}`}
                variants={item}
                className="border-l-2 border-foreground/10 pl-8"
              >
                <p className="text-sm font-medium text-muted">{edu.period}</p>
                <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-muted mt-1">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
