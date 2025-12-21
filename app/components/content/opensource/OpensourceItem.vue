<script setup lang="ts">
const { url } = defineProps<{
    url: string
}>()

const { t } = useI18n()
const innerDescription = ref<HTMLElement>()
const descriptionHeight = ref('24px')
function updateHeight() {
    if (!innerDescription.value)
        return
    descriptionHeight.value = `${innerDescription.value.clientHeight}px`
}
onMounted(updateHeight)
useEventListener('resize', updateHeight)
</script>

<template>
  <a
    :href="url"
    class="group relative block flex flex-col border-b border-slate-500 px-4 py-2 first:border-t"
    target="_blank"
    :title="t('openSource.seeProject')"
  >
    <span class="push-header flex items-center justify-between">
      <span class="name">
        <slot name="name" mdc-unwrap="p"></slot>
      </span>
      <Icon
        name="i-uil:arrow-up-right"
        class="block text-24px text-slate-100/70 transition duration-300 group-hover:(translate-x-1 text-slate-50 -translate-y-1)"
      />
    </span>
    <span
      class="outer-description overflow-clip text-slate-400 font-extralight transition-all duration-500"
    >
      <span ref="innerDescription" class="block pb-1 pr-6">
        <slot name="description" mdc-unwrap="p"></slot>
      </span>
    </span>
  </a>
</template>

<style>
.push-header .name {
  @apply text-3xl text-slate-100/70 transition duration-300 group-hover:text-slate-50 font-serif font-medium;
}
@screen md {
  .outer-description {
    height: 0;
  }
  a:hover .outer-description {
    height: v-bind(descriptionHeight);
  }
}
</style>
