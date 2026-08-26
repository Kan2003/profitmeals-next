'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );
    io.observe(el);
    const safety = setTimeout(() => setShown(true), 4000);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: 'opacity .55s ease, transform .55s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
