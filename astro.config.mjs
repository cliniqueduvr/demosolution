import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.cliniqueduvr.ca/',
  integrations: [],
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
