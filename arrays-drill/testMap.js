import { map } from "./map.js";
import arr from "./array.js";

const multipyWith10 = map(arr, (ele) => 10 * ele); // multiply every element with 10
const substractBy5 = map(arr, (ele) => ele - 5); // substact every element by 5
console.log(multipyWith10);
console.log(substractBy5);
