<script setup lang="ts">
import {
  animate,
  type MotionKeyframesDefinition,
  type AnimationOptionsWithOverrides,
  type AnimationControls,
} from 'motion'
import type { PropType } from 'vue'
const effects: Record<
  string,
  [MotionKeyframesDefinition, AnimationOptionsWithOverrides?]
> = {
  default: [{ y: [32, 0], opacity: [0, 1] }, { duration: 0.8 }],
} as const

const props = defineProps({
  effect: {
    type: String as PropType<keyof typeof effects>,
    default: 'default',
  },
})

const effect = computed(() => effects[props.effect])
const target = ref<HTMLElement>()

let animation: AnimationControls
onMounted(() => {
  if (!target.value) return
  animation = animate(target.value, ...effect.value)
  animation.pause()
})

onElementInView(target, () => {
  animation?.play()
})
</script>
<template>
  <div ref="target">
    <slot />
  </div>
</template>
