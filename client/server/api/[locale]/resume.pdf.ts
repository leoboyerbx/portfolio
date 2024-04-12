export default defineEventHandler((event) => {
  return proxyResume(event, getRouterParam(event, 'locale'))
})
