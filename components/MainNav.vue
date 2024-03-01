<script setup lang="ts">
import { getLenis } from '~/plugins/lenis.client'

const links: Record<string, string> = {
  hero: 'Home',
  projects: 'Projects',
  openSource: 'Open Source',
  contact: 'Contact',
}
const scrollTo = (linkId: string) => {
  const target = document.getElementById(linkId)
  if (!target) return
  getLenis().scrollTo(target, {
    offset: -128,
    duration: 1,
    easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  })
}
const { y } = useWindowScroll()
const scrolled = ref(false)
watch(y, (y) => {
  scrolled.value = y > 0
})

const route = useRoute()
const isHome = computed(() => route.meta.isHomePage)

const navEl = ref<HTMLElement>()
const menuEl = ref<HTMLElement>()
const backEl = ref<HTMLElement>()
const { width: menuWidth } = useElementBounding(menuEl)
const { width: backWidth } = useElementBounding(backEl)

const width = computed(() => {
  if (!navEl.value) return 0
  return isHome.value ? menuWidth.value : backWidth.value
})

const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>
<template>
  <div class="pointer-events-none fixed left-0 top-0 z-1000 w-full px-8 py-7">
    <nav
      ref="navEl"
      class="nav-transition pointer-events-auto absolute h-14 flex items-center overflow-clip border rounded-full"
      :style="{
        width: `${width}px`,
        left: isHome ? '50%' : '24px',
        transform: isHome ? 'translateX(-50%)' : 'none',
      }"
      :class="[
        scrolled || !isHome
          ? 'border-slate-400/50 bg-slate-400/20 backdrop-blur-xl'
          : ' border-transparent',
      ]"
    >
      <!-- <transition mode="out-in"> -->
      <button
        ref="backEl"
        to="/"
        class="child-transition block flex-shrink-0 px-3.5"
        :style="{
          transform: isHome ? `translateX(-${backWidth}px)` : '',
        }"
        @click="goBack"
      >
        <span class="i-uil:arrow-left block text-28px"></span>
      </button>
      <ul
        ref="menuEl"
        class="child-transition flex flex-shrink-0 items-center gap-12 px-8"
        :style="{
          transform: isHome ? `translateX(-${backWidth}px)` : '',
        }"
      >
        <li
          v-for="(title, linkId) in links"
          :key="linkId"
          class="flex-shrink-0"
        >
          <a
            :href="'#' + linkId"
            class="text-slate-100/80 font-medium"
            @click.prevent="scrollTo(linkId)"
          >
            {{ title }}
          </a>
        </li>
      </ul>
      <!-- </transition> -->
    </nav>
  </div>
</template>
<style scoped lang="scss">
$duration: 0.5s;
$ease: theme('easing.power4-in-out');
.nav-transition {
  transition:
    transform $duration $ease,
    width $duration $ease,
    left $duration $ease,
    background-color 0.2s,
    border-color 0.2s;
}
.child-transition {
  transition: transform $duration $ease;
}
</style>
