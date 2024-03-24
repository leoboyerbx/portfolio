<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
definePageMeta({
  isProjectPage: true,
})

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
const images =
  project.images?.blocks
    ?.filter((b) => b.type === 'image')
    .map((block) => useRuntimeConfig().public.apiUrl + block.data.file.url) ??
  []
</script>
<template>
  <div class="mb-36 flex flex-col gap-1.5c">
    <header class="pnk-grid pt-36">
      <img
        :src="
          img(project.thumbnail, { width: 1920, height: 1200, fit: 'cover' })
        "
        alt=""
        class="row-start-1 aspect-16/10 border border-slate-300/50 rounded-xl object-cover opacity-90"
        col="start-2 span-12"
        md:col="start-2 span-8"
      />
      <div
        class="md:self-enditems-end relative flex flex-col my-1c md:(row-start-1 text-right)"
        col="start-2 span-12"
        md:col="start-8 span-6"
        lg:col="start-7 span-6"
      >
        <h1 class="text-9vw font-black leading-120%">
          {{ project.name }}
        </h1>

        <p class="text-6 font-light font-serif md:(pl-8 ml-2c)">
          {{ project.baseline }}
        </p>
      </div>
      <div
        v-if="project.links?.length > 0"
        class="flex gap-2 md:(mt-6 -mx-1) lt-md:(flex-wrap -mx-2)"
        col="start-2 span-10"
        md:col="start-2 span-8"
      >
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
        col="start-2 span-12"
        sm:col="start-3 span-10"
        md:col="start-11 span-3"
        lg:col="start-10 span-3"
        class="flex flex-col items-start"
      >
        <h2 class="mb-4 text-8 font-bold leading-110%">
          {{ project.skillsTitle }}
        </h2>
        <ul
          v-if="project.skills?.length"
          class="flex flex-col gap-1 text-sm font-thin font-serif"
        >
          <template v-for="(skill, i) in project.skills" :key="i">
            <li
              v-if="skill.divider"
              class="my-2 h-px w-full bg-current opacity-50"
            ></li>
            <li v-else>{{ skill.name }}</li>
          </template>
        </ul>
      </div>
      <div
        v-if="project.description"
        class="mt-12 prose md:-order-1"
        col="start-2 span-12"
        sm:col="start-3 span-10"
        md:col="start-3 span-7"
        lg:col="start-3 span-6"
        v-html="project.description"
      ></div>
    </section>
    <section v-if="project.videoUrl" class="pnk-grid">
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
    <section v-if="images.length" class="pnk-grid">
      <div class="grid-centered-10">
        <ImageGallery :images="images" />
      </div>
    </section>
  </div>
</template>
<style></style>
