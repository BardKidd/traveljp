import { ref } from "vue";

export const newCurrent = ref(1);
export function getNewCurrent(num) {
  newCurrent.value = num;
}

export const newSize = ref(20);
export function getNewSize(num) {
  newSize.value = num;
}
