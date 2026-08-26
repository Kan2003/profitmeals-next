'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const nav = [
  { href: '/meals', label: 'Meals' },
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
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="h-7 w-7 rounded-md bg-green" />
          <span className="text-[17px] font-bold tracking-[0.04em] text-ink">PROFITMEALS</span>
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
            href="/meals"
            className="hidden h-[42px] items-center rounded-[3px] bg-green px-5 text-[15px] font-medium text-white no-underline transition-transform hover:-translate-y-0.5 hover:text-white sm:inline-flex"
          >
            Explore Meals
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
            <div className="flex items-center gap-2.5">
              <span className="h-6 w-6 rounded bg-green" />
              <span className="text-[15px] font-bold tracking-[0.04em] text-ink">PROFITMEALS</span>
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
            <Link href="/meals" onClick={() => setOpen(false)} className="flex h-[52px] items-center justify-center rounded-[3px] bg-green text-base font-medium text-white no-underline hover:text-white">
              Explore Meals
            </Link>
            <a href="https://wa.me/910000000000" className="flex h-[52px] items-center justify-center rounded-[3px] border border-[#CDCDCD] text-base font-medium text-ink no-underline hover:text-ink">
              WhatsApp Us
            </a>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
