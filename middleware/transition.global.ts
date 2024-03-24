import { animate } from 'motion'
import { getLenis } from '~/plugins/lenis.client'

// @unocss-include
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return

  const store = useTransitionsStore()

  if (to.meta.isProjectPage) {
    from.meta.pageTransition = {
      name: 'toProject',
      mode: 'out-in',
      css: false,
      async onLeave(page, done) {
        page.classList.add('leaving-page')
        await until(() => store.isLeaving).toBe(false)
        done()
      },
    }
    to.meta.scrollToTop = false
    to.meta.pageTransition = {
      css: false,
      async onEnter(el, done) {
        const thumb = el.querySelector('.project-thumb')
        const linkThumbRect = store.linkRect
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
        setTimeout(() => {
          store.isTransitionningToProject = false
        }, 1000)
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
