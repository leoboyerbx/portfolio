<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
defineProps<{
  project: Project
}>()
const { target, inView } = useProjectElementInView()

const transition = 'transition-all duration-1000 ease-power4-out'
</script>
<template>
  <section ref="target" class="pnk-grid">
    <div
      col="start-2 span-12"
      sm:col="start-3 span-10"
      md:col="start-11 span-3"
      lg:col="start-10 span-3"
      class="flex flex-col items-start"
    >
      <h2
        class="mb-4 text-8 font-bold leading-110%"
        :class="
          inView ? 'opacity-100 ' + transition : 'opacity-0 translate-y-8'
        "
      >
        {{ project.skillsTitle }}
      </h2>
      <ul
        v-if="project.skills?.length"
        class="flex flex-col gap-1 text-sm font-thin font-serif"
      >
        <template v-for="(line, i) in project.skills" :key="i">
          <li
            :class="
              inView ? 'opacity-100 ' + transition : 'opacity-0 translate-y-8'
            "
            :style="{ transitionDelay: `${i * 40 + 100}ms` }"
          >
            <span
              v-if="line.__component === 'project.divider'"
              class="my-2 block h-px w-full bg-current opacity-50"
            ></span>
            <span v-else class="block">{{ line.name }}</span>
          </li>
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
      :class="
        inView
          ? 'opacity-100 delay-300 ' + transition
          : 'opacity-0 translate-y-8'
      "
      v-html="project.description"
    ></div>
  </section>
</template>
