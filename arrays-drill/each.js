export function each(elements, cb) {
  if (!Array.isArray(elements)) {
    return;
  }

  for (let index = 0; index < elements.length; index++) {
    cb(elements[index], index);
  }
}
