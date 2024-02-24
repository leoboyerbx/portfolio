<script setup lang="ts"></script>
<template>
  <section class="mb-36 flex flex-col">
    <header class="pnk-grid">
      <h2 class="section-title grid-centered-8 mb-28 text-center">
        My <span font="serif light" class="italic">humble</span><br />
        open-source work
      </h2>
    </header>
    <article class="pnk-grid">
      <div
        class="flex flex-col gap-8"
        col="start-3 span-3"
        font="serif extralight"
      >
        <p class="text-lg">
          Sometimes when I'm building something, I find myself needing a
          reusable thing that I decide to publish. It implies to write and
          maintain documentation ans manage releases.
        </p>
        <p class="text-slate-300 italic">
          Some of these projects are very old, but I still use them from time to
          time.
        </p>
      </div>
      <div class="flex flex-col" col="start-8 span-5">
        <OpenSourcePush v-for="i in 5" :key="i"></OpenSourcePush>
      </div>
    </article>
  </section>
</template>
