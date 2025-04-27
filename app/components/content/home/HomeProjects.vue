<script setup lang="ts">
const { title } = defineProps<{
    title: string
}>()
</script>

<template>
  <section id="projects" class="pnk-grid mb-24 w-full md:mb-2c">
    <ScrollReveal class="grid-centered-8 mb-1.5c">
      <h2
        class="section-title leaving-item text-center"
        v-html="title"
      ></h2>
    </ScrollReveal>
    <div class="grid-centered-8 flex flex-col gap-12 sm:gap-36">
      <slot></slot>
    </div>
  </section>
</template>
