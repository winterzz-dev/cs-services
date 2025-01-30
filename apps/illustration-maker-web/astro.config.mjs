// @ts-check
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '~illustration-maker-server': resolve(
          __dirname,
          '../illustration-maker-server/src'
        ),
      },
    },
  },
})
