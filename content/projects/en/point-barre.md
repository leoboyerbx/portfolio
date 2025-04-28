---
slug: point-barre
locale: en
createdAt: 2024-04-09
updatedAt: 2025-04-27T00:00:00.000Z
status: published
title: Point Barre.
description: Drones, Robots & IOT Project
links: []
thumbnail: /img/projects/pointbarre.min.webp
seo:
  title: Point Barre.
  description: Discover Point Barre, a drones, robots & IOT Project
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

  :::skill
  Staging
  :::

  :::skill-separator
  :::

  :::skill
  Tech lead
  :::

  :::skill
  Realtime
  :::

  :::skill
  IOT
  :::

  :::skill
  Drone flight programming
  :::

  :::skill-separator
  :::

  :::skill
  Video production
  :::

  :::skill
  Editing
  :::

#description
This is a school project created while I was in Gobelins. The theme was "culture" and the project had to use Drones, Robots and IOT. The final product was the defense in front of the jury.

We went from the french expression *mettre de l'eau dans son vin* ("pouring water in its wine") to explain how the romans made wine.

## **Tech challenges**

We had to synchronize a lot of elements:

- a drone
- 2 robots
- 3 ESP8266 running Arduino framework

As web developers, we chose WebSockets as our transport layer, and this allowed us to write the main controller in Javascript, a language we were already used to, so we could iterate fast.

The robot and the drone were controlled over BLE (Bluetooth Low Energy) by iOS devices on an app written in Swift. On the other side, the ESP8266 were running the Arduino framework, programmed with a subset of C++.
::

::project-video
---
embed: https://www.youtube.com/embed/2cDvYZOBlOI
title: Watch the BTS
---
During the whole project we were strongly encouraged to record videos to show the jury the processing involved in making everything happen. I was in charge of editing this BTS (Behind the scenes) video. It had to be fun yet comprehensive.
::
