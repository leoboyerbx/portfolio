<script setup lang="ts">
import type { OpenSourceWork } from '~/types/apiTypes'

defineProps<{
  work: OpenSourceWork
}>()
const innerDescription = ref<HTMLElement>()
const descriptionHeight = ref(24)
const updateHeight = () => {
  if (!innerDescription.value) return
  descriptionHeight.value = innerDescription.value.clientHeight
}
onMounted(updateHeight)
useEventListener('resize', updateHeight)
</script>
<template>
  <a
    :href="work.url"
    class="group relative block flex flex-col border-b border-slate-500 px-4 py-2 first:border-t"
  >
    <span class="flex items-center justify-between">
      <span
        class="text-3xl text-slate-100/70 transition duration-300 group-hover:text-slate-50"
        font="serif medium"
      >
        {{ work.name }}
      </span>
      <span
        class="i-uil:arrow-up-right block text-24px text-slate-100/70 transition duration-300 group-hover:(translate-x-1 text-slate-50 -translate-y-1)"
      ></span>
    </span>
    <span
      class="outer-description h-0 overflow-clip text-slate-400 font-extralight transition-all duration-500"
    >
      <span ref="innerDescription" class="block pb-1 pr-6">
        {{ work.description }}
      </span>
    </span>
  </a>
</template>
<style scoped>
.group:hover .outer-description {
  height: v-bind(descriptionHeight + 'px');
}
</style>
