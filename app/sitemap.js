import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/meal-plans/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/why-us/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
