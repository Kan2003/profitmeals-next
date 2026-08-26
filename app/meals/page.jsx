import { Suspense } from 'react';
import MealsBrowser from './MealsBrowser';

export const metadata = { title: 'Meals — ProfitMeals' };

export default function MealsPage() {
  return (
    <div className="bg-mint">
      <section className="border-b border-mintline bg-mintdeep">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12">
          <div className="text-[13px] text-faint">Home / Meals</div>
          <h1 className="mt-2.5 text-[34px] font-semibold leading-tight tracking-[-0.025em] text-ink md:text-[44px]">
            Find Your Perfect Meal
          </h1>
          <p className="mt-2.5 max-w-[560px] text-base text-muted">
            Filter by goal, macros or meal type. Every meal shows its full nutrition up front.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-12 md:py-14">
        <Suspense fallback={<div className="text-sm text-muted">Loading menu…</div>}>
          <MealsBrowser />
        </Suspense>
      </section>
    </div>
  );
}
