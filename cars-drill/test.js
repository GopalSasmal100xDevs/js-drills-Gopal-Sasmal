import inventory from "./cars.js";
import { getCarId33 } from "./solution.js";

// # Problem 1
console.log(getCarId33(inventory));
console.log(getCarId33());
console.log(getCarId33([{ id: 33 }]));
console.log(getCarId33([{ id: 33, car_make: "bmw" }]));
console.log(getCarId33());
