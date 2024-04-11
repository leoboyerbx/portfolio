const bus = useEventBus('refresh')

export default function usePreview() {
  const route = useRoute()
  const refresh = () => {
    bus.emit()
  }
  const { enabled } = usePreviewMode({
    shouldEnable: () => {
      return !!route.query.previewEnabled || !!import.meta.dev
    },
  })
  const autoRefresh = ref(enabled.value)

  const runAutoRefresh = () => {
    if (enabled.value && autoRefresh.value) {
      refresh()
    }
  }
  if (enabled.value) {
    const visibility = useDocumentVisibility()
    whenever(() => visibility.value === 'visible', runAutoRefresh)
    const focus = useWindowFocus()
    whenever(focus, runAutoRefresh)

    useIntervalFn(runAutoRefresh, 2000)
  }

  return { enabled, refresh, autoRefresh }
}
