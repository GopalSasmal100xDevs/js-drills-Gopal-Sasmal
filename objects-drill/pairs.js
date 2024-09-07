export function pairs(obj) {
  if (!obj) {
    return [];
  }

  const keyValuePairs = [];
  for (let key in obj) {
    keyValuePairs.push([key, obj[key]]);
  }
  return keyValuePairs;
}
