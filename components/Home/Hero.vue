<script setup lang="ts"></script>
<template>
  <header class="min-h-100vh w-full flex flex-col py-16">
    <!-- <div class="absolute top-1c right-1c text-xs font-extrabold opacity-50">
      <LanguageSwitcher />
    </div> -->
    <div class="grid grid-cols-14 md:h-40vh">
      <HeroText />
    </div>
    <div class="grid grid-cols-14 mt-16 md:mt-1/2c">
      <div
        class="mb-8 max-w-72 flex flex-col gap-3"
        col="start-2 span-10"
        md:col="start-3 span-10"
        text="lg 2xl:xl"
        font="serif extralight"
      >
        <p>
          {{ $t('intro') }}
        </p>
        <p>
          Currently working at
          <a href="https://www.wanaka.studio" class="underline">Wanaka</a>
        </p>
      </div>
      <Contacts
        col="start-2 span-10"
        md:col="start-3 span-4"
        class="text-24px"
      />
    </div>
  </header>
</template>
