<script setup lang="ts"></script>
<template>
  <h1
    class="font-black leading-110% self-end flex flex-col items-start"
    col="start-2 span-12"
    md:col="start-3 span-10"
    text="12 md:6vw"
  >
    <span class="line" style="--line-index: 0">
      <span class="line-content">
        👋 <br class="sm:hidden" />Hi, I'm <span class="text-theme">Léo</span>,
      </span>
    </span>
    <span class="line" style="--line-index: 1">
      <span class="line-content">
        a
        <span
          class="bg-gradient-to-r from-red-600 to-indigo-600 text-white/30 bg-clip-text"
          >curious</span
        >
        developer.
      </span>
    </span>
  </h1>
</template>
<style scoped>
/* .line {
  display: block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.line-content {
  display: block;
  animation: enter-line 0.6s theme('easing.power4-out') both;
  --base-delay: 0.5s;
  animation-delay: calc(var(--base-delay) + var(--line-index) * 0.09s);
}
@keyframes enter-line {
  from {
    transform: translateY(100%);
  }
} */
</style>
