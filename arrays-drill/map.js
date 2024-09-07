export function map(elements, cb) {
  if (!Array.isArray(elements)) {
    return [];
  }

  const result = [];
  for (let index = 0; index < elements.length; index++) {
    const res = cb(elements[index], index);
    result.push(res);
  }
  return result;
}
