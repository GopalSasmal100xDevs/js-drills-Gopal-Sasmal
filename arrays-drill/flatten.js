export function flatten(arr) {
  if (!arr) return [];

  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      const res = flatten(arr[index]);
      result = [...result, ...res];
    } else {
      result.push(arr[index]);
    }
  }
  return result;
}
