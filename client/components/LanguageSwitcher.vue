<script setup lang="ts">
const { locale } = useI18n()
const otherLocale = computed(() => (locale.value === 'en' ? 'fr' : 'en'))
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <transition mode="out-in">
    <nuxt-link
      :key="otherLocale"
      class="flex items-center gap-1"
      :to="switchLocalePath(otherLocale)"
    >
      <!-- @click="switchLocale" -->
      <span class="i-uil:globe block"></span> {{ otherLocale.toUpperCase() }}
    </nuxt-link>
  </transition>
</template>
