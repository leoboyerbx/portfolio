<script setup lang="ts">
definePageMeta({
  isHomePage: true,
})
</script>
<template>
  <div class="flex flex-col">
    <Hero id="hero" />
    <ProjectList id="projects" class="mb-64" />
    <OpenSourceList id="openSource" class="mb-64" />
    <ContactPush id="contact" class="mb-16" />
  </div>
</template>
