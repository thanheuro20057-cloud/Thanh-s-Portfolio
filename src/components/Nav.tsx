'use client';

import Link from 'next/link';
import { site, sectionIds } from '@/content/site';
import { useScroll } from '@/context/ScrollContext';
import { useActiveSection } from '@/context/ActiveSectionContext';

const navItems = sectionIds
  .filter((id) => id !== 'playground')
  .map((id) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1),
  }));

export function Nav() {
  const { scrollTo } = useScroll();
  const { activeId } = useActiveSection();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 sm:px-8 md:px-12 lg:px-16"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/#intro"
          onClick={(e) => handleClick(e, 'intro')}
          className="text-sm font-medium text-foreground hover:text-muted transition-colors"
        >
          {site.name}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`relative text-sm font-medium transition-colors ${
                activeId === id
                  ? 'text-foreground'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {activeId === id && (
                <span
                  className="absolute -inset-x-2 -inset-y-1 rounded-md bg-foreground/5 -z-10"
                  aria-hidden
                />
              )}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
