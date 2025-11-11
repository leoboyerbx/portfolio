<script setup lang="ts">
const props = defineProps<{
    src: string
    thumb?: string
    alt: string
}>()

const { t } = useI18n()
const thumbUrl = computed(() => props.thumb || props.src)
const galleryItem = useGalleryItem()
const hasMoved = ref(false)
whenever(() => !galleryItem.isOpen.value, () => {
    hasMoved.value = false
})

onKeyStroke('Escape', galleryItem.close)
</script>

<template>
  <a
    :href="src"
    target="_blank"
    class="relative"
    :title="t('fullscreen')"
    @click.prevent="galleryItem.open()"
  >
    <NuxtImg
      :src="thumbUrl"
      :alt="alt"
      class="h-full w-full"
      height="1200"
    />
    <teleport to="body">
      <transition name="lightbox">
        <div
          v-if="galleryItem.isOpen.value"
          class="fixed inset-0 z-100 h-full w-full flex items-center justify-center bg-slate-950/70"
          @click="galleryItem.close()"
          @mousemove="hasMoved = true"
        >
          <NuxtImg
            :src="src"
            :alt="alt"
            class="h-8/10 w-8/10 object-contain"
            height="1200"
          />
          <button
            class="absolute right-4 top-4 flex items-center gap-2 text-sm transition duration-200"
            :class="hasMoved ? 'opacity-80 hover:opacity-100' : 'md:opacity-0'"
            @click="galleryItem.close()"
          >
            <span class="text-xs text-slate-100 font-bold">{{
              t('close')
            }}</span>
            <span class="kbd">Esc</span>
          </button>
          <div v-if="galleryItem.isInGallery" class="pointer-events-none absolute inset-0 flex items-center justify-between gap-2 px-8">
            <button class="btn-animation pointer-events-auto disabled:opacity-50" :disabled="!galleryItem.canGoPrev.value" @click.stop="galleryItem.prev()">
              <Icon name="i-uil:arrow-left" class="block text-36px" />
            </button>
            <button class="btn-animation pointer-events-auto disabled:opacity-50" :disabled="!galleryItem.canGoNext.value" @click.stop="galleryItem.next()">
              <Icon name="i-uil:arrow-right" class="block text-36px" />
            </button>
          </div>
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
