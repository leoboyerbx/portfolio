<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>
<template>
  <div class="gallery grid grid-cols-8 gap-4">
    <ImageLightbox
      v-for="image in images"
      :key="image"
      :src="image"
      alt="Gallery Image"
      class="img"
    />
  </div>
</template>
<style scoped lang="scss">
.gallery {
  .img {
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
}
</style>
