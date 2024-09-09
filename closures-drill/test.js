import { counterFactory } from "./solution.js";

// testing counterFactory function
const counter = counterFactory();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
