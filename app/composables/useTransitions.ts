export function usePageTransitions() {
    return useState('transitions', () => ({
        isTransitionningToProject: false,
        linkRect: undefined as DOMRect | undefined,
        isLeaving: false,
        running: false, // Trus if a transition is currently happening. Example: used to hide the footer during page transition
    }))
}
