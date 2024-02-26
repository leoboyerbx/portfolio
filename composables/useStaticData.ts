import type { StaticData } from '~/types/apiTypes'

export async function useStaticData(): Promise<StaticData> {
  const cachedData = useState<StaticData | null>(
    'static-data-cache',
    () => null
  )
  const { getSingletonItem } = useDirectusItems()
  if (cachedData.value) return cachedData.value
  const { data } = await useAsyncData(async () => {
    const item = await getSingletonItem<StaticData>({
      collection: 'static',
    })
    return item
  })
  if (data.value) {
    cachedData.value = data.value
  }
  return cachedData.value!
}
