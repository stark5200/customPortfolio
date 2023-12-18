import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact(), tailwind()],
  output: 'server',
  adapter: vercel(),
});