<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="relative pnk-grid pb-12 pt-24">
    <div class="grid-centered-12 flex items-center">
      <div class="flex items-center gap-1 text-sm">
        © {{ currentYear }} -
        <a
          href="https://pnk.studio/"
          class="mb-px flex items-center gap-1 text-slate-500 font-extrabold transition duration-200 hover:text-slate-50"
          target="_blank"
        >
          <span class="i-uil:mountains-sun mb-0.5 inline-block text-lg"></span>
          <span>pnk.studio</span>
        </a>
      </div>
      <a
        class="ml-auto flex items-center text-sm font-medium opacity-50 transition duration-200 hover:opacity-100"
      >
        <span class="i-uil:file-alt mr-1 block"></span> CV
      </a>
      <span class="mx-4">-</span>
      <Contacts class="text-18px" :show-phone="true" />
    </div>
  </footer>
</template>
