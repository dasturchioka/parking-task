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
  period: number;
  [propName: string]: any;
}

interface Space {
  id: number;
  type: typeSpace;
  order: number;
  parked: boolean;
  pricePerDay: number;
  zone: zoneSpace;
  [propName: string]: any;
}

interface SpaceList {
  [propName: string]: Space[] | Array<Space>;
}

interface SelectedSpace {
  [propName: string]: any;
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
  const car = ref<Car>({
    id: generate(),
    mark: "",
    period: 0,
    driver: "",
    model: "",
    number: "",
    year: 0,
  });
  const selectedSpace = ref<SelectedSpace>({});
  const loading = ref(false);
  const openModal = ref(false);

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

  async function bookSpace() {
    car.value.space = selectedSpace.value;
    console.log(spaces.value[selectedSpace.value.zone]);
    
    const getIndex = spaces.value[selectedSpace.value.zone].findIndex((obj) => {
      return obj.id === selectedSpace.value.id;
    });

    spaces.value[selectedSpace.value.zone][getIndex].parked = true;
    spaces.value[selectedSpace.value.zone][getIndex].car = car.value;
    cars.value.push(car.value);

    toggleModal(false);

    return {
      spaces: spaces.value,
      cars: cars.value,
    };
  }

  function toggleModal(value: boolean) {
    if (!value) {
      selectedSpace.value = {};
      return;
    }
    openModal.value = value;
  }

  function selectSpace(space: Space) {
    toggleModal(true);
    selectedSpace.value = space;
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

  const totalChargeForSpace = computed((): number => {
    const total = car.value.period * selectedSpace.value.pricePerDay;

    return total;
  });

  return {
    initializeSpaces,
    spaces,
    cars,
    loading,
    numberOfOutdoorSpaces,
    numberOfIndoorSpaces,
    numberOfCars,
    selectedSpace,
    selectSpace,
    toggleModal,
    openModal,
    car,
    totalChargeForSpace,
    bookSpace,
  };
});
