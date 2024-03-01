import { getLenis } from '~/plugins/lenis.client'

export default defineNuxtRouteMiddleware((to) => {
  to.meta.pageTransition = {
    name: 'page',
    mode: 'out-in',
    onBeforeLeave() {
      getLenis().stop()
    },
    onAfterEnter() {
      getLenis().start()
    },
  }
})
