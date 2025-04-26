import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
    appConfig: {
        en: group({
            title: 'English',
            icon: 'i-emojione-v1:flag-for-united-kingdom',
            fields: {
                resume: group({
                    title: 'Resume',
                    description: 'Resume config',
                    icon: 'i-uil-file-alt',
                    fields: {
                        title: field({
                            type: 'string',
                            title: 'Title',
                            description: 'Displayed title',
                            icon: 'i-uil:text-fields',
                            default: 'CV',
                        }),
                        file: field({
                            type: 'media',
                            title: 'Resume PDF file',
                            description: 'Upload the resume file.',
                            icon: 'i-uil-file-upload',
                        }),
                    },
                }),
                contacts: field({
                    type: 'array',
                    title: 'Contacts',
                    description: 'Contact links',
                    icon: 'i-uil-link',
                    default: [],
                    fields: {
                        icon: field({
                            type: 'icon',
                            title: 'Contact Icon',
                            description: 'Icon for the contact link',
                            icon: 'i-uil:image',
                        }),
                        title: field({
                            type: 'string',
                            title: 'Contact Title',
                            description: 'Title for the contact link',
                            icon: 'i-uil:text-fields',
                        }),
                    },
                }),
            },
        }),
    },
})
