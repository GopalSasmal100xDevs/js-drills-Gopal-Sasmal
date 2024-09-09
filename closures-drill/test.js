import { counterFactory, cacheFunction } from "./solution.js";

// testing counterFactory function
const counter = counterFactory();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());

// testing cache
const multiplyWith100 = cacheFunction((val) => 100 * val);
console.log(multiplyWith100(10));
console.log(multiplyWith100(100));
console.log(multiplyWith100(10));
