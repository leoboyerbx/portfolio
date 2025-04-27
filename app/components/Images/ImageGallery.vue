<script lang="ts">
export const registerGalleryImageKey = Symbol('registerGalleryImage') as InjectionKey<() => {
    visible: Ref<boolean>
    transitionDelay: string
}>
</script>

<script setup lang="ts">
const { target } = useStaggerRevealParent(i => `${i * 100}ms`)
</script>

<template>
  <div ref="target" class="gallery grid grid-cols-8 gap-4">
    <slot></slot>
  </div>
</template>
