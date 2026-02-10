'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { projects } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function ProjectImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center text-2xl">
          →
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={className}
      onError={() => setError(true)}
    />
  );
}

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId);
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.normal / 1000, ease: easing.out },
    },
  };

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={item}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              layout
              className="group relative rounded-3xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden hover:border-foreground/20 transition-colors cursor-pointer"
              onClick={() => setSelectedId(project.id)}
              whileHover={{ y: prefersReducedMotion ? 0 : -4 }}
              transition={{ duration: duration.fast / 1000, ease: 'easeOut' }}
            >
              <div className="aspect-video bg-foreground/5 flex items-center justify-center overflow-hidden relative">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-xs text-muted px-2 py-1 rounded-md bg-foreground/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="max-w-2xl w-full rounded-3xl border border-foreground/10 bg-background overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: duration.fast / 1000, ease: easing.out }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-foreground/5 relative">
                <ProjectImage
                  src={selected.image}
                  alt={selected.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-muted mb-6">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.stack.map((s) => (
                  <span
                    key={s}
                    className="text-sm text-muted px-3 py-1 rounded-lg bg-foreground/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selected.links.live && (
                  <a
                    href={selected.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-muted transition-colors"
                  >
                    View live →
                  </a>
                )}
                {selected.links.github && (
                  <a
                    href={selected.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-muted transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
