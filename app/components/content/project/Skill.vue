<script setup lang="ts">
const { visible, transitionDelay } = useStaggerRevealChild()

const transition = 'transition-all duration-1000 ease-power4-out'
</script>

<template>
  <li
    :class="
      visible ? `opacity-100 ${transition}` : 'opacity-0 translate-y-8'
    "
    :style="{ transitionDelay }"
  >
    <slot></slot>
  </li>
</template>
