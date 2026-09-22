import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { photo } from '@/lib/data';

export const metadata = { title: 'About — ProfitMeals' };

const steps = [
  ['Sourced', 'Produce and protein arrive before the kitchen opens.', 'photo-1518843875459-f738682238a6'],
  ['Weighed', 'Portions go on a scale, so the label is accurate.', 'photo-1466637574441-749b8f19452f'],
  ['Cooked', 'Chefs cook in small batches, not a warehouse line.', 'photo-1577219491135-ce391730fb2c'],
  ['Packed', 'Sealed hot and out for the same delivery slot.', 'photo-1526367790999-0150786686a2'],
];

const panels = [
  {
    label: 'OUR INGREDIENTS',
    title: 'Short lists, real names.',
    body: 'Chicken breast, paneer, brown rice, millets, seasonal vegetables, cold-pressed oils. Nothing on a label that you would not recognise in a kitchen.',
    seeds: ['photo-1610832958506-aa56368176cf', 'photo-1586201375761-83865001e31c', 'photo-1532550907401-a500c9a57435'],
  },
  {
    label: 'OUR KITCHEN',
    title: 'Ours, not rented by the hour.',
    body: 'A single FSSAI-licensed kitchen we run ourselves, so we control the sourcing, the portioning and the timing end to end.',
    seeds: ['photo-1556910633-5099dc3971e8', 'photo-1577219491135-ce391730fb2c', 'photo-1556909114-f6e7ad7d3136'],
  },
];

const stats = [['30g+', 'protein in most meals'], ['40+', 'meals on rotation'], ['Daily', 'cooked, never frozen']];

export default function AboutPage() {
  return (
    <div className="bg-sand">
      <section className="border-b border-sandline bg-sanddeep">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12 md:py-16">
          <div className="text-[13px] text-faint">Home / About</div>
          <div className="mt-3.5 grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="text-xs tracking-[0.1em] text-faint">OUR STORY</div>
              <h1 className="mt-3 text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[52px]">
                One kitchen, built for people who count what they eat.
              </h1>
              <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-muted md:text-lg">
                ProfitMeals started as a small cloud kitchen cooking for a handful of gym members who were tired of weighing chicken at midnight. The menu grew, the kitchen grew, the idea did not change.
              </p>
            </div>
            <div className="relative h-[260px] overflow-hidden rounded-2xl bg-line md:h-[360px]">
              <Image src={photo('photo-1556909114-f6e7ad7d3136', 900)} alt="Founders in the kitchen" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <Reveal>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 h-[240px] overflow-hidden rounded-2xl bg-line md:h-[320px] lg:order-1">
              <Image src={photo('photo-1556910633-5099dc3971e8', 900)} alt="Early days" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs tracking-[0.1em] text-faint">WHY WE STARTED</div>
              <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[34px]">
                Eating well took too much effort.
              </h2>
              <p className="mt-3.5 text-base leading-relaxed text-muted">
                Between work, training and travel, hitting a protein target every day meant either cooking twice a day or eating the same bland thing on repeat. Both options lose. We built the third one.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="text-xs tracking-[0.1em] text-faint">OUR APPROACH TO NUTRITION</div>
              <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[34px]">
                Numbers first, flavour never second.
              </h2>
              <p className="mt-3.5 text-base leading-relaxed text-muted">
                Every recipe is built to a macro target before it is cooked, then tasted until it earns a place on the menu. If a dish hits the numbers and nobody wants a second bite, it does not ship.
              </p>
              <div className="mt-7 flex flex-wrap gap-8 border-t border-sandline pt-5">
                {stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="text-[28px] font-semibold text-ink">{v}</div>
                    <div className="mt-0.5 text-[13px] text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[240px] overflow-hidden rounded-2xl bg-line md:h-[320px]">
              <Image src={photo('photo-1414235077428-338989a2e8c0', 900)} alt="Recipe development" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <div className="text-xs tracking-[0.1em] text-faint">HOW WE PREPARE YOUR MEALS</div>
        <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[34px]">Four steps, every morning.</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, s, seed], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="h-full overflow-hidden rounded-card border border-line bg-white">
                <div className="relative h-40 w-full bg-line">
                  <Image src={photo(seed, 600)} alt={t} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-[13px] font-semibold text-white">{i + 1}</span>
                  <div className="mt-3.5 text-[17px] font-semibold text-ink">{t}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {panels.map((p) => (
            <div key={p.label} className="rounded-2xl border border-sandline bg-white p-7 md:p-9">
              <div className="text-xs tracking-[0.1em] text-faint">{p.label}</div>
              <h2 className="mt-2.5 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[28px]">{p.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {p.seeds.map((s) => (
                  <div key={s} className="relative h-24 overflow-hidden rounded-[10px] bg-line">
                    <Image src={photo(s, 400)} alt="" fill sizes="20vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-8 px-5 py-14 md:px-12">
          <div>
            <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[40px]">Ready to Eat Better?</h2>
            <p className="mt-2.5 text-base text-[#D9EDD7]">Explore our meals and find something that fits your goals.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/meal-plans" className="inline-flex h-[52px] items-center rounded-[3px] bg-white px-6 text-base font-medium text-forest no-underline hover:text-forest">View Meal Plans</Link>
            <Link href="/contact" className="inline-flex h-[52px] items-center rounded-[3px] border border-white/50 px-6 text-base font-medium text-white no-underline hover:text-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
