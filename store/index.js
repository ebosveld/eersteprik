export const state = () => ({
    partiallyVaccinated: 0,
    fullyVaccinated: 0,
    population: 14070340,
    percentagePartiallyVaccinated: 0,
    percentageFullyVaccinated: 0,
    lastUpdated: '2021-03-28'
})

export const mutations = {
    updatePartiallyVaccinated(state, data) {
        state.partiallyVaccinated = data
    },
    updateFullyVaccinated(state, data) {
        state.fullyVaccinated = data
    },
    updatePercentagePartiallyVaccinated(state, data) {
        state.percentagePartiallyVaccinated = data
    },
    updatePercentageFullyVaccinated(state, data) {
        state.percentageFullyVaccinated = data
    },
    updateLastUpdate(state, data) {
        state.lastUpdated = data
    }
}