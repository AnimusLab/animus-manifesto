import { MetadataRoute } from 'next';
import { getContent } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://case.animuslab.dev';

  // Static routes for cases subdomain
  const staticRoutes = [
    '',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  // Dynamic case studies
  const cases = getContent('cases');
  const caseRoutes = cases.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseRoutes];
}
