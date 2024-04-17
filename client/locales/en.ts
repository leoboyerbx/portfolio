export default defineI18nLocale(() => ({
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
  project: {
    description: 'Venez découvrir le projet {nameAndBaseline}',
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
  nuxtSiteConfig: {
    name: 'Léo Boyer - Creative developer',
    description:
      "I'm Léo, a creative and curious developer. Currently working at Wanaka, Annecy FR.",
  },
}))
