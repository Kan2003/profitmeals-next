import { contact, deliveryAreas, faqs, plans } from '@/lib/data';

// Canonical origin. Override per environment with NEXT_PUBLIC_SITE_URL (e.g. a staging domain).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || contact.websiteHref).replace(/\/$/, '');
export const SITE_NAME = 'ProFit Meals';

export const DEFAULT_TITLE = 'ProFit Meals — High Protein Veg & Non-Veg Meals in Indore';
export const DEFAULT_DESCRIPTION =
  'High protein meals in Indore, cooked fresh every morning. Veg, non-veg and egg meal plans with 30–64g protein, macro-counted and delivered across Vijay Nagar, Palasia, Scheme 78 and more.';

// Site-wide search terms. Each page adds its own on top (see pageMetadata).
export const BASE_KEYWORDS = [
  'high protein meals',
  'high protein meals in Indore',
  'protein meal',
  'protein meal delivery Indore',
  'healthy meals Indore',
  'best meals in Indore',
  'best healthy food in Indore',
  'veg meal',
  'veg high protein meals',
  'non-veg meal',
  'non veg high protein meals',
  'egg meals',
  'meal plans Indore',
  'meal subscription Indore',
  'diet meal delivery Indore',
  'fitness meals Indore',
  'gym meals Indore',
  'healthy tiffin service Indore',
  'macro counted meals',
  'cloud kitchen Indore',
  'ProFit Meals',
];

/**
 * Per-page metadata: unique title + description + canonical URL, with Open Graph
 * and Twitter tags kept in step. `path` must match the exported URL (trailingSlash: true).
 */
export function pageMetadata({ title, description, path, keywords = [] }) {
  return {
    title,
    description,
    keywords: [...keywords, ...BASE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${SITE_NAME}`, description, url: path },
    twitter: { title: `${title} | ${SITE_NAME}`, description },
  };
}

// ---------- Structured data (JSON-LD) ----------

const [streetAddress] = contact.address.split(/,\s*Indore$/);

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: contact.phoneHref.replace('tel:', ''),
  email: contact.email,
  priceRange: '₹₹',
  servesCuisine: ['Indian', 'Healthy', 'High Protein', 'Vegetarian', 'Non-Vegetarian'],
  address: {
    '@type': 'PostalAddress',
    streetAddress,
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Indore' },
    ...deliveryAreas.map((name) => ({ '@type': 'Place', name: `${name}, Indore` })),
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '06:00',
      closes: '21:00',
    },
  ],
  sameAs: [contact.instagramHref, contact.facebookHref, contact.twitterHref],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'High Protein Meal Plans',
    itemListElement: plans.map((p) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${p.name} High Protein Meal Plan`, description: p.blurb },
      price: p.pricing.box26 || p.pricing.box6 || p.trial,
      priceCurrency: 'INR',
      url: `${SITE_URL}/meal-plans/`,
    })),
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#business` },
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/** Serialise JSON-LD safely for an inline <script> tag. */
export const jsonLd = (data) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });
