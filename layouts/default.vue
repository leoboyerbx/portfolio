<script setup>
const { locale } = useI18n()
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
        <slot />
      </Body>
    </Html>
  </div>
</template>
