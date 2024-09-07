import { filter } from "./filter.js";
import arr from "./array.js";

const even = filter(arr, (ele) => ele % 2 === 0);
const odd = filter(arr, (ele) => ele % 2 === 1);
console.log("Even numbers are ", even);
console.log("Odd numbers are ", odd);
