<script lang="ts">
export const registerGalleryImageKey = Symbol('registerGalleryImage') as InjectionKey<() => {
    visible: Ref<boolean>
    transitionDelay: string
}>
</script>

<script setup lang="ts">
const { target, inView } = useProjectElementInView()

const imageCount = ref(0)
function registerGalleryImage() {
    const index = imageCount.value
    imageCount.value++

    const transitionDelay = `${index * 100}ms`

    return {
        visible: inView,
        transitionDelay,
    }
}

provide(registerGalleryImageKey, registerGalleryImage)
</script>

<template>
  <div ref="target" class="gallery grid grid-cols-8 gap-4">
    <slot></slot>
  </div>
</template>
