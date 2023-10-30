# Astro Node Express Example

This repo shows an example of how to integrate Astro with an existing Express website.

**This will help you when you have an existing Express Website and whant to migrate it to Astro. Astro does not need Express**.

Reference: https://docs.astro.build/en/guides/integrations-guide/node/

Follow the commits to see the progress.

## 1 Create express application

```sh
npx express-generator astro-node-express
cd astro-node-express
npm install
npm install nodemon -D
```

## 2 Add Astro

```sh
npm install @astrojs/node
```

Create astro.config.mjs with:

```js
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),
})
```

```sh
# this generates /dist folder
npx astro build
```

Add express entrypoints.

## Todo

- [X] Add Astro initial pages/styles/layout
- [X] Add Astro island examples
- [ ] Add Astro hot reload on changes
