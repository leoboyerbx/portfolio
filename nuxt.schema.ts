import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
    fr: group({
        title: 'French',
        description: 'French config',
        icon: 'i-material-symbols-language-french-rounded',
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
        },
    }),
})
