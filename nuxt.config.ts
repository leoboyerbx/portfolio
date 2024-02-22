// https://nuxt.com/docs/api/configuration/nuxt-config
import { devtoolsOutline } from 'vite-plugin-devtools-outline'
import { devtoolsColumns } from 'vite-plugin-devtools-columns'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n'],
  css: ['@unocss/reset/tailwind.css', 'assets/global.css'],
  vite: {
    plugins: [devtoolsOutline(), devtoolsColumns()],
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
})
