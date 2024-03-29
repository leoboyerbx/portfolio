export async function useHomepage(): Promise<any> {
  const cachedData = useState<any>('static-data-cache', () => null)
  const { findOne } = useStrapi()

  if (cachedData.value) return cachedData.value
  const { data } = await useAsyncData('static', async () => {
    const result = await findOne('homepage', undefined, {
      populate: 'projects.projects.thumbnail,openSource.projects,contact.links',
    })
    return result.data
  })
  if (data.value) {
    cachedData.value = data.value
  }
  return cachedData.value!
}
