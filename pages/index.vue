<template>
  <div class="container flex-col">
    <div class="w-screen place-content-center flex-grow flex flex-col">
      <h1 class="text-4xl text-gray-500">Hoeveel is er al gevaccineerd?</h1>
      <vaccination-counter />
    </div>
    <footer class="p-2 w-screen flex flex-row">
      <div class="text-gray-400">
        Data van <a class="underline" href="https://ourworldindata.org/covid-vaccinations">Our World in Data</a>.
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
  align-items: center;
  text-align: center;
}
</style>
