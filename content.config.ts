import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const locale = () => z.enum(['en', 'fr'])

export default defineContentConfig({
    collections: {
        homepage: defineCollection({
            type: 'page',
            source: 'homepage/*.md',
            schema: z.object({
                locale: locale(),
                title: z.string(),
            }),
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects/**/*.md',
            schema: z.object({
                locale: locale(),
                status: z.enum(['draft', 'published']),
                createdAt: z.date(),
                updatedAt: z.date(),
                name: z.string(),
                slug: z.string(),
                baseline: z.string(),
                links: z.array(z.object({
                    title: z.string(),
                    url: z.string(),
                    newTab: z.boolean(),
                })),
                thumbnail: z.string().editor({ input: 'media' }),
                images: z.array(z.string()).editor({ input: 'media' }),
            }),
        }),
        global: defineCollection({
            type: 'data',
            source: 'global/*.yml',
            schema: z.object({
                locale: locale(),
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
        }),
    },
})
