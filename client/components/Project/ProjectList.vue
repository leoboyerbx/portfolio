<script setup lang="ts">
const { getItems } = useDirectusItems()
const { projects, title } = (await useHomepage()).projects
</script>
<template>
  <section class="pnk-grid w-full">
    <ScrollReveal class="grid-centered-8 mb-36">
      <h2 class="section-title leaving-item text-center" v-html="title"></h2>
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
