import { animate } from 'motion'
import { getLenis } from '~/plugins/lenis.client'

// @unocss-include
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return

  const store = useTransitionsStore()
  let linkThumbRect: DOMRect | undefined

  if (to.meta.isProjectPage) {
    from.meta.pageTransition = {
      name: 'toProject',
      mode: 'out-in',
      css: false,
      async onLeave(page, done) {
        store.isTransitionningToProject = true
        const lenis = getLenis()
        const trigger = store.lastTrigger
        if (!trigger) return done()
        trigger.classList.add('leaving')
        page.classList.add('leaving-page')
        await new Promise((resolve) =>
          lenis.scrollTo(trigger, {
            duration: 0.9,
            easing: power3.inOut.toFunction(),
            lock: true,
            onComplete: resolve,
            offset: -window.innerHeight / 2 + trigger.offsetHeight / 2,
          })
        )

        linkThumbRect = trigger.querySelector('.thumb')?.getBoundingClientRect()
        lenis.stop()
        done()
      },
    }
    to.meta.scrollToTop = false
    to.meta.pageTransition = {
      css: false,
      async onEnter(el, done) {
        const thumb = el.querySelector('.project-thumb')
        if (!thumb || !linkThumbRect) {
          done()
          return
        }
        // FLIP animation: First -> Last -> Invert -> Play
        // First

        // Last
        thumb.classList.remove('flip-first')
        const targetRect = thumb.getBoundingClientRect()
        const targetTop = targetRect.top + window.scrollY

        // Invert
        const invertX = linkThumbRect.left - targetRect.left
        const invertY =
          window.innerHeight / 2 - linkThumbRect.height / 2 - targetTop + 3 // + 3 for borders & pixel-rounding
        thumb.setAttribute(
          'style',
          `
          position: fixed;
          top: ${targetTop}px;
          left: ${targetRect.left}px;
          width: ${targetRect.width}px;
          height: ${targetRect.height}px;
          transform-origin: 0 0;
        `
        )

        const lenis = getLenis()
        lenis.start()
        lenis.scrollTo(0, {
          duration: 0.9,
          easing: power4.inOut.toFunction(),
          lock: true,
        })
        const animation = animate(
          thumb,
          {
            transform: [
              `translate(${invertX}px, ${invertY}px)`,
              'translate(0, 0) scale(1)',
            ],
            width: [linkThumbRect.width + 'px', targetRect.width + 'px'],
            height: [linkThumbRect.height + 'px', targetRect.height + 'px'],
          },
          {
            duration: 0.9,
            easing: power4.inOut,
          }
        )
        await animation.finished

        thumb.removeAttribute('style')
        store.isTransitionningToProject = false
        done()
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
