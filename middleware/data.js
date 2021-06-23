import vaccinations from '~/static/data/vaccinations.json';

export default function ({ params, store }) {
    const partiallyVaccinated = vaccinations.coverage.partiallyVaccinated;
    const fullyVaccinated = vaccinations.coverage.fullyVaccinated;
    const lastUpdated = vaccinations.lastUpdate;
    const population = store.state.population;
    const percentagePartiallyVaccinated = partiallyVaccinated / population;
    const percentageFullyVaccinated = fullyVaccinated / population;

    store.commit("updatePartiallyVaccinated", partiallyVaccinated);
    store.commit("updateFullyVaccinated", fullyVaccinated);
    store.commit("updatePercentagePartiallyVaccinated", percentagePartiallyVaccinated);
    store.commit("updatePercentageFullyVaccinated", percentageFullyVaccinated);
    store.commit("updateLastUpdate", lastUpdated);
}
