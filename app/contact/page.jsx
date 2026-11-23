import Image from 'next/image';
import Accordion from '@/components/Accordion';
import ContactForm from '@/components/ContactForm';
import { contact, deliveryAreas, faqs, photo } from '@/lib/data';
import { InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/SocialIcons';
import { faqJsonLd, jsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Order High Protein Meals in Indore',
  description:
    'Order high protein veg or non-veg meals in Indore on WhatsApp or by phone at +91 92430 03566. Delivering to Vijay Nagar, Palasia, Scheme 78, Scheme 140, Bengali Square and more.',
  path: '/contact/',
  keywords: ['order healthy meals Indore', 'meal delivery Vijay Nagar', 'meal delivery Palasia', 'protein meals near me Indore'],
});

const channels = [
  { name: 'WhatsApp', sub: 'Fastest reply, 9am – 9pm', value: contact.phone, cta: 'Message Us', href: contact.whatsappHref, primary: true, Icon: WhatsAppIcon },
  { name: 'Phone', sub: 'For plans and bulk orders', value: contact.phone, cta: 'Call Us', href: contact.phoneHref, Icon: PhoneIcon },
  { name: 'Instagram', sub: 'Daily menu and kitchen updates', value: contact.instagramHandle, cta: 'Follow', href: contact.instagramHref, Icon: InstagramIcon },
  { name: 'Email', sub: 'Corporate and partnerships', value: contact.email, cta: 'Write to Us', href: contact.emailHref, Icon: MailIcon },
];

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd)} />
      <section className="border-b border-line bg-ivorydeep">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
          <div className="text-[13px] text-faint">Home / Contact</div>
          <h1 className="mt-3 text-[38px] font-bold leading-[1.02] tracking-[-0.035em] text-charcoal md:text-[56px]">
            Take an Enquiry
          </h1>
          <p className="mt-3.5 max-w-[560px] text-[17px] leading-relaxed text-muted md:text-lg">
            Tell us what you need — meal type, variety, and slot — and we will get back to you on WhatsApp within the hour.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block rounded-card p-6 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(36,39,36,0.10)] ${c.primary ? 'border border-forest bg-forest' : 'border border-line bg-surface'}`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-[9px] border ${c.primary ? 'border-ivory/50 text-ivory' : 'border-charcoal/20 text-charcoal'}`}>
                  <c.Icon className="h-[18px] w-[18px]" />
                </span>
                <div className={`mt-4 text-lg font-semibold ${c.primary ? 'text-ivory' : 'text-charcoal'}`}>{c.name}</div>
                <div className={`mt-1 text-sm ${c.primary ? 'text-ivory/75' : 'text-muted'}`}>{c.sub}</div>
                <div className={`mt-3.5 text-[17px] font-semibold ${c.primary ? 'text-ivory' : 'text-charcoal'}`}>{c.value}</div>
                <span className={`mt-4 flex h-11 items-center justify-center rounded-full text-[15px] font-medium ${c.primary ? 'bg-ivory text-forest' : 'border border-charcoal/20 text-charcoal'}`}>
                  {c.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-14 md:px-12 lg:grid-cols-2">
        <div>
          <h2 className="text-[26px] font-bold tracking-[-0.02em] text-charcoal md:text-[32px]">Submit your enquiry</h2>
          <p className="mt-2 text-[15px] text-muted">Fill in the details below. We reply on WhatsApp within the hour.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="text-[26px] font-bold tracking-[-0.02em] text-charcoal md:text-[32px]">Where we deliver</h2>
          <p className="mt-2 text-[15px] text-muted">Delivered straight to your doorstep across Indore.</p>
          <div className="relative mt-5 h-[200px] overflow-hidden rounded-card bg-line">
            <Image src={photo('photo-1526367790999-0150786686a2', 900)} alt="Delivery in progress" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {deliveryAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-foresttint px-3.5 py-1.5 text-[13px] font-medium text-forest"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                {area}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-muted">Don&apos;t see your area? WhatsApp us — we&apos;re expanding.</p>
          <div className="mt-5 flex gap-6 border-t border-line pt-4">
            <div>
              <div className="text-[13px] font-semibold text-charcoal">Kitchen hours</div>
              <div className="mt-1 text-sm text-muted">Mon – Sat, 6am – 9pm</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-charcoal">Order cut-off</div>
              <div className="mt-1 text-sm text-muted">9pm for next-day delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-ivorydeep">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-12">
          <h2 className="text-[26px] font-bold tracking-[-0.02em] text-charcoal md:text-[32px]">Frequently Asked Questions</h2>
          <div className="mt-5 grid gap-x-10 lg:grid-cols-2">
            <Accordion items={faqs.slice(0, 4)} defaultOpen={0} />
            <Accordion items={faqs.slice(4)} defaultOpen={-1} />
          </div>
        </div>
      </section>
    </div>
  );
}
