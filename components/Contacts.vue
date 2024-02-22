<script setup lang="ts">
const links = [
  {
    icon: 'i-uil:github',
    title: 'GitHub',
    url: 'https://github.com/leoboyerbx',
  },
  {
    icon: 'i-uil:linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/leoboyerbx',
  },
  {
    icon: 'i-uil:envelope',
    title: 'Send me an email !',
    url: 'mailto:contact@leoboyer.fr',
  },
]
</script>
<template>
  <div class="flex items-center gap-2" col="start-3 span-8">
    <a
      v-for="link in links"
      :key="link.title"
      :href="link.url"
      :title="link.title"
      class="opacity-50 hover:opacity-100 transition duration-50"
      target="_blank"
    >
      <span :class="link.icon" class="text-28px block"></span>
    </a>
  </div>
</template>
