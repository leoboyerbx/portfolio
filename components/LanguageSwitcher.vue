<script setup lang="ts">
const { locale } = useI18n()
const otherLocale = computed(() => (locale.value === 'en' ? 'fr' : 'en'))
const switchLocale = () => {
  locale.value = otherLocale.value
}
</script>
<template>
  <transition mode="out-in">
    <button
      :key="otherLocale"
      class="flex items-center gap-1"
      @click="switchLocale"
    >
      <span class="i-uil:globe block"></span> {{ otherLocale.toUpperCase() }}
    </button>
  </transition>
</template>
