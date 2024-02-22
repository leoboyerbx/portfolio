<script setup lang="ts"></script>
<template>
  <header class="w-full bg-slate-900 h-100vh text-white flex flex-col">
    <div class="grid grid-cols-14 h-50vh">
      <h1
        class="font-black text-6vw leading-110% self-end"
        col="start-3 span-11"
      >
        <span class="">Hi, I'm <span class="text-theme">Léo</span>,</span>
        <br />
        <span>an creative developer.</span>
      </h1>
    </div>
    <div class="grid grid-cols-14 mt-1/2c">
      <p class="text-xl max-w-72 font-light" col="start-3 span-10">
        This portfolio site is currently being redesigned. It will be back soon
        !
      </p>
    </div>
    <div class="grid grid-cols-14 mt-1c">
      <Contacts />
    </div>
  </header>
</template>
