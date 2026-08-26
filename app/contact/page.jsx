import Image from 'next/image';
import Accordion from '@/components/Accordion';
import ContactForm from '@/components/ContactForm';
import { contact, faqs, img, zones } from '@/lib/data';

export const metadata = { title: 'Contact — ProfitMeals' };

const channels = [
  { name: 'WhatsApp', sub: 'Fastest reply, 9am – 9pm', value: contact.phone, cta: 'Message Us', href: contact.whatsappHref, primary: true },
  { name: 'Phone', sub: 'For plans and bulk orders', value: contact.phone, cta: 'Call Us', href: contact.phoneHref },
  { name: 'Instagram', sub: 'Daily menu and kitchen updates', value: contact.instagramHandle, cta: 'Follow', href: contact.instagramHref },
  { name: 'Email', sub: 'Corporate and partnerships', value: contact.email, cta: 'Write to Us', href: contact.emailHref },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-forest">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
          <div className="text-[13px] text-white/60">Home / Contact</div>
          <h1 className="mt-3 text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-white md:text-[56px]">
            Ready to Eat Better?
          </h1>
          <p className="mt-3.5 max-w-[560px] text-[17px] leading-relaxed text-[#C9E2C5] md:text-lg">
            Explore our meals and find something that fits your goals. Orders and plan enquiries are handled over WhatsApp or phone.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className={`block rounded-card p-6 no-underline transition-transform hover:-translate-y-1 ${c.primary ? 'border border-white/30 bg-forestdeep' : 'border border-line bg-white'}`}
              >
                <span className={`block h-9 w-9 rounded-[9px] border ${c.primary ? 'border-white/50' : 'border-[#CDCDCD]'}`} />
                <div className={`mt-4 text-lg font-semibold ${c.primary ? 'text-white' : 'text-ink'}`}>{c.name}</div>
                <div className={`mt-1 text-sm ${c.primary ? 'text-[#D9EDD7]' : 'text-muted'}`}>{c.sub}</div>
                <div className={`mt-3.5 text-[17px] font-semibold ${c.primary ? 'text-white' : 'text-ink'}`}>{c.value}</div>
                <span className={`mt-4 flex h-11 items-center justify-center rounded-[3px] text-[15px] font-medium ${c.primary ? 'bg-white text-forest' : 'border border-[#CDCDCD] text-ink'}`}>
                  {c.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-14 md:px-12 lg:grid-cols-2">
        <div>
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">Send us a message</h2>
          <p className="mt-2 text-[15px] text-muted">Four fields. We reply on WhatsApp unless you ask otherwise.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">Where we deliver</h2>
          <p className="mt-2 text-[15px] text-muted">One kitchen, three delivery zones, fixed slots.</p>
          <div className="relative mt-5 h-[240px] overflow-hidden rounded-card bg-line">
            <Image src={img('service-map', 900, 600)} alt="Service area" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="mt-4 overflow-hidden rounded-card border border-line">
            {zones.map((z, i) => (
              <div key={z.zone} className={`flex justify-between p-3.5 ${i < zones.length - 1 ? 'border-b border-line' : ''}`}>
                <span className="text-sm text-ink">{z.zone}</span>
                <span className="text-sm text-muted">{z.slots}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-6 border-t border-line pt-4">
            <div>
              <div className="text-[13px] font-semibold text-ink">Kitchen hours</div>
              <div className="mt-1 text-sm text-muted">Mon – Sat, 6am – 9pm</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-ink">Order cut-off</div>
              <div className="mt-1 text-sm text-muted">9pm for next-day delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-mintline bg-mint">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">Frequently Asked Questions</h2>
          <div className="mt-5 grid gap-x-10 lg:grid-cols-2">
            <Accordion items={faqs.slice(0, 4)} defaultOpen={0} />
            <Accordion items={faqs.slice(4)} defaultOpen={-1} />
          </div>
        </div>
      </section>
    </div>
  );
}
