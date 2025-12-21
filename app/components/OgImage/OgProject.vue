<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

const { project } = defineProps<{
    project: ProjectsEnCollectionItem
}>()
</script>

<template>
  <div
    class="apply relative h-full w-full flex items-start justify-start text-slate-50"
  >
    <NuxtImg
      :format="project.thumbnail.endsWith('webp') ? 'jpeg' : undefined"
      class="absolute inset-0 size-full object-cover"
      :src="project.ogThumbnail || project.thumbnail"
    />
    <div
      class="size-full flex flex-col justify-end gap-4 px-16 pb-12 pt-20 leading-105%"
      style="
        background: linear-gradient(to bottom, #02061811, #02061877 60%, #020618FF)"
    >
      <h1
        class="my-0 flex flex-col text-left text-20 font-black"
      >
        {{ project.title }}
      </h1>
      <div class="flex items-end justify-between">
        <h2 class="my-0 text-8 font-serif">
          {{ project.description }}
        </h2>
        <img src="/favicon.png" alt="favicon" class="size-12">
      </div>
    </div>
  </div>
</template>
