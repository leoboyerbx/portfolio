<script script setup lang="ts">
const { enabled, refresh } = usePreview()
</script>
<template>
  <NuxtLayout>
    <div
      class="fixed bottom-0 right-0 bg-slate-800/30 border m-6 border-slate-100/50 py-4 px-8 flex flex-col items-center gap-2 rounded"
      v-if="enabled"
    >
      <span> Preview mode enabled </span>
      <footer class="flex -mx-2 gap-2">
        <Button @click="refresh">Refresh</Button>
        <Button @click="enabled = false">Disable</Button>
      </footer>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>
#
