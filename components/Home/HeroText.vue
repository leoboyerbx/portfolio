<script setup lang="ts">
import isVowel from '~/utils/isVowel'
const texts = ['creative', 'curious', 'angry']
const textWidths = ref<number[]>([])
const textElements = ref<HTMLElement[]>()
const currentText = ref(0)
const currentTextWidth = computed(() => {
  return textWidths.value[currentText.value] ?? 0
})

const isComputingWidth = ref(false)
const computeWidths = async () => {
  if (!textElements.value) return
  isComputingWidth.value = true
  // await new Promise((resolve) => setTimeout(resolve, 0))
  await nextTick()
  for (let i = 0; i < textElements.value.length; i++) {
    textWidths.value[i] = textElements.value[i].offsetWidth
  }
  isComputingWidth.value = false
}
onMounted(() => {
  computeWidths()
})
useEventListener('resize', useDebounceFn(computeWidths, 500))

useIntervalFn(() => {
  currentText.value = (currentText.value + 1) % texts.length
}, 3000)
</script>
<template>
  <h1
    class="flex flex-col items-start self-end font-black leading-110%"
    text="12 md:6vw"
  >
    <span class="line" style="--line-index: 0">
      <span class="line-content">
        👋 <br class="sm:hidden" />Hi, I'm <span class="text-theme">Léo</span>,
      </span>
    </span>
    <span class="line" style="--line-index: 1">
      <span class="line-content">
        <span class="mr-0.25em">a</span>
        <span
          class="relative inline-block transition-all duration-300"
          :style="{ width: currentTextWidth + 'px' }"
        >
          <span
            v-for="(text, i) in texts"
            :key="text[1]"
            ref="textElements"
            class="left-0 top-0 items-baseline whitespace-nowrap transition duration-200"
            :class="[
              i === texts.length - 1 ? 'relative' : 'absolute',
              currentText === i ? 'opacity-100 delay-200' : 'opacity-0',
            ]"
          >
            <span v-if="isVowel(text[0])" class="mr-0.25em -ml-0.25em">n</span>
            <TextEffect
              class="from-red-600 to-indigo-600 bg-gradient-to-r bg-clip-text text-white/30"
              :text="text"
              effect="wave"
            ></TextEffect>
          </span>
        </span>
        developer.
      </span>
    </span>
  </h1>
</template>
<style scoped>
/* .line {
  display: block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.line-content {
  display: block;
  animation: enter-line 0.6s theme('easing.power4-out') both;
  --base-delay: 0.5s;
  animation-delay: calc(var(--base-delay) + var(--line-index) * 0.09s);
}
@keyframes enter-line {
  from {
    transform: translateY(100%);
  }
} */
</style>
