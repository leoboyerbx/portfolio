import { getLenis } from '~/plugins/lenis.client'

export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.isProjectPage) {
  } else {
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
  }
})
