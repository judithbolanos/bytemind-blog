// @ts-check
import { defineConfig } from 'astro/config';
import {siteConfig} from './src/utils/Config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  base:siteConfig.basepath,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(),mdx()],
  site: 'https://judithbolanos.github.io/bytemind-blog/'
});