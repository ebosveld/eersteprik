<template>
    <div class="counter m-6">
        <div class="percentage text-6xl font-bold text-pink-700">{{ percentageVaccinated | numeral('0.[00]%') }}</div>
        <div class="population text-3xl text-gray-500 mt-6">van de {{ population | numeral('0.00a') }} volwassenen in Nederland heeft een eerste vaccinatie gehad.</div>
    </div>
</template>
<script>
export default {
  computed: {
    percentageVaccinated() {
      return this.$store.state.percentageFirstVaccinated
    },
    population() {
      return this.$store.state.population
    },
  },
}
</script>