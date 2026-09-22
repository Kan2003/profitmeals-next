'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { contact } from '@/lib/data';
import { WhatsAppIcon } from './SocialIcons';

const nav = [
  { href: '/meal-plans', label: 'Meal Plans' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-10 px-5 md:px-12">
        <Link href="/" className="relative h-10 w-[92px] shrink-0 no-underline">
          <Image src="/logo-mark.png" alt="ProFit Meals" fill sizes="92px" className="object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href || pathname.startsWith(n.href + '/');
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`pb-1 text-[15px] font-medium no-underline transition-colors ${
                  active
                    ? 'border-b-2 border-green text-ink'
                    : 'border-b-2 border-transparent text-muted hover:text-ink'
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-contact hidden h-[42px] items-center rounded-[3px] bg-green px-5 text-[15px] font-medium text-white no-underline transition-[transform,box-shadow,background-color] duration-200 sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </div>

      {mounted && open && createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="relative h-9 w-[82px]">
              <Image src="/logo-mark.png" alt="ProFit Meals" fill sizes="82px" className="object-contain" />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#CDCDCD] text-lg text-muted"
            >
              ✕
            </button>
          </div>
          <div className="mt-7 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-[18px] text-[22px] font-semibold text-ink no-underline hover:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-2.5">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-contact flex h-[52px] items-center justify-center rounded-[3px] bg-green text-base font-medium text-white no-underline transition-[transform,box-shadow,background-color] duration-200 hover:text-white">
              Contact Us
            </Link>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] items-center justify-center gap-2 rounded-[3px] border border-[#CDCDCD] text-base font-medium text-ink no-underline hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
