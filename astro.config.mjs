import { defineConfig } from 'astro/config';
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'material-palenight',
      langs: [],
      wrap: false,
    },
  },
  site: "https://astro-bootstrap-blog.netlify.app/",
  integrations: [sitemap(), purgecss()]
});