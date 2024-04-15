export const useMainNavStore = defineStore('mainNav', () => {
  const targets = ref<HTMLElement[]>([])
  const distancesFromTop = computed(() => {
    const result = []
    for (const target of targets.value) {
      result.push(window.scrollY + target.getBoundingClientRect().top)
    }
    return result
  })

  useEventListener('resize', () => {
    distancesFromTop.effect.run()
  })

  const setTargets = (...elements: HTMLElement[]) => {
    targets.value = elements
  }

  return { targets, distancesFromTop, setTargets }
})
