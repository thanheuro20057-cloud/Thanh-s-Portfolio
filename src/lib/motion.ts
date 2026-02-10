/**
 * Motion system — shared constants for Apple-like animations
 * Durations, easing, stagger, and reduced-motion support
 */

// Easing: confident, smooth (avoid bouncy)
export const easing = {
  out: [0.22, 1, 0.36, 1] as const, // smooth ease-out
  inOut: [0.65, 0, 0.35, 1] as const,
  in: [0.32, 0, 0.67, 0] as const,
};

// Durations (ms)
export const duration = {
  instant: 100,
  fast: 200,
  normal: 400,
  slow: 600,
  slower: 900,
};

// Stagger delays
export const stagger = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
};

// Spring config for natural motion (when needed)
export const spring = {
  smooth: { type: 'spring' as const, stiffness: 260, damping: 24 },
  gentle: { type: 'spring' as const, stiffness: 120, damping: 20 },
};

// Reduced motion: instant, no animation
export const reducedMotionVariants = {
  hidden: { opacity: 1, y: 0, filter: 'blur(0px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 1, y: 0, filter: 'blur(0px)' },
};
