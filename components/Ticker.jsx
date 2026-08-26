import { marqueeItems as items } from '@/lib/data';

export default function Ticker() {
  return (
    <div className="group overflow-hidden bg-green py-4">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8 pr-8 md:gap-11 md:pr-11">
            {items.map((t) => (
              <span key={t} className="flex items-center gap-8 md:gap-11">
                <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-white md:text-xl">
                  {t}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
