// https://nuxt.com/docs/api/configuration/nuxt-config
import { devtoolsOutline, devtoolsColumns } from 'vite-plugin-dev-guides'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    ssr: true,
    modules: [
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/strapi',
        '@nuxtjs/seo',
        'v-plausible',
        '@nuxthub/core',
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
        lazy: true,
        locales: [
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                file: 'en.ts',
            },
            {
                code: 'fr',
                language: 'fr-FR',
                name: 'Français',
                file: 'fr.ts',
            },
        ],
        baseUrl: 'https://www.leoboyer.dev',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            fallbackLocale: 'en',
        },
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
            routes: [
                '/api/resume',
                '/api/resume.pdf',
                '/api/fr/resume.pdf',
                '/api/en/resume.pdf',
            ],
            autoSubfolderIndex: false,
        },
    },
})