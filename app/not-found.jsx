import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-start px-5 py-24 md:px-12">
      <div className="text-xs tracking-[0.1em] text-faint">404</div>
      <h1 className="mt-3 text-[36px] font-bold tracking-[-0.03em] text-charcoal">That page is not on the menu.</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">
        The link may be old or the page has moved. Head back to meal plans or get in touch.
      </p>
      <Link href="/meal-plans" className="mt-6 inline-flex h-12 items-center rounded-full bg-forest hover:bg-forestdeep px-6 text-[15px] font-medium text-ivory no-underline hover:text-ivory">
        View Meal Plans
      </Link>
    </div>
  );
}
