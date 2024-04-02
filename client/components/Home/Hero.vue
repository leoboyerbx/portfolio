<script setup lang="ts">
const { intro } = await useHomepage()
const mounted = useMounted()
</script>
<template>
  <header class="min-h-100vh w-full flex flex-col pb-16 pt-36">
    <div
      class="grid grid-cols-14 md:h-40vh"
      :class="
        mounted
          ? 'delay-200 transition duration-600 ease-power4-out'
          : 'transform translate-y-8 opacity-0'
      "
    >
      <HeroText col="start-2 span-12" md:col="start-3 span-11" />
    </div>
    <div
      class="grid grid-cols-14 mt-16 md:mt-1/2c"
      :class="
        mounted
          ? 'delay-300 transition duration-600 ease-power4-out'
          : 'transform translate-y-8 opacity-0'
      "
    >
      <div
        col="start-2 span-10"
        md:col="start-3 span-10"
        class="intro mb-8 max-w-72 flex flex-col gap-3"
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
