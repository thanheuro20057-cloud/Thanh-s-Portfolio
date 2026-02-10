'use client';

import { ReactNode } from 'react';
import { LenisProvider } from './LenisProvider';
import { ActiveSectionProvider } from '@/context/ActiveSectionContext';
import { sectionIds } from '@/content/site';

function handleActiveSectionChange(id: string) {
  if (typeof window === 'undefined') return;
  const newHash = `#${id}`;
  if (window.location.hash !== newHash) {
    window.history.replaceState(null, '', newHash);
  }
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <ActiveSectionProvider onActiveChange={handleActiveSectionChange}>
        {children}
      </ActiveSectionProvider>
    </LenisProvider>
  );
}
