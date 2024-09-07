import { each } from "./each.js";
import arr from "./array.js";

each(arr, function (ele, index) {
  console.log(`Element is ${ele} and index is ${index}`);
});
