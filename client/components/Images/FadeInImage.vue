<script lang="ts" setup>
import type { NuxtImg } from '#components'

const loaded = ref(false)
function onLoad() {
  loaded.value = true
}
</script>

<template>
  <NuxtImg
    class="transition duration-200"
    :class="loaded ? 'opacity-100' : 'opacity-0'"
    @load="onLoad"
  />
</template>
