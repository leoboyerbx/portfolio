<script setup lang="ts">
const { t } = useI18n()
const links = computed(() => [
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
    title: t('contact.email'),
    url: 'mailto:contact@leoboyer.fr',
  },
])
</script>
<template>
  <div class="flex items-center gap-2">
    <a
      v-for="link in links"
      :key="link.url"
      :href="link.url"
      :title="link.title"
      class="opacity-50 hover:opacity-100 transition duration-50"
      target="_blank"
    >
      <span :class="link.icon" class="text-28px block"></span>
    </a>
  </div>
</template>
