<script lang="ts" setup>
import { useSpaceStore } from "@/stores/space";

const spaceStore = useSpaceStore();
</script>

<template>
  <header
    class="header top-banner bg-white rounded-lg p-5 my-6 flex items-center justify-between"
  >
    <div class="left">
      <h1 class="title text-2xl font-bold mb-1">Avtoturargoh xizmati 🚗</h1>
      <p class="desc text-dark-lighter">Mashinangiz uchun joy bron qiling!</p>
    </div>
    <div class="right space-x-8 flex items-center">
      <div class="numbers text-center">
        <h1 class="title text-3xl font-bold">
          {{ spaceStore.numberOfCars }}
        </h1>
        <p class="text-dark-lighter text-sm">MASHINA</p>
      </div>
      <div class="numbers text-center">
        <h1 class="title text-3xl font-bold">
          {{ spaceStore.numberOfIndoorSpaces }}
        </h1>
        <p class="text-dark-lighter text-sm">GARAJ</p>
      </div>
      <div class="numbers text-center">
        <h1 class="title text-3xl font-bold">
          {{ spaceStore.numberOfOutdoorSpaces }}
        </h1>
        <p class="text-dark-lighter text-sm">JOY</p>
      </div>
    </div>
  </header>
</template>
