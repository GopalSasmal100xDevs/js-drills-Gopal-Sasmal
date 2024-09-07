export function filter(arr, cb) {
  if (!arr) {
    return [];
  }

  const result = [];
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index], index, arr)) {
      result.push(arr[index]);
    }
  }
  return result;
}
