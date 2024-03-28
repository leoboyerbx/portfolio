export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',

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
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
  },
  messages: {
    en: {
      hi: "Hi, I'm",
      intro: `I like to try all sorts of things with code and tech, with a strong focus on crafting user-centric realtime experiences.`,
      wip: `This portfolio website is currently being redesigned. It will be back soon !`,
      contact: {
        email: 'Send me an email !',
        phone: 'Call me !',
      },
    },
    fr: {
      hi: 'Bonjour, je suis',
      wip: `Ce portfolio est en cours de refonte. Il sera bientôt de retour !`,
      contact: {
        email: 'Envoyez-moi un email !',
      },
    },
  },
}))
