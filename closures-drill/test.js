import {
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
} from "./solution.js";

// testing counterFactory function
const counter = counterFactory();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());

// testing limit function call
const printLanguage = limitFunctionCallCount((data) => data, 3);
console.log(printLanguage("JavaScript"));
console.log(printLanguage("Java"));
console.log(printLanguage("C++"));
console.log(printLanguage("Rust"));
console.log(printLanguage("Python"));

// testing cache
const multiplyWith100 = cacheFunction((val) => 100 * val);
console.log(multiplyWith100(10));
console.log(multiplyWith100(100));
console.log(multiplyWith100(10));
