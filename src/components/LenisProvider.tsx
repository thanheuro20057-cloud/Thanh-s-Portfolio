'use client';

import { ReactNode, useEffect, useRef, useCallback } from 'react';
import { useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
import { ScrollContext } from '@/context/ScrollContext';

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const scrollProgress = useMotionValue(0);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Update scrollProgress from Lenis (no setState — avoids re-renders)
    lenis.on('scroll', () => {
      scrollProgress.set(lenis.progress);
    });

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, [scrollProgress]);

  return (
    <ScrollContext.Provider
      value={{
        scrollTo,
        lenis: lenisRef.current,
        scrollProgress,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
