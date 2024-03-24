<script setup lang="ts">
import type { NuxtLink } from '#build/components'
import type { ProjectPushData } from '~/types/apiTypes'

defineProps<{
  project: ProjectPushData
}>()

const { getThumbnail: img } = useDirectusFiles()

const { target, inView } = useElementInView({
  amount: 0.5,
})

const transition = 'transition-all duration-1000 ease-power4-out'

const linkElement = ref<HTMLElement>()
const onClickLink = (e: MouseEvent, navigate: (e: MouseEvent) => void) => {
  setTransitionTrigger(linkElement.value!)
  navigate(e)
}
</script>
<template>
  <NuxtLink
    v-slot="{ href, navigate }"
    :to="`/projects/${project.slug}`"
    :custom="true"
  >
    <a
      ref="linkElement"
      :href="href"
      class="group"
      @click="onClickLink($event, navigate)"
    >
      <article
        ref="target"
        class="grid-centered-8 flex flex-col gap-6 md:(flex-row group-even:flex-row-reverse)"
      >
        <header
          class="aspect-16/10 origin-bottom-left overflow-hidden border border-slate-400/50 rounded-lg md:w-1/2 md:group-odd:(origin-bottom-right)"
          :class="[inView ? 'scale-100' : 'scale-75 opacity-0', transition]"
        >
          <img
            :src="
              img(project.thumbnail, { width: 960, height: 600, fit: 'cover' })
            "
            alt=""
            class="block object-cover opacity-80"
            :class="[inView ? 'scale-100' : 'scale-125', transition]"
          />
        </header>
        <section
          class="flex flex-col items-start justify-end md:group-even:(items-end text-right)"
        >
          <h3
            class="block text-3xl font-bold delay-150 lg:text-6xl md:text-5xl"
            :class="[
              inView
                ? 'clip-base'
                : 'clip-left md:group-even:clip-right opacity-0',
              transition,
            ]"
          >
            {{ project.name }}
          </h3>
          <p
            class="font-light delay-300 lg:text-xl lt-md:text-sm"
            :class="[inView ? '' : 'opacity-0 translate-y-4', transition]"
          >
            {{ project.baseline }}
          </p>
        </section>
      </article>
    </a>
  </NuxtLink>
</template>
