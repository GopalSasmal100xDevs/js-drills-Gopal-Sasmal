export function mapObject(obj, cb) {
  if (!obj) {
    return {};
  }

  for (let key in obj) {
    const res = cb(obj[key], key);
    obj[key] = res;
  }
  return obj;
}
