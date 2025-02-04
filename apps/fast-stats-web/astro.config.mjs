// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~illustration-maker-web': resolve(
          __dirname,
          '../illustration-maker-web/src'
        ),
      },
    },
  },
})
