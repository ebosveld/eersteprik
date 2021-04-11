<template>
  <div class="container flex-col">
    <div class="bg-pink-700 text-white w-40 h-14 ml-6 flex justify-center">
      <span class="pt-4 font-bold uppercase tracking-wider">EerstePrik<span class="font-normal">.nl</span></span>
      </div>
    <div class="w-screen place-content-center flex-grow flex flex-col">
      <!-- <h1 class="text-4xl text-gray-500">Hoeveel mensen hebben de eerste prik gehad?</h1> -->
      <vaccination-counter />
    </div>
    <footer class="p-2 w-screen flex flex-row text-xs">
      <div class="text-gray-400">
        Bron: <a class="underline" href="https://www.rivm.nl/covid-19-vaccinatie/cijfers-vaccinatieprogramma">RIVM</a> (via <a class="underline" href="https://ourworldindata.org/covid-vaccinations">Our World in Data</a>) &amp; CBS (bevolkingstelling op 1 maart 2021)
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VaccinationCounter from '~/components/VaccinationCounter.vue'

export default Vue.extend({})
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
