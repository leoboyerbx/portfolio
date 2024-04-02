<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="relative pnk-grid pb-12 pt-36">
    <div
      class="grid-centered-10 flex items-center border border-slate-500/50 rounded-full from-indigo-600/10 to-yellow-200/10 bg-gradient-to-r px-8 py-4 backdrop-blur-xl"
    >
      <!-- older variant: class="grid-centered-8 flex items-center" -->
      <div class="flex items-center gap-1 text-sm">
        © {{ currentYear }} -
        <a
          href="https://pnk.studio/"
          class="mb-px flex items-center gap-1 text-slate-400 font-extrabold transition duration-200 hover:(text-slate-50 underline)"
          target="_blank"
        >
          <span class="i-uil:mountains-sun mb-0.5 inline-block text-lg"></span>
          <span>pnk.studio</span>
        </a>
      </div>
      <a
        :href="`/api/resume.pdf?locale=${$i18n.locale}`"
        target="_blank"
        class="ml-auto flex items-center text-sm font-medium opacity-50 transition duration-200 hover:opacity-100"
      >
        <span class="i-uil:file-alt mr-1 block"></span> CV
      </a>
      <span class="mx-4">-</span>
      <Contacts class="text-18px" :show-phone="true" />
    </div>
  </footer>
</template>
