'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxHero({ children, strength = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame;
    function update() {
      el.style.transform = `translateY(${window.scrollY * strength}px)`;
    }
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', inset: '-12% 0', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
