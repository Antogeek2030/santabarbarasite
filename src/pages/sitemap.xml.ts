import type { APIRoute } from 'astro';
import { SITE, SERVICES, POSTS } from '../data/site';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls: { path: string; priority: string; lastmod?: string }[] = [
    { path: '/', priority: '1.0' },
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}/`, priority: '0.9' })),
    { path: '/service-areas/', priority: '0.8' },
    { path: '/blog/', priority: '0.7' },
    ...POSTS.map((p) => ({ path: `/blog/${p.slug}/`, priority: '0.6', lastmod: p.date })),
    { path: '/contact/', priority: '0.8' },
  ];
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${SITE.url}${u.path}</loc>\n    <lastmod>${u.lastmod ?? today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
