import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
        theme: 'dracula',
    }
},
  site: 'https://paulboquant.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), mdx()]
});