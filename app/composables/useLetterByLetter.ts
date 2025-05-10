const letterByLetterInjectKey = Symbol('letterByLetter') as InjectionKey<(lettersNumber: number) => { animationDelay: (i: number) => string, index: number }>

/**
 * Initialize the parent component to provide the letter by letter effect.
 * @see useChildIndex
 */
export function useLetterByLetterParent(computeDelay: (index: number) => string) {
    const totalLetters = ref(0)
    function useChild(lettersNumber: number) {
        const childStart = totalLetters.value
        totalLetters.value += lettersNumber
        const animationDelay = (i: number) => computeDelay(childStart + i)
        return {
            animationDelay,
            index: childStart,
        }
    }

    provide(letterByLetterInjectKey, useChild)
}

/**
 * Get the unique index of the child component.
 * This should be called within a component that is a child of a parent using `useChildrenIndexParent()`.
 * @see useChildrenIndexParent
 */
export function useLetterByLetter(lettersNumber: number) {
    const useChild = inject(letterByLetterInjectKey)
    if (!useChild)
        throw new Error('useLetterByLetter must be used within a useLetterByLetterParent')

    return useChild(lettersNumber)
}
