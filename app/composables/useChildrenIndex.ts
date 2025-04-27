/**
 * A composable that helps manage parent-child relationships by providing automatic indexing.
 *
 * The parent component calls `useChildrenIndexParent()` which creates a counter and dependency injection.
 * Each child component calls `useChildIndex()` to get its unique index based on render order.
 *
 * This is useful for:
 * - Creating staggered animations where each child needs to know its position
 * - Implementing automatic ordering of elements
 * - Creating components that need unique identifiers based on their render order
 */

const childrenIndexKey = Symbol('childrenCount') as InjectionKey<() => number>

/**
 * Initialize the parent component to provide a unique index for each child.
 * @see useChildIndex
 */
export function useChildrenIndexParent() {
    const childrenCount = ref(0)
    function useChild() {
        const index = childrenCount.value
        childrenCount.value++
        return index
    }

    provide(childrenIndexKey, useChild)
}

/**
 * Get the unique index of the child component.
 * This should be called within a component that is a child of a parent using `useChildrenIndexParent()`.
 * @see useChildrenIndexParent
 */
export function useChildIndex() {
    const useChild = inject(childrenIndexKey)
    if (!useChild)
        throw new Error('useChildIndex must be used within a useChildrenIndexParent')

    return useChild()
}
