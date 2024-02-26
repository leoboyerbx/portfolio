<script setup lang="ts">
const { contactTitle, contactLinks } = await useStaticData()
</script>
<template>
  <section class="pnk-grid pb-6">
    <header class="grid-centered-8">
      <h2 class="section-title mb-16 text-center" v-html="contactTitle"></h2>
    </header>
    <article class="grid-centered-8 flex justify-center gap-5">
      <Button
        v-for="link in contactLinks"
        :key="link.url"
        :href="link.url"
        :target="link.newTab ? '_blank' : ''"
      >
        {{ link.title }}
      </Button>
    </article>
  </section>
</template>
