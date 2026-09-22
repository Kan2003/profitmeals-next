import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Ticker from '@/components/Ticker';
import ParallaxHero from '@/components/ParallaxHero';
import CountUp from '@/components/CountUp';
import { contact, goals, heroImage, photo, plans, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero — white */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-10 md:px-12 md:py-20 md:gap-14 lg:grid-cols-2">

          {/* Image — first on mobile, right on desktop */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-[260px] overflow-hidden rounded-2xl border border-line sm:h-[320px] md:h-[460px]">
              <ParallaxHero>
                <Image src={heroImage} alt="Signature protein bowl" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </ParallaxHero>
            </div>
            {/* Macro card — bottom-left on mobile, left-overhang on desktop */}
            <div className="absolute bottom-4 left-3 w-[200px] animate-float rounded-xl border border-line bg-white p-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.22)] sm:w-[220px] lg:-left-8 lg:bottom-5 lg:w-[230px] lg:p-4">
              <div className="text-[10px] font-medium tracking-[0.12em] text-faint">PER SERVING</div>
              <div className="mt-1 text-2xl font-semibold leading-none text-ink lg:text-3xl lg:mt-1.5">
                <CountUp value="245" /> <span className="text-xs font-medium text-muted lg:text-sm">kcal</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5 lg:mt-3.5 lg:gap-2">
                {[['64', 'g', 'Protein'], ['4.5', 'g', 'Fat'], ['10', 'g', 'Fiber']].map(([v, s, l]) => (
                  <div key={l} className="rounded-lg bg-[#F8F8F8] p-1.5 text-center lg:p-2">
                    <div className="text-[13px] font-semibold text-ink lg:text-[15px]"><CountUp value={v} suffix={s} /></div>
                    <div className="text-[9px] text-muted lg:text-[10px]">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text — second on mobile, left on desktop */}
          <div className="order-last lg:order-first">
            <span className="inline-flex h-7 items-center rounded-full bg-[#D9EDD7] px-3 text-xs font-medium text-forest">
              Cloud kitchen · Cooked fresh every morning
            </span>
            <h1 className="mt-4 text-[34px] font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[40px] md:text-[64px]">
              High Protein. Full Flavor. Better You.
            </h1>
            <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-muted md:mt-5 md:text-lg">
              Freshly prepared meals designed for your fitness goals, busy lifestyle, and everyday health.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <Link href="/meal-plans" className="inline-flex h-[52px] items-center justify-center rounded-[3px] bg-forest px-6 text-base font-medium text-white no-underline transition-transform hover:-translate-y-0.5 hover:text-white">
                View Meal Plans
              </Link>
              <Link href="/contact" className="inline-flex h-[52px] items-center justify-center rounded-[3px] border border-line px-6 text-base font-medium text-ink no-underline transition-colors hover:bg-mint hover:text-forest">
                Contact Us
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-5 border-t border-line pt-5 md:gap-7">
              {['High Protein', 'Fresh Ingredients', 'Macro Counted', 'Chef Prepared'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13px] font-medium text-muted">
                  <span className="h-2 w-2 rounded-full bg-green" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Goals — mint */}
      <section className="border-t border-mintline bg-mint">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12 md:py-[72px]">
          <Reveal>
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Meals Built Around Your Goals
            </h2>
            <p className="mt-2 text-base text-muted">Pick a goal and we will show you the meals that fit it.</p>
          </Reveal>
          {/* Horizontal scroll on mobile, grid on sm+ */}
          <div className="-mx-5 mt-6 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:px-0 md:mt-8 lg:grid-cols-4">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 60} className="shrink-0 sm:shrink sm:h-full">
                <Link
                  href="/meal-plans"
                  className="group flex h-full min-w-[220px] flex-col overflow-hidden rounded-card border border-line bg-white no-underline transition-all duration-200 hover:-translate-y-1.5 hover:border-green hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)] sm:min-w-0"
                >
                  <div className="relative h-[130px] w-full shrink-0 overflow-hidden bg-line">
                    <Image src={photo(g.photoId, 600)} alt={g.title} fill sizes="(max-width: 640px) 220px, (max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="text-[17px] font-semibold text-ink sm:text-[19px]">{g.title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{g.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans — white */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12 md:py-[72px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
                  Make Healthy Eating a Habit
                </h2>
                <p className="mt-2 text-base text-muted">Weekly plans built around one goal at a time.</p>
              </div>
              <Link href="/meal-plans" className="text-[15px] font-medium text-green no-underline hover:text-forest">
                All Meal Plans →
              </Link>
            </div>
          </Reveal>
          {/* Horizontal snap-scroll on mobile, grid on desktop */}
          <div className="-mx-5 mt-6 flex gap-4 overflow-x-auto scroll-pl-5 px-5 pb-3 snap-x snap-mandatory [scrollbar-width:none] md:mx-0 md:mt-8 md:overflow-visible md:scroll-pl-0 md:pb-0 md:px-0 lg:grid lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60} className="shrink-0 snap-start lg:shrink lg:snap-align-none">
                <div className={`relative min-w-[280px] h-full rounded-card border bg-white p-5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] sm:min-w-[320px] lg:min-w-0 lg:p-6 ${p.popular ? 'border-green' : 'border-line'}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-5 inline-flex h-[22px] items-center rounded bg-green px-2.5 text-[11px] font-medium text-white">
                      Most popular
                    </span>
                  )}
                  <div className="text-lg font-semibold text-ink lg:text-xl">{p.name}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <div className="mt-4 flex gap-5">
                    <div><div className="text-[16px] font-semibold text-ink lg:text-[17px]">{p.meals}</div><div className="text-[11px] text-faint">meals / box</div></div>
                    <div><div className="text-[16px] font-semibold text-green lg:text-[17px]">₹{p.trial}</div><div className="text-[11px] text-faint">trial meal</div></div>
                    <div><div className="text-[16px] font-semibold text-ink lg:text-[17px]">{p.pricing.box26 ? `₹${p.pricing.box26}` : '—'}</div><div className="text-[11px] text-faint">per meal</div></div>
                  </div>
                  <Link href="/meal-plans" className="mt-4 inline-block text-sm font-medium text-green no-underline hover:text-forest lg:mt-5">
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
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 md:px-12 md:py-[72px] md:gap-14 lg:grid-cols-2">

          {/* Text — first on mobile, right on desktop */}
          <Reveal delay={80} className="order-first lg:order-last">
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Healthy Food, Done Differently.
            </h2>
            <p className="mt-3 max-w-[480px] text-base leading-relaxed text-muted">
              Every meal is weighed, cooked and packed in our own kitchen the morning it goes out. Nothing is reheated from a warehouse.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:mt-7">
              {[
                ['High Protein', '30g+ in most meals'],
                ['Fresh Ingredients', 'Sourced daily'],
                ['Macro Counted', 'Weighed, not estimated'],
                ['Chef Prepared', 'Cooked to order'],
                ['Balanced Nutrition', 'Reviewed by a nutritionist'],
                ['Freshly Prepared', 'Same-day cooking'],
              ].map(([t, s]) => (
                <div key={t} className="flex gap-2.5">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                  <div>
                    <div className="text-[14px] font-semibold text-ink lg:text-[15px]">{t}</div>
                    <div className="text-[12px] text-muted lg:text-[13px]">{s}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/why-us" className="mt-6 inline-flex h-12 items-center rounded-[3px] border border-[#CDCDCD] bg-white px-6 text-[15px] font-medium text-ink no-underline hover:text-ink md:mt-7">
              Why Us
            </Link>
          </Reveal>

          {/* Photo grid — second on mobile, left on desktop */}
          <Reveal className="order-last lg:order-first">
            <div className="grid grid-cols-2 gap-3">
              {[
                ['kitchen', 'photo-1556910633-5099dc3971e8', 160],
                ['ingredients', 'photo-1518843875459-f738682238a6', 160],
                ['chef', 'photo-1577219491135-ce391730fb2c', 130],
                ['prep', 'photo-1466637574441-749b8f19452f', 130],
              ].map(([label, photoId, h]) => (
                <div key={label} className="relative overflow-hidden rounded-xl bg-line" style={{ height: h }}>
                  <Image src={photo(photoId, 600)} alt={label} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials — white */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12 md:py-[72px]">
          <Reveal>
            <h2 className="max-w-[760px] text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[40px]">
              Loved By People Who Take Their Health Seriously.
            </h2>
          </Reveal>
          {/* Horizontal snap-scroll on mobile, grid on desktop */}
          <div className="-mx-5 mt-6 flex gap-4 overflow-x-auto scroll-pl-5 px-5 pb-3 snap-x snap-mandatory [scrollbar-width:none] md:mx-0 md:mt-8 md:overflow-visible md:scroll-pl-0 md:pb-0 md:px-0 lg:grid lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60} className="shrink-0 snap-start lg:shrink lg:snap-align-none">
                <div className="min-w-[280px] h-full rounded-card border border-line p-5 sm:min-w-[320px] lg:min-w-0 lg:p-6">
                  <div className="text-[13px] font-medium text-muted">★★★★★</div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink lg:text-base">{t.quote}</p>
                  <div className="mt-4 flex items-center gap-3 lg:mt-5">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full bg-line shrink-0">
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
              <Link href="/meal-plans" className="inline-flex h-[52px] items-center rounded-[3px] bg-white px-6 text-base font-medium text-forest no-underline hover:text-forest">
                View Meal Plans
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
