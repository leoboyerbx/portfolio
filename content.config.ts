import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const baseCollections = {
    homepage: {
        type: 'page',
        source: 'homepage.md',
        schema: z.object({
            title: z.string(),
        }),
    },
    projects: {
        type: 'page',
        source: 'projects/**.md',
        schema: z.object({
            status: z.enum(['draft', 'published']),
            createdAt: z.date(),
            updatedAt: z.date(),
            slug: z.string(),
            links: z.array(z.object({
                title: z.string(),
                url: z.string(),
                newTab: z.boolean(),
            })),
            thumbnail: z.string().editor({ input: 'media' }),
            images: z.array(z.string()).editor({ input: 'media' }),
        }),
    },
    global: {
        type: 'data',
        source: 'global.yml',
        schema: z.object({
            resume: z.object({
                title: z.string(),
                file: z.string(),
            }),
            contacts: z.array(z.object({
                icon: z.string().editor({ input: 'icon' }),
                title: z.string(),
                url: z.string(),
                extendedOnly: z.boolean().optional(),
            })),
        }),
    },
} as const satisfies Record<string, Parameters<typeof defineCollection>[0]>

const locales = ['en', 'fr'] as const

const localizedCollections = {} as Record<string, ReturnType<typeof defineCollection>>

for (const [name, config] of Object.entries(baseCollections)) {
    for (const locale of locales) {
        const baseConfig = config as Parameters<typeof defineCollection>[0]
        const localizedName = `${name}_${locale}`
        localizedCollections[localizedName] = defineCollection({
            ...baseConfig,
            source: `${locale}/${config.source}`,
        })
    }
}

export default defineContentConfig({
    collections: localizedCollections,
})
