<script setup lang="ts">
const { target } = useStaggerRevealParent(i => `${i * 100}ms`)

const { next, prev } = useGallery({ loop: true })
onKeyStroke('ArrowRight', () => next())
onKeyStroke('ArrowLeft', () => prev())
</script>

<template>
  <div ref="target" class="gallery grid grid-cols-8 gap-4">
    <slot></slot>
  </div>
</template>
