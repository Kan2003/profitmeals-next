import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-start px-5 py-24 md:px-12">
      <div className="text-xs tracking-[0.1em] text-faint">404</div>
      <h1 className="mt-3 text-[36px] font-semibold tracking-[-0.03em] text-ink">That page is not on the menu.</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">
        The link may be old, or the meal may have rotated off. Head back to the full menu.
      </p>
      <Link href="/meals" className="mt-6 inline-flex h-12 items-center rounded-[3px] bg-green px-6 text-[15px] font-medium text-white no-underline hover:text-white">
        Browse Meals
      </Link>
    </div>
  );
}
