export async function useHomepage(): Promise<Homepage> {
  const { locale } = useI18n()
  const cachedData = useState<Homepage | null>(
    'home-data-cache-' + locale.value,
    () => null
  )
  const { findOne } = useStrapi()

  if (cachedData.value) return cachedData.value
  const { data } = await useAsyncData('static', async () => {
    const result = await findOne<Homepage>('homepage', undefined, {
      populate:
        'hero.adjectives,projects.projects.thumbnail,openSource.projects,contact.links',
      locale: locale.value as any,
    })
    return result.data as unknown as Homepage
  })
  if (data.value) {
    cachedData.value = data.value
  }
  return cachedData.value!
}
