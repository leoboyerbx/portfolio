export default defineNuxtConfig({
    compatibilityDate: '2025-12-14',
    nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
        },
        prerender: {
            // Pre-render the homepage
            routes: ['/'],
            // Then crawl all the links on the page
            crawlLinks: true,
        },
    },
    // routeRules: {
    //     '/': { prerender: false },
    // },
    sourcemap: {
        server: true,
        client: true,
    },
    devtools: { enabled: true },
    htmlValidator: {
        usePrettier: true,
    },
    modules: [
        '@nuxtjs/seo',
        'nuxt-content-git',
        '@nuxt/content',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@nuxthub/core',
        '@nuxtjs/plausible',
        '@layoutaid/nuxt',
        '@nuxt/icon',
        '@nuxtjs/html-validator',
    ],
    css: ['@unocss/reset/tailwind.css', '~/assets/global.scss'],
    unocss: {
        content: {
            pipeline: {
                include: [
                    /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                    'content/**/*.{yml,md}',
                ],
            },
        },
    },
    plausible: {
        domain: 'leoboyer.dev',
        apiHost: 'https://stats.pnk.studio',
        proxy: true,
    },
    hub: {
        db: 'sqlite',
    },
    content: {
        preview: {
            api: 'https://api.nuxt.studio',
            dev: true,
        },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
        {
            path: '~/components/content',
            pathPrefix: false,
            global: true,
        },
    ],
    image: {
        // provider: 'cloudflare',
        // cloudflare: {
        //     baseURL: 'https://leoboyer.dev',
        // },
        // domains: ['api.leoboyer.dev'],
    },
    icon: {
        serverBundle: {
            collections: ['uil'],
        },
    },
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'fr',
                language: 'fr-FR',
                name: 'Français',
                file: 'fr.json',
            },
        ],
        baseUrl: 'https://www.leoboyer.dev',
        detectBrowserLanguage: false,
    },
    ogImage: {
        fonts: [
            {
                name: 'Satoshi',
                weight: 900,
                path: '/og/Satoshi-Black.otf',
            },
            {
                name: 'Fragen',
                weight: 200,
                path: '/og/Fragen-ExtraLight.otf',
            },
            {
                name: 'Fragen',
                weight: 400,
                path: '/og/Fragen-Regular.otf',
            },
        ],
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        },
        // pageTransition: { name: 'page', mode: 'out-in' },
    },
    linkChecker: {
        enabled: false,
    },

})
