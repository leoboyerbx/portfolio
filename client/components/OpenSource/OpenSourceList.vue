<script setup lang="ts">
import type { OpenSourceContent } from '~/types/apiTypes'
const { getSingletonItem } = useDirectusItems()
const { data } = await useAsyncData('open-source', async () => {
  const item = await getSingletonItem<OpenSourceContent>({
    collection: 'OpenSource',
  })
  return item
})

const { title, description, works, sideNote } = data.value as OpenSourceContent
</script>
<template>
  <section class="flex flex-col">
    <header class="pnk-grid">
      <ScrollReveal class="grid-centered-8 mb-28">
        <h2 class="section-title text-center" v-html="title"></h2>
      </ScrollReveal>
    </header>
    <article class="pnk-grid">
      <ScrollReveal
        class="mb-12 flex flex-col gap-8"
        col="start-2 span-12"
        md:col="start-2 span-5"
        lg:col="start-3 span-4"
        xl:col="start-3 span-3"
        font="serif extralight"
      >
        <p class="text-lg">
          {{ description }}
        </p>
        <p class="text-slate-300 italic">
          {{ sideNote }}
        </p>
      </ScrollReveal>
      <ScrollReveal
        :delay="0.15"
        class="flex flex-col"
        col="start-2 span-12"
        md:col="start-8 span-6"
        xl:col="start-8 span-5"
      >
        <OpenSourcePush
          v-for="work in works"
          :key="work.name"
          :work="work"
        ></OpenSourcePush>
      </ScrollReveal>
    </article>
  </section>
</template>
