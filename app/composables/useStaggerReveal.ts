/**
 * A composable that creates staggered reveal animations for child components.
 *
 * The parent component calls `useStaggerRevealParent()` which:
 * - Uses the child indexing system from useChildrenIndex
 *   -> @see useChildrenIndex
 * - Tracks when the parent element is in view
 * - Computes appropriate transition delays for each child
 *
 * Each child component calls `useStaggerRevealChild()` to:
 * - Get its visibility state from the parent
 * - Get its transition delay based on its index
 *
 * This allows for elegant, coordinated entrance animations where elements
 * appear in sequence rather than all at once.
 */

const staggerRevealKey = Symbol('staggerReveal') as InjectionKey<() => {
    visible: Ref<boolean>
    transitionDelay: string
}>

/**
 * Creates a staggered reveal animation controller for a parent component.
 * @see useStaggerRevealChild
 * @param computeDelay A function that calculates transition delay string based on child index
 * @returns An object with target ref and inView reactive state
 */
export function useStaggerRevealParent(computeDelay: (i: number) => string) {
    useChildrenIndexParent()
    const { target, inView } = useProjectElementInView()

    function useChild() {
        const index = useChildIndex()
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

/**
 * Used by child components to receive visibility state and transition delay.
 * Must be used within a component that calls useStaggerRevealParent.
 * @see useStaggerRevealParent
 * @returns An object with visible state and transitionDelay CSS value
 */
export function useStaggerRevealChild() {
    const useChild = inject(staggerRevealKey)
    if (!useChild)
        throw new Error('useStaggerRevealChild must be used within a useStaggerRevealParent')

    return useChild()
}
