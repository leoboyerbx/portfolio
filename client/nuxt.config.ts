// https://nuxt.com/docs/api/configuration/nuxt-config
import { devtoolsOutline, devtoolsColumns } from 'vite-plugin-dev-guides'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/strapi',
  ],
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
  strapi: {},
  image: {
    domains: ['api.leoboyer.dev'],
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
  imports: {
    dirs: ['types'],
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
})
