<script setup lang="ts">
const props = defineProps<{
  src: string
  thumb?: string
  alt: string
}>()
const thumbUrl = computed(() => props.thumb || props.src)
const isOpen = ref(false)
const hasMoved = ref(false)
const open = () => {
  isOpen.value = true
}
const close = () => {
  hasMoved.value = false
  isOpen.value = false
}
onKeyStroke('Escape', close)
</script>
<template>
  <a :href="src" target="_blank" class="relative" @click.prevent="open()">
    <img :src="thumbUrl" :alt="alt" class="h-full w-full" />
    <teleport to="body">
      <transition name="lightbox">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-100 h-full w-full flex items-center justify-center bg-slate-950/70"
          @click="close"
          @mousemove="hasMoved = true"
        >
          <img :src="src" :alt="alt" class="h-8/10 w-8/10 object-contain" />
          <transition>
            <button
              v-if="hasMoved"
              class="absolute left-4 top-4 flex items-center gap-2 text-sm"
              @click="close"
            >
              <span class="kbd">Esc</span>
              <span>Close</span>
            </button>
          </transition>
        </div>
      </transition>
    </teleport>
  </a>
</template>
<style scoped lang="scss">
.lightbox-enter-active,
.lightbox-leave-active {
  &,
  img {
    transition: all 0.15s ease;
  }
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
  img {
    transform: scale(0.95) translateY(20px);
  }
}
</style>
