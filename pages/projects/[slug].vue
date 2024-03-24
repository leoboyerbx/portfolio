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
</script>
<template>
  <div class="mb-36 flex flex-col gap-1.5c">
    <ProjectHero :project="project" />
    <ProjectDescription :project="project" />
    <ProjectVideo v-if="project.videoUrl" :project="project" />
    <ProjectImages v-if="project.images?.blocks?.length" :project="project" />
  </div>
</template>
