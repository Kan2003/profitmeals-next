import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { contact, heroImage, howItWorks as steps, plans } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'High Protein Meal Plans in Indore',
  description:
    'Compare high protein meal plans in Indore: non-veg (70g protein), pure veg and egg-based boxes. 6 or 26-meal plans from ₹230 per meal, cooked fresh and delivered daily.',
  path: '/meal-plans/',
  keywords: ['high protein meal plans Indore', 'veg meal plan Indore', 'non-veg meal plan Indore', 'monthly meal plan Indore', 'meal box price Indore'],
});

const rows = [
  ['Meals per box', ...plans.map((p) => String(p.meals))],
  ['Trial Meal', ...plans.map((p) => `₹${p.trial} / trio`)],
  ['6-meal box', ...plans.map((p) => p.pricing.box6 ? `₹${p.pricing.box6} / meal` : '—')],
  ['26-meal box', ...plans.map((p) => p.pricing.box26 ? `₹${p.pricing.box26} / meal` : '—')],
];

export default function MealPlansPage() {
  return (
    <div className="bg-ivory">
      <section className="border-b border-line bg-ivorydeep">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-14 md:px-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-[13px] text-faint">Home / Meal Plans</div>
            <h1 className="mt-3 text-[36px] font-bold leading-[1.06] tracking-[-0.025em] text-charcoal md:text-[48px]">
              Make Healthy Eating a Habit
            </h1>
            <p className="mt-3.5 max-w-[520px] text-[17px] leading-relaxed text-muted">
              One plan, one goal, a fixed number of meals a week. We confirm everything over a call before your first delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex h-[52px] items-center rounded-full bg-forest hover:bg-forestdeep px-6 text-base font-medium text-ivory no-underline transition-transform hover:-translate-y-0.5 hover:text-ivory">
                Talk to Us About a Plan
              </Link>
              <Link href="/contact" className="inline-flex h-[52px] items-center rounded-full border border-charcoal/20 bg-surface px-6 text-base font-medium text-charcoal no-underline hover:text-charcoal">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-2xl bg-line md:h-[360px]">
            <Image src={heroImage} alt="Weekly meal plan" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <div className={`relative h-full rounded-2xl bg-surface p-7 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(36,39,36,0.08)] ${p.popular ? 'border-2 border-forest' : 'border border-line'}`}>
                {p.popular && (
                  <span className="absolute -top-3 left-7 inline-flex h-6 items-center rounded-full bg-forest px-3 text-xs font-medium text-ivory">
                    Most popular
                  </span>
                )}
                <div className="text-2xl font-semibold text-charcoal">{p.name}</div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.blurb}</p>
                <div className="my-5 grid grid-cols-2 gap-3.5 border-y border-line py-[18px]">
                  <div><div className="text-xl font-extrabold tabular-nums text-charcoal">{p.meals} meals</div><div className="text-xs text-faint">per box</div></div>
                  <div><div className="text-xl font-extrabold tabular-nums text-forest">₹{p.trial}</div><div className="text-xs text-faint">trial / trio</div></div>
                  <div><div className="text-xl font-extrabold tabular-nums text-charcoal">{p.pricing.box6 ? `₹${p.pricing.box6}` : '—'}</div><div className="text-xs text-faint">per meal · 6-box</div></div>
                  <div><div className="text-xl font-extrabold tabular-nums text-charcoal">{p.pricing.box26 ? `₹${p.pricing.box26}` : '—'}</div><div className="text-xs text-faint">per meal · 26-box</div></div>
                </div>
                <div className="text-[13px] font-semibold text-charcoal">What&apos;s included</div>
                <div className="mt-4 flex flex-col gap-2.5">
                  {p.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-foresttint" />
                      <span className="text-sm text-charcoal">{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`mt-6 flex h-[50px] items-center justify-center rounded-full text-[15px] font-medium no-underline ${p.popular ? 'bg-forest hover:bg-forestdeep text-ivory hover:text-ivory' : 'border border-charcoal/20 text-charcoal hover:text-charcoal'}`}
                >
                  Explore Plan
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-14 md:px-12">
        <h2 className="text-[26px] font-bold tracking-[-0.02em] text-charcoal md:text-[32px]">How a Plan Works</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {steps.map(([t, s], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="h-full rounded-card border border-line bg-surface p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-charcoal text-[15px] font-semibold text-ivory">{i + 1}</span>
                <div className="mt-4 text-lg font-semibold text-charcoal">{t}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <h2 className="mb-6 text-[26px] font-bold tracking-[-0.02em] text-charcoal md:text-[32px]">Compare Plans</h2>
        <div className="overflow-x-auto rounded-card border border-line bg-surface">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead className="bg-ivory">
              <tr>
                <th className="p-4 text-[13px] font-semibold text-charcoal" />
                {plans.map((p) => (
                  <th key={p.slug} className="p-4 text-sm font-semibold text-charcoal">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-line">
                  <td className="p-3.5 text-sm text-muted">{r[0]}</td>
                  {r.slice(1).map((c, i) => (
                    <td key={i} className={`p-3.5 text-sm tabular-nums ${c === '—' ? 'text-faint' : ['Included', 'Monthly', 'Weekly'].includes(c) ? 'text-forest' : 'text-charcoal'}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-8 px-5 py-14 md:px-12">
          <div>
            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-ivory md:text-[36px]">Not sure which plan fits?</h2>
            <p className="mt-2.5 text-base text-ivory/75">Message us with your goal and we will tell you which one to start on.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={contact.whatsappHref} className="inline-flex h-[52px] items-center rounded-full bg-ivory px-6 text-base font-medium text-forest no-underline hover:text-forest">WhatsApp Us</a>
            <Link href="/contact" className="inline-flex h-[52px] items-center rounded-full border border-ivory/50 px-6 text-base font-medium text-ivory no-underline hover:text-ivory">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
