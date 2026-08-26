# ProfitMeals — Next.js demo

A demo build of the ProfitMeals cloud-kitchen site, matching the wireframes.
Next.js 14 (App Router) + Tailwind CSS. No database, no checkout — all content is local data.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

| Route | Screen |
| --- | --- |
| `/` | Homepage — forest hero, marquee ticker, filterable menu, goals, plans, brand band, testimonials |
| `/meals` | Menu with live category filtering (accepts `?goal=Muscle+Gain`) |
| `/meals/[slug]` | Meal detail — gallery, macros, ingredients, allergens, similar meals |
| `/meal-plans` | Three plans, how it works, comparison table |
| `/why-us` | Six benefits, philosophy, testimonials |
| `/about` | Story, approach, four-step preparation, ingredients and kitchen |
| `/contact` | Channel cards, message form, delivery zones, FAQ accordion |

## Theming

Set in `tailwind.config.js`. Each page carries its own surface so the site does not read as one long white scroll.

| Token | Hex | Used for |
| --- | --- | --- |
| `forest` | #2E632A | Homepage hero, contact hero, closing CTAs |
| `green` | #3E8438 | Primary buttons, ticker |
| `mint` | #EFF5EE | Meals, Why Us, FAQ |
| `sand` | #F4EFE7 | Meal Plans, About, brand band |
| white | #FFFFFF | Meal detail, cards |

## Demo images — replace these

Every image is a placeholder from `picsum.photos`, produced by the `img(seed, w, h)` helper in `lib/data.js`.
They are random stock photos, not food. To use real photography:

1. Drop your files in `public/meals/`.
2. Add an `image` field to each meal in `lib/data.js` and read that in `MealCard` and the detail page instead of calling `img()`.
3. Remove `picsum.photos` from `remotePatterns` in `next.config.mjs` once nothing points at it.

## What is deliberately not here

No cart, no checkout, no payment. Every terminal action routes to WhatsApp, phone or the contact form —
matching the wireframes. The contact form is client-side only and does not send anything.
