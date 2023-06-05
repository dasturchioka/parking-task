import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { generate } from "@/utils/generateId";

type typeSpace = "outside" | "garage";
type zoneSpace = "A" | "B" | "C" | "D" | "G";

interface Car {
  id: number;
  mark: string;
  model: string;
  year: number;
  number: string;
  driver: string;
  chargeForSpace: number;
  space: Space | null;
}

interface Space {
  id: number;
  type: typeSpace;
  order: number;
  parked: boolean;
  pricePerDay: number;
  zone: zoneSpace;
  car?: Car;
}

interface SpaceList {
  [propName: string]: Space[] | Array<Space>;
}

export const useSpaceStore = defineStore("space", () => {
  const spaces = ref<SpaceList>({
    zoneA: [],
    zoneB: [],
    zoneC: [],
    zoneD: [],
    zoneG: [],
  });
  const cars = ref<Car[]>([]);
  const loading = ref(false);

  async function setLoading(value: boolean) {
    loading.value = value;
  }

  async function createZone(
    id: zoneSpace,
    numberOfSpaces: number,
    garage: boolean
  ) {
    try {
      for (let i = 1; i < numberOfSpaces; i++) {
        spaces.value[`zone${id}`].push({
          id: generate(),
          order: i,
          parked: false,
          type: garage ? "garage" : "outside",
          pricePerDay: 500,
          zone: id,
        });
      }

      return spaces.value;
    } catch (error) {
    } finally {
      console.log(`Zone ${id} was created`);
    }
  }

  async function initializeSpaces() {
    await setLoading(true);
    try {
      await Promise.allSettled([
        createZone("A", 27, false),
        createZone("B", 27, false),
        createZone("C", 27, false),
        createZone("D", 27, false),
        createZone("G", 9, true),
      ]);
    } catch (error) {
      await setLoading(false);
      console.log(error);
    } finally {
      await setLoading(false);
      console.log("All the zones were created successfully");
    }
  }

  const numberOfCars = computed((): number => {
    return cars.value.length;
  });

  const numberOfIndoorSpaces = computed((): number => {
    const number = spaces.value.zoneG.length;

    return number;
  });

  const numberOfOutdoorSpaces = computed((): number => {
    const number = spaces.value.zoneA.length * 4;

    return number;
  });

  return {
    initializeSpaces,
    spaces,
    cars,
    loading,
    numberOfOutdoorSpaces,
    numberOfIndoorSpaces,
    numberOfCars,
  };
});
