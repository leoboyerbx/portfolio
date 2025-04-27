const staggerRevealKey = Symbol('registerGalleryImage') as InjectionKey<() => {
    visible: Ref<boolean>
    transitionDelay: string
}>

export function useStaggerRevealParent(computeDelay: (i: number) => string) {
    const { target, inView } = useProjectElementInView()

    const childrenCount = ref(0)
    function useChild() {
        const index = childrenCount.value
        childrenCount.value++

        const transitionDelay = computeDelay(index)

        return {
            visible: inView,
            transitionDelay,
        }
    }

    provide(staggerRevealKey, useChild)

    return {
        target,
        inView,
    }
}

export function useStaggerRevealChild() {
    const useChild = inject(staggerRevealKey)
    if (!useChild)
        throw new Error('useStaggerRevealChild must be used within a useStaggerRevealParent')

    return useChild()
}
