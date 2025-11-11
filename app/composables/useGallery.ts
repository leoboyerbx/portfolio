const useGalleryItemKey = Symbol('useGalleryItem') as InjectionKey<() => ({
    isOpen: Ref<boolean>
    open: () => void
    close: () => void
    isInGallery: false
} | {
    isInGallery: true
    isOpen: Ref<boolean>
    open: () => void
    close: () => void
    canGoNext: ComputedRef<boolean>
    canGoPrev: ComputedRef<boolean>
    next: () => void
    prev: () => void
})>

function useBaseChild() {
    const isOpen = ref(false)

    function open() {
        isOpen.value = true
    }
    function close() {
        isOpen.value = false
    }

    return {
        open,
        close,
        isOpen,
        isInGallery: false as const,
    }
}

/**
 * Call this composable in a parent Gallery to allow the children Lightbox
 * components to enable the next/prev buttons
 */
export function useGallery(options: { loop?: boolean } = {}) {
    const images = ref<Ref<boolean>[]>([])
    const currentImageIndex = ref<number | null>(null)

    const canGoNext = computed(() => currentImageIndex.value !== null && (options.loop || currentImageIndex.value < images.value.length - 1))
    const canGoPrev = computed(() => currentImageIndex.value !== null && (options.loop || currentImageIndex.value > 0))
    async function next() {
        if (canGoNext.value) {
            // ? The "!" can be used because the conditions are checked by canGoNext
            const currentIndex = currentImageIndex.value!
            const nextIndex = (currentIndex + 1) % images.value.length
            images.value[currentIndex]!.value = false
            images.value[nextIndex]!.value = true
            currentImageIndex.value = nextIndex
        }
    }
    function prev() {
        if (canGoPrev.value) {
            // ? The "!" can be used because the conditions are checked by canGoPrev
            const currentIndex = currentImageIndex.value!
            const prevIndex = (currentIndex - 1 + images.value.length) % images.value.length
            images.value[currentIndex]!.value = false
            images.value[prevIndex]!.value = true
            currentImageIndex.value = prevIndex
        }
    }

    function useChild() {
        const { open: baseOpen, close: baseClose, isOpen } = useBaseChild()
        const index = images.value.length
        images.value.push(isOpen)

        function open() {
            baseOpen()
            currentImageIndex.value = index
        }
        function close() {
            baseClose()
            currentImageIndex.value = null
        }

        return {
            open,
            close,
            isOpen,
            isInGallery: true as const,
            canGoNext,
            canGoPrev,
            next,
            prev,
        }
    }

    provide(useGalleryItemKey, useChild)

    return {
        currentImageIndex,
        canGoNext,
        canGoPrev,
        next,
        prev,
    }
}

export function useGalleryItem() {
    const composable = inject(useGalleryItemKey, useBaseChild)
    return composable()
}
