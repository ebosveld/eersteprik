<template>
    <div class="counter mt-6">
        <div class="percentage text-6xl">{{ percentageVaccinated | numeral('0.[00]%') }}</div>
        <div class="population text-3xl text-gray-500 mt-6">van de {{ population | numeral('0.00a') }} volwassenen in Nederland</div>
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