export default defineEventHandler(async (event) => {
  const url = process.env.STRAPI_URL ?? 'http://localhost:1337'
  const query = getQuery(event)
  const locale = query.locale || 'en'
  const { data } = (await $fetch(url + '/api/homepage', {
    query: {
      populate: 'resume',
      locale,
    },
  })) as any
  if (!data.resume) {
    throw createError({ statusCode: 404 })
  }
  return proxyRequest(event, url + data.resume.url)
})
