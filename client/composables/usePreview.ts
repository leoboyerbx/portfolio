const bus = useEventBus('preview')

export default function usePreview() {
  const route = useRoute()
  const refresh = () => {
    console.log('ref')
    bus.emit()
  }
  const { enabled } = usePreviewMode({
    shouldEnable: () => {
      if (!route.query.previewEnabled) return false
      refresh()
      return true
    },
  })
  return { enabled, refresh }
}

export function onPreview(callback: () => void) {
  bus.on(callback)
}
