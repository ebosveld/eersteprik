export const state = () => ({
    firstVaccinations: 0,
    population: 14175230,
    percentageFirstVaccinated: 0,
    lastUpdated: '2021-03-28'
})

export const mutations = {
    updateFirstVaccinations(state, data) {
        state.firstVaccinations = data
    },
    updatePercentageFirstVaccinated(state, data) {
        state.percentageFirstVaccinated = data
    }
    ,
    updateLastUpdate(state, data) {
        state.lastUpdated = data
    }
}