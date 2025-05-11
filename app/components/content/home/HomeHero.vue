<script setup lang="ts">
import type { HeroTextProps } from '~/components/Home/HeroText.vue'

const props = defineProps<HeroTextProps>()

defineOgImageComponent('OgHero', props)
</script>

<template>
  <header id="hero" class="min-h-100vh w-full flex flex-col pb-16 pt-36">
    <div
      class="grid grid-cols-14 md:h-35vh"
      style=""
    >
      <HeroText :hero="props" col="start-2 span-12" md:col="start-3 span-11" />
    </div>
    <div
      class="reveal grid grid-cols-14 mt-16 md:mt-1/2c"
      style="animation-delay: 1500ms"
    >
      <div
        col="start-2 span-10"
        md:col="start-3 span-10"
        class="intro mb-8 max-w-96 flex flex-col gap-3"
        text="lg 2xl:xl"
        font="serif extralight"
      >
        <slot></slot>
      </div>
      <Contacts
        col="start-2 span-10"
        md:col="start-3 span-4"
        class="text-24px"
      />
    </div>
  </header>
</template>

<style>
.intro a {
  text-decoration: underline !important;
}

.reveal {
  animation: reveal 600ms theme('easing.power4-out') both;
  opacity: 0;
}

@keyframes reveal {
  from {
    transform: translateY(24px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
