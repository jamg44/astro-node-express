import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),
  integrations: [
    solidJs({
      include: ['**/solid/*'],
    }),
    svelte({
      include: ['**/svelte/*'],
      prebundleSvelteLibraries: false,
      configFile: 'svelte.config.mjs'
    })
  ]
});