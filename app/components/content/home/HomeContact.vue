<script setup lang="ts">
useChildrenIndexParent()
</script>

<template>
  <section id="contact" class="leaving-item pnk-grid pb-6 mb-1c">
    <header class="grid-centered-8">
      <ScrollReveal class="mb-16">
        <h2
          class="section-title text-center"
        >
          <slot name="title"></slot>
        </h2>
      </ScrollReveal>
    </header>
    <article class="grid-centered-8 flex flex-wrap justify-center gap-5">
      <slot name="links"></slot>
    </article>
  </section>
</template>
