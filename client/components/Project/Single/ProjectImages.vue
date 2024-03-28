<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
const props = defineProps<{
  project: Project
}>()
const images =
  props.project.images?.blocks
    ?.filter((b) => b.type === 'image')
    .map((block) => useRuntimeConfig().public.apiUrl + block.data.file.url) ??
  []
</script>
<template>
  <section class="pnk-grid">
    <div class="grid-centered-10">
      <ImageGallery :images="images" />
    </div>
  </section>
</template>
