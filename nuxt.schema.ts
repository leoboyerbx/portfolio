import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
    appConfig: {
        parent: group({
            title: 'UI',
            description: 'UI configuration',
            icon: 'i-ph-palette-fill',
            fields: {
                primary: field({
                    type: 'string',
                    title: 'Primary',
                    description: 'Primary color of your UI.',
                    icon: 'i-ph-palette',
                    default: 'sky',
                    required: ['sky', 'mint', 'rose', 'amber'],
                }),
            },
        }),
    },
})

// export default defineNuxtSchema({
//     appConfig: {
//         fr: group({
//             title: 'French',
//             description: 'French config',
//             icon: 'i-material-symbols-language-french-rounded',
//             fields: {
//                 resume: group({
//                     title: 'Resume',
//                     description: 'Resume config',
//                     icon: 'i-uil-file-alt',
//                     fields: {
//                         title: field({
//                             type: 'string',
//                             title: 'Title',
//                             description: 'Displayed title',
//                             icon: 'i-uil:text-fields',
//                             default: 'CV',
//                         }),
//                         file: field({
//                             type: 'media',
//                             title: 'Resume PDF file',
//                             description: 'Upload the resume file.',
//                             icon: 'i-uil-file-upload',
//                         }),
//                     },
//                 }),
//             },
//         }),
//     },
// })
