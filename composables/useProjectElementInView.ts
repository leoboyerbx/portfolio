export const useProjectElementInView = (
  ...args: Parameters<typeof useElementInView>
) => {
  const inView = ref(false)

  args[1] = args[1] || ref<HTMLElement>()
  const startWatchingElement = () => {
    onElementInView(
      args[1],
      (entry) => {
        inView.value = entry.isIntersecting
        if (args[0]?.leaving) {
          return () => {
            inView.value = false
          }
        }
      },
      args[0]
    )
  }

  const store = useTransitionsStore()
  console.log(store.isTransitionningToProject)
  if (!store.isTransitionningToProject) {
    console.log('startWatchingElement')
    startWatchingElement()
  } else {
    // watch(
    //   () => store.isTransitionningToProject,
    //   () => startWatchingElement(),
    //   { once: true }
    // )
  }

  return { inView, target: args[1] }
}
