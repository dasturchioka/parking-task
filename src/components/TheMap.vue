<script lang="ts" setup>
import { useSpaceStore } from "@/stores/space";

const spaceStore = useSpaceStore();
</script>

<template>
  <div class="map bg-white rounded-lg p-8 mt-4 flex justify-between">
    <div class="left w-[66%] indoor">
      <div class="zones A grid mb-14 relative">
        <div
          v-for="space in spaceStore.spaces.zoneA"
          :key="space.id"
          :class="['box rounded', space.parked ? 'bg-gray' : 'bg-blue']"
        >
          <button
            @click="spaceStore.selectSpace(space)"
            :disabled="space.parked"
            class="w-full h-full text-white font-bold text-sm disabled:bg-gray disabled:cursor-not-allowed"
          >
            {{ space.order }}
          </button>
        </div>
        <p
          class="title-zone absolute -right-14 rotate-90 top-[45%] bottom-10 text-sm font-bold text-gray"
        >
          ZONE A
        </p>
      </div>
      <div class="zones B grid mb-14 relative">
        <div
          v-for="space in spaceStore.spaces.zoneB"
          :key="space.id"
          :class="['box rounded', space.parked ? 'bg-gray' : 'bg-blue']"
        >
          <button
            @click="spaceStore.selectSpace(space)"
            :disabled="space.parked"
            class="w-full h-full text-white font-bold text-sm disabled:bg-gray disabled:cursor-not-allowed"
          >
            {{ space.order }}
          </button>
        </div>
        <p
          class="title-zone absolute -right-14 rotate-90 top-[45%] bottom-10 text-sm font-bold text-gray"
        >
          ZONE B
        </p>
      </div>
      <div class="zones C grid mb-14 relative">
        <div
          v-for="space in spaceStore.spaces.zoneC"
          :key="space.id"
          :class="['box rounded', space.parked ? 'bg-gray' : 'bg-blue']"
        >
          <button
            @click="spaceStore.selectSpace(space)"
            :disabled="space.parked"
            class="w-full h-full text-white font-bold text-sm disabled:bg-gray disabled:cursor-not-allowed"
          >
            {{ space.order }}
          </button>
        </div>
        <p
          class="title-zone absolute -right-14 rotate-90 top-[45%] bottom-10 text-sm font-bold text-gray"
        >
          ZONE C
        </p>
      </div>
      <div class="zones D grid relative">
        <div
          v-for="space in spaceStore.spaces.zoneD"
          :key="space.id"
          :class="['box rounded', space.parked ? 'bg-gray' : 'bg-blue']"
        >
          <button
            @click="spaceStore.selectSpace(space)"
            :disabled="space.parked"
            class="w-full h-full text-white font-bold text-sm disabled:bg-gray disabled:cursor-not-allowed"
          >
            {{ space.order }}
          </button>
        </div>
        <p
          class="title-zone absolute -right-14 rotate-90 top-[45%] bottom-10 text-sm font-bold text-gray"
        >
          ZONE D
        </p>
      </div>
    </div>
    <div class="right outdoor w-[20%] flex items-start justify-between">
      <div class="entrance">
        <p class="text-sm font-bold text-gray">KIRISH</p>
      </div>
      <div class="garage flex flex-col w-[100px]">
        <div
          class="office bg-gray-lightest px-4 py-12 w-full text-center rounded"
        >
          <p class="text-sm font-bold text-gray">OFFICE</p>
        </div>
        <div class="garages w-full flex flex-col items-end mt-3 gap-4">
          <div
            v-for="garage in spaceStore.spaces.zoneG"
            :key="garage.id"
            :class="[
              'box h-[40px] w-[90px] rounded',
              garage.parked ? 'bg-gray' : 'bg-blue',
            ]"
          >
            <button
              @click="spaceStore.selectSpace(garage)"
              :disabled="garage.parked"
              class="w-full h-full font-bold text-white disabled:bg-gray disabled:cursor-not-allowed"
            >
              G{{ garage.order }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(13, 60px);
  column-gap: 15px;
  row-gap: 25px;
}

.grid .box {
  width: 60px;
  height: 35px;
}

.box:nth-child(13)::after {
  content: "";
  position: absolute;
  bottom: 49%;
  left: 4px;
  height: 2px;
  width: 100%;
  background: #d0d0d0;
}
</style>
