<script setup lang="ts">
type effectName = 'wave' | 'shake' | 'blurry' | 'juggle'

const { text, effect, colors, letterByLetter = false } = defineProps<{
    text: string
    effect: effectName
    colors: string[]
    letterByLetter?: boolean
}>()

const colorFrom = computed(() => colors[0])
const colorTo = computed(() => colors[1])

const letters = computed(() => Array.from(text.replaceAll(' ', ' ')))

let letterByLetterDelay: undefined | ((i: number) => string)
if (letterByLetter) {
    const { animationDelay } = useLetterByLetter(letters.value.length)
    letterByLetterDelay = animationDelay
}
</script>

<template>
  <span class="inline-flex">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      :style="{
        '--index': i,
        '--percentage': `${(100 * i) / (letters.length - 1)}%`,
      }"
      class="letter-effect"
      :class="effect"
    >
      <span
        v-if="letterByLetterDelay"
        class="letter-reveal"
        :style="{ animationDelay: letterByLetterDelay(i) }"
      >{{ letter }}</span>
      <template v-else>{{ letter }}</template>

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
  &.shake {
    animation: textEffectShake 7s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.08s);
  }
  &.blurry {
    animation: textEffectBlurry 1.4s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.05s);
  }
  &.juggle {
    animation: textEffectJuggle 1.7s infinite ease-in-out;
    animation-delay: calc(var(--index) * .15s);
  }
}

@keyframes textEffectJuggle {
  from {
    transform: none;
  }
//   15% {
//     transform: translateY(0.08em) rotate(-2deg);
//   }
  25% {
    transform: translateY(-0.8em) rotate(180deg);
}
45% {
      transform: translateY(0) rotate(369deg);
    }
    50%, to {
      transform: translateY(0) rotate(360deg);

  }
}

@keyframes textEffectWave {
  from,
  to {
    transform: translateY(-0.08em);
  }
  50% {
    transform: translateY(0.08em);
  }
}

@keyframes textEffectBlurry {
  from,
  to {
    filter: blur(0);
    transform: translateY(-0.04em) scale(1.04);
  }
  50% {
    filter: blur(5px);
    transform: translateY(0.04em) scale(0.96);
  }
}

$shakeAmplitude: 0.7;
@keyframes textEffectShake {
  2% {
    transform: translate($shakeAmplitude * -2px, $shakeAmplitude * 9px)
      rotate(-1.5deg);
  }
  4% {
    transform: translate($shakeAmplitude * -7px, $shakeAmplitude * 10px)
      rotate(2.5deg);
  }
  6% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * -9px)
      rotate(0.5deg);
  }
  8% {
    transform: translate($shakeAmplitude * -4px, $shakeAmplitude * 6px)
      rotate(-1.5deg);
  }
  10% {
    transform: translate($shakeAmplitude * 8px, $shakeAmplitude * 9px)
      rotate(1.5deg);
  }
  12% {
    transform: translate($shakeAmplitude * 10px, $shakeAmplitude * 5px)
      rotate(-1.5deg);
  }
  14% {
    transform: translate($shakeAmplitude * -1px, $shakeAmplitude * 5px)
      rotate(-0.5deg);
  }
  16% {
    transform: translate($shakeAmplitude * 2px, $shakeAmplitude * -2px)
      rotate(-0.5deg);
  }
  18% {
    transform: translate($shakeAmplitude * 1px, $shakeAmplitude * 10px)
      rotate(0.5deg);
  }
  20% {
    transform: translate($shakeAmplitude * 9px, $shakeAmplitude * 5px)
      rotate(-1.5deg);
  }
  22% {
    transform: translate($shakeAmplitude * 8px, $shakeAmplitude * -6px)
      rotate(2.5deg);
  }
  24% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * -5px)
      rotate(3.5deg);
  }
  26% {
    transform: translate($shakeAmplitude * -3px, $shakeAmplitude * -8px)
      rotate(2.5deg);
  }
  28% {
    transform: translate($shakeAmplitude * 5px, $shakeAmplitude * 0px)
      rotate(-0.5deg);
  }
  30% {
    transform: translate($shakeAmplitude * 5px, $shakeAmplitude * -8px)
      rotate(3.5deg);
  }
  32% {
    transform: translate($shakeAmplitude * 3px, $shakeAmplitude * -4px)
      rotate(0.5deg);
  }
  34% {
    transform: translate($shakeAmplitude * 5px, $shakeAmplitude * 0px)
      rotate(1.5deg);
  }
  36% {
    transform: translate($shakeAmplitude * 8px, $shakeAmplitude * -3px)
      rotate(2.5deg);
  }
  38% {
    transform: translate($shakeAmplitude * 5px, $shakeAmplitude * 5px)
      rotate(2.5deg);
  }
  40% {
    transform: translate($shakeAmplitude * 9px, $shakeAmplitude * 2px)
      rotate(-0.5deg);
  }
  42% {
    transform: translate($shakeAmplitude * 6px, $shakeAmplitude * -7px)
      rotate(2.5deg);
  }
  44% {
    transform: translate($shakeAmplitude * 10px, $shakeAmplitude * -8px)
      rotate(3.5deg);
  }
  46% {
    transform: translate($shakeAmplitude * 6px, $shakeAmplitude * -1px)
      rotate(1.5deg);
  }
  48% {
    transform: translate($shakeAmplitude * 2px, $shakeAmplitude * 7px)
      rotate(-1.5deg);
  }
  50% {
    transform: translate($shakeAmplitude * 5px, $shakeAmplitude * 6px)
      rotate(1.5deg);
  }
  52% {
    transform: translate($shakeAmplitude * 8px, $shakeAmplitude * 10px)
      rotate(-1.5deg);
  }
  54% {
    transform: translate($shakeAmplitude * -8px, $shakeAmplitude * 6px)
      rotate(-0.5deg);
  }
  56% {
    transform: translate($shakeAmplitude * 3px, $shakeAmplitude * 7px)
      rotate(-0.5deg);
  }
  58% {
    transform: translate($shakeAmplitude * 9px, $shakeAmplitude * 4px)
      rotate(2.5deg);
  }
  60% {
    transform: translate($shakeAmplitude * 3px, $shakeAmplitude * -7px)
      rotate(-0.5deg);
  }
  62% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * 1px)
      rotate(3.5deg);
  }
  64% {
    transform: translate($shakeAmplitude * 9px, $shakeAmplitude * 0px)
      rotate(2.5deg);
  }
  66% {
    transform: translate($shakeAmplitude * -1px, $shakeAmplitude * -4px)
      rotate(1.5deg);
  }
  68% {
    transform: translate($shakeAmplitude * 7px, $shakeAmplitude * -1px)
      rotate(-2.5deg);
  }
  70% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * 5px)
      rotate(1.5deg);
  }
  72% {
    transform: translate($shakeAmplitude * 8px, $shakeAmplitude * 5px)
      rotate(2.5deg);
  }
  74% {
    transform: translate($shakeAmplitude * -9px, $shakeAmplitude * 8px)
      rotate(-0.5deg);
  }
  76% {
    transform: translate($shakeAmplitude * -8px, $shakeAmplitude * -6px)
      rotate(-0.5deg);
  }
  78% {
    transform: translate($shakeAmplitude * -8px, $shakeAmplitude * 9px)
      rotate(-0.5deg);
  }
  80% {
    transform: translate($shakeAmplitude * -8px, $shakeAmplitude * -2px)
      rotate(2.5deg);
  }
  82% {
    transform: translate($shakeAmplitude * -8px, $shakeAmplitude * -1px)
      rotate(-1.5deg);
  }
  84% {
    transform: translate($shakeAmplitude * -2px, $shakeAmplitude * 4px)
      rotate(0.5deg);
  }
  86% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * 4px)
      rotate(-0.5deg);
  }
  88% {
    transform: translate($shakeAmplitude * 1px, $shakeAmplitude * 5px)
      rotate(-2.5deg);
  }
  90% {
    transform: translate($shakeAmplitude * 7px, $shakeAmplitude * 6px)
      rotate(3.5deg);
  }
  92% {
    transform: translate($shakeAmplitude * -4px, $shakeAmplitude * 7px)
      rotate(-2.5deg);
  }
  94% {
    transform: translate($shakeAmplitude * -6px, $shakeAmplitude * 10px)
      rotate(1.5deg);
  }
  96% {
    transform: translate($shakeAmplitude * -1px, $shakeAmplitude * 1px)
      rotate(-1.5deg);
  }
  98% {
    transform: translate($shakeAmplitude * -5px, $shakeAmplitude * 0px)
      rotate(1.5deg);
  }
  0%,
  100% {
    transform: translate($shakeAmplitude * 0, $shakeAmplitude * 0) rotate(0);
  }
}
</style>
