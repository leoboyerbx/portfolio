<script setup lang="ts">
const { skillsTitle } = defineProps<{
    skillsTitle?: string
}>()
const { target, inView } = useStaggerRevealParent(i => `${i * 40 + 100}ms`)

const transition = 'transition-all duration-1000 ease-power4-out'
</script>

<template>
  <section ref="target" class="pnk-grid">
    <div
      col="start-2 span-12"
      sm:col="start-3 span-10"
      md:col="start-11 span-3"
      lg:col="start-10 span-3"
      class="flex flex-col items-start"
    >
      <h2
        v-if="skillsTitle"
        class="mb-4 text-8 font-bold leading-110%"
        :class="
          inView ? `opacity-100 ${transition}` : 'opacity-0 translate-y-8'
        "
      >
        {{ skillsTitle }}
      </h2>
      <ul
        class="flex flex-col gap-1 text-sm font-thin font-serif"
      >
        <slot name="skills"></slot>
      </ul>
    </div>
    <div
      class="mt-12 prose md:-order-1"
      col="start-2 span-12"
      sm:col="start-3 span-10"
      md:col="start-3 span-7"
      lg:col="start-3 span-6"
      :class="
        inView
          ? `opacity-100 delay-300 ${transition}`
          : 'opacity-0 translate-y-8'
      "
    >
      <slot></slot>
    </div>
  </section>
</template>
