import { getLenis } from '~/plugins/lenis.client'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  if (to.meta.isProjectPage) {
    from.meta.pageTransition = {
      name: 'toProject',
      css: false,
      async onLeave(_, done) {
        const lenis = getLenis()

        const trigger = useTransitionTrigger()
        console.log(trigger)
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
        await new Promise((resolve) => setTimeout(resolve, 2000))
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
