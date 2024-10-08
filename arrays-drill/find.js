export function find(arr, cb) {
  if (!arr) return;

  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index], index, arr)) {
      return arr[index];
    }
  }
  return;
}
