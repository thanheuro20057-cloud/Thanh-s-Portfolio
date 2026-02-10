'use client';

import { motion } from 'framer-motion';
import { sectionIds } from '@/content/site';
import { useScroll } from '@/context/ScrollContext';
import { useActiveSection } from '@/context/ActiveSectionContext';

export function SideDots() {
  const { scrollTo } = useScroll();
  const { activeId } = useActiveSection();

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group flex items-center justify-end gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-full"
          aria-label={`Go to ${id} section`}
        >
          <span className="text-xs font-medium text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            {id}
          </span>
          <span
            className={`h-2 w-2 rounded-full border border-foreground/30 transition-all duration-200 ${
              activeId === id ? 'bg-foreground scale-125' : 'bg-transparent'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
