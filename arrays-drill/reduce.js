export function reduce(elements = [], cb, startingValue) {
  let startingIndex = 0;

  if (startingValue === undefined) {
    startingValue = elements[startingIndex++];
  }
  let accumulator = startingValue;

  for (; startingIndex < elements.length; startingIndex++) {
    accumulator = cb(accumulator, elements[startingIndex], startingIndex);
  }
  return accumulator;
}
