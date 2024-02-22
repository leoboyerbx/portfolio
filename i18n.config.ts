export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      hi: "Hi, I'm",
      wip: `This portfolio website is currently being redesigned. It will be back soon !`,
      contact: {
        email: 'Send me an email !',
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
