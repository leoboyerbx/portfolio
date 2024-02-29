import { StaticData } from '~/types/apiTypes'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { data } = (await $fetch(config.public.apiUrl + '/items/static')) as {
    data: StaticData
  }
  return proxyRequest(event, config.public.apiUrl + '/assets/' + data.resume)
})
