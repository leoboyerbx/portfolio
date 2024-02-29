<script setup lang="ts">
import type { ProjectPushData } from '~/types/apiTypes'

defineProps<{
  project: ProjectPushData
}>()

const { getThumbnail: img } = useDirectusFiles()
</script>
<template>
  <NuxtLink class="group" :to="`/projects/${project.slug}`">
    <article
      class="grid-centered-8 flex flex-col gap-6 md:(flex-row group-even:flex-row-reverse)"
    >
      <header class="md:w-1/2">
        <img
          :src="
            img(project.thumbnail, { width: 960, height: 600, fit: 'cover' })
          "
          alt=""
          class="aspect-16/10 border border-slate-400/50 rounded-lg object-cover opacity-80"
        />
      </header>
      <section
        class="flex flex-col justify-end md:group-even:(items-end text-right)"
      >
        <h3 class="text-3xl font-bold md:text-5xl">{{ project.name }}</h3>
        <p class="font-light lt-md:text-sm">{{ project.baseline }}</p>
      </section>
    </article>
  </NuxtLink>
</template>
