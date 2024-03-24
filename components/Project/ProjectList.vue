<script setup lang="ts">
import type { Project, ProjectPushData } from '~/types/apiTypes'

const { getItems } = useDirectusItems()
const { data } = await useAsyncData(() =>
  getItems<ProjectPushData>({
    collection: 'projects',
    params: {
      limit: -1,
      fields: ['id', 'name', 'slug', 'baseline', 'thumbnail'],
    },
  })
)
const projects = data.value
const { projectsTitle } = await useStaticData()
</script>
<template>
  <section class="pnk-grid w-full">
    <ScrollReveal class="grid-centered-8 mb-36">
      <h2
        class="section-title leaving-item text-center"
        v-html="projectsTitle"
      ></h2>
    </ScrollReveal>
    <div class="grid-centered-8 flex flex-col gap-36">
      <ProjectPush
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></ProjectPush>
    </div>
  </section>
</template>
