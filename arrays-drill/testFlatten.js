import { flatten } from "./flatten.js";
const nestedArray = [
  1,
  [2],
  [[3]],
  [[[4]]],
  [[[[[[[10]], [[[5]]], [[[[[[[[7]]]]]]]]]]]]],
];

const ans = flatten(nestedArray);
console.log(ans);
