export default defineEventHandler(async (event) => {
  const config = useAppConfig(event)
  const query = getQuery(event)
  const locale = query.locale || 'en'
  const { data } = (await $fetch(config.apiUrl + '/api/homepage', {
    query: {
      populate: 'resume',
      locale,
    },
  })) as any
  if (!data.resume) {
    throw createError({ statusCode: 404 })
  }
  return proxyRequest(event, config.apiUrl + data.resume.url)
})
