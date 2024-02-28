<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>
<template>
  <div class="gallery grid grid-cols-8 gap-4">
    <img
      v-for="image in images"
      :key="image"
      :src="image"
      alt="Gallery Image"
    />
  </div>
</template>
<style scoped lang="scss">
.gallery {
  img {
    @apply h-3.5c w-full rounded-lg object-cover h-3c;
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
