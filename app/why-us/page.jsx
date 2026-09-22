import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { photo, testimonials } from '@/lib/data';

export const metadata = { title: 'Why Us — ProfitMeals' };

const benefits = [
  ['High Protein', 'Most meals carry 30g or more, because protein is the thing people miss most.'],
  ['Fresh Ingredients', 'Produce and protein are bought daily and used the same day.'],
  ['Macro Counted', 'Every ingredient is weighed on a scale, not estimated from a recipe card.'],
  ['Chef Prepared', 'Cooked by chefs who trained in restaurants, not assembled on a line.'],
  ['Balanced Nutrition', 'Menus are reviewed by a nutritionist before anything goes on rotation.'],
  ['Freshly Prepared', 'Cooked the morning it is delivered. Nothing frozen, nothing held over.'],
];

const process = [
  ['Sourced in the morning', 'Produce, chicken and paneer arrive before the kitchen opens.'],
  ['Weighed, then cooked', 'Portions go on a scale first, so the macros on the label are the macros in the box.'],
  ['Packed and out the door', 'Sealed hot, delivered in the same slot every day.'],
];

const gallery = [
  ['photo-1466637574441-749b8f19452f', 220],
  ['photo-1526367790999-0150786686a2', 220],
  ['photo-1540420773420-3366772f4999', 160],
  ['photo-1414235077428-338989a2e8c0', 160],
];

export default function WhyUsPage() {
  return (
    <div className="bg-mint">
      <section className="bg-mintdeep">
        <div className="mx-auto max-w-[1440px] px-5 pt-14 md:px-12">
          <div className="text-[13px] text-faint">Home / Why Us</div>
          <h1 className="mt-3.5 max-w-[780px] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-ink md:text-[56px]">
            Healthy Food, Done Differently.
          </h1>
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-muted md:text-lg">
            Every meal is weighed, cooked and packed in our own kitchen the morning it goes out. Nothing is reheated from a warehouse.
          </p>
          <div className="mt-11 grid grid-cols-2 gap-3.5 lg:grid-cols-[2fr_1fr_1fr]">
            {[
              ['photo-1556910633-5099dc3971e8', 'Kitchen'],
              ['photo-1518843875459-f738682238a6', 'Ingredients'],
              ['photo-1577219491135-ce391730fb2c', 'Chef at work'],
            ].map(([photoId, alt]) => (
              <div key={photoId} className="relative h-[200px] overflow-hidden rounded-t-xl bg-line md:h-[300px]">
                <Image src={photo(photoId, 900)} alt={alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([t, s], i) => (
            <Reveal key={t} delay={(i % 3) * 60}>
              <div className="h-full rounded-card border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                <span className="block h-10 w-10 rounded-[10px] border border-[#CDCDCD]" />
                <div className="mt-4 text-xl font-semibold text-ink">{t}</div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <div className="grid items-center gap-14 rounded-2xl border border-mintline bg-white p-7 md:p-12 lg:grid-cols-2">
          <div>
            <div className="text-xs tracking-[0.1em] text-faint">OUR PHILOSOPHY</div>
            <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[36px]">
              Healthy food doesn&apos;t have to be boring.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We started because the only high-protein food anyone could find was bland, repetitive and sold as a punishment. So we cook the food people actually want to eat, and we put the numbers on the box.
            </p>
            <div className="mt-7 flex flex-col gap-4">
              {process.map(([t, s], i) => (
                <div key={t} className="flex items-start gap-3.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-[13px] font-semibold text-white">{i + 1}</span>
                  <div>
                    <div className="text-base font-semibold text-ink">{t}</div>
                    <div className="mt-0.5 text-sm leading-relaxed text-muted">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {gallery.map(([photoId, h]) => (
              <div key={photoId} className="relative overflow-hidden rounded-xl bg-line" style={{ height: h }}>
                <Image src={photo(photoId, 600)} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <h2 className="max-w-[760px] text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[36px]">
          Loved By People Who Take Their Health Seriously.
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="h-full rounded-card border border-line bg-white p-6">
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
