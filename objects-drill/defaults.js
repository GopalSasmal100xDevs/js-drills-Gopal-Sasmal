export function defaults(obj, defaultProps) {
  if (!obj) {
    return { ...defaultProps };
  }

  for (let key in defaultProps) {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}
