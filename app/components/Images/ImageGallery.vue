<script setup lang="ts">
const { target } = useStaggerRevealParent(i => `${i * 100}ms`)

useGallery({ loop: true })
</script>

<template>
  <div ref="target" class="gallery grid grid-cols-8 gap-4">
    <slot></slot>
  </div>
</template>
