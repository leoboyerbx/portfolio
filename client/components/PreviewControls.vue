<script setup lang="ts">
const { enabled, refresh, autoRefresh } = usePreview()

const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  handle,
})
</script>
<template>
  <div
    v-if="enabled"
    ref="el"
    :style="style"
    class="fixed m-6 flex items-center border border-slate-600 rounded bg-gray-900 py-2 pl-3 pr-4 transition-opacity"
    hover="opacity-100"
  >
    <button
      ref="handle"
      class="flex cursor-grab border border-transparent rounded py-1.5 text-14px transition active:cursor-grabbing hover:bg-white/20"
      @click="autoRefresh = !autoRefresh"
    >
      <span class="i-uil:draggabledots"></span>
    </button>
    <span class="pl-2 pr-3 text-sm"> Preview mode enabled </span>

    <button
      class="flex border border-transparent rounded p-1.5 transition hover:bg-white/20"
      :class="
        autoRefresh ? 'border-white/50 bg-white/10' : 'border-transparent'
      "
      @click="autoRefresh = !autoRefresh"
    >
      <span class="i-uil:cloud-redo"></span>
    </button>
    <button
      class="flex border border-transparent rounded p-1.5 transition hover:bg-white/20"
      @click="refresh"
    >
      <span class="i-uil:redo"></span>
    </button>
    <button
      class="flex border border-transparent rounded p-1.5 transition hover:bg-white/20"
      @click="enabled = false"
    >
      <span class="i-uil:times-circle"></span>
    </button>
  </div>
</template>
