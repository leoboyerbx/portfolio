<script setup lang="ts">
const effects = {
  wave: [],
} as const
const props = defineProps<{
  text: string
  effect: keyof typeof effects
}>()

const letters = computed(() => Array.from(props.text))
</script>
<template>
  <span class="inline-flex">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      :style="{ '--index': i }"
      class="letter-effect"
      :class="effect"
      >{{ letter }}</span
    >
  </span>
</template>
<style scoped lang="scss">
.letter-effect {
  @apply inline-block;
  &.wave {
    animation: textEffectWave 0.8s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.03s);
  }
}

@keyframes textEffectWave {
  from {
    transform: translateY(-0.1em);
  }
  50% {
    transform: translateY(0.1em);
  }
  100% {
    transform: translateY(-0.1em);
  }
}
</style>
