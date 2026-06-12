import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://www.animuslab.dev/sitemap.xml',
      'https://anchor.animuslab.dev/sitemap.xml',
      'https://cases.animuslab.dev/sitemap.xml',
    ],
  };
}
