<script setup lang="ts">
import { getLenis } from '~/plugins/lenis.client'

definePageMeta({
  isHomePage: true,
})

const route = useRoute()
const scrollTo = route.query.scrollTo as string
useRouter().replace(route.path)
onMounted(async () => {
  if (scrollTo) {
    const target = document.getElementById(scrollTo)
    if (target) {
      getLenis().scrollTo(target, {
        immediate: true,
        offset: -128,
      })
    }
  }
})
</script>
<template>
  <div class="flex flex-col">
    <Hero id="hero" class="leaving-item" />
    <ProjectList id="projects" class="mb-64" />
    <OpenSourceList id="openSource" class="leaving-item mb-64" />
    <ContactPush id="contact" class="leaving-item mb-16" />
  </div>
</template>
