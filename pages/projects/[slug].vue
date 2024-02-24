<script setup lang="ts"></script>
<template>
  <div class="mb-36 flex flex-col gap-32">
    <header class="pnk-grid pt-1c">
      <img
        src="~/assets/img/journiz.webp"
        alt=""
        class="row-start-1 aspect-16/10 border border-slate-300/50 rounded-lg object-cover opacity-90"
        col="start-2 span-8"
      />
      <div
        class="relative row-start-1 flex flex-col items-end self-end my-1c"
        col="start-7 span-6"
      >
        <h1 class="text-9vw font-black leading-120%">Journiz</h1>

        <p class="pl-8 text-5 font-light font-serif ml-2c">
          Reinventing school trips
        </p>
      </div>
    </header>
    <section class="pnk-grid">
      <div class="prose mt-12" col="start-3 span-5">
        <p>
          Magna veniam est pariatur eu aliquip dolore cillum nostrud incididunt
          elit occaecat. Irure minim ea reprehenderit in elit deserunt ea
          excepteur anim proident nisi sunt <strong>fugiat</strong> enim ad.
          Ipsum consectetur eu anim occaecat quis exercitation eu. Veniam velit
          adipisicing duis nisi reprehenderit aute. Incididunt ex excepteur
          dolore ad irure labore reprehenderit consequat officia ut enim ipsum
          culpa. Sint magna ad reprehenderit sunt nostrud mollit reprehenderit
          elit occaecat excepteur officia enim dolore. Nisi Lorem ut eu amet
          nostrud eiusmod est incididunt commodo labore. Cupidatat occaecat
          irure tempor incididunt ea id.
        </p>
      </div>
      <div col="start-9 span-4" class="flex flex-col items-start">
        <h2 class="mb-4 text-8 font-bold">On this project</h2>
        <ul class="flex flex-col gap-1 text-sm font-thin font-serif">
          <li>Design Process & UX</li>
          <li class="my-2 h-px w-full bg-current opacity-50"></li>
          <li>Mobile Developement</li>
          <li>Web Developement</li>
          <li>Backend</li>
          <li>Ops</li>
          <li class="my-2 h-px w-full bg-current opacity-50"></li>
          <li>Video Production</li>
          <li>Editing</li>
        </ul>
      </div>
    </section>
    <section class="pnk-grid">
      <h2 class="grid-centered-8 mb-8 text-center text-12 font-bold">
        Watch the teaser
      </h2>
      <div class="grid-centered-8">
        <EmbedPlayer
          class="w-full"
          url="https://www.youtube.com/embed/e0KKXw5cIjg"
          thumbnail-url="https://i3.ytimg.com/vi/e0KKXw5cIjg/maxresdefault.jpg"
        />
      </div>
    </section>
  </div>
</template>
<style></style>
