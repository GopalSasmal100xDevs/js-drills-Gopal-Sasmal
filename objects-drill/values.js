export function values(obj) {
  if (!obj) {
    return [];
  }

  const objValues = [];
  for (let key in obj) {
    if (typeof obj[key] !== "function") {
      objValues.push(obj[key]);
    }
  }
  return objValues;
}
