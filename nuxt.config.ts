// https://nuxt.com/docs/api/configuration/nuxt-config
import { devtoolsOutline, devtoolsColumns } from 'vite-plugin-dev-guides'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-directus'],
  css: ['@unocss/reset/tailwind.css', 'assets/global.scss'],
  vite: {
    plugins: [devtoolsOutline(), devtoolsColumns()],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  routeRules: {
    '/api/**': {
      proxy: 'https://admin.leoboyer.dev/**',
    },
  },
  $development: {
    directus: {
      url: 'http://localhost:3000/api',
      devtools: true,
    },
  },
  $production: {
    directus: {
      url: 'https://www.leoboyer.dev/api',
      devtools: true,
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: '/api',
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
      },
    ],
    baseUrl: 'https://www.leoboyer.dev',
    detectBrowserLanguage: false,
    // {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root', // recommended
    // },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
})
