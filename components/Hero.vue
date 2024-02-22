<script setup lang="ts"></script>
<template>
  <header
    class="w-full bg-slate-900 min-h-100vh py-18 text-white flex flex-col"
  >
    <!-- <div class="absolute top-1c right-1c text-xs font-extrabold opacity-50">
      <LanguageSwitcher />
    </div> -->
    <div class="grid grid-cols-14 md:h-40vh">
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
        <span
          >a
          <span class="text-sky-500">creative</span>
          developer.</span
        >
      </h1>
    </div>
    <div class="grid grid-cols-14 mt-16 md:mt-1/2c">
      <p
        class="text-lg max-w-72 font-extralight mb-4"
        font="serif extralight"
        col="start-2 span-10"
        md:col="start-3 span-10"
      >
        {{ $t('wip') }}
      </p>
      <Contacts col="start-2 span-10" md:col="start-3 span-4" />
      <div
        class="flex flex-col font-serif font-extralight group text-sm"
        col="start-9 end-13"
      >
        <p
          class="opacity-50 transition duration-200 group-hover:(opacity-100 duration-1600)"
        >
          Or, If you don't fear <i>very</i> old stuff,
          <span class="line-through">broken links</span>,
          <span class="opacity-50"> awfully cringe short films </span> and
          <span class="font-sans font-semibold italic font-serif">French</span>
          language, then
        </p>
        <a
          href="https://old.leoboyer.fr/"
          target="_blank"
          class="flex items-center gap-1 hover:underline"
        >
          <span class="i-uil:external-link-alt inline-block"></span>
          off you go to the old site&nbsp;!
        </a>
      </div>
    </div>
  </header>
</template>
