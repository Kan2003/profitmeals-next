'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, meals } from '@/lib/data';
import MealCard from './MealCard';

export default function MealExplorer({ initial = 'All', limit }) {
  const [cat, setCat] = useState(initial);

  const shown = useMemo(() => {
    const list = cat === 'All' ? meals : meals.filter((m) => m.tags.includes(cat) || m.goals.includes(cat) || m.diet === cat);
    return limit ? list.slice(0, limit) : list;
  }, [cat, limit]);

  return (
    <div id="menu">
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => {
          const on = c === cat;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`inline-flex h-[38px] items-center rounded-full border px-[18px] text-sm font-medium transition-colors ${
                on ? 'border-ink bg-ink text-white' : 'border-[#CDCDCD] bg-white text-ink hover:border-green hover:text-green'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-sm font-medium text-muted">
          {shown.length} {shown.length === 1 ? 'meal' : 'meals'}{cat === 'All' ? ' on rotation' : ` in ${cat}`}
        </span>
        {cat !== 'All' && (
          <button onClick={() => setCat('All')} className="text-[13px] text-[#2A90D6] hover:underline">
            Clear filter
          </button>
        )}
      </div>

      {shown.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((m) => (
            <MealCard key={m.slug} meal={m} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-card border border-dashed border-[#CDCDCD] bg-white p-14 text-center">
          <div className="mx-auto h-11 w-11 rounded-[10px] border border-dashed border-[#CDCDCD]" />
          <div className="mt-4 text-[19px] font-semibold text-ink">Nothing on rotation in that category today</div>
          <p className="mx-auto mt-2 max-w-[380px] text-[15px] leading-relaxed text-muted">
            The menu changes daily. Clear the filter to see everything, or message us and we will tell you what is coming.
          </p>
          <div className="mt-5 flex justify-center gap-2.5">
            <button onClick={() => setCat('All')} className="inline-flex h-11 items-center rounded-[3px] bg-green px-5 text-[15px] font-medium text-white">
              Show All Meals
            </button>
            <Link href="/contact" className="inline-flex h-11 items-center rounded-[3px] border border-[#CDCDCD] px-5 text-[15px] font-medium text-ink no-underline hover:text-ink">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
