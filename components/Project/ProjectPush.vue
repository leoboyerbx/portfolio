<script setup lang="ts"></script>
<template>
  <NuxtLink class="group" to="/projects/journiz">
    <article
      class="grid-centered-8 flex flex-col gap-6 md:(flex-row group-even:flex-row-reverse)"
    >
      <header class="md:w-1/2">
        <img
          src="~/assets/img/journiz.webp"
          alt=""
          class="aspect-16/10 border border-slate-400/50 rounded-lg object-cover opacity-80"
        />
      </header>
      <section class="flex flex-col justify-end">
        <h3 class="text-3xl font-bold md:text-5xl">Journiz</h3>
        <p class="font-light lt-md:text-sm">Reinventing school trips</p>
      </section>
    </article>
  </NuxtLink>
</template>
