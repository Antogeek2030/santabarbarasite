# Leak Detection Santa Barbara CA

Static Astro site for https://leakdetectionsantabarbaraca.com, deployed on Cloudflare Workers (Static Assets).

## Pages
- `/` Home
- `/services/<slug>/` 5 service pages (water, slab, emergency, pool & irrigation, inspection)
- `/service-areas/`
- `/blog/` and 3 posts
- `/contact/`
- `/sitemap.xml` (generated at build) and `/robots.txt`
- `/404`

Business address: 135 E Haley St, Santa Barbara, CA 93101, with an embedded Google map on Home, Service Areas, and Contact.

## Edit content
Everything lives in `src/data/site.ts`: phone, email, hours, coordinates, services, areas, blog posts.
**Replace the placeholder phone `(805) 555-0142` and email before launch.**

## Commands
| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Build to `./dist` |
| `npm run deploy` | Build and deploy with Wrangler |

## Cloudflare settings
Workers Builds: build command `npm run build`, deploy command `npx wrangler deploy`.
`wrangler.json` serves `./dist` as static assets and uses `404.html` for missing pages.
Add `leakdetectionsantabarbaraca.com` under the Worker's Settings > Domains & Routes.
