import Image from 'next/image';
import Link from 'next/link';
import { contact } from '@/lib/data';
import { FacebookIcon, InstagramIcon, XIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="relative h-10 w-[92px]">
              <Image src="/logo-mark.png" alt="ProFit Meals" fill sizes="92px" className="object-contain" />
            </div>
            <p className="mt-3.5 max-w-[280px] text-sm leading-relaxed text-muted">
              High-protein meals cooked fresh every morning and delivered across the city.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#CDCDCD] text-muted transition-colors hover:border-green hover:text-green"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#CDCDCD] text-muted transition-colors hover:border-green hover:text-green"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#CDCDCD] text-muted transition-colors hover:border-green hover:text-green"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-ink">Explore</div>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/meals">Meals</Link>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/meal-plans">Meal Plans</Link>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/why-us">Why Us</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-ink">Company</div>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/about">About</Link>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/contact#faq">FAQ</Link>
            <Link className="text-sm text-muted no-underline hover:text-ink" href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13px] font-semibold text-ink">Reach us</div>
            <span className="text-sm text-muted">{contact.phone}</span>
            <span className="text-sm text-muted">{contact.email}</span>
            <span className="text-sm text-muted">{contact.serviceArea}</span>
          </div>
        </div>
        <div className="mt-9 border-t border-line pt-5 text-xs text-faint">
          © {new Date().getFullYear()} ProfitMeals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
