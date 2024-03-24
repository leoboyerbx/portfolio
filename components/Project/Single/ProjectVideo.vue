<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
defineProps<{
  project: Project
}>()
</script>
<template>
  <section class="pnk-grid">
    <h2
      v-if="project.videoTitle"
      class="grid-centered-8 section-title mb-12 text-center"
      v-html="project.videoTitle"
    ></h2>
    <div class="grid-centered-8">
      <EmbedPlayer class="w-full" :url="project.videoUrl" />
    </div>
    <div
      v-if="project.videoDescription"
      class="text-lg mt-1c prose"
      col="start-2 span-10"
      sm:col="start-3 span-10"
      lg:col="start-3 span-5"
      v-html="project.videoDescription"
    ></div>
  </section>
</template>
