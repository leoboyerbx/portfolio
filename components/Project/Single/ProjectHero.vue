<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
defineProps<{
  project: Project
}>()

const { getThumbnail: img } = useDirectusFiles()

const { target, inView } = useProjectElementInView()

const transition = 'transition-all duration-1000 ease-power4-out'
</script>
<template>
  <header ref="target" class="pnk-grid pt-36">
    <div
      class="project-thumb relative row-start-1 aspect-16/10 overflow-hidden border border-slate-300/50 rounded-xl"
      col="start-2 span-12"
      md:col="start-2 span-8"
    >
      <img
        :src="
          img(project.thumbnail, { width: 1920, height: 1200, fit: 'cover' })
        "
        alt=""
        class="h-full w-full object-cover opacity-85"
      />
    </div>
    <div
      class="relative flex flex-col items-end my-1c md:(row-start-1 self-end text-right)"
      col="start-2 span-12"
      md:col="start-5 span-8"
      lg:col="start-7 span-6"
    >
      <h1
        class="text-9vw font-black leading-120%"
        :class="
          inView
            ? 'clip-base ' + transition
            : 'clip-right translate-x-24 md:group-even:clip-right opacity-0'
        "
      >
        {{ project.name }}
      </h1>

      <p
        class="text-6 font-light font-serif md:(pl-8 ml-2c)"
        :class="
          inView
            ? 'clip-base delay-200 ' + transition
            : 'clip-right translate-x-16 md:group-even:clip-right opacity-0'
        "
      >
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
</template>
