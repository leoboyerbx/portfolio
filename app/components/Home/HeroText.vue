<script setup lang="ts">
import isVowel from '~/utils/isVowel'

export interface HeroTextProps {
    beforeName: string
    name: string
    afterName: string
    beforeAdj: string
    vowelPrefix?: string
    afterAdj: string
    adjectives: {
        text: string
        color1: string
        color2: string
        effect: 'wave' | 'shake' | 'blurry'
    }[]
}

const props = defineProps<{
    hero: HeroTextProps
}>()

const { locale } = useI18n()

const texts = computed(() => props.hero.adjectives ?? [])

const defaultTextWidth = locale.value === 'fr' ? '19vw' : '25.5vw' // Default values for ssr on 1080p
const textWidths = ref<string[]>([])
const textElements = ref<HTMLElement[]>()
const currentText = ref(0)
const currentTextWidth = computed(() => {
    return textWidths.value[currentText.value] ?? defaultTextWidth
})

const isResizing = ref(true)
async function computeWidths() {
    if (!textElements.value)
        return
    isResizing.value = true
    // await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()
    for (let i = 0; i < textElements.value.length; i++) {
        textWidths.value[i] = textElements.value[i]?.offsetWidth ? `${textElements.value[i]?.offsetWidth}px` : defaultTextWidth
    }
    isResizing.value = false
}

onMounted(() => {
    computeWidths()
})
useEventListener('resize', () => {
    computeWidths()
})

useTimeoutFn(() => {
    useIntervalFn(() => {
        currentText.value = (currentText.value + 1) % texts.value.length
    }, 3000)
}, 1000) // Delay before starting the loop, for the text reveal to have the time to happen

useLetterByLetterParent(i => `${200 + i * 30}ms`)
</script>

<template>
  <h1
    class="flex flex-col items-start self-end font-black leading-110%"
    text="12 md:6vw"
  >
    <span>
      <LetterByLetter text="👋" /> <br class="sm:hidden"><LetterByLetter :text="hero.beforeName" /> <LetterByLetter class="text-theme" :text="hero.name" /><LetterByLetter :text="hero.afterName" />
    </span>
    <span>
      <LetterByLetter :text="hero.beforeAdj" class="mr-0.25em" /><br
        v-if="locale === 'fr'"
        class="sm:hidden"
      >
      <span
        class="relative inline-block"
        :style="{
          width: currentTextWidth,
          transition: isResizing ? 'none' : 'width 0.3s',
        }"
      >
        <span
          v-for="(text, i) in texts"
          :key="text.text[1]"
          ref="textElements"
          class="left-0 top-0 items-baseline whitespace-nowrap"
          :class="[
            i === texts.length - 1 ? 'relative' : 'absolute',
            currentText === i ? '' : 'pointer-events-none select-none',
          ]"
        >
          <LetterByLetter
            v-if="!!hero.vowelPrefix && isVowel(text.text[0])"
            :text="hero.vowelPrefix ?? ''"
            class="mr-0.25em transition-opacity duration-200 -ml-0.25em"
            :class="[
              currentText === i ? 'opacity-100' : 'opacity-0 delay-50',
            ]"
          />
          <TextEffect
            class="transition-opacity"
            :class="[
              currentText === i ? 'opacity-100 delay-200' : 'opacity-0',
            ]"
            :text="text.text + (hero.afterAdj === '.' ? '' : ' ')"
            :colors="[text.color1, text.color2]"
            :effect="text.effect"
            :letter-by-letter="i === 0"
          />
        </span>
      </span>
      <LetterByLetter :text="hero.afterAdj" />
    </span>
  </h1>
</template>

<style>
.mr-space::after {
    content: ' ';
}
</style>
