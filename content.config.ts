import type { DefinedCollection } from '@nuxt/content'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const locales = [{ name: 'en', path: '' }, { name: 'fr', path: 'fr/' }] as const

export default defineContentConfig({
    collections: locales.reduce((collections, locale) => {
        collections[`homepage_${locale.name}`] = defineCollection({
            type: 'page',
            source: {
                include: `${locale.path}*.md`,
            },
            schema: z.object({
                title: z.string(),
            }),
        })
        collections[`projects_${locale.name}`] = defineCollection({
            type: 'page',
            source: `${locale.path}projects/**.md`,
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
                ogThumbnail: z.string().editor({ input: 'media' }).optional(),
                images: z.array(z.string()).editor({ input: 'media' }),
            }),
        })
        collections[`global_${locale.name}`] = defineCollection({
            type: 'data',
            source: `${locale.path}global.yaml`,
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
        })
        return collections
    }, {} as Record<string, DefinedCollection>),
})
