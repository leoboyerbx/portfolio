<script setup lang="ts">
</script>

<template>
  <section id="openSource" class="leaving-item mb-24 flex flex-col md:mb-2c">
    <header class="pnk-grid">
      <ScrollReveal class="grid-centered-8 mb-1c">
        <h2
          class="section-title text-center"
        >
          <slot name="title"></slot>
        </h2>
      </ScrollReveal>
    </header>
    <article class="pnk-grid">
      <ScrollReveal
        class="description mb-12 flex flex-col gap-8"
        col="start-2 span-12"
        md:col="start-2 span-5"
        lg:col="start-3 span-4"
        xl:col="start-3 span-3"
        font="serif extralight"
      >
        <slot name="description"></slot>
        <!-- <p class="text-lg">
          {{ homepage.openSource.description }}
        </p>
        <p class="text-slate-300 italic">
          {{ homepage.openSource.sideNote }}
        </p> -->
      </ScrollReveal>
      <ScrollReveal
        :delay="0.15"
        class="flex flex-col"
        col="start-2 span-12"
        md:col="start-8 span-6"
        xl:col="start-8 span-5"
      >
        <slot name="projects"></slot>
      </ScrollReveal>
    </article>
  </section>
</template>

<style lang="scss">
.description {
    p {
        @apply text-lg;
    }
    em {
        @apply text-slate-300 italic text-base;
    }
}
</style>
