<script setup lang="ts">
import type { Project } from '~/types/apiTypes'

const { locale } = useI18n()
const { find } = useStrapi()

const { slug } = useRoute().params
const { data: project } = await useGlobalRefreshAsyncData(
  `post-single-${slug}-${locale.value}`,
  async () => {
    const { data } = await find<Project>('projects', {
      populate: '*',
      filters: {
        slug: {
          _eq: slug,
        },
      },
      locale: locale.value as any,
    })
    return data[0] as unknown as Project
  },
  {
    dedupe: 'defer',
  }
)
if (!project?.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}
</script>
<template>
  <div class="mb-36 flex flex-col gap-1.5c">
    <ProjectHero :project="project" />
    <ProjectDescription :project="project" />
    <ProjectVideo v-if="project.video" :project="project" />
    <ProjectImages v-if="project.images.length" :project="project" />
  </div>
</template>
