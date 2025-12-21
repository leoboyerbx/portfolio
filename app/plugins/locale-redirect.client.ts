export default defineNuxtPlugin(() => {
    const cookie = useCookie('i18n_redirected')
    const route = useRoute()

    // Only run on client-side and on the root path
    if (import.meta.client && route.path === '/') {
        // If we already redirected, don't do it again
        if (cookie.value) {
            return
        }

        const userLang = navigator.language || navigator.languages[0]
        if (userLang.startsWith('fr')) {
            // Set cookie to prevent loop
            cookie.value = 'fr'
            // Hard redirect to /fr to ensure clean state and avoid 404
            window.location.replace('/fr')
        }
        else {
            cookie.value = 'en'
        }
    }
})
