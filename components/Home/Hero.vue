<script setup lang="ts"></script>
<template>
  <header class="min-h-100vh w-full flex flex-col py-16">
    <!-- <div class="absolute top-1c right-1c text-xs font-extrabold opacity-50">
      <LanguageSwitcher />
    </div> -->
    <div class="grid grid-cols-14 md:h-40vh">
      <HomeHeroText />
    </div>
    <div class="grid grid-cols-14 mt-16 md:mt-1/2c">
      <p
        class="mb-8 max-w-72 font-extralight"
        text="lg 2xl:xl"
        font="serif extralight"
        col="start-2 span-10"
        md:col="start-3 span-10"
      >
        {{ $t('intro') }}
      </p>
      <Contacts col="start-2 span-10" md:col="start-3 span-4" />
    </div>
  </header>
</template>
