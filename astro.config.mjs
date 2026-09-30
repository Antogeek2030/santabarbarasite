import { defineConfig } from 'astro/config';

// Fully static output. Cloudflare Workers serves ./dist through Static Assets.
export default defineConfig({
  site: 'https://leakdetectionsantabarbaraca.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
