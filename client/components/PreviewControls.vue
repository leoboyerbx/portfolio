<script setup lang="ts">
const { enabled, refresh } = usePreview()
</script>
<template>
  <div
    v-if="enabled"
    class="fixed bottom-0 right-0 m-6 flex items-center gap-1 border border-slate-400/50 rounded bg-slate-800/40 px-4 py-2 opacity-50 transition-opacity"
    hover="opacity-80"
  >
    <span class="pr-2 text-sm"> Preview mode enabled </span>

    <button
      class="flex rounded p-1.5 transition hover:bg-white/20"
      @click="refresh"
    >
      <span class="i-uil:redo"></span>
    </button>
    <button
      class="flex rounded p-1.5 transition hover:bg-white/20"
      @click="enabled = false"
    >
      <span class="i-uil:times-circle"></span>
    </button>
  </div>
</template>
