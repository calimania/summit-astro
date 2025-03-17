// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// @TODO: needs to replace during build
export default defineConfig({
  site: 'https://summit.caliman.org',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});