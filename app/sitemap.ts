import { MetadataRoute } from 'next';
import { getContent } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.animuslab.dev';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/programs',
    '/research',
    '/research-roadmap',
    '/constitution',
    '/institutions',
    '/canon',
    '/collaborate',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic papers
  const papers = getContent('papers');
  const paperRoutes = papers.map((paper) => {
    const rawDate = paper.updated || paper.date;
    const dateObj = rawDate ? new Date(rawDate) : new Date();
    return {
      url: `${baseUrl}/papers/${paper.slug}`,
      lastModified: isNaN(dateObj.getTime()) ? new Date() : dateObj,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // Dynamic research notes
  const notes = getContent('notes');
  const noteRoutes = notes.map((note) => {
    const dateObj = note.date ? new Date(note.date) : new Date();
    return {
      url: `${baseUrl}/research/${note.slug}`,
      lastModified: isNaN(dateObj.getTime()) ? new Date() : dateObj,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...paperRoutes, ...noteRoutes];
}
