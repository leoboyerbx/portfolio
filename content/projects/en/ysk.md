---
title: Ysk
description: Next-generation quizzes
seo:
  title: Ysk
  description: Ysk, a next-gen tool to create IRL and online quizzes
locale: en
status: published
slug: ysk
links:
  - title: Try it out
    url: https://staging.ysk.app/login?demo
    newTab: true
thumbnail: /img/projects/ysk.min.webp
---

::project-description
---
skillsTitle: On this project
---
#skills
  :::skill
  UX Design
  :::

  :::skill
  User tests
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
  Ops & deployment
  :::

#description
Ysk is an abandoned project, due to lack of time. It originates from 2019, when I had a role in my school's students' union. We organized an event with a quiz game, and I was in charge of developing a solution that would allow players to answer in realtime using their phones.

When I tried to use this solution again, I realized it was highly inflexible and decided to start over and to create a more versatile tool that would allow not only to play, but also to create and edit quizzes with an aditor.

I teamed up with the talented designer [Marie Cologon](https://marie.cologon.fr/) to create the best experience possible. While Ysk is not in development anymore, the current version of the quiz editor is at the MVP (Minimum Viable Product) stade, thus can be [tried out with a demo account](https://staging.ysk.app/login?demo) (the UI is currently only available in French).

## **Tech stack**

Building this tool as a solo developer drove me to take a monolithic approach that allows me to build the full-stack product without having to switch mental models constantly. I chose to go with [Nuxt 3](https://nuxt.com/) for the UI and use their integrated API routes for the backend. The database is a good ol' PostgreSQL with [Prisma](https://www.prisma.io/) ORM.

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
