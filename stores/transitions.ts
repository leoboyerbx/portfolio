export const useTransitionsStore = defineStore('transitions', () => {
  const lastTrigger = ref<HTMLElement>()
  const isTransitionningToProject = ref(false)

  const setTrigger = (trigger: HTMLElement) => {
    lastTrigger.value = trigger
  }

  return { lastTrigger, setTrigger, isTransitionningToProject }
})
