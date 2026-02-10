'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from 'react';
import { sectionIds } from '@/content/site';

type SectionId = (typeof sectionIds)[number];

type ActiveSectionContextValue = {
  activeId: SectionId;
  setActiveId: (id: SectionId) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null
);

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error('useActiveSection must be used within ActiveSectionProvider');
  return ctx;
}

/**
 * Single IntersectionObserver for all sections. Throttles state updates:
 * only calls setState when activeId actually changes to avoid re-render storms.
 */
export function ActiveSectionProvider({
  children,
  onActiveChange,
}: {
  children: ReactNode;
  onActiveChange?: (id: string) => void;
}) {
  const [activeId, setActiveIdState] = useState<SectionId>('intro');
  const prevIdRef = useRef<SectionId>('intro');

  const setActiveId = useCallback((id: SectionId) => {
    if (prevIdRef.current === id) return;
    prevIdRef.current = id;
    setActiveIdState(id);
    onActiveChange?.(id);
  }, [onActiveChange]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute('id') as SectionId | null;
          if (id && sectionIds.includes(id)) {
            setActiveId(id);
            break; // first intersecting wins
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [setActiveId]);

  return (
    <ActiveSectionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
