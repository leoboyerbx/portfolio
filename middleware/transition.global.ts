import { getLenis } from '~/plugins/lenis.client'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  if (to.meta.isProjectPage) {
    from.meta.pageTransition = {
      name: 'toProject',
      mode: 'out-in',
      css: false,
      async onLeave(page, done) {
        const lenis = getLenis()

        const trigger = useTransitionTrigger()
        trigger.classList.add('leaving')
        page.classList.add('leaving-page')
        await new Promise((resolve) =>
          lenis.scrollTo(trigger, {
            duration: 1,
            easing: power3.inOut.toFunction(),
            lock: true,
            onComplete: resolve,
            offset: -window.innerHeight / 2 + trigger.offsetHeight / 2,
          })
        )

        lenis.stop()
        await new Promise((resolve) => setTimeout(resolve, 500))
        done()
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
