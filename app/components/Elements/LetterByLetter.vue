<script setup lang="ts">
const { text } = defineProps<{
    text: string
}>()

const letters = computed(() => [...text.replaceAll(' ', ' ')]) // This weird split is to avoid issues with emoji handling on server side, see -> https://stackoverflow.com/questions/24531751/how-can-i-split-a-string-containing-emoji-into-an-array

const { animationDelay } = useLetterByLetter(letters.value.length)
</script>

<template>
  <span class="inline-block">
    <span
      v-for="(letter, index) in letters"
      :key="index"
      class="letter-reveal"
      :style="{ animationDelay: animationDelay(index) }"
    >{{ letter }}</span>
  </span>
</template>

<style>
.letter-reveal {
    display: inline-block;
    animation: reveal-letter 250ms theme('easing.power2-out') both;
}
@keyframes reveal-letter {
  from {
    transform: translateY(-16px) scale(0.98);
    opacity: 0;
  }
}
</style>
