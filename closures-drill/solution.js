// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
export function counterFactory() {
  let counter = 0;
  function increment() {
    return ++counter;
  }

  function decrement() {
    return --counter;
  }
  return {
    increment,
    decrement,
  };
}

// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned
export function limitFunctionCallCount(cb, n) {
  let functionCallCount = 0;

  return function (arg) {
    if (functionCallCount < n) {
      functionCallCount++;
      cb(arg);
    } else {
      return null;
    }
  };
}

// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
export function cacheFunction(cb) {
  const cache = {};

  return function (arg) {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      //   console.log(cache);
      return cache[key];
    } else {
      const result = cb(arg);
      cache[key] = result;
      return result;
    }
  };
}
