import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: [],
            wrap: false
        }
    },
    site: 'https://the-great-debate-blog.netlify.app/',
    integrations: [
        sitemap(),
        purgecss({
            safelist: {
                greedy: [/^dropdown/, /^carousel/]
            }
        })
    ]
});
