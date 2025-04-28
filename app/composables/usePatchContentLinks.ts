export function usePatchContentLinks(contentWrapper?: Ref<HTMLElement | undefined>) {
    contentWrapper = contentWrapper ?? ref<HTMLElement>()

    onMounted(async () => {
        if (!contentWrapper.value)
            return
        // await new Promise(r => setTimeout(r, 1000))
        const links = contentWrapper.value.querySelectorAll<HTMLAnchorElement>('a[href^="/"]')
        for (const link of links) {
            const href = link.getAttribute('href')
            if (!href)
                continue

            link.classList.add('link-patched')
            const onClick = (e: MouseEvent) => {
                e.preventDefault()
                navigateTo(href)
            }
            link.addEventListener('click', onClick)
            onUnmounted(() => {
                link.removeEventListener('click', onClick)
            })
        }
    })

    return { contentWrapper }
}
