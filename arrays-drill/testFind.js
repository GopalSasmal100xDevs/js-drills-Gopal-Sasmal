import { find } from "./find.js";
import arr from "./array.js";

const search = find(arr, (ele) => ele === 5); // return 5  // return the first element which follows the condition
console.log(search);
console.log(find(arr, (ele) => ele === 6)); //return undefined
