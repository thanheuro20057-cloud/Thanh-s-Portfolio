'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useMotionValue, motionValue, type MotionValue } from 'framer-motion';
import Lenis from 'lenis';

type ScrollContextValue = {
  scrollTo: (id: string) => void;
  lenis: Lenis | null;
  /** 0–1 scroll progress. Updated from Lenis, no React re-renders. */
  scrollProgress: MotionValue<number>;
};

export const ScrollContext = createContext<ScrollContextValue | null>(null);

const fallbackProgress = motionValue(0);

export function useScroll() {
  const ctx = useContext(ScrollContext);
  return (
    ctx ?? {
      scrollTo: fallbackScrollTo,
      lenis: null,
      scrollProgress: fallbackProgress,
    }
  );
}

function fallbackScrollTo(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth' });
}
