<script setup lang="ts"></script>
<template>
  <section class="pnk-grid w-full">
    <h2 class="section-title grid-centered-8 mb-36 text-center">Projects</h2>
    <div class="grid-centered-8 flex flex-col gap-36">
      <ProjectPush v-for="i in 4" :key="i"></ProjectPush>
    </div>
  </section>
</template>
