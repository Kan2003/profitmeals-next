import Image from 'next/image';
import Link from 'next/link';
import { img } from '@/lib/data';
import MacroStrip from './MacroStrip';

export default function MealCard({ meal }) {
  return (
    <Link
      href={`/meals/${meal.slug}`}
      className="group block overflow-hidden rounded-card border border-line bg-white no-underline transition-all duration-200 hover:-translate-y-1.5 hover:border-[#CDCDCD] hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)]"
    >
      <div className="relative h-[190px] w-full overflow-hidden bg-line">
        <Image
          src={img(meal.slug, 800, 600)}
          alt={meal.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex gap-1.5">
          <span className="inline-flex h-6 items-center rounded bg-[#D9EDD7] px-2.5 text-[11px] font-medium text-forest">
            {meal.tags[0]}
          </span>
          {meal.tags[1] && (
            <span className="inline-flex h-6 items-center rounded bg-amberbg px-2.5 text-[11px] font-medium text-ambertx">
              {meal.tags[1]}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <div className="text-[19px] font-semibold leading-tight text-ink">{meal.name}</div>
          <div className="whitespace-nowrap text-[13px] font-medium text-muted">★ {meal.rating}</div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{meal.desc}</p>
        <MacroStrip meal={meal} />
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-muted">{meal.price}</span>
          <span className="text-sm font-medium text-green">View Meal →</span>
        </div>
      </div>
    </Link>
  );
}
