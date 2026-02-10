'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      data-section={id}
      className={`min-h-screen w-full flex items-center justify-center px-6 py-24 sm:px-8 md:px-12 lg:px-16 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
