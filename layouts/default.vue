<script setup>
const { locale } = useI18n()
const transitions = useTransitionsStore()
</script>

<template>
  <div>
    <Html :lang="locale">
      <Head>
        <Title>Léo Boyer - Creative Developer</Title>
        <Meta
          name="desription"
          content="I'm Léo, a creative and curious developer. Currently working at Wanaka, Annecy FR."
        />
      </Head>
      <Body>
        <MainNav />
        <div class="relative min-h-100vh flex flex-col overflow-clip">
          <img
            src="~/assets/img/hero.webp"
            alt=""
            class="pointer-events-none absolute left-0 block h-300vh w-full blur -top-6"
          />
          <img
            src="~/assets/img/hero.webp"
            alt=""
            class="pointer-events-none absolute left-0 z-0 block h-200vh w-full rotate-180 blur grayscale transition-opacity duration-600 -bottom-6"
            :class="
              transitions.isTransitionningToProject ? 'opacity-0' : 'opacity-80'
            "
          />
          <main class="relative z-10">
            <slot />
          </main>
          <Footer class="mt-auto" />
        </div>
      </Body>
    </Html>
  </div>
</template>
