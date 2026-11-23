'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
  const menuRef = useRef(null);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Mobile menu keyboard support: Escape closes it, Tab/Shift+Tab stay inside it,
  // and focus goes back to the menu button when it closes.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || !menuRef.current.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !menuRef.current.contains(document.activeElement))) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    const opener = openButtonRef.current;
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      opener?.focus();
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-10 px-5 md:px-12">
        <Link href="/" aria-label="ProFit Meals — home" className="shrink-0 no-underline transition-opacity hover:opacity-90">
          <Image src="/logo.png" alt="ProFit Meals" width={480} height={252} className="h-11 w-auto" priority />
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
                    ? 'border-b-2 border-forest text-charcoal'
                    : 'border-b-2 border-transparent text-muted hover:text-charcoal'
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
            className="btn-contact hidden h-[42px] items-center rounded-full bg-forest hover:bg-forestdeep px-5 text-[15px] font-medium text-ivory no-underline transition-[transform,box-shadow,background-color] duration-200 sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            ref={openButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-charcoal" />
            <span className="h-0.5 w-5 bg-charcoal" />
            <span className="h-0.5 w-5 bg-charcoal" />
          </button>
        </div>
      </div>

      {mounted && open && createPortal(
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-ivory p-5 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="ProFit Meals" width={480} height={252} className="h-10 w-auto" />
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-charcoal/20 text-lg text-muted"
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
                className="border-b border-line py-[18px] text-[22px] font-semibold text-charcoal no-underline hover:text-charcoal"
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-2.5">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-contact flex h-[52px] items-center justify-center rounded-full bg-forest hover:bg-forestdeep text-base font-medium text-ivory no-underline transition-[transform,box-shadow,background-color] duration-200 hover:text-ivory">
              Contact Us
            </Link>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] items-center justify-center gap-2 rounded-full border border-charcoal/20 text-base font-medium text-charcoal no-underline hover:text-charcoal"
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
