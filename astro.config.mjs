// @ts-check
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import { siteFontGlyphs } from './src/lib/font-glyphs.ts';

// One file per used weight, covering the characters the pages render.
// Shippori 600 and Zen Kaku 700 are not used.
const glyphs = await siteFontGlyphs();

// https://astro.build/config
export default defineConfig({
  site: 'https://isaackwok.com',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Shippori Mincho',
      cssVariable: '--font-shippori',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Hiragino Mincho ProN', 'Yu Mincho', 'serif'],
      options: { experimental: { glyphs: [glyphs] } },
    },
    {
      provider: fontProviders.google(),
      name: 'Zen Kaku Gothic New',
      cssVariable: '--font-zen-kaku',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Hiragino Kaku Gothic ProN', 'Yu Gothic', 'sans-serif'],
      options: { experimental: { glyphs: [glyphs] } },
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/rss.xml'),
    }),
    mdx(),
  ],
  markdown: {
    // Default shiki theme is github-dark — wrong against kami white.
    shikiConfig: { theme: 'github-light' },
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
  },
  image: {
    // Album artwork comes from Apple's CDN and is optimized into
    // self-hosted assets at build time.
    remotePatterns: [{ protocol: 'https', hostname: '**.mzstatic.com' }],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
