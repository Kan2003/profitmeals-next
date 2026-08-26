import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Ticker from '@/components/Ticker';
import MealExplorer from '@/components/MealExplorer';
import { contact, goals, heroImage, photo, plans, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero — white */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-16 md:px-12 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex h-7 items-center rounded-full bg-[#D9EDD7] px-3 text-xs font-medium text-forest">
              Cloud kitchen · Cooked fresh every morning
            </span>
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-ink md:text-[64px]">
              High Protein. Full Flavor. Better You.
            </h1>
            <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-muted md:text-lg">
              Freshly prepared meals designed for your fitness goals, busy lifestyle, and everyday health.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/meals" className="inline-flex h-[52px] items-center rounded-[3px] bg-forest px-6 text-base font-medium text-white no-underline transition-transform hover:-translate-y-0.5 hover:text-white">
                Explore Our Meals
              </Link>
              <Link href="/meal-plans" className="inline-flex h-[52px] items-center rounded-[3px] border border-line px-6 text-base font-medium text-ink no-underline transition-colors hover:bg-mint hover:text-forest">
                View Meal Plans
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-7 border-t border-line pt-6">
              {['High Protein', 'Fresh Ingredients', 'Macro Counted', 'Chef Prepared'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13px] font-medium text-muted">
                  <span className="h-5 w-5 rounded border border-line" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-line md:h-[460px]">
              <Image src={heroImage} alt="Signature protein bowl" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute bottom-5 right-4 w-[230px] animate-float rounded-xl border border-line bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.22)] lg:-left-8 lg:right-auto">
              <div className="text-[10px] font-medium tracking-[0.12em] text-faint">PER SERVING</div>
              <div className="mt-1.5 text-3xl font-semibold leading-none text-ink">
                245 <span className="text-sm font-medium text-muted">kcal</span>
              </div>
              <div className="mt-3.5 grid grid-cols-3 gap-2">
                {[['64g', 'Protein'], ['4.5g', 'Fat'], ['10g', 'Fiber']].map(([v, l]) => (
                  <div key={l} className="rounded-lg bg-[#F8F8F8] p-2 text-center">
                    <div className="text-[15px] font-semibold text-ink">{v}</div>
                    <div className="text-[10px] text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Menu — white */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[72px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
                  Something for Every Craving
                </h2>
                <p className="mt-2.5 text-base text-muted">Forty-plus meals on rotation, every one macro counted.</p>
              </div>
              <Link href="/meals" className="text-[15px] font-medium text-green no-underline hover:text-forest">
                View Full Menu →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-7">
              <MealExplorer limit={6} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Goals — mint */}
      <section className="border-t border-mintline bg-mint">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[72px]">
          <Reveal>
            <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Meals Built Around Your Goals
            </h2>
            <p className="mt-2.5 text-base text-muted">Pick a goal and we will show you the meals that fit it.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <Link
                  href={`/meals?goal=${encodeURIComponent(g.filter)}`}
                  className="group block h-full overflow-hidden rounded-card border border-line bg-white no-underline transition-all duration-200 hover:-translate-y-1.5 hover:border-green hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative h-[130px] w-full overflow-hidden bg-line">
                    <Image src={photo(g.photoId, 600)} alt={g.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-[19px] font-semibold text-ink">{g.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{g.blurb}</p>
                    <div className="mt-4 text-sm font-medium text-green">Explore Meals →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans — white */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[72px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
                  Make Healthy Eating a Habit
                </h2>
                <p className="mt-2.5 text-base text-muted">Weekly plans built around one goal at a time.</p>
              </div>
              <Link href="/meal-plans" className="text-[15px] font-medium text-green no-underline hover:text-forest">
                All Meal Plans →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <div className={`relative h-full rounded-card border bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] ${p.popular ? 'border-green' : 'border-line'}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-6 inline-flex h-[22px] items-center rounded bg-green px-2.5 text-[11px] font-medium text-white">
                      Most popular
                    </span>
                  )}
                  <div className="text-xl font-semibold text-ink">{p.name}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <div className="mt-4 flex gap-5">
                    <div><div className="text-[17px] font-semibold text-ink">{p.meals}</div><div className="text-[11px] text-faint">meals / box</div></div>
                    <div><div className="text-[17px] font-semibold text-ink">{p.recipes}</div><div className="text-[11px] text-faint">recipes</div></div>
                    <div><div className="text-[17px] font-semibold text-ink">₹{p.pricing.box26}</div><div className="text-[11px] text-faint">per meal</div></div>
                  </div>
                  <Link href="/meal-plans" className="mt-5 inline-block text-sm font-medium text-green no-underline hover:text-forest">
                    Explore Plan →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand — sand */}
      <section className="border-t border-sandline bg-sand">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-16 md:px-12 md:py-[72px] lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                ['kitchen', 'photo-1556910633-5099dc3971e8', 190],
                ['ingredients', 'photo-1518843875459-f738682238a6', 190],
                ['chef', 'photo-1577219491135-ce391730fb2c', 150],
                ['prep', 'photo-1466637574441-749b8f19452f', 150],
              ].map(([label, photoId, h]) => (
                <div key={label} className="relative overflow-hidden rounded-xl bg-line" style={{ height: h }}>
                  <Image src={photo(photoId, 600)} alt={label} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Healthy Food, Done Differently.
            </h2>
            <p className="mt-3.5 max-w-[480px] text-base leading-relaxed text-muted">
              Every meal is weighed, cooked and packed in our own kitchen the morning it goes out. Nothing is reheated from a warehouse.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['High Protein', '30g+ in most meals'],
                ['Fresh Ingredients', 'Sourced daily'],
                ['Macro Counted', 'Weighed, not estimated'],
                ['Chef Prepared', 'Cooked to order'],
                ['Balanced Nutrition', 'Reviewed by a nutritionist'],
                ['Freshly Prepared', 'Same-day cooking'],
              ].map(([t, s]) => (
                <div key={t} className="flex gap-3">
                  <span className="h-9 w-9 shrink-0 rounded-lg border border-[#CDCDCD]" />
                  <div>
                    <div className="text-[15px] font-semibold text-ink">{t}</div>
                    <div className="text-[13px] text-muted">{s}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/why-us" className="mt-7 inline-flex h-12 items-center rounded-[3px] border border-[#CDCDCD] bg-white px-6 text-[15px] font-medium text-ink no-underline hover:text-ink">
              Why Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials — white */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[72px]">
          <Reveal>
            <h2 className="max-w-[760px] text-[30px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Loved By People Who Take Their Health Seriously.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="h-full rounded-card border border-line p-6">
                  <div className="text-[13px] font-medium text-muted">★★★★★</div>
                  <p className="mt-3 text-base leading-relaxed text-ink">{t.quote}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full bg-line">
                      <Image src={t.avatar} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{t.name}</div>
                      <div className="text-xs text-muted">{t.tag}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — forest */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-12 px-5 py-16 md:px-12 md:py-[72px]">
          <div>
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[44px]">
              Ready to Eat Better?
            </h2>
            <p className="mt-3 text-[17px] text-[#D9EDD7]">Explore our meals and find something that fits your goals.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/meals" className="inline-flex h-[52px] items-center rounded-[3px] bg-white px-6 text-base font-medium text-forest no-underline hover:text-forest">
                Explore Meals
              </Link>
              <Link href="/contact" className="inline-flex h-[52px] items-center rounded-[3px] border border-white/50 px-6 text-base font-medium text-white no-underline hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[['WhatsApp', contact.phone], ['Phone', contact.phone], ['Instagram', contact.instagramHandle], ['Service area', contact.serviceArea]].map(([l, v]) => (
              <div key={l} className="w-[190px] rounded-[10px] border border-white/30 p-3.5">
                <div className="text-[11px] text-[#D9EDD7]">{l}</div>
                <div className="text-[15px] font-semibold text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
