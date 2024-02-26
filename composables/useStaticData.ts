import type { StaticData } from '~/types/apiTypes'

let cachedData: StaticData
export const useStaticData = async () => {
  const { getSingletonItem } = useDirectusItems()
  if (cachedData) return cachedData
  const { data } = await useAsyncData(async () => {
    const item = await getSingletonItem<StaticData>({
      collection: 'static',
    })
    return item
  })
  if (data.value) {
    cachedData = data.value
  }
  return cachedData
}
