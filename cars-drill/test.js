import inventory from "./cars.js";
import { getCarId33, lastCarInInventory } from "./solution.js";

// # Problem 1
console.log(getCarId33(inventory));
console.log(getCarId33());
console.log(getCarId33([{ id: 33 }]));
console.log(getCarId33([{ id: 33, car_make: "bmw" }]));
console.log(getCarId33());

// # Problem 2
console.log(lastCarInInventory(inventory));
console.log(lastCarInInventory([{}, {}]));
console.log(lastCarInInventory());
console.log(lastCarInInventory([{}, { car_make: "BMW" }]));
