import inventory from "./cars.js";
import {
  getCarId33,
  lastCarInInventory,
  sortCarsByModel,
  getAllCarYears,
} from "./solution.js";

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

// # Problem 3
const ans1 = sortCarsByModel(inventory);
console.log(ans1);
const ans2 = sortCarsByModel([]);
const ans3 = sortCarsByModel([
  { car_make: "XYZ" },
  { car_model: "AA" },
  { car_model: "ZZ" },
]);
const ans4 = sortCarsByModel([{}]);
const ans5 = sortCarsByModel();
console.log(ans2, ans3, ans4, ans5);

// # Problem 4
const years = getAllCarYears(inventory);
console.log(years);
console.log(getAllCarYears());
console.log(getAllCarYears([]));
console.log(getAllCarYears([0]));
console.log(getAllCarYears([{}]));
console.log(getAllCarYears([{}, { car_make: "BMW" }, { id: 10 }]));
