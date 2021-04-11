<template>
    <div class="counter m-6">
        <div class="percentage text-6xl font-bold text-pink-700">{{ percentageVaccinated | numeral('0.[00]%') }}</div>
        <div class="population text-3xl text-gray-500 mt-6">van de {{ population | numeral('0.00a') }} volwassenen in Nederland heeft een eerste vaccinatie gehad.</div>
    </div>
</template>
<script>
import vaccinations from 'static/data/vaccinations.json'

export default {
    computed: {
      percentageVaccinated(){
        const peopleVaccinated = vaccinations.people_vaccinated;
        return (peopleVaccinated/this.population);
      }
    },
    data() {
      return {
        population: 14175230
      }
    },
}
</script>