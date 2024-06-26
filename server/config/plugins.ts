export default ({ env }) => ({
    transformer: {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
        }
    },
    translate: {
        enabled: !!env('DEEPL_API_KEY'),
        config: {
            // Choose one of the available providers
            provider: 'deepl',
            // Pass credentials and other options to the provider
            providerOptions: {
                // your API key - required and wil cause errors if not provided
                apiKey: env('DEEPL_API_KEY'),
                // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
                localeMap: {
                    // use uppercase here!
                    EN: 'EN-US',
                    // FR: 'FR-FR'
                },
                apiOptions: {
                },
            },
            // other options ...
        },
    },
    'preview-button': {
        config: {
            contentTypes: [
                {
                    uid: 'api::homepage.homepage',
                    published: {
                        url: 'https://preview.portfolio-leoboyer.pages.dev/',
                    },
                },
                {
                    uid: 'api::project.project',
                    published: {
                        url: 'https://preview.portfolio-leoboyer.pages.dev/projects/{slug}',
                    },
                },
            ],
        },
    },
    'deploy-button': {
        enabled: !!env('STRAPI_ADMIN_DEPLOY_WEBHOOK'),
        resolve: './src/plugins/deploy-button'
    },
});
