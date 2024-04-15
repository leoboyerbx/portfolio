<script setup lang="ts">
import { getLenis } from '~/plugins/lenis.client'

definePageMeta({
  isHomePage: true,
})
useHead({
  titleTemplate: '%siteName',
})

const heroEl = ref()
const projectsEl = ref()
const openSourceEl = ref()
const contactEl = ref()
const mainNav = useMainNavStore()
onMounted(async () => {
  await nextTick()
  mainNav.setTargets(
    heroEl.value.$el,
    projectsEl.value.$el,
    openSourceEl.value.$el,
    contactEl.value.$el
  )
})

onUnmounted(() => {
  mainNav.setTargets()
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
    <Hero ref="heroEl" id="hero" class="leaving-item" />
    <ProjectList ref="projectsEl" id="projects" class="mb-24 md:mb-2c" />
    <OpenSourceList
      ref="openSourceEl"
      id="openSource"
      class="leaving-item mb-24 md:mb-2c"
    />
    <ContactPush ref="contactEl" id="contact" class="leaving-item mb-1c" />
  </div>
</template>
