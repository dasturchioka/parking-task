<script setup lang="ts">
import { useSpaceStore } from "@/stores/space";

const spaceStore = useSpaceStore();
</script>

<template>
  <div
    @click.self="spaceStore.toggleModal(false)"
    class="car-form fixed h-screen w-full inset-0 z-[99999999]"
  >
    <button
      @click="spaceStore.toggleModal(false)"
      class="fixed right-7 top-5 text-white text-4xl font-semibold"
    >
      &times;
    </button>
    <div class="container mx-auto px-2">
      <h1 class="title text-white my-10 text-3xl font-bold">
        Avtomobil ma’lumotlari
      </h1>
      <form @submit.prevent="spaceStore.bookSpace()" class="form py-6 px-10 bg-white rounded-lg">
        <div class="titles flex items-center space-x-7">
          <div class="block">
            <h1 class="title text-2xl font-bold mb-1">Narx</h1>
            <p class="desc text-dark-lighter">
              {{ spaceStore.selectedSpace.pricePerDay }} dollar
            </p>
          </div>
          <div class="block">
            <h1 class="title text-2xl font-bold mb-1">Joy</h1>
            <p class="desc text-dark-lighter">
              Zone {{ spaceStore.selectedSpace.zone }},
              {{ spaceStore.selectedSpace.order }}-joy
            </p>
          </div>
        </div>
        <div class="form-elements">
          <div class="groups mt-6">
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="mark">Marka</label>
              <input
                required
                v-model="spaceStore.car.mark"
                id="mark"
                type="text"
                placeholder="Chevrolet"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
            </div>
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="model">Model</label>
              <input
                required
                v-model="spaceStore.car.model"
                id="model"
                type="text"
                placeholder="Equinox"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
            </div>
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="year">Yili</label>
              <input
                required
                v-model="spaceStore.car.year"
                id="year"
                type="number"
                :min="0"
                placeholder="2020"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
            </div>
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="number">Raqam</label>
              <input
                required
                v-model="spaceStore.car.number"
                id="number"
                type="text"
                placeholder="90A000AA"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
            </div>
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="driver">Egasi</label>
              <input
                required
                v-model="spaceStore.car.driver"
                id="driver"
                type="text"
                placeholder="Sardor Aminov"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
            </div>
            <div class="group flex flex-col items-start">
              <label class="mb-2" for="period"
                >Necha kunga saqlashni xohlaysiz?</label
              >
              <input
                v-model="spaceStore.car.period"
                id="period"
                :min="0"
                type="number"
                placeholder="7"
                class="w-full outline-none px-4 py-2 border-2 border-gray rounded-md"
              />
              <div class="calculator text-dark-lighter self-end text-sm mt-2">
                <p v-if="spaceStore.car.period">
                  {{ spaceStore.car.period }} kunga umumiy
                  {{ spaceStore.totalChargeForSpace }} dollar
                </p>
                <p v-else>
                  1 kunga umumiy
                  {{ spaceStore.selectedSpace.pricePerDay }} dollar
                </p>
              </div>
            </div>
          </div>
          <div
            class="buttons space-x-4 flex items-center justify-end mt-6 mb-4"
          >
            <button
              type="submit"
              class="button bg-blue rounded border border-blue text-white font-bold px-4 py-2"
            >
              TAYYOR
            </button>
            <button
            @click="spaceStore.clear()"
              type="button"
              class="button bg-white rounded border border-gray text-gray font-bold px-4 py-2"
            >
              TOZALASH
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.groups {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 45px;
}
.car-form {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(18.5px);
}
</style>
