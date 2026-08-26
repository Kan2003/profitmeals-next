import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { contact, meals, photo } from '@/lib/data';
import MealCard from '@/components/MealCard';
import Accordion from '@/components/Accordion';

export function generateStaticParams() {
  return meals.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const meal = meals.find((m) => m.slug === params.slug);
  return { title: meal ? `${meal.name} — ProfitMeals` : 'Meal — ProfitMeals' };
}

export default function MealPage({ params }) {
  const meal = meals.find((m) => m.slug === params.slug);
  if (!meal) notFound();

  const similar = meals.filter((m) => m.slug !== meal.slug).slice(0, 4);
  const macroCells = [
    meal.kcal != null && { v: meal.kcal, l: 'Calories' },
    meal.protein != null && { v: meal.protein + 'g', l: 'Protein' },
    meal.fiber != null && { v: meal.fiber + 'g', l: 'Fiber' },
    meal.fat != null && { v: meal.fat + 'g', l: 'Fat' },
  ].filter(Boolean);
  const ingredientsText = meal.ingredients.length
    ? meal.ingredients.map((i) => i.name).join(', ') + '.'
    : meal.desc;
  const ingredientsAccordionText = meal.ingredients.length
    ? meal.ingredients.map((i) => `${i.name} — ${i.qty}`).join(', ')
    : meal.desc;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-5 text-[13px] text-faint md:px-12">
        <Link href="/" className="text-faint no-underline hover:text-ink">Home</Link> /{' '}
        <Link href="/meals" className="text-faint no-underline hover:text-ink">Meals</Link> /{' '}
        <span className="text-ink">{meal.name}</span>
      </div>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-10 md:px-12 md:py-12 lg:grid-cols-2">
        <div>
          <div className="relative h-[300px] overflow-hidden rounded-2xl bg-line md:h-[480px]">
            <Image src={photo(meal.photoId, 1200)} alt={meal.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`relative h-20 overflow-hidden rounded-[10px] bg-line md:h-24 ${n === 1 ? 'ring-2 ring-green' : ''}`}>
                <Image src={photo(meal.photoId, 400)} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-2">
            {meal.tags.map((t, i) => (
              <span key={t} className={`inline-flex h-[26px] items-center rounded px-2.5 text-xs font-medium ${i === 0 ? 'bg-[#D9EDD7] text-forest' : 'bg-amberbg text-ambertx'}`}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-3.5 text-[32px] font-semibold leading-tight tracking-[-0.025em] text-ink md:text-[42px]">{meal.name}</h1>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{meal.desc}</p>

          {macroCells.length > 0 && (
            <div className="mt-6 grid gap-3" style={{ gridTemplateColumns: `repeat(${macroCells.length}, minmax(0, 1fr))` }}>
              {macroCells.map((c) => (
                <div key={c.l} className="rounded-xl border border-line p-3 md:p-4">
                  <div className="text-xl font-semibold text-ink md:text-2xl">{c.v}</div>
                  <div className="text-xs text-muted">{c.l}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <div className="text-[13px] font-semibold text-ink">Ingredients</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {ingredientsText}
              </p>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink">Dietary information</div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="inline-flex h-[26px] items-center rounded border border-[#CDCDCD] px-2.5 text-xs text-muted">{meal.diet}</span>
                <span className="inline-flex h-[26px] items-center rounded border border-[#CDCDCD] px-2.5 text-xs text-muted">No added sugar</span>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink">Allergens</div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {meal.allergens.length ? meal.allergens.map((a) => (
                  <span key={a} className="inline-flex h-[26px] items-center rounded bg-amberbg px-2.5 text-xs text-ambertx">{a}</span>
                )) : <span className="text-sm text-muted">None declared</span>}
              </div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink">Portion &amp; price</div>
              <div className="mt-2 text-sm text-muted">{meal.portion}</div>
              <div className="mt-1 text-xl font-semibold text-ink">{meal.price}</div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex h-[54px] items-center rounded-[3px] bg-green px-7 text-base font-medium text-white no-underline transition-transform hover:-translate-y-0.5 hover:text-white">
              Enquire About This Meal
            </Link>
            <a href={contact.whatsappHref} className="inline-flex h-[54px] items-center rounded-[3px] border border-[#CDCDCD] px-7 text-base font-medium text-ink no-underline hover:text-ink">
              Order on WhatsApp
            </a>
          </div>
          <p className="mt-3.5 text-[13px] text-faint">
            Orders are placed over WhatsApp or phone. There is no checkout on this site.
          </p>
        </div>
      </section>

      <section className="border-t border-sandline bg-sand">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">Why You&apos;ll Love It</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              meal.protein != null
                ? [`${meal.protein}g of protein`, 'A third of a daily target in one box.']
                : ['Cooked to order', 'Made fresh in our Indore kitchen, not stocked from a warehouse.'],
              ['Cooked same morning', 'Never frozen, never reheated stock.'],
              ['Weighed, not estimated', 'Every ingredient goes on a scale.'],
              ['Ready in two minutes', 'Microwave-safe box, no prep.'],
            ].map(([t, s]) => (
              <div key={t} className="rounded-xl border border-line bg-white p-5">
                <span className="block h-8 w-8 rounded-lg border border-[#CDCDCD]" />
                <div className="mt-3.5 text-base font-semibold text-ink">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
        <div className="lg:hidden">
          <h2 className="mb-4 text-[26px] font-semibold tracking-[-0.02em] text-ink">Full breakdown</h2>
          <Accordion
            items={[
              { q: 'Ingredients', a: ingredientsAccordionText },
              { q: 'Dietary information', a: `${meal.diet}. No added sugar, low oil.` },
              { q: 'Allergens & portion', a: `${meal.allergens.join(', ') || 'None declared'}. ${meal.portion}.` },
            ]}
          />
        </div>

        <div className="mt-10 flex items-end justify-between lg:mt-0">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">Similar Meals</h2>
          <Link href="/meals" className="text-[15px] font-medium text-green no-underline hover:text-forest">View All Meals →</Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {similar.map((m) => <MealCard key={m.slug} meal={m} />)}
        </div>
      </section>
    </div>
  );
}
