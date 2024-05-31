export default defineI18nLocale(() => ({
  nav: {
    backToHome: "Retour à l'accueil",
    openMenu: 'Ouvrir ou fermer le menu',
    hero: 'Accueil',
    projects: 'Projets',
    openSource: 'Open Source',
    contact: 'Contact',
  },
  wip: `Ce portfolio est en cours de refonte. Il sera bientôt de retour !`,
  contact: {
    email: 'Envoyez-moi un email !',
    phone: 'Appelez-moi !',
  },
  project: {
    description: 'Venez découvrir le projet {nameAndBaseline}',
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
  nuxtSiteConfig: {
    name: 'Léo Boyer - Développeur créatif',
    description:
      'Je suis Léo, développeur créatif et curieux. Je travaille actuellement à Wanaka, Annecy.',
  },
}))
