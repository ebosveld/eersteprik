import vaccinations from '~/static/data/vaccinations.json';

export default function ({ params, store }) {
    const firstVaccinations = vaccinations.people_vaccinated;
    const lastUpdated = vaccinations.date;
    const population = store.state.population;
    const percentageVaccination = firstVaccinations / population;

    store.commit("updateFirstVaccinations", firstVaccinations);
    store.commit("updatePercentageFirstVaccinated", percentageVaccination);
    store.commit("updateLastUpdate", lastUpdated);
}
