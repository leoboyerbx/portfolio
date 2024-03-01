<script setup lang="ts">
const { contactTitle, contactLinks } = await useStaticData()
</script>
<template>
  <section class="pnk-grid pb-6">
    <header class="grid-centered-8">
      <ScrollReveal class="mb-16">
        <h2 class="section-title text-center" v-html="contactTitle"></h2>
      </ScrollReveal>
    </header>
    <article class="grid-centered-8 flex flex-wrap justify-center gap-5">
      <ScrollReveal
        v-for="(link, i) in contactLinks"
        :key="link.url"
        :delay="i * 0.15"
      >
        <Button :href="link.url" :target="link.newTab ? '_blank' : ''">
          {{ link.title }}
        </Button>
      </ScrollReveal>
    </article>
  </section>
</template>
