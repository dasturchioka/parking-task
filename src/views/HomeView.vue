<script setup lang="ts">
import TheForm from "@/components/TheForm.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMap from "@/components/TheMap.vue";
import { useSpaceStore } from "@/stores/space";
import { onMounted } from "vue";

const spaceStore = useSpaceStore();

onMounted(async () => {
  await spaceStore.initializeSpaces();
});
</script>

<template>
  <main class="wrapper font-main">
    <h1 v-if="spaceStore.loading">Loading...</h1>
    <div v-else class="container mx-auto px-2">
      <TheForm v-if="spaceStore.openModal"/>
      <TheHeader/>
      <TheMap/>
      <div class="guide my-7 flex items-center space-x-6">
        <div class="blue flex items-center">
          <div class="box bg-blue h-5 w-5 mr-3"></div>
          Bo'sh
        </div>
        <div class="gray flex items-center">
          <div class="box bg-gray h-5 w-5 mr-3"></div>
          Bo'sh emas
        </div>
        <div class="garage flex items-center">
          <div class="box bg-gray h-5 w-5 mr-3 font-bold text-white text-center text-sm">G</div>
          Garaj
        </div>
      </div>
    </div>
  </main>
</template>
