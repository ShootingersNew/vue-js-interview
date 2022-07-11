const filterModule = {
    state: () => ({
        activeFilters: {}
    }),
    mutations: {
        setActiveFilters(state,updatedFilters) {
            state.activeFilters = updatedFilters
        }
    }
}
export default filterModule