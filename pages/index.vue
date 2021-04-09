<template>
  <div class="container">
    <div>
      <h1 class="text-4xl text-gray-500">Hoeveel is er al gevaccineerd?</h1>
      <vaccination-counter />
    </div>
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
