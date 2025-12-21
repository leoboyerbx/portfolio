<script setup lang="ts">
import { getLenis } from '~/plugins/lenis.client'

definePageMeta({
    isHomePage: true,
})
useHead({
    titleTemplate: '%siteName',
})

const wrapperEl = ref()
const mainNav = useMainNav()
onMounted(async () => {
    await until(() => !!wrapperEl.value).toBeTruthy()
    mainNav.value.targets = [
        wrapperEl.value.querySelector('#hero'),
        wrapperEl.value.querySelector('#projects'),
        wrapperEl.value.querySelector('#openSource'),
        wrapperEl.value.querySelector('#contact'),
    ]
})

onUnmounted(() => {
    mainNav.value.targets = []
})

const route = useRoute()
const scrollTo = route.query.scrollTo as string
onMounted(async () => {
    if (scrollTo) {
        const target = document.getElementById(scrollTo)
        if (target) {
            getLenis().scrollTo(target, {
                immediate: true,
                offset: -128,
            })
        }
    }
})

const { locale } = useI18n()
const { data: page } = await useAsyncData(
    `homepage-${locale.value}`,
    async () => {
        const result = await queryCollection(`homepage_${locale.value}`).first()
        return result
    },
    {
        dedupe: 'defer',
    },
)
if (!page.value) {
    if (import.meta.server) {
    // By only showing the error on the server side, we accept hydration mismatches only for the first redirected request.
    // this is the best compromise instead of client side redirect
        throw showError({
            statusCode: 404,
            statusMessage: 'Home data not found',
        })
    }
}
</script>

<template>
  <div ref="wrapperEl" class="flex flex-col">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
