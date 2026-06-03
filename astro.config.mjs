// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cobach-ss.github.io',
  base: '/Proyecto-gta-6',
  vite: {
    plugins: [tailwindcss()]
  }
});