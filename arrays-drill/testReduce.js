import { reduce } from "./reduce.js";
import arr from "./array.js";

// multiply of all elements
const allMultiply = reduce(arr, function (accumulate, current) {
  return accumulate * current;
});
console.log("Multiply of all element is ", allMultiply);

// sum of all elements
const sum = reduce(arr, function (acc, curr) {
  return acc + curr;
});

console.log("Sum is ", sum);
