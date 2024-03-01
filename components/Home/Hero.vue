<script setup lang="ts">
const { intro } = await useStaticData()
</script>
<template>
  <header class="min-h-100vh w-full flex flex-col pb-16 pt-36">
    <!-- <div class="absolute top-1c right-1c text-xs font-extrabold opacity-50">
      <LanguageSwitcher />
    </div> -->
    <div class="grid grid-cols-14 md:h-40vh">
      <HeroText />
    </div>
    <div class="grid grid-cols-14 mt-16 md:mt-1/2c">
      <div
        class="intro mb-8 max-w-72 flex flex-col gap-3"
        col="start-2 span-10"
        md:col="start-3 span-10"
        text="lg 2xl:xl"
        font="serif extralight"
        v-html="intro"
      ></div>
      <Contacts
        col="start-2 span-10"
        md:col="start-3 span-4"
        class="text-24px"
      />
    </div>
  </header>
</template>
<style>
.intro a {
  text-decoration: underline !important;
}
</style>
