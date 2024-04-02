export default defineI18nConfig(() => ({
  legacy: false,
  inheritLocale: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
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
      nav: {
        hero: 'Home',
        projects: 'Projects',
        openSource: 'Open Source',
        contact: 'Contact',
      },
      intro: `I like to try all sorts of things with code and tech, with a strong focus on crafting user-centric realtime experiences.`,
      wip: `This portfolio website is currently being redesigned. It will be back soon !`,
      contact: {
        email: 'Send me an email !',
        phone: 'Call me !',
      },
      close: 'Close',
      error: {
        '404': {
          beforeEffect: 'I have looked ',
          effect: 'everywhere',
          afterEffect: ', but I could not find what you were looking for.',
        },
        generic: {
          beforeEffect: 'Something went wrong, but ',
          effect: 'no panic',
          afterEffect: ", let's find a solution.",
        },
        back: 'Go back to safety',
      },
    },
    fr: {
      nav: {
        hero: 'Accueil',
        projects: 'Projets',
        openSource: 'Open Source',
        contact: 'Contact',
      },
      wip: `Ce portfolio est en cours de refonte. Il sera bientôt de retour !`,
      contact: {
        email: 'Envoyez-moi un email !',
        phone: 'Call me !',
      },
      close: 'Fermer',
      error: {
        '404': {
          beforeEffect: "J'ai cherché ",
          effect: 'partouuut',
          afterEffect: ", mais je n'ai rien trouvé...",
        },
        generic: {
          beforeEffect: "Quelque chose a mal s'est passé, mais ",
          effect: 'pas de panique',
          afterEffect: ', on va trouver une solution.',
        },
        back: 'Revenir en lieu sûr',
      },
    },
  },
}))
