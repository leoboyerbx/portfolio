<script setup lang="ts">
const { locale } = useI18n()

const { slug } = useRoute().params
const { data: project } = await useAsyncData(
    `project-${slug}-${locale.value}`,
    async () => {
        const result = await queryCollection(`projects_${locale.value}`)
            .path(`/${locale.value}/projects/${slug}`)
            .where('status', '=', 'published')
            .first()
        return result
    },
    {
        dedupe: 'defer',
    },
)

if (!project.value) {
    throw showError({
        statusCode: 404,
        statusMessage: 'Project Not Found',
    })
}

defineOgImageComponent('OgProject', {
    project: project.value,
})
</script>

<template>
  <div class="mb-36 flex flex-col gap-1.5c">
    <Title>{{ project!.seo.title }}</Title>
    <Meta name="description" :content="project!.seo.description" />
    <ProjectHero :project="project!" />
    <ContentRenderer :value="project!" :prose="false" class="flex flex-col gap-1.5c" />
    <!-- <ProjectDescription :project="project" />
    <ProjectVideo v-if="project.video" :project="project" />
    <ProjectImages v-if="project.images?.length" :project="project" /> -->
  </div>
</template>
