<script setup lang="ts">
import type { Project } from '~/types/apiTypes'

const { slug } = useRoute().params

const { getItems } = useDirectusItems()
const { data } = await useAsyncData(async () => {
  const items = await getItems<Project>({
    collection: 'projects',
    params: {
      filter: {
        slug: {
          _eq: slug,
        },
      },
    },
  })
  return items[0]
})
if (!data?.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}
const project = data.value
const { getThumbnail: img } = useDirectusFiles()
const images = project.images.blocks
  .filter((b) => b.type === 'image')
  .map((block) => useRuntimeConfig().public.apiUrl + block.data.file.url)
</script>
<template>
  <div class="mb-36 flex flex-col gap-32">
    <header class="pnk-grid pt-36">
      <img
        :src="
          img(project.thumbnail, { width: 1920, height: 1200, fit: 'cover' })
        "
        alt=""
        class="row-start-1 aspect-16/10 border border-slate-300/50 rounded-xl object-cover opacity-90"
        col="start-2 span-8"
      />
      <div
        class="relative row-start-1 flex flex-col items-end self-end my-1c"
        col="start-7 span-6"
      >
        <h1 class="text-9vw font-black leading-120%">{{ project.name }}</h1>

        <p class="pl-8 text-6 font-light font-serif ml-2c">
          {{ project.baseline }}
        </p>
      </div>
      <div v-if="project.links?.length > 0" class="mt-6" col="start-2 span-5">
        <Button
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          :target="link.newTab ? '_blank' : ''"
          :icon="link.newTab ? 'i-uil:external-link-alt' : ''"
        >
          {{ link.title }}
        </Button>
      </div>
    </header>
    <section class="pnk-grid">
      <div
        class="mt-12 prose"
        col="start-3 span-6"
        v-html="project.description"
      ></div>
      <div col="start-10 span-3" class="flex flex-col items-start">
        <h2 class="mb-4 text-8 font-bold">{{ project.skillsTitle }}</h2>
        <ul class="flex flex-col gap-1 text-sm font-thin font-serif">
          <template v-for="(skill, i) in project.skills" :key="i">
            <li
              v-if="skill.divider"
              class="my-2 h-px w-full bg-current opacity-50"
            ></li>
            <li v-else>{{ skill.name }}</li>
          </template>
        </ul>
      </div>
    </section>
    <section class="pnk-grid">
      <h2
        class="grid-centered-8 section-title mb-12 text-center"
        v-html="project.videoTitle"
      ></h2>
      <div class="grid-centered-8">
        <EmbedPlayer class="w-full" :url="project.videoUrl" />
      </div>
      <div
        class="mt-16 text-lg prose"
        col="start-3 span-5"
        v-html="project.videoDescription"
      ></div>
    </section>
    <section class="pnk-grid">
      <div class="grid-centered-10">
        <ImageGallery :images="images" />
      </div>
    </section>
  </div>
</template>
<style></style>
