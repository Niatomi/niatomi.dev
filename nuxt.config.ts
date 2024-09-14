// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  alias: {
    "@": resolve(__dirname, "/"),
    "@im@": resolve(__dirname, '/assets/images')
  },
  css: [
    "~/assets/styles/reset.css",
    "~/assets/styles/main.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *; @use "~/assets/styles/_layout.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@vueuse/nuxt',
  ],
  devtools: { enabled: false }
})
