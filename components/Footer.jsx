import Image from 'next/image';
import Link from 'next/link';
import { contact } from '@/lib/data';
import { FacebookIcon, InstagramIcon, XIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivorydeep">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="ProFit Meals — home" className="inline-block no-underline">
              <Image src="/logo.png" alt="ProFit Meals" width={480} height={252} className="h-14 w-auto" />
            </Link>
            <p className="mt-3.5 max-w-[280px] text-sm leading-relaxed text-muted">
              High-protein meals cooked fresh every morning and delivered across the city.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-charcoal/20 text-muted transition-colors hover:border-forest hover:text-forest"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-charcoal/20 text-muted transition-colors hover:border-forest hover:text-forest"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-charcoal/20 text-muted transition-colors hover:border-forest hover:text-forest"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-charcoal">Explore</div>
            <Link className="text-sm text-muted no-underline hover:text-charcoal" href="/meal-plans">Meal Plans</Link>
            <Link className="text-sm text-muted no-underline hover:text-charcoal" href="/why-us">Why Us</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-charcoal">Company</div>
            <Link className="text-sm text-muted no-underline hover:text-charcoal" href="/about">About</Link>
            <Link className="text-sm text-muted no-underline hover:text-charcoal" href="/contact#faq">FAQ</Link>
            <Link className="text-sm text-muted no-underline hover:text-charcoal" href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-charcoal">Reach us</div>
            <span className="text-sm text-muted">{contact.phone}</span>
            <span className="text-sm text-muted">{contact.email}</span>
            <span className="text-sm text-muted">{contact.serviceArea}</span>
          </div>
        </div>
        <div className="mt-9 border-t border-line pt-5 text-xs text-faint">
          © {new Date().getFullYear()} ProFit Meals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
