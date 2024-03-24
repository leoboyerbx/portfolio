<script setup lang="ts">
import type { Project } from '~/types/apiTypes'
defineProps<{
  project: Project
}>()
</script>
<template>
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
</template>
