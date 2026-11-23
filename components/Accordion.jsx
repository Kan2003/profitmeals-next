'use client';

import { useId, useState } from 'react';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();
  return (
    <div className="border-t border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={it.q} className="border-b border-line">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-3 py-[18px] text-left"
            >
              <span className="text-base font-medium text-charcoal">{it.q}</span>
              <span aria-hidden="true" className="text-xl text-faint">{isOpen ? '−' : '+'}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              // `inert` keeps links/text in a closed answer out of tab order and screen readers.
              inert={isOpen ? undefined : ''}
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-[18px] text-[15px] leading-relaxed text-muted">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
