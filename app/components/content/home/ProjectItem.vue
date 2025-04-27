<script setup lang="ts">
const { slug } = defineProps<{
    slug: string
}>()
const { locale } = useI18n()
const { data: project } = await useAsyncData(
    `home-project-${locale.value}-${slug}`,
    async () => {
        const result = await queryCollection('projects')
            .where('slug', '=', slug)
            .where('locale', '=', locale.value)
            .where('status', '=', 'published')
            .first()
        return result
    },
    {
        dedupe: 'defer',
    },
)
</script>

<template>
  <ProjectPush
    v-if="project"
    :project="project"
  />
</template>
