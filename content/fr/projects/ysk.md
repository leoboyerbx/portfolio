---
title: Ysk
description: Outil de quiz
seo:
  title: Ysk
  description: Ysk, un outil pour créer des quizzes en ligne et en présentiel
locale: fr
status: published
slug: ysk
links:
  - title: Essayer
    url: https://staging.ysk.app/login?demo
    newTab: true
  - title: Source
    url: https://github.com/ysk-app/ysk
    newTab: true
thumbnail: /img/projects/ysk.min.webp
ogThumbnail: /img/projects/ysk_og.jpg
---

::project-description
---
skillsTitle: On this project
---
#skills
  :::skill
  Conception UX
  :::

  :::skill
  Tests utilisateur
  :::

  :::skill-separator
  :::

  :::skill
  Front-end
  :::

  :::skill
  Back-end
  :::

  :::skill
  Ops & déploiement
  :::

#description
Ysk est un projet abandonné, pour cause de manque de temps. Il trouve son origine en 2019, lorsque j'étais au BDE de mon IUT. Nous avons organisé un événement avec un jeu de quiz, et j'étais chargé de développer une solution permettant aux joueurs de répondre en temps réel à l'aide de leur téléphone.

Lorsque j'ai essayé d'utiliser à nouveau cette solution quelques mois plus tard, j'ai réalisé qu'elle était très peu flexible et j'ai décidé de recommencer et de créer un outil plus polyvalent qui permettrait non seulement de jouer, mais aussi de créer et d'éditer des quiz à l'aide d'un éditeur.

J'ai fait équipe avec la talentueuse designer [Marie Cologon](https://marie.cologon.fr/) pour créer la meilleure expérience possible. Ysk est encore en développement, mais la version actuelle de l'éditeur de quiz est au stade MVP (Minimum Viable Product), et peut donc être [essayée avec un compte de démonstration](https://staging.ysk.app/login?demo).

## **Stack technique**

Créer cet outil en tant que développeur solo m'a poussé à adopter une approche monolithique qui me permet de construire le produit complet sans avoir à changer constamment de modèle mental. J'ai choisi d'utiliser **Nuxt** 3 pour l'interface utilisateur et d'utiliser leurs routes API intégrées pour le backend. La base de données utilise PostgreSQL avec **Prisma**.
::

::project-images
  :::project-image{alt="Ysk pack shot" src="/img/projects/Ysk_1.min.png"}
  :::

  :::project-image{alt="Ysk mobile mockup" src="/img/projects/Ysk_2.min.webp"}
  :::

  :::project-image{alt="Ysk mobile mockup 2" src="/img/projects/Ysk_3.min.webp"}
  :::

  :::project-image{alt="Ysk mockup" src="/img/projects/Ysk_4.min.webp"}
  :::
::
