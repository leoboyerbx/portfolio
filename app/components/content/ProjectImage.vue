<script setup lang="ts">
defineProps<{
    src: string
    thumb?: string
    alt: string
}>()
</script>

<template>
  <ImageGalleryItem :src="src" :thumb="thumb" :alt="alt" />
</template>
