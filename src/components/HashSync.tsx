'use client';

import { useEffect } from 'react';
import { sectionIds } from '@/content/site';
import { useScroll } from '@/context/ScrollContext';

/**
 * Handles browser back/forward: when hash changes, scroll to that section.
 * URL updates on scroll are done by ActiveSectionProvider — no double observer.
 */
export function HashSync() {
  const { scrollTo } = useScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionIds.includes(hash as (typeof sectionIds)[number])) {
        scrollTo(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollTo]);

  return null;
}
