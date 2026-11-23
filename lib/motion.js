/**
 * True when the visitor has asked their OS/browser to reduce motion.
 * The CSS rule in globals.css only stops CSS animations — script-driven motion
 * (smooth scroll, parallax, count-up, reveal) must check this itself.
 */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
