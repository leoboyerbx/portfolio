import { getLenis } from '~/plugins/lenis.client'

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.meta.isProjectPage) {
    from.meta.pageTransition = {
      name: 'toProject',
      css: false,
      onBeforeLeave() {
        getLenis().stop()
      },
    }
    to.meta.pageTransition = {
      css: false,
      onAfterEnter() {
        getLenis().start()
      },
    }
  } else {
    to.meta.pageTransition = {
      name: 'default-page',
      mode: 'out-in',
      onBeforeLeave() {
        getLenis().stop()
      },
      onAfterEnter() {
        getLenis().start()
      },
    }
    from.meta.pageTransition = to.meta.pageTransition
  }
})
