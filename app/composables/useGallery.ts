const useGalleryItemKey = Symbol('useGalleryItem') as InjectionKey<() => {
    isOpen: Ref<boolean>
    open: () => void
    close: () => void
    isInGallery: true
    canGoNext: ComputedRef<boolean>
    canGoPrev: ComputedRef<boolean>
    next: () => void
    prev: () => void
}>

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
    }
}

/**
 * Call this composable in a parent Gallery to allow the children Lightbox
 * components to enable the next/prev buttons
 */
export function useGallery() {
    const images = ref<Ref<boolean>[]>([])
    const currentImageIndex = computed(() => images.value.findIndex(image => image.value) || null)

    const canGoNext = computed(() => currentImageIndex.value !== null && currentImageIndex.value < images.value.length - 1)
    const canGoPrev = computed(() => currentImageIndex.value !== null && currentImageIndex.value > 0)
    function next() {
        if (canGoNext.value) {
            // ? The "!" can be used because the conditions are checked by canGoNext
            images.value[currentImageIndex.value!]!.value = false
            images.value[currentImageIndex.value! + 1]!.value = true
        }
    }
    function prev() {
        if (canGoPrev.value) {
            // ? The "!" can be used because the conditions are checked by canGoPrev
            images.value[currentImageIndex.value!]!.value = false
            images.value[currentImageIndex.value! - 1]!.value = true
        }
    }

    function useChild() {
        const { open, close, isOpen } = useBaseChild()
        images.value.push(isOpen)

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
    }
}

export function useGalleryItem() {
    const composable = inject(useGalleryItemKey, useBaseChild)
    return composable()
}
