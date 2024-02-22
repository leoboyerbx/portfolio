// https://nuxt.com/docs/api/configuration/nuxt-config
import { devtoolsOutline } from 'vite-plugin-devtools-outline'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css', 'assets/global.css'],
  vite: {
    plugins: [devtoolsOutline()],
  },
})
