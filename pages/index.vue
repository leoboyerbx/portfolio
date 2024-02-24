<script setup lang="ts"></script>
<template>
  <div class="relative overflow-clip">
    <img
      src="~/assets/img/hero.webp"
      alt=""
      class="pointer-events-none absolute left-0 block h-300vh w-full blur -top-6"
    />
    <img
      src="~/assets/img/hero.webp"
      alt=""
      class="pointer-events-none absolute left-0 z-0 block h-200vh w-full rotate-180 opacity-80 blur grayscale -bottom-6"
    />
    <Hero class="relative z-10" />
    <main class="relative z-10 flex flex-col gap-64">
      <ProjectList />
      <OpenSourceList />
      <ContactPush />
    </main>
    <Footer />
  </div>
</template>
