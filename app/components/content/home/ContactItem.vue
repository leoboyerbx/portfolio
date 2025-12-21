<script setup lang="ts">
const { url, newTab } = defineProps<{
    url: string
    newTab?: boolean
}>()
const i = useChildIndex()

let displayUrl = url
if (url === '$resume') {
    const global = await useGlobal()
    displayUrl = global.value?.resume.file || url
}
</script>

<template>
  <ScrollReveal
    :delay="i * 0.15"
  >
    <Button :href="displayUrl" :target="newTab ? '_blank' : undefined" tag="a">
      <slot mdc-unwrap="p" />
    </Button>
  </ScrollReveal>
</template>
