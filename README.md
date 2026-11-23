# ProFit Meals — Next.js site

The ProFit Meals cloud-kitchen site.
Next.js 14 (App Router, static export) + Tailwind CSS. No database, no checkout — all content is local data.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3001

## Pages

| Route | Screen |
| --- | --- |
| `/` | Homepage — hero, ticker, goals, plans, brand band, testimonials, closing CTA |
| `/meal-plans` | Three plans, how it works, comparison table |
| `/why-us` | Six benefits, philosophy, testimonials |
| `/about` | Story, approach, four-step preparation, ingredients and kitchen |
| `/contact` | Channel cards, enquiry form, delivery areas, FAQ accordion |

## Brand

Follows the *ProFit Meals Colour & Typography Guide*. Tokens live in `tailwind.config.js`.
Do not add brand colours or substitute fonts without approval.

**Colour — 80 / 5 / 15**

| Token | Hex | Role |
| --- | --- | --- |
| `ivory` | #F4F0E6 | 80% — page background |
| `forest` | #183A32 | 5% — accent: primary buttons, active nav, badges, one closing CTA band per page |
| `charcoal` | #242724 | 15% — text, ticker |
| `ivorydeep` | #EDE7DA | Alternating sections, page heroes, footer |
| `surface` | #FBF9F4 | Cards on ivory |
| `forestdeep` | #10291F | Hover on forest buttons |
| `foresttint` | #DDE5DF | Tags, chips |
| `muted` / `faint` | #5C5F5B / #636560 | Secondary / caption text (both ≥ 4.5:1 on every surface) |
| `line` | #E0DACB | Borders and hairlines |
| `warn` / `warnbg` | #8A5A00 / #FBEBD0 | Form validation only — not a brand colour |

**Type — Plus Jakarta Sans** (loaded via `next/font` as `--font-jakarta`, Tailwind `font-sans`)

| Use | Weight | Class |
| --- | --- | --- |
| Main headings (h1, h2) | 700 | `font-bold` |
| Subheadings, card titles | 600 | `font-semibold` |
| Body | 400 | default |
| Prices, numbers, stats | 800 | `font-extrabold tabular-nums` |
| Labels, tags, buttons, nav | 500 | `font-medium` |

**Shape** — buttons and badges are pills (`rounded-full`) to echo the logo; inputs use `rounded-xl`.

**Logo** — `public/logo.png` (480×252, transparent). Only place it on light surfaces (ivory, ivorydeep, surface):
its green block disappears on forest or charcoal. Favicon and Apple touch icon are `app/icon.png` and `app/apple-icon.png`.

## SEO

Everything lives in `lib/seo.js`: site URL, keywords, the `pageMetadata()` helper each page uses, and JSON-LD
(Restaurant + WebSite on every page, FAQPage on `/contact/`). `app/sitemap.js` and `app/robots.js` generate
`/sitemap.xml` and `/robots.txt` at build time.

Optional build-time env vars (put them in `.env.local` or your host's settings):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Defaults to `contact.websiteHref` (https://www.profitmeals.in) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`). The tag is only added when set |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML-tag verification code |

## Demo images — replace these

Every image is a placeholder from `picsum.photos`, produced by the `img(seed, w, h)` helper in `lib/data.js`.
They are random stock photos, not food. To use real photography:

1. Drop your files in `public/meals/`.
2. Add an `image` field to each item in `lib/data.js` and read that instead of calling `photo()` / `img()`.
3. Remove `picsum.photos` from `remotePatterns` in `next.config.mjs` once nothing points at it.

## What is deliberately not here

No cart, no checkout, no payment. Every terminal action routes to WhatsApp, phone or the contact form —
matching the wireframes. The contact form is client-side only and does not send anything.
