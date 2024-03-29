export async function useHomepage(): Promise<Homepage> {
  const cachedData = useState<Homepage | null>('home-data-cache', () => null)
  const { findOne } = useStrapi()

  if (cachedData.value) return cachedData.value
  const { data } = await useAsyncData('static', async () => {
    const result = await findOne<Homepage>('homepage', undefined, {
      populate: 'projects.projects.thumbnail,openSource.projects,contact.links',
    })
    return result.data as unknown as Homepage
  })
  if (data.value) {
    cachedData.value = data.value
  }
  return cachedData.value!
}
