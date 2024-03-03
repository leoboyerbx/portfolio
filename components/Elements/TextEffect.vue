<script setup lang="ts">
const effects = {
  wave: [],
} as const
const props = defineProps<{
  text: string
  effect: keyof typeof effects
  colors: string[]
}>()
const colorFrom = computed(() => props.colors[0])
const colorTo = computed(() => props.colors[1])

const letters = computed(() => Array.from(props.text))
</script>
<template>
  <span class="inline-flex">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      :style="{
        '--index': i,
        '--percentage': (100 * i) / (letters.length - 1) + '%',
      }"
      class="letter-effect"
      :class="effect"
    >
      {{ letter }}
    </span>
  </span>
</template>
<style scoped lang="scss">
.letter-effect {
  color: color-mix(
    in srgb,
    v-bind(colorTo) var(--percentage),
    v-bind(colorFrom)
  );
  // color: v-bind('colors[0]');
  &.wave {
    animation: textEffectWave 0.8s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.03s);
  }
}

@keyframes textEffectWave {
  from {
    transform: translateY(-0.08em);
  }
  50% {
    transform: translateY(0.08em);
  }
  100% {
    transform: translateY(-0.08em);
  }
}
</style>
