<script setup lang="ts">
import { useStaggerRevealChild } from '~/composables/useStaggerReveal'

defineProps<{
    src: string
    thumb?: string
    alt: string
}>()

const { transitionDelay, visible } = useStaggerRevealChild()
</script>

<template>
  <ImageLightbox
    :src="src"
    :alt="alt"
    class="img-gallery-item"
    :class="
      visible
        ? `clip-base opacity-100 transition-all duration-1000 ease-power4-out`
        : ' opacity-0 clip-bottom'
    "
    :style="{ transitionDelay }"
  />
</template>

<style scoped lang="scss">
  .img-gallery-item {
    @apply w-full rounded-lg object-cover overflow-hidden col-span-full;
    @screen md {
      &:nth-child(4n + 1),
      &:nth-child(4n) {
        @apply col-span-5;
      }

      &:nth-child(4n + 2),
      &:nth-child(4n + 3) {
        @apply col-span-3;
      }
    }
  }
</style>
