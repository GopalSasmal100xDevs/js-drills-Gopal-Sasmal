export function keys(obj) {
  if (!obj) {
    return [];
  }

  const objKeys = [];
  for (let key in obj) {
    objKeys.push(key);
  }
  return objKeys;
}
