'use client';

import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, suffix = '', duration = 1400 }) {
  const numeric = parseFloat(value);
  const isDecimal = String(value).includes('.');
  const decimals = isDecimal ? String(value).split('.')[1].length : 0;

  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numeric;
            setDisplay(
              isDecimal ? current.toFixed(decimals) : String(Math.round(current))
            );
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [numeric, duration, isDecimal, decimals]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}
