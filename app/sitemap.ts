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
    '/news',
    '/log',
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

  // Dynamic dispatches
  const dispatches = getContent('dispatches');
  const dispatchRoutes = dispatches.map((d) => {
    const dateObj = d.date ? new Date(d.date) : new Date();
    return {
      url: `${baseUrl}/news/${d.slug}`,
      lastModified: isNaN(dateObj.getTime()) ? new Date() : dateObj,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  // Collaborate tracks
  const tracks = ['academic', 'regulatory', 'pilots', 'contributors'];
  const trackRoutes = tracks.map((track) => ({
    url: `${baseUrl}/collaborate/${track}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Canon steps
  const steps = ['ingest', 'approve', 'compile', 'optimize', 'enforce'];
  const stepRoutes = steps.map((step) => ({
    url: `${baseUrl}/canon/${step}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...paperRoutes,
    ...noteRoutes,
    ...dispatchRoutes,
    ...trackRoutes,
    ...stepRoutes,
  ];
}
