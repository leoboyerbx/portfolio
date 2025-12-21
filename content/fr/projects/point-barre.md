---
slug: point-barre
locale: fr
status: published
title: Point Barre.
description: Projet drones, Robots & IOT
links: []
thumbnail: /img/projects/pointbarre.min.webp
ogThumbnail: /img/projects/pointbarre_og.jpg
seo:
  title: Point Barre.
  description: Point Barre, un projet drones, Robots & IOT
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
  Tests utilisateur
  :::

  :::skill
  Mise en scène
  :::

  :::skill-separator
  :::

  :::skill
  Lead tech
  :::

  :::skill
  Temps réel
  :::

  :::skill
  Internet des objets
  :::

  :::skill
  Programmation de drone volant
  :::

  :::skill-separator
  :::

  :::skill
  Production vidéo
  :::

  :::skill
  Montage
  :::

#description
Point Barre est un projet scolaire réalisé à Gobelins. Le thème était "culture" et le projet devait utiliser des drones, des robots et de l'internet des objets. Le produit final était la soutenance en elle-même.

Nous sommes partis de l'expression "*mettre de l'eau dans son vin*" pour expliquer comment les Romains fabriquaient le vin.

## **Défis techniques**

Nous avons dû synchroniser de nombreux appareils :

- un drone
- 2 robots
- 3 ESP8266 fonctionnant avec le framework Arduino

En tant que développeurs web, nous avons choisi WebSockets comme couche de transport, ce qui nous a permis d'écrire le contrôleur principal en Javascript, un langage auquel nous étions déjà habitués, afin de pouvoir itérer rapidement.

Le robot et le drone ont été contrôlés via BLE (Bluetooth Low Energy) par des appareils iOS sur une application écrite en Swift. De l'autre côté, les ESP8266 utilisaient le framework Arduino, programmé avec un sous-ensemble de C++.
::

::project-video
---
embed: https://www.youtube.com/embed/2cDvYZOBlOI
title: Making of
---
Tout au long du projet, nous avons été fortement encouragés à enregistrer des vidéos pour montrer au jury le processus de réalisation. J'étais chargé du montage de ce *making of*. Il devait être à la fois divertissant et complet.
::
