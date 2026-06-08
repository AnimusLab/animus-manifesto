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
    '/anchor',
    '/anchor/manifesto',
    '/anchor/whitepaper',
    '/anchor/architecture',
    '/anchor/roadmap',
    '/anchor/research',
    '/cases',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic papers
  const papers = getContent('papers');
  const paperRoutes = papers.map((paper) => ({
    url: `${baseUrl}/papers/${paper.slug}`,
    lastModified: new Date(paper.updated || paper.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic research notes
  const notes = getContent('notes');
  const noteRoutes = notes.map((note) => ({
    url: `${baseUrl}/research/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic case studies
  const cases = getContent('cases');
  const caseRoutes = cases.map((item) => ({
    url: `${baseUrl}/cases/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...paperRoutes, ...noteRoutes, ...caseRoutes];
}
