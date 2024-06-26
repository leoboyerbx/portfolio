<script setup lang="ts">
import type { NuxtLink } from '#build/components'
import { getLenis } from '~/plugins/lenis.client'

const props = defineProps<{
  project: Project
}>()

const thumbnail = useStrapiMedia(props.project.thumbnail.url)

const { target, inView } = useElementInView({
  amount: 0.5,
})

const transition = 'transition-all duration-1000 ease-power4-out'

const transitions = useTransitionsStore()
const linkElement = ref<HTMLElement>()
const lenis = getLenis()

const onClickLink = async (
  e: MouseEvent,
  navigate: (e: MouseEvent) => void
) => {
  const trigger = linkElement.value!
  transitions.isTransitionningToProject = true
  transitions.isLeaving = true
  navigate(e) // Trigger next page load, but the router will await for the bus

  trigger.classList.add('leaving')
  await new Promise((resolve) =>
    lenis.scrollTo(trigger, {
      duration: 0.9,
      easing: power3.inOut.toFunction(),
      lock: true,
      onComplete: resolve,
      offset: -window.innerHeight / 2 + trigger.offsetHeight / 2,
    })
  )

  transitions.linkRect = trigger
    .querySelector('.thumb')
    ?.getBoundingClientRect()

  transitions.isLeaving = false // This allows the transitions hook to continue
}

const localePath = useLocalePath()
</script>
<template>
  <NuxtLink
    v-slot="{ href, navigate }"
    :to="localePath(`/projects/${project.slug}`)"
    :custom="true"
  >
    <a
      ref="linkElement"
      :href="href"
      class="group project-link leaving-item"
      @click="onClickLink($event, navigate)"
    >
      <article
        ref="target"
        class="grid-centered-8 flex flex-col gap-6 md:(flex-row group-even:flex-row-reverse)"
      >
        <header
          class="thumb relative aspect-16/10 origin-bottom-left overflow-hidden border border-slate-300/50 rounded-xl md:w-1/2 md:group-odd:(origin-bottom-right)"
          :class="[inView ? 'scale-100' : 'scale-75 opacity-0', transition]"
        >
          <NuxtImg
            :src="thumbnail"
            width="1920"
            height="1200"
            :alt="`Thumb for ${project.name}`"
            class="block h-full w-full object-cover opacity-85"
            :class="[
              inView ? 'scale-100 thumb-hover-scale' : 'scale-125',
              transition,
            ]"
          />
        </header>
        <section
          class="text-content flex flex-col items-start justify-end md:group-even:(items-end text-right) transition duration-200 text-slate-100/80 group-hover:text-slate-50"
        >
          <h3
            class="block text-3xl font-bold delay-150 lg:text-6xl md:text-5xl text-current"
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
            class="font-light delay-300 lg:text-xl lt-md:text-sm text-current"
            :class="[inView ? '' : 'opacity-0 translate-y-4', transition]"
          >
            {{ project.baseline }}
          </p>
        </section>
      </article>
    </a>
  </NuxtLink>
</template>
<style lang="scss">
.project-link {
  @media (hover: hover) and (pointer: fine) {
    &:hover .thumb-hover-scale {
      @apply scale-108;
    }
  }
  &.leaving {
    @apply pointer-events-none;
    .thumb {
      @apply scale-98 transition duration-900 ease-power3-in-out;
    }
    .text-content {
      @apply opacity-0 transition duration-900 ease-power2-in-out;
    }
    &:nth-child(2n) {
      .thumb {
        @apply translate-x-20%;
      }
      .text-content {
        @apply -translate-x-4;
      }
    }
    &:nth-child(2n + 1) {
      .thumb {
        @apply -translate-x-20%;
      }
      .text-content {
        @apply translate-x-4;
      }
    }
  }
}
</style>
