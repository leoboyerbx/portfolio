<script setup lang="ts"></script>
<template>
  <header
    class="w-full bg-slate-900 min-h-100vh py-18 text-white flex flex-col"
  >
    <!-- <div class="absolute top-1c right-1c text-xs font-extrabold opacity-50">
      <LanguageSwitcher />
    </div> -->
    <div class="grid grid-cols-14 md:h-50vh">
      <h1
        class="font-black leading-110% self-end"
        col="start-2 span-12"
        md:col="start-3 span-10"
        text="12 md:6vw"
      >
        <span class=""
          >👋 <br class="sm:hidden" />{{ $t('hi') }}
          <span class="text-theme">Léo</span>,</span
        >
        <br />
        <span>a <span class="text-sky-500">creative</span> developer.</span>
      </h1>
    </div>
    <div class="grid grid-cols-14 mt-16 md:mt-1/2c">
      <p
        class="text-xl max-w-72 font-light mb-4"
        col="start-2 span-10"
        md:col="start-3 span-10"
      >
        {{ $t('wip') }}
      </p>
      <Contacts col="start-2 span-10" md:col="start-3 span-8" />
    </div>
  </header>
</template>
