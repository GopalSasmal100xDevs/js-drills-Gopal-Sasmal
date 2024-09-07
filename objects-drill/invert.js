export function invert(obj) {
  if (!obj) {
    return {};
  }

  const invertedObj = {};
  for (let key in obj) {
    invertedObj[obj[key]] = key;
  }
  return invertedObj;
}
