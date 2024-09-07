import obj from "./obj.js";
import { mapObject } from "./mapObject.js";

const result = mapObject(obj, (value, _key) => {
  if (typeof value === "number") {
    return value + 10;
  } else return value;
});

console.log(result);
